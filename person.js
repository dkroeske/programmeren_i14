var voornaam = 'Diederich';
var achternaam = 'Kroeske';
var woonplaats = 'Breda';


function i18l(language) {
	switch(language) {
		case 'nl':
			return ({ 
				voornaam : voornaam,
				achternaam : achternaam,
				woonplaats : woonplaats
			})
			break;
		case 'uk':
		default:
			return ({ 
				firstname : voornaam,
				lastname : achternaam,
				town : woonplaats
			})
			break
	}
}





module.exports = { i18l };