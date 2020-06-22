/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const serverUrl = 'https://maerchen-server.herokuapp.com';
function save(id) {

	var name = $('#name').val();
	var email = $('#email').val();
	var eintrag = $('#eintrag').val();
	const taleList = null;

	var template = `<div class="card col-4 w-25" >
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
                        <p class="card-text">${eintrag}</p>
                        <button id="loeschen"  type="button" class="btn btn-danger">Löschen</button>
                    </div>
                </div>`;

	$('#einträge').append(template);
}


$(document).ready(function () {

	const $talesList = $('#talesList');
	const $favList = $('#favList');
	let token = null;
	let userId = null;
	let favarr = [];
  
   
	// Funktion, dass das Zurücksetzen des Formulars verhindert.
	$('#formular').submit(function(e) {
		e.preventDefault();
	});

	$('#formular2').submit(function(e) {
		e.preventDefault();
	});

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

    
	$(document).on('click', '#signup', function(){
		var email = $('#emailSignup').val();
		var password = $('#passwordSignup').val();

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

	$(document).on('click', '#login', function(){
		var email = $('#emailLogin').val();
		var password = $('#passwordLogin').val();
		$favList.empty();

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
        
			$.each(data.favs, function(i, el) {
				const tale = taleList.tales.find(t => t._id == el);
				favarr.push(tale);
				console.log(tale);
				$favList.append('<li id="'+el+'" class="list-group-item list-group-item-action" >'+tale.title+'</li>');
			});
		});

	});

	$(document).on('click', '#addFav', async function() {
		let taleId = await $('#tales > div').attr('id');

		await favarr.push(taleId);
		$favList.append('<li id="'+taleList.tales.find(el => el._id == taleId)._id+'" class="list-group-item list-group-item-action" >'+taleList.tales.find(el => el._id == taleId).title+'</li>');
		console.log(favarr);

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

	$(document).on('click', '#removeFav', async function() {
		let taleId = await $('#tales > div').attr('id');
		let index = favarr.indexOf(taleId);
		favarr.splice(index);
		$('#favList > #'+taleId+'').remove();
		console.log(favarr);

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