'use strict';

//restful keywords
var GET = 'get',
	GET_ALL = 'getAll',
	ADD = 'add',
	DELETE = 'delete',
	UPDATE = 'update';

define([

  /**
  	* @requires jsingleton
	* @requires jmodel/ajax/ajax
	* @requires jcontroller/render
	* @requires jmodel/modelValidation
	*/
	'jsingleton', 
	'jmodel/ajax/ajax',
	'jcontroller/render',
	'jmodel/modelValidation'

	], function(js, ajax, render, validate){

	//types
	var BOOL = true,
		STRING = "string",
		FLOAT = 1.111,
		INT = 1;

	//other consts
	var EXP_DATA = 'expected_data';
	var DEF_ID_ROUTE = '|index|';

	//type validation
	var TYPES = {
		INTEGER: function(value){ return Number(value) 	 === value && value % 1 		=== 0; }, 	
		FLOAT: function(value){ return value 			 === Number(value) && value % 1 !== 0; }, 
		STRING: function(value){ return ((typeof value)  === (typeof STRING)); }, 
		BOOLEAN: function(value){ return ((typeof value) === (typeof BOOL)); }
	};

	//default backend routes
	var backendRouteObjects = {
		get: {route: DEF_ID_ROUTE, params:false},
		getAll: {route: '', params:false},
		add: {route: '', params:true},
		delete: {route: DEF_ID_ROUTE, params:false},
		update: {route: DEF_ID_ROUTE, params:true}
	};

	//default handlers for server requests
	var defaultHandlers    = {
		get: function(index, modelName, callback){
			var preReqData = {index: index};
			ajax.smart(GET, modelName, preReqData, callback);
		},
		getAll: function(modelName, callback){
			ajax.smart(GET_ALL, modelName, {}, callback);
		},
		add: function(modelData, modelName, callback){
			var preReqData = {}; preReqData[modelName] = modelData;
			ajax.smart(ADD, modelName, preReqData, callback);
		},
		delete: function(index, modelName, callback){
			var preReqData = {index: index};
			ajax.smart(DELETE, modelName, preReqData, callback);
		},
		update: function(index, modelData, modelName, callback){
			var preReqData = {index: index}; preReqData[modelName] = modelData;
			ajax.smart(UPDATE, modelName, preReqData, callback);
		}
	};

  /**
	* JModel Module - used to add user specified modles to the application

	* @exports jmodel/jmodel
	*/	
	var jm = {

	  /**
		* Function to add and initialize a model to the singleton 

		* @function addModel
		* @alias jloader/jloader.addModel

		* @param {Object} _options - options to supplement a model
		* @param {Object} _modelObject - user specified model object
		*/
		addModel: function(_options, _modelObject){

			//get the primary key or set to default primary key
			_modelObject.primary_key = _modelObject.primary_key || '_id';
			_modelObject.layout[_modelObject.primary_key] = 'STRING';

			//validate layout after the primary key is added
			for(var type in _modelObject.layout){ if(TYPES[_modelObject.layout[type]] === undefined){ throw _options.name+' model not valid'; }}

			//add instantiated model to singlton
			js.singleton.models[_options.name] = _modelObject;
			js.singleton.models[_options.name]['data'] = [];
			js.singleton.models[_options.name].backend.config = {};
			js.singleton.models[_options.name].backend.config.handlers = {};
			js.singleton.models[_options.name].backend.config.routes = {};

			//we have a backend to check
			if(js.singleton.models[_options.name].backend !== false){

				//init the backend routes to defaults if not set
				for(var reqType in backendRouteObjects){
					if(js.singleton.models[_options.name].backend.config.routes[reqType] === undefined){

						//init objects
						var reqRouteObject = {};
						reqRouteObject[EXP_DATA] = [];

						//set param field if param is true
						if(backendRouteObjects[reqType].params){
							reqRouteObject['params'] = [{name: _options.name, type:'OBJECT'}];
							reqRouteObject[EXP_DATA].push(_options.name)
						}
						else{ reqRouteObject['params'] = []; }

						//set route
						if(js.singleton.models[_options.name].backend.base_route.charAt(js.singleton.models[_options.name].backend.base_route.length) === '/'){ 
							reqRouteObject['route'] = js.singleton.models[_options.name].backend.base_route + backendRouteObjects[reqType].route; 
						}
						else{ reqRouteObject['route'] = js.singleton.models[_options.name].backend.base_route + '/' + backendRouteObjects[reqType].route;}

						//set expected data
						if(backendRouteObjects[reqType].route !== ''){
							reqRouteObject[EXP_DATA].push(backendRouteObjects[reqType].route.substr(1, backendRouteObjects[reqType].route.length-2));
						}

						//set the route object in the 
						js.singleton.models[_options.name].backend.config.routes[reqType] = reqRouteObject;
					}

					//////////////////////////DEPRECIATED TO NOT EXCEPT RESTFUL ROUTES////////////////////////////

					//still add expected data field
					/*else{
						js.singleton.models[_options.name].backend.config.routes[reqType][EXP_DATA] = [];
						
						//add parameters
						for(var param in js.singleton.models[_options.name].backend.config.routes[reqType].params){
							js.singleton.models[_options.name].backend.config.routes[reqType][EXP_DATA].push(js.singleton.models[_options.name].backend.config.routes[reqType].params[param].name);
						}

						//split our route up
						var splitRoute = js.singleton.models[_options.name].backend.config.routes[reqType].route.split('|');
						for(var j in splitRoute){

							//found a a route parameter, add to expected
							if(splitRoute[j].indexOf('/') === -1 && splitRoute[j] !== ''){js.singleton.models[_options.name].backend.config.routes[reqType][EXP_DATA].push(splitRoute[j]);}
						}
					}*/

					//////////////////////////DEPRECIATED TO NOT EXCEPT RESTFUL ROUTES////////////////////////////					
				}

				//add default handlers 
				for(var reqType in defaultHandlers){
					//if(js.singleton.models[_options.name].backend.config.handlers[reqType] === undefined){
						js.singleton.models[_options.name].backend.config.handlers[reqType] = defaultHandlers[reqType];
					//}
				}

				//get all data from backend to check 
				js.singleton.models[_options.name].backend.config.handlers[GET_ALL](_options.name, function(data){

					//our backend data is empty
					if(data === undefined || data.length === 0 || data.length === undefined || data.length === null){

						//init in front end and backend
						if(js.singleton.models[_options.name].initialize){ 
							for(var i in js.singleton.models[_options.name].initialize){ 

								//validate our initialize data
								validate.data(js.singleton.models[_options.name].initialize[i], js.singleton.models[_options.name]);
								
								//add initializing data to the backend
								js.singleton.models[_options.name].backend.config.handlers[ADD](js.singleton.models[_options.name].initialize[i], _options.name, function(data){

									//add the id field and push to frontend
									js.singleton.models[_options.name].initialize[i][js.singleton.models[_options.name].primary_key] = data[js.singleton.models[_options.name].primary_key];
									js.singleton.models[_options.name]['data'].push(js.singleton.models[_options.name].initialize[i]); 
								});
							}				
						}	
					}

					//backend data exists
					else{

						//sync frontend with all backend data, no need to validate
						for(var i in data){ js.singleton.models[_options.name].data.push(data[i]); }
					}

					//render again after model is loaded and synchronized with our app
					render.renderAll();
				});
			}

			//just update the frontend
			else{
				for(var i in js.singleton.models[_options.name].initialize){ 
					validate.data(js.singleton.models[_options.name].initialize[i], js.singleton.models[_options.name]);
					js.singleton.models[_options.name]['data'].push(js.singleton.models[_options.name].initialize[i]); 
				}
			}
		}
	};

	//return jmodel object
	return jm;
});