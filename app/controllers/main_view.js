var main_scroll_view = $.main_scroll_view,
	botoncito = Ti.UI.createButton({
		title: 'Botoncito 2'
	});

main_scroll_view.add(botoncito);

var drivers = Alloy.createCollection('drivers');
Ti.API.info("Ahi van los drivers");
Ti.API.info(drivers);

var args = arguments[0] || {};

