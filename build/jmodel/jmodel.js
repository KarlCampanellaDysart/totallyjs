var GET="get",GET_ALL="getAll",ADD="add",DELETE="delete",UPDATE="update";define(["jsingleton","jmodel/ajax/ajax","jcontroller/render","jmodel/modelValidation"],function(e,t,n,r){var i=!0,s="string",o=1.111,u=1,a="expected_data",f="|index|",l={INTEGER:function(e){return Number(e)===e&&e%1===0},FLOAT:function(e){return e===Number(e)&&e%1!==0},STRING:function(e){return typeof e==typeof s},BOOLEAN:function(e){return typeof e==typeof i}},c={get:{route:f,params:!1},getAll:{route:"",params:!1},add:{route:"",params:!0},"delete":{route:f,params:!1},update:{route:f,params:!0}},h={get:function(e,n,r){var i={index:e};t.smart(GET,n,i,r)},getAll:function(e,n){t.smart(GET_ALL,e,{},n)},add:function(e,n,r){var i={};i[n]=e,t.smart(ADD,n,i,r)},"delete":function(e,n,r){var i={index:e};t.smart(DELETE,n,i,r)},update:function(e,n,r,i){var s={index:e};s[r]=n,t.smart(UPDATE,r,s,i)}},p={addModel:function(t,i){i.primary_key=i.primary_key||"_id",i.layout[i.primary_key]="STRING";for(var s in i.layout)if(l[i.layout[s]]===undefined)throw t.name+" model not valid";e.singleton.models[t.name]=i,e.singleton.models[t.name].data=[],e.singleton.models[t.name].backend.config={},e.singleton.models[t.name].backend.config.handlers={},e.singleton.models[t.name].backend.config.routes={};if(e.singleton.models[t.name].backend!==!1){for(var o in c)if(e.singleton.models[t.name].backend.config.routes[o]===undefined){var u={};u[a]=[],c[o].params?(u.params=[{name:t.name,type:"OBJECT"}],u[a].push(t.name)):u.params=[],e.singleton.models[t.name].backend.base_route.charAt(e.singleton.models[t.name].backend.base_route.length)==="/"?u.route=e.singleton.models[t.name].backend.base_route+c[o].route:u.route=e.singleton.models[t.name].backend.base_route+"/"+c[o].route,c[o].route!==""&&u[a].push(c[o].route.substr(1,c[o].route.length-2)),e.singleton.models[t.name].backend.config.routes[o]=u}for(var o in h)e.singleton.models[t.name].backend.config.handlers[o]=h[o];e.singleton.models[t.name].backend.config.handlers[GET_ALL](t.name,function(i){if(i===undefined||i.length===0||i.length===undefined||i.length===null){if(e.singleton.models[t.name].initialize)for(var s in e.singleton.models[t.name].initialize)r.data(e.singleton.models[t.name].initialize[s],e.singleton.models[t.name]),e.singleton.models[t.name].backend.config.handlers[ADD](e.singleton.models[t.name].initialize[s],t.name,function(n){e.singleton.models[t.name].initialize[s][e.singleton.models[t.name].primary_key]=n[e.singleton.models[t.name].primary_key],e.singleton.models[t.name].data.push(e.singleton.models[t.name].initialize[s])})}else for(var s in i)e.singleton.models[t.name].data.push(i[s]);n.renderAll()})}else for(var f in e.singleton.models[t.name].initialize)r.data(e.singleton.models[t.name].initialize[f],e.singleton.models[t.name]),e.singleton.models[t.name].data.push(e.singleton.models[t.name].initialize[f])}};return p});