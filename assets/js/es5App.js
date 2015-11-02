// This module is dependent of underscore, this dependency is created in app.js
define(function () {
	'use strict'
	function es5App(events, containerMaster){
			if(events){
				//Search the template and injects the event array
				var template = window._.template(document.getElementById('templateContainerPast').innerHTML);
				containerMaster =  containerMaster || document.getElementById('containerMaster');
				containerMaster.innerHTML = template({events: events});
			}else{
				throw "Events not found"
			}
		}	
	return  es5App;	
});

