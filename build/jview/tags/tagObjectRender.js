define(["jview/tags/tagContentParser"],function(e){var t=function(t,n,r,i){return t!==undefined&&Object.keys(t).length!=0&&n!==undefined&&n.length!=0?"<"+r+""+e.getIdentifiers(t)+">"+e.allContent(n,i)+"</"+r+">":t!==undefined&&Object.keys(t).length!=0?"<"+r+""+e.getIdentifiers(t)+"></"+r+">":n!==undefined&&n.length!=0?"<"+r+">"+e.allContent(n,i)+"</"+r+">":"<"+r+"></"+r+">"};return t});