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

var port = process.env.PORT || 8080;


http.createServer( function(request, response) {

	console.log('REQUEST:' + JSON.stringify(request.headers));
	//console.log('REQUEST:' + JSON.stringify(request.headers['user-agent'] ));
	//console.log(`REQUEST: ${JSON.stringify(request.headers)}` );

	response.writeHead(200, {
		'Content-Type' : 'application/json'
	});

	//response.end( JSON.stringify({user:'diederich', id:6 }) );
	response.end( JSON.stringify(person.i18l('uk')) );

}).listen(port);

console.log(`All the fun happens on port ${port}`)
