define(["jsingleton","jrouter/location/locationHandler","jloader/jsync","jrouter/location/locationObject"],function(e,t,n,r){var i={initialize:function(){window.addEventListener("hashchange",function(e){t.refreshRoute()},!1),window.addEventListener("load",function(e){r.hasHash()?t.refreshRoute():r.addHash()},!1),r.hasHash()?t.refreshRoute():r.addHash()},setRoute:function(t){t!==undefined&&t.route!==undefined&&t.view!==undefined?(t.route.length>0&&t.route.charAt(0)!=="/"&&t.route!=="otherwise"&&(t.route="/"+t.route),e.singleton.routes[t.route]=t.view):t!==undefined&&t.reroute!==undefined&&t.to!==undefined?(e.singleton.routes.reroute=e.singleton.routes.reroute||[],e.singleton.routes.reroute.push({from:t.reroute,to:t.to})):t!==undefined&&t.route!==undefined&&t.controller!==undefined&&(t.route.length>0&&t.route.charAt(0)!=="/"&&(t.route="/"+t.route),e.singleton.routes[t.route]=t.controller)}};return i});