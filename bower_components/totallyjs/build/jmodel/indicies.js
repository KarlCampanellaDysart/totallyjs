define(["jsingleton"],function(e){var t={forData:function(t,n,r){var i=[];for(var s in e.singleton.models[n].data){var o=!0;for(var u in t)t[u]!==e.singleton.models[n].data[s][u]&&(o=!1);if(o){i.push({real_key:e.singleton.models[n].data[s][e.singleton.models[n].primary_key],fake_key:s});if(!r)break}}return i}};return t});