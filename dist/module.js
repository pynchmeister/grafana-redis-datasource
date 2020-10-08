/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","emotion","@grafana/runtime","lodash","rxjs"],(function(e,t,n,r,o,i,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function l(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var c,u=n(0),p=n.n(u),f=n(1);!function(e){e.CLUSTER="cluster",e.SENTINEL="sentinel",e.SOCKET="socket",e.STANDALONE="standalone"}(c||(c={}));var h,d=[{label:"Standalone",value:c.STANDALONE},{label:"Cluster",value:c.CLUSTER},{label:"Sentinel",value:c.SENTINEL},{label:"Socket",value:c.SOCKET}],m=f.LegacyForms.SecretFormField,b=f.LegacyForms.FormField,g=f.LegacyForms.Switch,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onPoolSizeChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{jsonData:i(i({},o.jsonData),{poolSize:Number(e.target.value)})}))},t.onTimeoutChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{jsonData:i(i({},o.jsonData),{timeout:Number(e.target.value)})}))},t.onPingIntervalChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{jsonData:i(i({},o.jsonData),{pingInterval:Number(e.target.value)})}))},t.onPipelineWindowChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{jsonData:i(i({},o.jsonData),{pipelineWindow:Number(e.target.value)})}))},t.onPasswordChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:i(i({},o.secureJsonData),{password:e.target.value})}))},t.onResetPassword=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{password:!1}),secureJsonData:i(i({},r.secureJsonData),{password:""})}))},t.onTlsClientCertificateChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:i(i({},o.secureJsonData),{tlsClientCert:e.currentTarget.value})}))},t.onResetTlsClientCertificate=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{tlsClientCert:!1}),secureJsonData:i(i({},r.secureJsonData),{tlsClientCert:""})}))},t.onTlsCACertificateChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:i(i({},o.secureJsonData),{tlsCACert:e.currentTarget.value})}))},t.onResetTlsCACertificate=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{tlsCACert:!1}),secureJsonData:i(i({},r.secureJsonData),{tlsCACert:""})}))},t.onTlsClientKeyChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:i(i({},o.secureJsonData),{tlsClientKey:e.currentTarget.value})}))},t.onResetTlsClientKey=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{tlsClientKey:!1}),secureJsonData:i(i({},r.secureJsonData),{tlsClientKey:""})}))},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.options,n=e.onOptionsChange,r=t.url,o=t.jsonData,a=t.secureJsonFields,s=t.secureJsonData||{};return p.a.createElement("div",{className:"gf-form-group"},p.a.createElement("h3",{className:"page-heading"},"Redis"),p.a.createElement("div",{className:"gf-form"},p.a.createElement(f.InlineFormLabel,{width:10,tooltip:""},"Type"),p.a.createElement(f.RadioButtonGroup,{options:d,value:o.client||c.STANDALONE,onChange:function(e){var r=i(i({},t.jsonData),{client:e});n(i(i({},t),{jsonData:r}))}})),o.client===c.SENTINEL&&p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{label:"Master Name",labelWidth:10,inputWidth:10,value:o.sentinelName,tooltip:"Provide Master Name to connect to.",onChange:function(e){n(i(i({},t),{jsonData:i(i({},t.jsonData),{sentinelName:e.target.value})}))}})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{label:"Address",labelWidth:10,inputWidth:20,onChange:function(e){n(i(i({},t),{url:e.target.value}))},value:r||"",tooltip:"Accepts host:port address or a URI, as defined in https://www.iana.org/assignments/uri-schemes/prov/redis.\n            For Redis Cluster and Sentinel can contain multiple values with comma.\n            For a Unix Socket accepts path to socket file.",placeholder:"redis://..."})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(g,{label:"ACL",labelClass:"width-10",tooltip:"Allows certain connections to be limited in terms of the commands that can be executed and the keys that can be accessed",checked:o.acl||!1,onChange:function(e){var r=i(i({},t.jsonData),{acl:e.currentTarget.checked});n(i(i({},t),{jsonData:r}))}}),o.acl&&p.a.createElement(b,{label:"Username",labelWidth:10,inputWidth:10,value:o.user,tooltip:"Provide ACL Username to authenticate.",onChange:function(e){n(i(i({},t),{jsonData:i(i({},t.jsonData),{user:e.target.value})}))}})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(m,{isConfigured:a&&a.password,value:s.password||"",label:"Password",placeholder:"Database password",labelWidth:10,inputWidth:20,tooltip:"When specified AUTH command will be used to authenticate with the provided password.",onReset:this.onResetPassword,onChange:this.onPasswordChange})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{label:"Pool Size",labelWidth:10,inputWidth:10,onChange:this.onPoolSizeChange,value:o.poolSize||5,tooltip:"Will keep open at least the given number of connections to the redis instance at the given address.\n            The recommended size of the pool depends on the number of concurrent goroutines that will use the pool and\n            whether implicit pipelining is enabled or not."})),p.a.createElement("br",null),p.a.createElement("h3",{className:"page-heading"},"Advanced settings"),p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{label:"Timeout, sec",labelWidth:10,inputWidth:10,onChange:this.onTimeoutChange,value:o.timeout||10,tooltip:"Sets the duration in seconds for connect, read and write timeouts."}),p.a.createElement(b,{label:"Ping Interval, sec",labelWidth:10,inputWidth:10,onChange:this.onPingIntervalChange,value:o.pingInterval||0,tooltip:"Specifies the interval in seconds at which a ping event happens.\n            A shorter interval means connections are pinged more frequently, but also means more traffic with the server.\n            If interval is zero then ping will be disabled."})),p.a.createElement("div",{className:"gf-form"},p.a.createElement(b,{label:"Pipeline Window, μs",labelWidth:10,inputWidth:10,onChange:this.onPipelineWindowChange,value:o.pipelineWindow||0,tooltip:"Sets the duration in microseconds after which internal pipelines will be flushed.\n            If window is zero then implicit pipelining will be disabled."})),p.a.createElement("br",null),p.a.createElement("h3",{className:"page-heading"},"TLS"),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement(g,{label:"Client Authentication",labelClass:"width-10",checked:o.tlsAuth||!1,onChange:function(e){var r=i(i({},t.jsonData),{tlsAuth:e.currentTarget.checked});n(i(i({},t),{jsonData:r}))}}),o.tlsAuth&&p.a.createElement(g,{label:"Skip Verify",labelClass:"width-10",tooltip:"If checked, the server's certificate will not be checked for validity.",checked:o.tlsSkipVerify||!1,onChange:function(e){var r=i(i({},t.jsonData),{tlsSkipVerify:e.currentTarget.checked});n(i(i({},t),{jsonData:r}))}})),o.tlsAuth&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form gf-form--v-stretch"},p.a.createElement("label",{className:"gf-form-label width-10"},"Client Certificate")),a&&a.tlsClientCert?p.a.createElement(f.Button,{type:"reset",variant:"secondary",onClick:this.onResetTlsClientCertificate},"Reset"):p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement(f.TextArea,{css:"",rows:7,className:"gf-form-input gf-form-textarea",placeholder:"Begins with -----BEGIN CERTIFICATE-----",onChange:this.onTlsClientCertificateChange}))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form gf-form--v-stretch"},p.a.createElement("label",{className:"gf-form-label width-10"},"Client Key")),p.a.createElement("div",{className:"gf-form gf-form--grow"},a&&a.tlsClientKey?p.a.createElement(f.Button,{type:"reset",variant:"secondary",onClick:this.onResetTlsClientKey},"Reset"):p.a.createElement(f.TextArea,{css:"",rows:7,className:"gf-form-input gf-form-textarea",placeholder:"Begins with -----BEGIN PRIVATE KEY-----",onChange:this.onTlsClientKeyChange}))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form gf-form--v-stretch"},p.a.createElement("label",{className:"gf-form-label width-10"},"Certification Authority")),a&&a.tlsCACert?p.a.createElement(f.Button,{type:"reset",variant:"secondary",onClick:this.onResetTlsCACertificate},"Reset"):p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement(f.TextArea,{css:"",rows:7,className:"gf-form-input gf-form-textarea",placeholder:"Begins with -----BEGIN CERTIFICATE-----",onChange:this.onTlsCACertificateChange})))))},t}(u.PureComponent),y=n(3),C={command:[{label:"CLIENT LIST",description:"Returns information and statistics about the client connections server",value:"clientList"},{label:"CLUSTER INFO",description:"Provides INFO style information about Redis Cluster vital parameters",value:"clusterInfo"},{label:"CLUSTER NODES",description:"Provides current cluster configuration, given by the set of known nodes",value:"clusterNodes"},{label:"GET",description:"Returns the value of key",value:"get"},{label:"HGET",description:"Returns the value associated with field in the hash stored at key",value:"hget"},{label:"HGETALL",description:"Returns all fields and values of the hash stored at key",value:"hgetall"},{label:"HKEYS",description:"Returns all field names in the hash stored at key",value:"hkeys"},{label:"HLEN",description:"Returns the number of fields contained in the hash stored at key",value:"hlen"},{label:"INFO",description:"Returns information and statistics about the server",value:"info"},{label:"LLEN",description:"Returns the length of the list stored at key",value:"llen"},{label:"SCARD",description:"Returns the set cardinality (number of elements) of the set stored at key",value:"scard"},{label:"SLOWLOG GET",description:"Returns the Redis slow queries log",value:"slowlogGet"},{label:"SMEMBERS",description:"Returns all the members of the set value stored at key",value:"smembers"},{label:"TTL",description:"Returns the string representation of the type of the value stored at key",value:"ttl"},{label:"TYPE",description:"Returns the string representation of the type of the value stored at key",value:"type"},{label:"XLEN",description:"Returns the number of entries inside a stream",value:"xlen"}],timeSeries:[{label:"TS.GET",description:"Get the last sample",value:"ts.get"},{label:"TS.INFO",description:"Returns information and statistics on the time-series",value:"ts.info"},{label:"TS.MRANGE",description:"Query a timestamp range across multiple time-series by filters",value:"ts.mrange"},{label:"TS.QUERYINDEX",description:"Get all the keys matching the filter list",value:"ts.queryindex"},{label:"TS.RANGE",description:"Query a range",value:"ts.range"}]},E={aggregation:["ts.range","ts.mrange"],field:["hget"],filter:["ts.mrange","ts.queryindex"],key:["get","hget","hgetall","hkeys","hlen","llen","scard","smembers","ts.range","ts.get","ts.info","ttl","type","xinfoStream","xlen"],legend:["ts.range"],legendLabel:["ts.mrange"],section:["info"],valueLabel:["ts.mrange"],fill:["ts.range","ts.mrange"]},w=[{label:"Server",description:"General information about the Redis server",value:"server"},{label:"Clients",description:"Client connections section",value:"clients"},{label:"Memory",description:"Memory consumption related information",value:"memory"},{label:"Persistence",description:"RDB and AOF related information",value:"persistence"},{label:"Stats",description:"General statistics",value:"stats"},{label:"Replication",description:"Master/replica replication information",value:"replication"},{label:"CPU",description:"CPU consumption statistics",value:"cpu"},{label:"Command Stats",description:"Redis command statistics",value:"commandstats"},{label:"Cluster",description:"Redis Cluster section",value:"cluster"},{label:"Keyspace",description:"Database related statistics",value:"keyspace"}];!function(e){e.COMMAND="command",e.TIMESERIES="timeSeries",e.CLI="cli"}(h||(h={}));var S,T,_=[{label:"Redis commands",description:"Hashes, Sets, Lists, Strings, Streams, etc.",value:h.COMMAND},{label:"RedisTimeSeries commands",description:"Redis Module adding a Time Series data structure to Redis",value:h.TIMESERIES},{label:"Command-line interface (CLI)",description:"Be mindful, not all commands are supported",value:h.CLI}],x=[{label:"None",description:"No aggregation",value:""},{label:"Avg",description:"Average",value:"avg"},{label:"Count",description:"Count number of samples",value:"count"},{label:"Max",description:"Maximum",value:"max"},{label:"Min",description:"Minimum",value:"min"},{label:"Range",description:"Diff between maximum and minimum in the bucket",value:"range"},{label:"Sum",description:"Sum",value:"sum"}],N=f.LegacyForms.FormField,O=f.LegacyForms.Switch,k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onKeyChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{key:e.target.value}))},t.onQueryChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{query:e.target.value}))},t.onFilterChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{filter:e.target.value}))},t.onFieldChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{field:e.target.value}))},t.onLegendChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{legend:e.target.value}))},t.onValueChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{value:e.target.value}))},t.onCommandChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{command:e.value}))},t.onTypeChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{type:e.value,query:"",command:""}))},t.onAggregationTextChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{aggregation:e.value}))},t.onInfoSectionTextChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{section:e.value}))},t.onBucketTextChange=function(e){var n=t.props,r=n.onChange,o=n.query;r(i(i({},o),{bucket:e.target.value}))},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.query,n=t.key,r=t.aggregation,o=t.bucket,a=t.legend,s=t.command,c=t.field,u=t.filter,d=t.value,m=t.query,b=t.type,g=t.section,v=t.fill,k=t.streaming,D=t.streamingInterval,P=t.streamingCapacity,A=t.refId,I=this.props,R=I.onRunQuery,L=I.onChange;return p.a.createElement("div",null,p.a.createElement("div",{className:"gf-form"},p.a.createElement(f.InlineFormLabel,{width:8},"Type"),p.a.createElement(f.Select,{className:Object(y.css)(S||(S=l(["\n              margin-right: 5px;\n            "],["\n              margin-right: 5px;\n            "]))),width:40,options:_,menuPlacement:"bottom",value:b,onChange:this.onTypeChange}),b===h.CLI&&p.a.createElement(p.a.Fragment,null,p.a.createElement(f.InlineFormLabel,{width:8},"Command"),p.a.createElement(f.TextArea,{css:"",value:m,className:"gf-form-input",onChange:this.onQueryChange})),b&&b!==h.CLI&&p.a.createElement(p.a.Fragment,null,p.a.createElement(f.InlineFormLabel,{width:8},"Command"),p.a.createElement(f.Select,{options:C[b],menuPlacement:"bottom",value:s,onChange:this.onCommandChange}))),b!==h.CLI&&s&&p.a.createElement("div",{className:"gf-form"},E.key.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:30,value:n,onChange:this.onKeyChange,label:"Key",tooltip:"Key name"}),E.filter.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:30,value:u,onChange:this.onFilterChange,label:"Label Filter",tooltip:"Label Filter"}),E.field.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:30,value:c,onChange:this.onFieldChange,label:"Field",tooltip:"Field"}),E.legend.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:20,value:a,onChange:this.onLegendChange,label:"Legend",tooltip:"Legend override"}),E.legendLabel.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:10,value:a,onChange:this.onLegendChange,label:"Legend Label",tooltip:"Legend Label"}),E.valueLabel.includes(s)&&p.a.createElement(N,{labelWidth:8,inputWidth:10,value:d,onChange:this.onValueChange,label:"Value Label",tooltip:"Value Label"})),b===h.COMMAND&&s&&E.section.includes(s)&&p.a.createElement("div",{className:"gf-form"},p.a.createElement(f.InlineFormLabel,{width:8},"Section"),p.a.createElement(f.Select,{options:w,onChange:this.onInfoSectionTextChange,value:g,menuPlacement:"bottom"})),b===h.TIMESERIES&&s&&E.aggregation.includes(s)&&p.a.createElement("div",{className:"gf-form"},p.a.createElement(f.InlineFormLabel,{width:8},"Aggregation"),p.a.createElement(f.Select,{className:Object(y.css)(T||(T=l(["\n                margin-right: 5px;\n              "],["\n                margin-right: 5px;\n              "]))),options:x,width:30,onChange:this.onAggregationTextChange,value:r,menuPlacement:"bottom"}),r&&p.a.createElement(N,{labelWidth:8,value:o,type:"number",onChange:this.onBucketTextChange,label:"Bucket",tooltip:"Time bucket for aggregation in milliseconds"}),r&&o&&E.fill.includes(s)&&p.a.createElement(O,{label:"Fill Missing",labelClass:"width-10",tooltip:"If checked, the datasource will fill missing intervals.",checked:v||!1,onChange:function(t){L(i(i({},e.props.query),{fill:t.currentTarget.checked}))}})),"A"===A&&p.a.createElement("div",{className:"gf-form"},p.a.createElement(O,{label:"Streaming",labelClass:"width-8",tooltip:"If checked, the datasource will stream data. Only Ref A is supported. Command should return only one line of data.",checked:k||!1,onChange:function(t){L(i(i({},e.props.query),{streaming:t.currentTarget.checked}))}}),k&&p.a.createElement(p.a.Fragment,null,p.a.createElement(N,{labelWidth:8,value:D,type:"number",onChange:function(t){L(i(i({},e.props.query),{streamingInterval:Number(t.target.value)}))},label:"Interval",tooltip:"Streaming interval in milliseconds. Default is 1000ms."}),p.a.createElement(N,{labelWidth:8,value:P,type:"number",onChange:function(t){L(i(i({},e.props.query),{streamingCapacity:Number(t.target.value)}))},label:"Capacity",tooltip:"Values will be constantly added and will never exceed the given capacity. Default is 1000."}))),p.a.createElement(f.Button,{onClick:R},"Run"))},t}(u.PureComponent),D=n(2),P=n(5),A=n(6);function I(e){return"function"==typeof e}var R=!1,L={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;R=e},get useDeprecatedSynchronousErrorHandling(){return R}};function j(e){setTimeout((function(){throw e}),0)}var F={closed:!0,next:function(e){},error:function(e){if(L.useDeprecatedSynchronousErrorHandling)throw e;j(e)},complete:function(){}},W=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();function q(e){return null!==e&&"object"==typeof e}var M=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),J=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this._parentOrParents,r=this._ctorUnsubscribe,o=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var a=0;a<n.length;++a){n[a].remove(this)}if(I(o)){r&&(this._unsubscribe=void 0);try{o.call(this)}catch(e){t=e instanceof M?U(e.errors):[e]}}if(W(i)){a=-1;for(var s=i.length;++a<s;){var l=i[a];if(q(l))try{l.unsubscribe()}catch(e){t=t||[],e instanceof M?t=t.concat(U(e.errors)):t.push(e)}}}if(t)throw new M(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function U(e){return e.reduce((function(e,t){return e.concat(t instanceof M?t.errors:t)}),[])}var B=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),G=function(e){function t(n,r,o){var i=e.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=F;break;case 1:if(!n){i.destination=F;break}if("object"==typeof n){n instanceof t?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new H(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new H(i,n,r,o)}return i}return o(t,e),t.prototype[B]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(J),H=function(e){function t(t,n,r,o){var i,a=e.call(this)||this;a._parentSubscriber=t;var s=a;return I(n)?i=n:n&&(i=n.next,r=n.error,o=n.complete,n!==F&&(I((s=Object.create(n)).unsubscribe)&&a.add(s.unsubscribe.bind(s)),s.unsubscribe=a.unsubscribe.bind(a))),a._context=s,a._next=i,a._error=r,a._complete=o,a}return o(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;L.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=L.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):j(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;j(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};L.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),L.useDeprecatedSynchronousErrorHandling)throw e;j(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!L.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return L.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(j(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(G);function K(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new V(e,t))}}var V=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new z(e,this.project,this.thisArg))},e}(),z=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return o(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(G);var Q=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Y(e){return e}function X(e){return 0===e.length?Y:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var Z=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,o=function(e,t,n){if(e){if(e instanceof G)return e;if(e[B])return e[B]()}return e||t||n?new G(e,t,n):new G(F)}(e,t,n);if(r?o.add(r.call(o,this.source)):o.add(this.source||L.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),L.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){L.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,r=t.destination,o=t.isStopped;if(n||o)return!1;e=r&&r instanceof G?r:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=$(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),o&&o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[Q]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:X(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=$(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function $(e){if(e||(e=L.Promise||Promise),!e)throw new Error("no Promise impl found");return e}function ee(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var te=ee(),ne=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e};function re(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}var oe=function(e){if(e&&"function"==typeof e[Q])return o=e,function(e){var t=o[Q]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(ne(e))return r=e,function(e){for(var t=0,n=r.length;t<n&&!e.closed;t++)e.next(r[t]);e.complete()};if(re(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,j),e};if(e&&"function"==typeof e[te])return t=e,function(e){for(var n=t[te]();;){var r=void 0;try{r=n.next()}catch(t){return e.error(t),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,r,o,i=q(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function ie(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[Q]}(e))return function(e,t){return new Z((function(n){var r=new J;return r.add(t.schedule((function(){var o=e[Q]();r.add(o.subscribe({next:function(e){r.add(t.schedule((function(){return n.next(e)})))},error:function(e){r.add(t.schedule((function(){return n.error(e)})))},complete:function(){r.add(t.schedule((function(){return n.complete()})))}}))}))),r}))}(e,t);if(re(e))return function(e,t){return new Z((function(n){var r=new J;return r.add(t.schedule((function(){return e.then((function(e){r.add(t.schedule((function(){n.next(e),r.add(t.schedule((function(){return n.complete()})))})))}),(function(e){r.add(t.schedule((function(){return n.error(e)})))}))}))),r}))}(e,t);if(ne(e))return function(e,t){return new Z((function(n){var r=new J,o=0;return r.add(t.schedule((function(){o!==e.length?(n.next(e[o++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}(e,t);if(function(e){return e&&"function"==typeof e[te]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new Z((function(n){var r,o=new J;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(t.schedule((function(){r=e[te](),o.add(t.schedule((function(){if(!n.closed){var e,t;try{var o=r.next();e=o.value,t=o.done}catch(e){return void n.error(e)}t?n.complete():(n.next(e),this.schedule())}})))}))),o}))}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}var ae=function(e){function t(t){var n=e.call(this)||this;return n.parent=t,n}return o(t,e),t.prototype._next=function(e){this.parent.notifyNext(e)},t.prototype._error=function(e){this.parent.notifyError(e),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},t}(G),se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.destination.complete()},t}(G);function le(e,t){return"function"==typeof t?function(n){return n.pipe(le((function(n,r){return(o=e(n,r),i?ie(o,i):o instanceof Z?o:new Z(oe(o))).pipe(K((function(e,o){return t(n,e,r,o)})));var o,i})))}:function(t){return t.lift(new ce(e))}}var ce=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t.subscribe(new ue(e,this.project))},e}(),ue=function(e){function t(t,n){var r=e.call(this,t)||this;return r.project=n,r.index=0,r}return o(t,e),t.prototype._next=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this._innerSub(t)},t.prototype._innerSub=function(e){var t=this.innerSubscription;t&&t.unsubscribe();var n=new ae(this),r=this.destination;r.add(n),this.innerSubscription=function(e,t){if(!t.closed)return e instanceof Z?e.subscribe(t):oe(e)(t)}(e,n),this.innerSubscription!==n&&r.add(this.innerSubscription)},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||e.prototype._complete.call(this),this.unsubscribe()},t.prototype._unsubscribe=function(){this.innerSubscription=void 0},t.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&e.prototype._complete.call(this)},t.prototype.notifyNext=function(e){this.destination.next(e)},t}(se),pe=n(4),fe=function(e){function t(t){return e.call(this,t)||this}return o(t,e),t.prototype.metricFindQuery=function(e,t){return a(this,void 0,Promise,(function(){return s(this,(function(n){return e&&t.variable.datasource?[2,this.query({targets:[{datasource:t.variable.datasource,query:e}]}).pipe(le((function(e){return e.data})),le((function(e){return e.fields})),K((function(e){return e.values.toArray().map((function(e){return{text:e}}))}))).toPromise()]:[2,Promise.resolve([])]}))}))},t.prototype.applyTemplateVariables=function(e,t){var n=Object(pe.getTemplateSrv)();return i(i({},e),{key:e.key?n.replace(e.key,t):"",query:e.query?n.replace(e.query,t):"",filter:e.filter?n.replace(e.filter,t):""})},t.prototype.query=function(t){var n=this,r=Object(P.head)(t.targets);return(null==r?void 0:r.streaming)?new A.Observable((function(o){var i=new D.CircularDataFrame({append:"tail",capacity:(null==r?void 0:r.streamingCapacity)||1e3});i.refId=r.refId,i.addField({name:"time",type:D.FieldType.time});var l=setInterval((function(){return a(n,void 0,void 0,(function(){var n,a;return s(this,(function(s){switch(s.label){case 0:return n={time:Date.now()},[4,e.prototype.query.call(this,t).pipe(le((function(e){return e.data})),K((function(e){return e.fields.filter((function(e){return"time"!==e.name}))}))).toPromise()];case 1:return(a=s.sent())&&a.map((function(e){return e.values.toArray().map((function(t){return i.fields.length<a.length+1&&i.addField({name:e.name,type:e.type}),n[e.name]=t}))})),i.add(n),o.next({data:[i],key:r.refId}),[2]}}))}))}),r.streamingInterval||1e3);return function(){clearInterval(l)}})):e.prototype.query.call(this,t)},t}(pe.DataSourceWithBackend);n.d(t,"plugin",(function(){return he}));var he=new D.DataSourcePlugin(fe).setConfigEditor(v).setQueryEditor(k)}])}));
//# sourceMappingURL=module.js.map