/**
 * Created by joachimvh on 30/06/2015.
 */

var _ = require('lodash');
var format = require('util').format;
var N3Parser = require('./N3Parser');

function JSONLDParser () {}

JSONLDParser.suffixTest = new RegExp('^' + N3Parser._suffix.source + '$');

// TODO: currently only focusing on JSON-LD that can be generated with N3Parser.js
// TODO: indentation

JSONLDParser.prototype.parse = function (jsonld, baseURI)
{
    // TODO: not sure if this will never give issues
    var ignoreGraph = _.every(jsonld, function (val, key) { return key === '@context' || key === '@graph'; });
    var graphList = [];
    var id = this._parse(jsonld, baseURI, null, graphList, true, ignoreGraph);
    // TODO: not sure about the output yet
    if (graphList.length > 0)
        return graphList.join('');
    else
        return format('%s .', id); // TODO: will this ever happen?
};

JSONLDParser.prototype._parse = function (jsonld, baseURI, context, graphList, root, ignoreGraph)
{
    // TODO: handle quotes(+escape)/language/datatype
    if (_.isNumber(jsonld))
        return jsonld;

    if (_.isString(jsonld))
        jsonld = {'@value': jsonld};
    if (jsonld['@value'])
    {
        var result = JSON.stringify(jsonld['@value']); // format('"%s"', jsonld['@value']);
        // TODO: extra quotes will never be reached because of stringify. Is this a problem?
        // add extra quotes for multiline strings
        if (result.indexOf('\n') >= 0 || result.indexOf('\r') >= 0)
            result = format('""%s""', result);
        if (jsonld['@language'])
            result = format('%s@%s', result, jsonld['@language']);
        if (jsonld['@type'])
            result = format('%s^^%s', result, this._URIfix(jsonld['@type'], context));
        return result;
    }

    if (Object.keys(jsonld).length === 0)
        return '[]';

    context = context || {'_':'_'};
    // TODO: what if there is context without a graph?
    // TODO: strip unused prefixes
    if (jsonld['@context'])
    {
        context = _.extend({}, context);
        for (var key in jsonld['@context'])
        {
            var val = jsonld['@context'][key];
            graphList.push(format('PREFIX %s: <%s>\n', key, val));
            context[key] = val;
        }
        if (!context[''] && baseURI)
        {
            graphList.push(format('PREFIX : <%s>\n', baseURI));
            context[''] = baseURI;
        }
    }
    // TODO: shouldn't overwrite id if it already has a value
    var id = jsonld['@id'] && this._URIfix(jsonld['@id'], context);
    if (jsonld['@graph'])
    {
        var localList = [];
        var childIDs = jsonld['@graph'].map(function (child) { return this._parse(child, baseURI, context, localList, true); }, this);
        id = format(ignoreGraph ? '%s' : '{ %s }', localList.join(' '));
    }

    if (jsonld['@list'])
        id = format('( %s )', jsonld['@list'].map(function (child) { return this._parse(child, baseURI, context, graphList);}, this).join(' '));

    // TODO: context is being ignored here
    if (jsonld['@forAll'])
        return format('@forAll %s .', jsonld['@forAll'].map(function (child) { return this._parse(child, baseURI, context, graphList);}, this).join(' , '));
    if (jsonld['@forSome'])
        return format('@forSome %s .', jsonld['@forAll'].map(function (child) { return this._parse(child, baseURI, context, graphList);}, this).join(' , '));

    // TODO: @reverse (can only happen in specific cases when coming from parser)
    // TODO: handle blank nodes generated for special predicates
    var predicateObjectList = [];
    for (var key in jsonld)
    {
        if (key !== '@id' && key !== '@graph' && key !== '@context' && key !== '@list')
        {
            var val = jsonld[key];
            var predicate = this._URIfix(key, context);
            if (key === '@type')
                predicate = 'a';
            else if (key === 'log:implies')
                predicate = '=>';

            if (!_.isArray(val))
                val = [val];

            var objects = [];
            for (var i = 0; i < val.length; ++i)
            {
                var object;
                // special case since these don't use @id blocks
                if (predicate === 'a')
                    object = val[i];
                else
                    object = this._parse(val[i], baseURI, context, graphList);
                if (predicate === 'a')
                    object = this._URIfix(object, context);
                objects.push(object);
            }
            predicateObjectList.push(format('%s %s', predicate, objects.join(' , ')));
        }
    }
    // TODO: handle triples that only have a subject without predicate/object
    if (id)
    {
        if (predicateObjectList.length > 0)
            graphList.push(format('%s %s . ', id, predicateObjectList.join(' ; ')));
        else if (root)
        {
            // special case for the graph in the root, since the last element will already have the dot
            if (ignoreGraph)
                graphList.push(id);
            else
                graphList.push(format('%s . ', id));
        }
    }
    else
    {
        id = format('[ %s ]', predicateObjectList.join(' ; '));
        if (root)
            graphList.push(format('%s . ', id));
    }

    return id;
};

JSONLDParser.prototype._URIfix = function (id, context)
{
    var colonIdx = id.indexOf(':');
    if (colonIdx >= 0)
    {
        var prefix = id.substring(0, colonIdx);
        var suffix = id.substring(colonIdx+1);
        if ((context[prefix] || prefix === '_') && suffix.substr(0, 2) !== '//')
            return format('%s:%s', prefix, suffix);
    }
    for (var prefix in context)
    {
        var namespace = context[prefix];
        if (_.startsWith(id, namespace))
        {
            var suffix = id.substring(namespace.length);
            if (JSONLDParser.suffixTest.test(suffix))
                return format('%s:%s', prefix, suffix);
        }
    }

    return format('<%s>', id);
};

module.exports = JSONLDParser;