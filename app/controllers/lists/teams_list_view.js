var args = arguments[0] || {};

function createTeamView(team){
		var contentView = $.UI.create('View',{classes:'card-content-view'}),
			marginView = $.UI.create('View',{classes:'card-margin-view'}),			
			teamPicture = $.UI.create('ImageView',{classes:'card-picture'}),
			teamName = $.UI.create('Label',{classes:'card-title'});
		
		teamPicture.image = '/images/teams/' + team.get('id') + '.jpg';
		teamName.text = team.get('name');
		
		contentView.add(teamPicture);
		contentView.add(teamName);
		marginView.add(contentView);
				
		$.teams_scroll_view.add(marginView);
}


// Coleccion con las escuderias
var teams = Alloy.createCollection('teams');
// Extraemos los datos
teams.fetch();
// Por cada escuderia creamos su vista
teams.map(createTeamView);

