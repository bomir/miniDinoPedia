angular.module('dinoApp.config', [])
.constant('DB_CONFIG', {
    name: 'DB',
    tables: [
		{
            name: 'dinosaur',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'height', type: 'double'},
                {name: 'length', type: 'double'},
				{name: 'weight', type: 'double'},
                {name: 'theorder', type: 'text'},
                {name: 'meaning', type: 'text'},				
                {name: 'diet', type: 'text'},
                {name: 'era', type: 'integer'},
				{name: 'site', type: 'text'},
                {name: 'category', type: 'text'}
            ]
        }
    ]
});