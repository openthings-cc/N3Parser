
var JSONLDParser = require('../../JSONLDParser');
var N3Parser = require('../../N3Parser');

describe('Timing', function ()
{
    var jParser = new JSONLDParser();
    var nParser = new N3Parser();
    var jsonld;
    var n3;
    jsonld = {"@context":{"ofs":"http://f4w.restdesc.org/demo/offset#","out":"http://f4w.restdesc.org/demo/.well-known/genid/f3ed8675-47ce-42f1-ac89-9082b146b6db#","operator":"http://f4w.restdesc.org/demo/operator#","teamleader":"http://f4w.restdesc.org/demo/teamleader#","tho":"http://f4w.restdesc.org/demo/thermolympic#","prov":"http://www.w3.org/ns/prov#","auth":"http://f4w.restdesc.org/demo/authorization#","math":"http://www.w3.org/2000/10/swap/math#","string":"http://www.w3.org/2000/10/swap/string#","ns1":"http://f4w.restdesc.org/util#","prolog":"http://eulersharp.sourceforge.net/2003/03swap/prolog#","http":"http://www.w3.org/2011/http#","tmpl":"http://purl.org/restdesc/http-template#","r":"http://www.w3.org/2000/10/swap/reason#","e":"http://eulersharp.sourceforge.net/2003/03swap/log-rules#","list":"http://www.w3.org/2000/10/swap/list#","owl":"http://www.w3.org/2002/07/owl#","rdfs":"http://www.w3.org/2000/01/rdf-schema#","rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","log":"http://www.w3.org/2000/10/swap/log#","#base":"http://f4w.restdesc.org/demo#"},"@graph":[{"@id":"#base:6624364a-0361-4252-a681-ba29894ff6e5","http:methodName":"GET","tmpl:requestURI":{"@list":["http://askTheWorker/events"]},"http:headers":{"@list":[{"@id":"#base:67bfc353-8037-44d4-95cc-b390381cbfed","http:fieldName":"Content-Type","http:fieldValue":"application/json"}]},"http:body":{"@graph":[{"@id":"#base:json","#base:part":{"@graph":[{"@id":"#base:cca41261-3ba6-40cb-ab66-91571c4f3c25","#base:id":1,"#base:name":"Pinion","#base:image_url":"http://machinesandparts.surge.sh/part1/part1_ok.jpg"}]},"#base:defect":{"@graph":[{"@id":"#base:json","#base:name":"Bad color","#base:desc":"Color of the product has not the correct RAL value","#base:media_url":"http://machinesandparts.surge.sh/part1/part1_bad_color.jpg","#base:comment":"Consider the color only of the lower vertex"}]},"#base:reports":{"@graph":[{"@id":"#base:4645000c-0b2e-4d40-87c4-4df649ac51a5","#base:id":308,"#base:name":"not waiting for teamleader","#base:desc":"Something else","#base:machine_state":"fb71a95f-8068-4b92-964c-9b5720efda54","#base:machine":"f57438f4-ccfc-4c5d-a0ac-0c7008d4bf3f","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:9f12ad30-90e0-452a-a94e-fd0d03aee6e4","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab"}]}}]},"#base:events":{"@list":[{"@graph":[{"@id":"#base:7c7237dd-fb92-478e-a4d6-a92e511f76eb","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:d76c76bd-ad51-41a8-996e-f0cdae7d49d9","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:cbe40215-e9c6-448d-9517-09289e33069a","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:ffb03c6a-c020-487e-83c4-cb4fbd6b70a0","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:2f133466-a6b3-4eb8-a3ae-ef3220a9271b","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:30c24584-7800-4fad-8497-754d431a36ef","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:de4f9096-9cc9-4591-b122-2c3d7d50f48e","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:ae38be8b-25c8-48d4-8d67-3483ad854400","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:74791c9a-768d-4e7e-8b37-05945a1f9085","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:0af51a24-1623-40f1-ae87-3807f8c213b0","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:d28b1a91-9a62-431d-b918-47f5ffc0db4d","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:786f5ac0-4503-4da5-85db-c5583b2df3e3","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:c763a1da-d439-4c83-aef8-411aead0c7dd","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:cc783936-c446-4a9c-a1b0-c84526134c42","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:d06c6102-21e5-4d85-b1ef-639ca2c0f3c0","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:916b2eb1-ef26-4af1-97d4-f4c7f9de735f","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:160cbd05-0f78-483b-962d-3229ead4cd6a","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:34ed8558-5e15-42fb-b991-f5b8a1ef3f7a","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:be7c384c-5d5c-44c6-8e2b-9ed1328b3f1c","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:b207653f-8154-4bb3-baf0-60703de550c5","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:5619d5cf-b666-4486-bcbb-a63af46ce905","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:8ba05735-237a-4aa7-8115-26290ed05aed","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:f161376c-8ee4-4095-a474-634282a58b43","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:39252ea9-393f-4e51-9390-a0a5bf33647f","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:fecf58ab-a5bc-4e0c-8256-da44f8a12bda","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:399bfffc-6e73-412a-968a-5fcd91bbe9ff","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:056c581b-2d24-47ae-aaf1-d76560d862a5","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:0de5727f-18bd-47bb-ab9a-4bce0a3f16f3","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:d7f1610e-c204-4904-a89e-403f0f605f23","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:a118ae60-5228-4b2e-9462-4d6c6a87a430","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:7b333081-1a2b-457f-8e2c-e38882a1e2a5","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:3e3ed6c4-347a-40b6-ad83-04ebe92079af","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:b8cf5dff-7d19-4b31-8e06-c49630a363c1","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:e9252fa3-9e8c-42a6-bcf6-30eb72b14757","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:9fab78e1-38c6-4af2-8110-86604def25f9","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:e180b807-dc6d-4909-bc35-b8907624d47a","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:678cb895-b3a9-44f1-84c6-c23cf60b11b4","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:c151f5cc-ea56-4aa6-8917-11ecb497d91a","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]},{"@graph":[{"@id":"#base:580e6dd2-6086-4fc8-ab77-b20a5feaab26","#base:id":308,"#base:name":"waiting for teamleader","#base:desc":"Something else","#base:machine_state":"3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8","#base:machine":"d8b20647-d578-46b2-a32a-479d440f438a","#base:operator":"3df5bf9e-114f-445e-b60b-e63247701a11","#base:optional":{"@graph":[{"@id":"#base:6708963b-8161-430b-990f-87b6f064b5d5","#base:defect_id":"0324aa5e-9136-4888-85c7-9027a66121ab","#base:stopped_for_defect_event_id":307}]}}]}]}}]}},{"@id":"#base:362f0b48-de4e-4ac3-877f-04c9d12ad65c","teamleader:state":{"@id":"teamleader:sentEvents"},"teamleader:hack":{"@id":"#base:f06574bd-3d45-4b56-8db1-cc59e52da9c4"}}]};
    it ('JSONLD parser should be fast', function ()
    {
        for (var i = 0; i < 100; ++i)
            n3 = jParser.toN3(jsonld);
    });
    it ('N3 parser should be fast', function ()
    {
        for (var i = 0; i < 100; ++i)
            jsonld = nParser.toJSONLD(n3);
    });

    n3 = 'PREFIX : <http://f4w.restdesc.org/demo#> PREFIX log: <http://www.w3.org/2000/10/swap/log#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX list: <http://www.w3.org/2000/10/swap/list#> PREFIX e: <http://eulersharp.sourceforge.net/2003/03swap/log-rules#> PREFIX r: <http://www.w3.org/2000/10/swap/reason#> PREFIX tmpl: <http://purl.org/restdesc/http-template#> PREFIX http: <http://www.w3.org/2011/http#> PREFIX prolog: <http://eulersharp.sourceforge.net/2003/03swap/prolog#> PREFIX ns1: <http://f4w.restdesc.org/util#> PREFIX string: <http://www.w3.org/2000/10/swap/string#> PREFIX math: <http://www.w3.org/2000/10/swap/math#> PREFIX auth: <http://f4w.restdesc.org/demo/authorization#> PREFIX prov: <http://www.w3.org/ns/prov#> PREFIX tho: <http://f4w.restdesc.org/demo/thermolympic#> PREFIX teamleader: <http://f4w.restdesc.org/demo/teamleader#> PREFIX operator: <http://f4w.restdesc.org/demo/operator#> PREFIX out: <http://f4w.restdesc.org/demo/.well-known/genid/f3ed8675-47ce-42f1-ac89-9082b146b6db#> PREFIX ofs: <http://f4w.restdesc.org/demo/offset#>  _:sk_0 :validCall {_:e_sk_7_1 http:methodName "GET".   _:e_sk_7_1 tmpl:requestURI ("https://mstate.tho.facts4.work/api/machines/" "d8b20647-d578-46b2-a32a-479d440f438a" "/last_event?access_token=" "ACCESS").   _:e_sk_7_1 http:resp _:e_sk_8_1.   _:e_sk_8_1 http:body _:e_sk_9_1.   _:e_sk_9_1 :contains {:json :id _:e_sk_10_1.     :json :optional _:e_sk_11_1}.   <http://f4w.restdesc.org/demo#3f58384a-39f2-4c42-8ef4-e88077fc266c> teamleader:event _:e_sk_12_1.   _:e_sk_12_1 teamleader:id _:e_sk_10_1.   _:e_sk_12_1 teamleader:optional _:e_sk_11_1}. _:sk_1 :validCall {_:e_sk_17_1 http:methodName "GET".   _:e_sk_17_1 tmpl:requestURI ("https://mstate.tho.facts4.work/api/machines/" "d8b20647-d578-46b2-a32a-479d440f438a" "/events?access_token=" "ACCESS").   _:e_sk_17_1 http:resp _:e_sk_18_1.   _:e_sk_18_1 http:body _:e_sk_19_2.   :a0774a61-d98b-4909-b2eb-43249b5c50a6 teamleader:events _:e_sk_19_2}.  #ENDS 0.247 [sec] IO=276/2 TC=2 TP=2 BC=0 BP=0 PM=0 CM=0 FM=0 AM=0   HANDLE NEXT - N3: 4ms HANDLE NEXT - CALLS: 22ms HANDLE NEXT: 27ms TMP: 104ms EYE PROOF: 687ms TMP: 16ms EYE SIMPLIFY: 410ms #Processed by EYE-Winter16.0308.2205 josd #eye C:\projects\facts4workers\api-interface\node_modules\RESTdesc\n3\list.n3 /tmp/node_6816_0/0.tmp --query C:\projects\facts4workers\api-interface\node_modules\RESTdesc\n3\find_executable_calls.n3 --nope  PREFIX : <http://f4w.restdesc.org/demo#> PREFIX log: <http://www.w3.org/2000/10/swap/log#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX list: <http://www.w3.org/2000/10/swap/list#> PREFIX e: <http://eulersharp.sourceforge.net/2003/03swap/log-rules#> PREFIX r: <http://www.w3.org/2000/10/swap/reason#> PREFIX tmpl: <http://purl.org/restdesc/http-template#> PREFIX http: <http://www.w3.org/2011/http#> PREFIX prolog: <http://eulersharp.sourceforge.net/2003/03swap/prolog#> PREFIX ns1: <http://f4w.restdesc.org/util#> PREFIX string: <http://www.w3.org/2000/10/swap/string#> PREFIX math: <http://www.w3.org/2000/10/swap/math#> PREFIX auth: <http://f4w.restdesc.org/demo/authorization#> PREFIX prov: <http://www.w3.org/ns/prov#> PREFIX tho: <http://f4w.restdesc.org/demo/thermolympic#> PREFIX teamleader: <http://f4w.restdesc.org/demo/teamleader#> PREFIX operator: <http://f4w.restdesc.org/demo/operator#> PREFIX out: <http://f4w.restdesc.org/demo/.well-known/genid/f3ed8675-47ce-42f1-ac89-9082b146b6db#> PREFIX ofs: <http://f4w.restdesc.org/demo/offset#>  _:sk_0 :validCall {_:e_sk_7_1 http:methodName "GET".   _:e_sk_7_1 tmpl:requestURI ("https://defects.tho.facts4.work/api/solutions?defect_id=" "0324aa5e-9136-4888-85c7-9027a66121ab" "&access_token=" "ACCESS").   _:e_sk_7_1 http:resp _:e_sk_8_1.   _:e_sk_8_1 http:body _:e_sk_9_2.   teamleader:defect teamleader:solutions _:e_sk_9_2}. _:sk_1 :validCall {_:e_sk_13_1 http:methodName "GET".   _:e_sk_13_1 tmpl:requestURI ("https://defects.tho.facts4.work/api/defects/" "0324aa5e-9136-4888-85c7-9027a66121ab" "?access_token=" "ACCESS").   _:e_sk_13_1 http:resp _:e_sk_14_1.   _:e_sk_14_1 http:body _:e_sk_15_1.   _:e_sk_15_1 :contains {:json :name _:e_sk_16_2.     :json :desc _:e_sk_17_2.     :json :part_id _:e_sk_18_1.     :json :media_url _:e_sk_19_2.     :json :comment _:e_sk_20_2}.   teamleader:defect teamleader:name _:e_sk_16_2.   teamleader:defect teamleader:desc _:e_sk_17_2.   teamleader:defect teamleader:part_id _:e_sk_18_1.   teamleader:defect teamleader:media_url _:e_sk_19_2.   teamleader:defect teamleader:comment _:e_sk_20_2}. _:sk_2 :validCall {_:e_sk_10_1 http:methodName "GET".   _:e_sk_10_1 tmpl:requestURI ("https://defects.tho.facts4.work/api/reports?event_id=" 307 "&access_token=" "ACCESS").   _:e_sk_10_1 http:resp _:e_sk_11_1.   _:e_sk_11_1 http:body _:e_sk_12_2.   teamleader:original teamleader:reports _:e_sk_12_2}.  #ENDS 0.361 [sec] IO=273/3 TC=3 TP=3 BC=0 BP=0 PM=0 CM=0 FM=0 AM=0   HANDLE NEXT - N3: 7ms HANDLE NEXT - CALLS: 16ms HANDLE NEXT: 25ms TMP: 88ms EYE PROOF: 633ms TMP: 5ms EYE SIMPLIFY: 390ms #Processed by EYE-Winter16.0308.2205 josd #eye C:\projects\facts4workers\api-interface\node_modules\RESTdesc\n3\list.n3 /tmp/node_6816_0/0.tmp --query C:\projects\facts4workers\api-interface\node_modules\RESTdesc\n3\find_executable_calls.n3 --nope  PREFIX : <http://f4w.restdesc.org/demo#> PREFIX log: <http://www.w3.org/2000/10/swap/log#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX list: <http://www.w3.org/2000/10/swap/list#> PREFIX e: <http://eulersharp.sourceforge.net/2003/03swap/log-rules#> PREFIX r: <http://www.w3.org/2000/10/swap/reason#> PREFIX tmpl: <http://purl.org/restdesc/http-template#> PREFIX http: <http://www.w3.org/2011/http#> PREFIX prolog: <http://eulersharp.sourceforge.net/2003/03swap/prolog#> PREFIX ns1: <http://f4w.restdesc.org/util#> PREFIX string: <http://www.w3.org/2000/10/swap/string#> PREFIX math: <http://www.w3.org/2000/10/swap/math#> PREFIX auth: <http://f4w.restdesc.org/demo/authorization#> PREFIX prov: <http://www.w3.org/ns/prov#> PREFIX tho: <http://f4w.restdesc.org/demo/thermolympic#> PREFIX teamleader: <http://f4w.restdesc.org/demo/teamleader#> PREFIX operator: <http://f4w.restdesc.org/demo/operator#> PREFIX out: <http://f4w.restdesc.org/demo/.well-known/genid/f3ed8675-47ce-42f1-ac89-9082b146b6db#> PREFIX ofs: <http://f4w.restdesc.org/demo/offset#>  _:sk_0 :validCall {_:e_sk_7_1 http:methodName "GET".   _:e_sk_7_1 tmpl:requestURI ("http://askTheWorker/events").   _:e_sk_7_1 http:headers (_:e_sk_8_1).   _:e_sk_8_1 http:fieldName "Content-Type".   _:e_sk_8_1 http:fieldValue "application/json".   _:e_sk_7_1 http:body {:json :part {<http://f4w.restdesc.org/demo#81cc7d89-9776-4f53-a2b8-14f10d7d8686> :id 1 .       <http://f4w.restdesc.org/demo#81cc7d89-9776-4f53-a2b8-14f10d7d8686> :name "Pinion".       <http://f4w.restdesc.org/demo#81cc7d89-9776-4f53-a2b8-14f10d7d8686> :image_url "http://machinesandparts.surge.sh/part1/part1_ok.jpg"}.     :json :defect {:json :name "Bad color".       :json :desc "Color of the product has not the correct RAL value".       :json :media_url "http://machinesandparts.surge.sh/part1/part1_bad_color.jpg".       :json :comment "Consider the color only of the lower vertex"}.     :json :reports {:a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :id 308 .       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :name "not waiting for teamleader".       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :desc "Something else".       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :machine_state "fb71a95f-8068-4b92-964c-9b5720efda54".       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :machine "f57438f4-ccfc-4c5d-a0ac-0c7008d4bf3f".       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :a573e9d8-12ec-4543-ac6e-77cb6b7aa926 :optional {<http://f4w.restdesc.org/demo#6c49a8c1-268c-47a7-8edb-fdeab41a35ee> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab"}}.     :json :events ({<http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :id 308 .       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :desc "Something else".       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#645d51e8-134e-4516-9dd7-7553b4bbafdb> :optional {:baf766e4-b367-4633-bab3-abde85b3b974 :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         :baf766e4-b367-4633-bab3-abde85b3b974 :stopped_for_defect_event_id 307}} {:cfc5282f-ddf8-45ec-8b59-3701ec987427 :id 308 .       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :name "waiting for teamleader".       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :desc "Something else".       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :cfc5282f-ddf8-45ec-8b59-3701ec987427 :optional {:c739c955-758f-4ff6-8dd3-223d2d9309a4 :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         :c739c955-758f-4ff6-8dd3-223d2d9309a4 :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :id 308 .       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :desc "Something else".       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#9011840a-ce78-4a8a-8a31-a53d7fc96ce5> :optional {<http://f4w.restdesc.org/demo#81145708-95cb-4ba1-b149-46e3604a2b44> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#81145708-95cb-4ba1-b149-46e3604a2b44> :stopped_for_defect_event_id 307}} {:ee2c9b44-77cb-4e76-a482-dae49cd9add2 :id 308 .       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :name "waiting for teamleader".       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :desc "Something else".       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :ee2c9b44-77cb-4e76-a482-dae49cd9add2 :optional {<http://f4w.restdesc.org/demo#5f5039b4-e08e-4c65-86f4-ea7b9aeadc1e> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#5f5039b4-e08e-4c65-86f4-ea7b9aeadc1e> :stopped_for_defect_event_id 307}} {:d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :id 308 .       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :name "waiting for teamleader".       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :desc "Something else".       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :d5c49a51-510a-4d0a-a398-dbfb3c0a4e39 :optional {<http://f4w.restdesc.org/demo#3b976e63-bd4a-4d3c-8b3d-055ee69d0b73> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#3b976e63-bd4a-4d3c-8b3d-055ee69d0b73> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :id 308 .       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :desc "Something else".       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#07bc1d33-6561-48f6-bf1c-eac82f1dd995> :optional {<http://f4w.restdesc.org/demo#4bee1fe7-b1e3-4c41-b327-b8e4b46e1db9> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#4bee1fe7-b1e3-4c41-b327-b8e4b46e1db9> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :id 308 .       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :desc "Something else".       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#884afb5f-caa9-4ba5-a081-586a49d7a9b3> :optional {:b2c5db7a-b7b9-442f-9c08-7177685c233a :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         :b2c5db7a-b7b9-442f-9c08-7177685c233a :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :id 308 .       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :desc "Something else".       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#7e8077e3-8646-4e98-b257-6507c40660d9> :optional {<http://f4w.restdesc.org/demo#02cf11ea-a2a6-464e-8a95-161bf6c1af76> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#02cf11ea-a2a6-464e-8a95-161bf6c1af76> :stopped_for_defect_event_id 307}} {:c85e72a5-f6da-4193-90f3-8f4337256ce7 :id 308 .       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :name "waiting for teamleader".       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :desc "Something else".       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :c85e72a5-f6da-4193-90f3-8f4337256ce7 :optional {<http://f4w.restdesc.org/demo#201246df-6c66-45ec-8196-ea00157fca36> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#201246df-6c66-45ec-8196-ea00157fca36> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :id 308 .       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :desc "Something else".       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#89e7cc4d-1720-48a0-b7e0-76b7c6e3df64> :optional {<http://f4w.restdesc.org/demo#9a5160fe-cae1-4708-b707-e65f1265af11> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#9a5160fe-cae1-4708-b707-e65f1265af11> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :id 308 .       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :desc "Something else".       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#5880ca3d-d0ce-46a0-8db7-6075338e4a88> :optional {<http://f4w.restdesc.org/demo#98c0bffc-8935-4480-8185-16d0e7cc9aac> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#98c0bffc-8935-4480-8185-16d0e7cc9aac> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :id 308 .       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :desc "Something else".       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#0a3806d6-0f7c-4c8b-8b81-19f363ed39cd> :optional {<http://f4w.restdesc.org/demo#2c105b53-97ca-41f0-bc39-9191e3c64a8c> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#2c105b53-97ca-41f0-bc39-9191e3c64a8c> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :id 308 .       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :desc "Something else".       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#76080da0-83a5-4409-b471-005f0d793933> :optional {<http://f4w.restdesc.org/demo#9b8e4987-36b6-4f39-bb08-38e6a9639d1d> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#9b8e4987-36b6-4f39-bb08-38e6a9639d1d> :stopped_for_defect_event_id 307}} {:a5bde6e8-5d95-44fa-bdd5-5df1b962992d :id 308 .       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :name "waiting for teamleader".       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :desc "Something else".       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :a5bde6e8-5d95-44fa-bdd5-5df1b962992d :optional {:a4a01da4-04c3-4eeb-8f42-0322341addc6 :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         :a4a01da4-04c3-4eeb-8f42-0322341addc6 :stopped_for_defect_event_id 307}} {:a9da51de-55ad-42d8-b44e-8bbc8860f355 :id 308 .       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :name "waiting for teamleader".       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :desc "Something else".       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :a9da51de-55ad-42d8-b44e-8bbc8860f355 :optional {<http://f4w.restdesc.org/demo#193ed737-6d76-4ba8-b7a5-4213b9f6e658> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#193ed737-6d76-4ba8-b7a5-4213b9f6e658> :stopped_for_defect_event_id 307}} {<http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :id 308 .       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :name "waiting for teamleader".       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :desc "Something else".       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :machine "d8b20647-d578-46b2-a32a-479d440f438a".       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       <http://f4w.restdesc.org/demo#294713db-d8a9-4d29-930c-95fcdca8b288> :optional {:b0568398-d411-4c5b-9748-a82964de9dc1 :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         :b0568398-d411-4c5b-9748-a82964de9dc1 :stopped_for_defect_event_id 307}} {:a5a567c7-4eb7-4007-9345-6b607779fc6e :id 308 .       :a5a567c7-4eb7-4007-9345-6b607779fc6e :name "waiting for teamleader".       :a5a567c7-4eb7-4007-9345-6b607779fc6e :desc "Something else".       :a5a567c7-4eb7-4007-9345-6b607779fc6e :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :a5a567c7-4eb7-4007-9345-6b607779fc6e :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :a5a567c7-4eb7-4007-9345-6b607779fc6e :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :a5a567c7-4eb7-4007-9345-6b607779fc6e :optional {<http://f4w.restdesc.org/demo#91bbff9f-f2e1-4e06-98e0-354559c07100> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#91bbff9f-f2e1-4e06-98e0-354559c07100> :stopped_for_defect_event_id 307}} {:e03db05d-0546-4ee1-b71f-40571c50ab4b :id 308 .       :e03db05d-0546-4ee1-b71f-40571c50ab4b :name "waiting for teamleader".       :e03db05d-0546-4ee1-b71f-40571c50ab4b :desc "Something else".       :e03db05d-0546-4ee1-b71f-40571c50ab4b :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :e03db05d-0546-4ee1-b71f-40571c50ab4b :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :e03db05d-0546-4ee1-b71f-40571c50ab4b :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :e03db05d-0546-4ee1-b71f-40571c50ab4b :optional {<http://f4w.restdesc.org/demo#813ec707-1003-44e6-adc0-94d0a45ffa3a> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#813ec707-1003-44e6-adc0-94d0a45ffa3a> :stopped_for_defect_event_id 307}} {:b162238b-135b-4fe0-be32-f60bd4c89bdd :id 308 .       :b162238b-135b-4fe0-be32-f60bd4c89bdd :name "waiting for teamleader".       :b162238b-135b-4fe0-be32-f60bd4c89bdd :desc "Something else".       :b162238b-135b-4fe0-be32-f60bd4c89bdd :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :b162238b-135b-4fe0-be32-f60bd4c89bdd :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :b162238b-135b-4fe0-be32-f60bd4c89bdd :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :b162238b-135b-4fe0-be32-f60bd4c89bdd :optional {<http://f4w.restdesc.org/demo#877df565-19ec-4788-8527-f896ed568024> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#877df565-19ec-4788-8527-f896ed568024> :stopped_for_defect_event_id 307}} {:aceed6f1-18a1-4ecd-bed2-45fa19961c75 :id 308 .       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :name "waiting for teamleader".       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :desc "Something else".       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :machine_state "3abbbd8c-bf6a-42c0-a096-2087d4b8e4a8".       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :machine "d8b20647-d578-46b2-a32a-479d440f438a".       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :operator "3df5bf9e-114f-445e-b60b-e63247701a11".       :aceed6f1-18a1-4ecd-bed2-45fa19961c75 :optional {<http://f4w.restdesc.org/demo#8d44ef47-f807-4300-85bd-b731dc3249e8> :defect_id "0324aa5e-9136-4888-85c7-9027a66121ab".         <http://f4w.restdesc.org/demo#8d44ef47-f807-4300-85bd-b731dc3249e8> :stopped_for_defect_event_id 307}})}.   <http://f4w.restdesc.org/demo#3f58384a-39f2-4c42-8ef4-e88077fc266c> teamleader:state teamleader:sentEvents.   <http://f4w.restdesc.org/demo#3f58384a-39f2-4c42-8ef4-e88077fc266c> teamleader:hack _:e_sk_9_2}.';
    it ('N3 parser should be fast', function ()
    {
        for (var i = 0; i < 100; ++i)
            jsonld = nParser.toJSONLD(n3);
    });
    it ('JSONLD parser should be fast', function ()
    {
        for (var i = 0; i < 100; ++i)
            n3 = jParser.toN3(jsonld);
    });
});