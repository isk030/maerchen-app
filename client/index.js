/**
 * Main frontend logic
 * @module Client/index
 */

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * Setting base url
 */
const serverUrl = 'https://maerchen-server.herokuapp.com';

/**
 * Jquery logic after loading document
 */
$(document).ready(function () {

	/**
	 * Declaring variable for further use
	 */
	const $talesList = $('#talesList');
	const $favList = $('#favList');
	let token = null;
	let userId = null;
	let favarr = [];
   
	// preventing forms to switch to default
	$('#formular').submit(function(e) {
		e.preventDefault();
	});

	$('#formular2').submit(function(e) {
		e.preventDefault();
	});

	/**
	 * Ajax GET request for loading in all Tales from DB
	 */
	$.ajax({
		type:'GET',
		url: serverUrl+'/tale',
		success: function(data) {
			taleList = data;
			// console.log(data)
			$.each(data.tales, function(i, el) {
				$talesList.append('<li id="'+el._id+'" class="list-group-item list-group-item-action" >'+el.title+'</li>');
			});
		}
	});
	
	/**
	 * Behavior for signup button
	 */
	$(document).on('click', '#signup', function(){
		var email = $('#emailSignup').val();
		var password = $('#passwordSignup').val();
		/**
		 * POST request with credential including validation
		 */
		$.ajax({
			type: 'POST',
			url: serverUrl+'/user/signup',
			data: {
				email: email.toString(),
				password: password.toString()
			},
			statusCode: {
				500: function(data) {
					alert('Etwas ging schief. Versuche es nochmal');
				},
				409: function(data) {
					alert(JSON.stringify(data.responseJSON.message));
				}
			}
		}).done(function(data){
			alert(JSON.stringify(data.message));
		});
	});

	/**
	 * Behavior for login button
	 */
	$(document).on('click', '#login', function(){
		var email = $('#emailLogin').val();
		var password = $('#passwordLogin').val();
		$favList.empty();
		/**
		 * POST request with credentials to get and save webtoken
		 */
		$.ajax({
			type: 'POST',
			url: serverUrl+'/user/login',
			data: {
				email: email.toString(),
				password: password.toString()
			},
			statusCode: {
				500: function(data) {
					alert('Etwas ging schief. Versuche es nochmal');
				},
				401: function(data) {
					alert(JSON.stringify(data.responseJSON.message));
				}
			}
		}).done(function(data){
			alert(JSON.stringify(data.message));
			token = data.token;
			userId = data._id;
			favarr = [];
			$.each(data.favs, function(i, el) {
				const tale = taleList.tales.find(t => t._id == el);
				favarr.push(tale._id);
				$favList.append('<li id="'+el+'" class="list-group-item list-group-item-action" >'+tale.title+'</li>');
			});
		});

	});

	/**
	 * Behavior vor add favourites button
	 */
	$(document).on('click', '#addFav', async function() {
		let taleId = await $('#tales > div').attr('id');

		/**
		 * Storing current tale Ids in array as payload for further Patch request
		 */
		await favarr.push(taleId);
		$favList.append('<li id="'+taleList.tales.find(el => el._id == taleId)._id+'" class="list-group-item list-group-item-action" >'+taleList.tales.find(el => el._id == taleId).title+'</li>');

		/**
		 * PATCH request to update favs in DB including authorization with JWT
		 */
		$.ajax({
			type: 'PATCH',
			url: serverUrl+'/user/'+userId,
			beforeSend: function (json) {
				/* Authorization header */
				json.setRequestHeader('Authorization', 'Bearer ' + token);
			},
			contentType: 'application/json',
			dataTyoe: 'json',
			data: JSON.stringify({favs: favarr}),
			statusCode: {
				500: function(data) {
					alert('Etwas ging schief. Versuche es nochmal');
				},
				409: function(data) {
					alert(JSON.stringify(data.responseJSON.message));
				}
			}
		}).done(function(data){
			alert(JSON.stringify(data.message));
		});
	});
	
	/**
	 * Behavior for remove favourites button
	 */
	$(document).on('click', '#removeFav', async function() {
		let taleId = await $('#tales > div').attr('id');
		let index = favarr.indexOf(taleId);
		favarr.splice(index,1);
		$('#favList > #'+taleId+'').remove();

		/**
		 * PATCH request updating current favourites
		 */
		$.ajax({
			type: 'PATCH',
			url: serverUrl+'/user/'+userId,
			beforeSend: function (json) {
				/* Authorization header */
				json.setRequestHeader('Authorization', 'Bearer ' + token);
			},
			contentType: 'application/json',
			dataTyoe: 'json',
			data: JSON.stringify({favs: favarr}),
			statusCode: {
				500: function(data) {
					alert('Etwas ging schief. Versuche es nochmal');
				},
				409: function(data) {
					alert(JSON.stringify(data.responseJSON.message));
				}
			}
		}).done(function(data){
			alert(JSON.stringify(data.message));
		});
	});

	/**
	 * function to show Tale content after selecting in Tale List
	 */
	$(document).on('click','.list-group-item', function() {
		var id = $(this).attr('id').toString();
		$.each(taleList.tales, function(i, v) {
			if (v._id == id) {
				$('#tales > div').remove();
				$('#tales > h1').remove();
				$('#tales > h3').remove();
				$('#tales').append('<div id="'+id+'"><h1>'+v.title+'</h1><h3>'+v.author+'</h3><div>'+v.content+'</div></div>'); // get that prettier
			}
		});
   
	});

});

/**
 * Filter/Search function for Tale List
 * @param {String} input 
 */
function filter(input) {
	var value = $(input).val();
	$('#talesList > li').each(function() {
		if ($(this).text().toLowerCase().search(value.toLowerCase()) > -1) {
			$(this).show();
		}
		else {
			$(this).hide();
		}
	});
}