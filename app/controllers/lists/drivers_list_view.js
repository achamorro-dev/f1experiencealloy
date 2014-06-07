var args = arguments[0] || {};

function createDriverView(driver){
		var contentView = $.UI.create('View',{classes:'card-content-view'}),
			marginView = $.UI.create('View',{classes:'card-margin-view'}),			
			driverPicture = $.UI.create('ImageView',{classes:'card-picture'}),
			driverName = $.UI.create('Label',{classes:'card-title'});
		
		driverPicture.image = '/images/drivers/' + driver.get('id') + '.jpg';
		driverName.text = driver.get('name');
		
		contentView.add(driverPicture);
		contentView.add(driverName);
		marginView.add(contentView);
				
		$.drivers_scroll_view.add(marginView);
}


// Coleccion con los pilotos
var drivers = Alloy.createCollection('drivers');
// Extraemos los datos
drivers.fetch();
// Por cada piloto creamos su vista
drivers.map(createDriverView);

