var person = require('./person');

var http = require('http');


// var person_a =
// 	{
// 		voornaam : 'Diederich',
// 		achternaam : 'Kroeske',
// 		leeftijd : 48,
// 		hobby: 'programmeren'
// 	}
// ;

// var person_b = [
// 	{
// 		voornaam : 'Diederich',
// 		achternaam : 'Kroeske',
// 		leeftijd : 48,
// 		hobby: 'programmeren'
// 	},
// 	{
// 		voornaam : 'Hans',
// 		achternaam : 'van der Linden',
// 		leeftijd : 48,
// 		hobby: 'muziek'
// 	}
// ];


http.createServer( function(request, response) {

	console.log('REQUEST:' + JSON.stringify(request.headers) );

	//console.log(`REQUEST: ${JSON.stringify(request.headers)}` );

	response.writeHead(200, {
		'Content-Type' : 'application/json'
	});

	//response.end( JSON.stringify({user:'diederich', id:6 }) );
	response.end( JSON.stringify(person.i18l('uk')) );

}).listen(10000);

console.log('All the fun happens on port 1000')
