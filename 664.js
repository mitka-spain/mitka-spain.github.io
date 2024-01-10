"use strict";(self.webpackChunkinqviz_excel=self.webpackChunkinqviz_excel||[]).push([[664,90],{26090:function(e,t,i){i.d(t,{MapReduceDocumentsChain:function(){return u},RefineDocumentsChain:function(){return o},StuffDocumentsChain:function(){return s}});var n=i(3544),a=i(4327),r=i(76430);class s extends n.l{static lc_name(){return"StuffDocumentsChain"}get inputKeys(){return[this.inputKey,...this.llmChain.inputKeys].filter((e=>e!==this.documentVariableName))}get outputKeys(){return this.llmChain.outputKeys}constructor(e){super(e),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),this.llmChain=e.llmChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.inputKey=e.inputKey??this.inputKey}_prepInputs(e){if(!(this.inputKey in e))throw new Error(`Document key ${this.inputKey} not found.`);const{[this.inputKey]:t,...i}=e,n=t.map((({pageContent:e})=>e)).join("\n\n");return{...i,[this.documentVariableName]:n}}async _call(e,t){return await this.llmChain.call(this._prepInputs(e),t?.getChild("combine_documents"))}_chainType(){return"stuff_documents_chain"}static async deserialize(e){if(!e.llm_chain)throw new Error("Missing llm_chain");return new s({llmChain:await a.LLMChain.deserialize(e.llm_chain)})}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize()}}}class u extends n.l{static lc_name(){return"MapReduceDocumentsChain"}get inputKeys(){return[this.inputKey,...this.combineDocumentChain.inputKeys]}get outputKeys(){return this.combineDocumentChain.outputKeys}constructor(e){super(e),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),Object.defineProperty(this,"returnIntermediateSteps",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"maxTokens",{enumerable:!0,configurable:!0,writable:!0,value:3e3}),Object.defineProperty(this,"maxIterations",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"ensureMapStep",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"combineDocumentChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.llmChain=e.llmChain,this.combineDocumentChain=e.combineDocumentChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.ensureMapStep=e.ensureMapStep??this.ensureMapStep,this.inputKey=e.inputKey??this.inputKey,this.maxTokens=e.maxTokens??this.maxTokens,this.maxIterations=e.maxIterations??this.maxIterations,this.returnIntermediateSteps=e.returnIntermediateSteps??!1}async _call(e,t){if(!(this.inputKey in e))throw new Error(`Document key ${this.inputKey} not found.`);const{[this.inputKey]:i,...n}=e;let a=i,r=[];for(let e=0;e<this.maxIterations;e+=1){const i=a.map((e=>({[this.documentVariableName]:e.pageContent,...n})));if(0!==e||!this.ensureMapStep){const e=await this.combineDocumentChain.llmChain.prompt.format(this.combineDocumentChain._prepInputs({[this.combineDocumentChain.inputKey]:a,...n}));if(await this.combineDocumentChain.llmChain._getNumTokens(e)<this.maxTokens)break}const s=await this.llmChain.apply(i,t?Array.from({length:i.length},((e,i)=>t.getChild(`map_${i+1}`))):void 0),{outputKey:u}=this.llmChain;this.returnIntermediateSteps&&(r=r.concat(s.map((e=>e[u])))),a=s.map((e=>({pageContent:e[u],metadata:{}})))}const s={[this.combineDocumentChain.inputKey]:a,...n},u=await this.combineDocumentChain.call(s,t?.getChild("combine_documents"));return this.returnIntermediateSteps?{...u,intermediateSteps:r}:u}_chainType(){return"map_reduce_documents_chain"}static async deserialize(e){if(!e.llm_chain)throw new Error("Missing llm_chain");if(!e.combine_document_chain)throw new Error("Missing combine_document_chain");return new u({llmChain:await a.LLMChain.deserialize(e.llm_chain),combineDocumentChain:await s.deserialize(e.combine_document_chain)})}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize(),combine_document_chain:this.combineDocumentChain.serialize()}}}class o extends n.l{static lc_name(){return"RefineDocumentsChain"}get defaultDocumentPrompt(){return new r.P({inputVariables:["page_content"],template:"{page_content}"})}get inputKeys(){return[...new Set([this.inputKey,...this.llmChain.inputKeys,...this.refineLLMChain.inputKeys])].filter((e=>e!==this.documentVariableName&&e!==this.initialResponseName))}get outputKeys(){return[this.outputKey]}constructor(e){super(e),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output_text"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),Object.defineProperty(this,"initialResponseName",{enumerable:!0,configurable:!0,writable:!0,value:"existing_answer"}),Object.defineProperty(this,"refineLLMChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"documentPrompt",{enumerable:!0,configurable:!0,writable:!0,value:this.defaultDocumentPrompt}),this.llmChain=e.llmChain,this.refineLLMChain=e.refineLLMChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.inputKey=e.inputKey??this.inputKey,this.outputKey=e.outputKey??this.outputKey,this.documentPrompt=e.documentPrompt??this.documentPrompt,this.initialResponseName=e.initialResponseName??this.initialResponseName}async _constructInitialInputs(e,t){const i={page_content:e.pageContent,...e.metadata},n={};return this.documentPrompt.inputVariables.forEach((e=>{n[e]=i[e]})),{[this.documentVariableName]:await this.documentPrompt.format({...n}),...t}}async _constructRefineInputs(e,t){const i={page_content:e.pageContent,...e.metadata},n={};this.documentPrompt.inputVariables.forEach((e=>{n[e]=i[e]}));const a={[this.documentVariableName]:await this.documentPrompt.format({...n})};return{[this.initialResponseName]:t,...a}}async _call(e,t){if(!(this.inputKey in e))throw new Error(`Document key ${this.inputKey} not found.`);const{[this.inputKey]:i,...n}=e,a=i,r=await this._constructInitialInputs(a[0],n);let s=await this.llmChain.predict({...r},t?.getChild("answer"));const u=[s];for(let e=1;e<a.length;e+=1){const i={...await this._constructRefineInputs(a[e],s),...n};s=await this.refineLLMChain.predict({...i},t?.getChild("refine")),u.push(s)}return{[this.outputKey]:s}}_chainType(){return"refine_documents_chain"}static async deserialize(e){const t=e.llm_chain;if(!t)throw new Error("Missing llm_chain");const i=e.refine_llm_chain;if(!i)throw new Error("Missing refine_llm_chain");return new o({llmChain:await a.LLMChain.deserialize(t),refineLLMChain:await a.LLMChain.deserialize(i)})}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize(),refine_llm_chain:this.refineLLMChain.serialize()}}}},76430:function(e,t,i){i.d(t,{P:function(){return n.Pf}});var n=i(82094)}}]);
//# sourceMappingURL=664.js.map