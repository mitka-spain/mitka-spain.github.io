"use strict";(self.webpackChunkinqviz_excel=self.webpackChunkinqviz_excel||[]).push([[408,557],{60619:function(e,t,r){r.d(t,{d:function(){return i}});var a=r(52399);class i extends a.eq{get lc_attributes(){return{partialVariables:void 0}}constructor(e){super(e),Object.defineProperty(this,"lc_serializable",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"lc_namespace",{enumerable:!0,configurable:!0,writable:!0,value:["langchain_core","prompts",this._getPromptType()]}),Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"partialVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const{inputVariables:t}=e;if(t.includes("stop"))throw new Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");Object.assign(this,e)}async mergePartialAndUserVariables(e){const t=this.partialVariables??{},r={};for(const[e,a]of Object.entries(t))r[e]="string"==typeof a?a:await a();return{...r,...e}}async invoke(e,t){return this._callWithConfig((e=>this.formatPromptValue(e)),e,{...t,runType:"prompt"})}serialize(){throw new Error("Use .toJSON() instead")}static async deserialize(e){switch(e._type){case"prompt":{const{PromptTemplate:t}=await Promise.resolve().then(r.bind(r,31214));return t.deserialize(e)}case void 0:{const{PromptTemplate:t}=await Promise.resolve().then(r.bind(r,31214));return t.deserialize({...e,_type:"prompt"})}case"few_shot":{const{FewShotPromptTemplate:t}=await r.e(315).then(r.bind(r,37315));return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}}},31214:function(e,t,r){r.d(t,{PromptTemplate:function(){return n}});var a=r(21307),i=r(87327);class n extends a.A{static lc_name(){return"PromptTemplate"}constructor(e){if(super(e),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.validateTemplate){let e=this.inputVariables;this.partialVariables&&(e=e.concat(Object.keys(this.partialVariables))),(0,i.af)(this.template,this.templateFormat,e)}}_getPromptType(){return"prompt"}async format(e){const t=await this.mergePartialAndUserVariables(e);return(0,i.SM)(this.template,this.templateFormat,t)}static fromExamples(e,t,r,a="\n\n",i=""){const s=[i,...e,t].join(a);return new n({inputVariables:r,template:s})}static fromTemplate(e,{templateFormat:t="f-string",...r}={}){const a=new Set;return(0,i.$M)(e,t).forEach((e=>{"variable"===e.type&&a.add(e.name)})),new n({inputVariables:[...a],templateFormat:t,template:e,...r})}async partial(e){const t=this.inputVariables.filter((t=>!(t in e))),r={...this.partialVariables??{},...e},a={...this,inputVariables:t,partialVariables:r};return new n(a)}serialize(){if(void 0!==this.outputParser)throw new Error("Cannot serialize a prompt template with an output parser");return{_type:this._getPromptType(),input_variables:this.inputVariables,template:this.template,template_format:this.templateFormat}}static async deserialize(e){if(!e.template)throw new Error("Prompt template must have a template");return new n({inputVariables:e.input_variables,template:e.template,templateFormat:e.template_format})}}},21307:function(e,t,r){r.d(t,{A:function(){return n}});var a=r(11141),i=r(60619);class n extends i.d{async formatPromptValue(e){const t=await this.format(e);return new a.nw(t)}}},87327:function(e,t,r){r.d(t,{$M:function(){return l},SM:function(){return s},af:function(){return o}});const a=e=>{const t=e.split(""),r=[],a=(e,r)=>{for(let a=r;a<t.length;a+=1)if(e.includes(t[a]))return a;return-1};let i=0;for(;i<t.length;)if("{"===t[i]&&i+1<t.length&&"{"===t[i+1])r.push({type:"literal",text:"{"}),i+=2;else if("}"===t[i]&&i+1<t.length&&"}"===t[i+1])r.push({type:"literal",text:"}"}),i+=2;else if("{"===t[i]){const e=a("}",i);if(e<0)throw new Error("Unclosed '{' in template.");r.push({type:"variable",name:t.slice(i+1,e).join("")}),i=e+1}else{if("}"===t[i])throw new Error("Single '}' in template.");{const e=a("{}",i),n=(e<0?t.slice(i):t.slice(i,e)).join("");r.push({type:"literal",text:n}),i=e<0?t.length:e}}return r},i={"f-string":(e,t)=>a(e).reduce(((e,r)=>{if("variable"===r.type){if(r.name in t)return e+t[r.name];throw new Error(`Missing value for input ${r.name}`)}return e+r.text}),"")},n={"f-string":a},s=(e,t,r)=>i[t](e,r),l=(e,t)=>n[t](e),o=(e,t,r)=>{if(!(t in i)){const e=Object.keys(i);throw new Error(`Invalid template format. Got \`${t}\`;\n                         should be one of ${e}`)}try{const a=r.reduce(((e,t)=>(e[t]="foo",e)),{});s(e,t,a)}catch(e){throw new Error(`Invalid prompt schema: ${e.message}`)}}}}]);
//# sourceMappingURL=408.js.map