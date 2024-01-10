"use strict";(self.webpackChunkinqviz_excel=self.webpackChunkinqviz_excel||[]).push([[728,685],{43685:function(e,t,i){i.d(t,{SequentialChain:function(){return o},SimpleSequentialChain:function(){return u}});var n=i(3544);function a(e,t){const i=new Set;for(const n of t)e.has(n)&&i.add(n);return i}function s(e,t){const i=new Set(e);for(const e of t)i.delete(e);return i}function r(e){return Array.from(e).map((e=>`"${e}"`)).join(", ")}class o extends n.l{static lc_name(){return"SequentialChain"}get inputKeys(){return this.inputVariables}get outputKeys(){return this.outputVariables}constructor(e){if(super(e),Object.defineProperty(this,"chains",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnAll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.chains=e.chains,this.inputVariables=e.inputVariables,this.outputVariables=e.outputVariables??[],this.outputVariables.length>0&&e.returnAll)throw new Error("Either specify variables to return using `outputVariables` or use `returnAll` param. Cannot apply both conditions at the same time.");this.returnAll=e.returnAll??!1,this._validateChains()}_validateChains(){if(0===this.chains.length)throw new Error("Sequential chain must have at least one chain.");const e=this.memory?.memoryKeys??[],t=new Set(this.inputKeys),i=new Set(e),n=a(t,i);if(n.size>0)throw new Error(`The following keys: ${r(n)} are overlapping between memory and input keys of the chain variables. This can lead to unexpected behaviour. Please use input and memory keys that don't overlap.`);const o=function(e,t){const i=new Set(e);for(const e of t)i.add(e);return i}(t,i);for(const e of this.chains){let t=s(new Set(e.inputKeys),o);if(e.memory&&(t=s(t,new Set(e.memory.memoryKeys))),t.size>0)throw new Error(`Missing variables for chain "${e._chainType()}": ${r(t)}. Only got the following variables: ${r(o)}.`);const i=new Set(e.outputKeys),n=a(o,i);if(n.size>0)throw new Error(`The following output variables for chain "${e._chainType()}" are overlapping: ${r(n)}. This can lead to unexpected behaviour.`);for(const e of i)o.add(e)}if(0===this.outputVariables.length)if(this.returnAll){const e=s(o,t);this.outputVariables=Array.from(e)}else this.outputVariables=this.chains[this.chains.length-1].outputKeys;else{const e=s(new Set(this.outputVariables),new Set(o));if(e.size>0)throw new Error(`The following output variables were expected to be in the final chain output but were not found: ${r(e)}.`)}}async _call(e,t){let i={};const n=e;let a=0;for(const e of this.chains){a+=1,i=await e.call(n,t?.getChild(`step_${a}`));for(const e of Object.keys(i))n[e]=i[e]}const s={};for(const e of this.outputVariables)s[e]=n[e];return s}_chainType(){return"sequential_chain"}static async deserialize(e){const t=[],i=e.input_variables,a=e.output_variables,s=e.chains;for(const e of s){const i=await n.l.deserialize(e);t.push(i)}return new o({chains:t,inputVariables:i,outputVariables:a})}serialize(){const e=[];for(const t of this.chains)e.push(t.serialize());return{_type:this._chainType(),input_variables:this.inputVariables,output_variables:this.outputVariables,chains:e}}}class u extends n.l{static lc_name(){return"SimpleSequentialChain"}get inputKeys(){return[this.inputKey]}get outputKeys(){return[this.outputKey]}constructor(e){super(e),Object.defineProperty(this,"chains",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output"}),Object.defineProperty(this,"trimOutputs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.chains=e.chains,this.trimOutputs=e.trimOutputs??!1,this._validateChains()}_validateChains(){for(const e of this.chains){if(1!==e.inputKeys.filter((t=>!e.memory?.memoryKeys.includes(t)??!0)).length)throw new Error(`Chains used in SimpleSequentialChain should all have one input, got ${e.inputKeys.length} for ${e._chainType()}.`);if(1!==e.outputKeys.length)throw new Error(`Chains used in SimpleSequentialChain should all have one output, got ${e.outputKeys.length} for ${e._chainType()}.`)}}async _call(e,t){let i=e[this.inputKey],n=0;for(const a of this.chains)n+=1,i=(await a.call({[a.inputKeys[0]]:i,signal:e.signal},t?.getChild(`step_${n}`)))[a.outputKeys[0]],this.trimOutputs&&(i=i.trim()),await(t?.handleText(i));return{[this.outputKey]:i}}_chainType(){return"simple_sequential_chain"}static async deserialize(e){const t=[],i=e.chains;for(const e of i){const i=await n.l.deserialize(e);t.push(i)}return new u({chains:t})}serialize(){const e=[];for(const t of this.chains)e.push(t.serialize());return{_type:this._chainType(),chains:e}}}}}]);
//# sourceMappingURL=728.js.map