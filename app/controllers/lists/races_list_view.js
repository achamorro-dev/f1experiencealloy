var args = arguments[0] || {};

function createRaceView(race){
		var contentView = $.UI.create('View',{classes:'card-content-view'}),
			marginView = $.UI.create('View',{classes:'card-margin-view'}),			
			racePicture = $.UI.create('ImageView',{classes:'card-picture'}),
			raceName = $.UI.create('Label',{classes:'card-title'});
		
		racePicture.image = '/images/countries/' + race.get('country_id') + '.jpg';
		raceName.text = race.get('name');
		
		raceName.font = {
			fontSize: '18dp'
		};
		
		contentView.add(racePicture);
		contentView.add(raceName);
		marginView.add(contentView);
		
		
		$.races_scroll_view.add(marginView);
}


// Coleccion con los pilotos
var races = Alloy.createCollection('races');
// Extraemos los datos
races.fetch();
// Por cada piloto creamos su vista
races.map(createRaceView);

