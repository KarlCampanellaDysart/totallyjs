define(["jview/tags/tagObjectRender"],function(e){var t={tagObjectBuilder:function(t,n,r){return{TYPE:"tag",variables:{},content:n,identifier:t,type:r,addElementHandlers:function(){for(var e in this.content)this.content[e]instanceof Object&&this.content[e].addElementHandlers()},render:function(t){return e(this.identifier,this.content,this.type,t)}}}};return t});