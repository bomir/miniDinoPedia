angular.module('dinoApp.services', ['dinoApp.config'])
// DB wrapper
.factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        // Use self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); in production
		self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name});
        //self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

        
		//var dropQuery = 'DROP TABLE dinosaur';
		//self.query(dropQuery);
        //console.log('Table dinosaur dropped');
		
		//var pragmaQuery = "PRAGMA encoding = 'UTF-16'";
		//var pragmaQuery = "PRAGMA encoding";		
		//console.log('PRAGMA encoding:' + JSON.stringify(self.query(pragmaQuery),  null,4));

		
		angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];

            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });

            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
            console.log('Table ' + table.name + ' initialized');
        });
	//populate
		self.insertAll('dinosaur', [
{"id": 1, "name": "Tyrannosaurus", "height": 7.0, "length": 15.2, "weight": 6350, "theorder":"Saurischia","meaning":"Lucertola tiranno","diet": "carnivoro", "era": "cretaceo superiore",   "site": "Nord America","category": "Predatori di terra"},
{"id": 2, "name": "Apatosaurus", "height": 9.1, "length": 22.9, "weight": 66000, "theorder":"Saurischia","meaning":"Lucertola ingannevole","diet": "erbivoro", "era": "giurassico tardo",  "site": "North America", "category": "Giganti"},
{"id": 3, "name": "Triceratops", "height": 2.9, "length": 7.9, "weight": 6350, "theorder":"Ornithischia","meaning":"Testa con tre corna","diet": "herbivorous", "era": "tardo cretaceo",  "site": "North America", "category": "Cornuti"},
{"id":4,"name":"Brachiosaurus","height":15.2,"length":30.5,"weight":55000,"theorder":"Ornithischia","meaning":"Lucertola con le braccia","diet":"erbivoro","era":"giurassico tardo","site":"Nord America  Africa Europa","category":"Giganti"},
{"id":5,"name":"Diplodocus","height":9.1,"length":27.1,"weight":22680,"theorder":"Saurischia","meaning":"Doppia punta","diet":"erbivoro","era":"giurassico tardo","site":"Nord America e Africa","category":"Collo lungo"},
{"id":6,"name":"Velociraptor","height":0.8,"length":1.8,"weight":91,"theorder":"Saurischia","meaning":"Lucertola veloce","diet":"carnivorous","era":"cretaceo","site":"Asia","category":"Bipedi"},
{"id":7,"name":"Stegosaurus","height":4,"length":9,"weight":7000,"theorder":"Ornithischia","meaning":"Lucertola con le piastre","diet":"erbivoro","era":"tardo giurassico primo cretaceo ","site":"Nord America","category":"Corazzati"},
{"id":8,"name":"Pachycephalosaurus","height":3,"length":5,"weight":800,"theorder":"Ornithischia","meaning":"Lucertola con la testa dura","diet":"erbivoro","era":"cretaceo tardo","site":"Nord America","category":"Corazzati"},
{"id":9,"name":"Saurolophus","height":3,"length":8,"weight":2000,"theorder":"Ornithischia","meaning":"Lucertola con la cresta","diet":"erbivoro","era":"cretaceo ","site":"Nord America","category":"Misteriosi"},
{"id":10,"name":"Iguanodon","height":5,"length":8,"weight":4500,"theorder":"Ornithischia","meaning":"Dente di iguana","diet":"erbivoro","era":"cretaceo","site":"Europa America  Africa Asia","category":"Misteriosi"},
{"id":11,"name":"Allosaurus","height":4,"length":12,"weight":2000,"theorder":"Saurischia","meaning":"Lucertola diversa","diet":"carnivorous","era":"creataceo","site":"Nord America, Africa e Australia","category":"Predatori di terra"},
{"id":12,"name":"Plateosaurus", "height": 3, "length": 8, "weight": 18000, "theorder":"Saurischia","meaning":"Lucertola piatta","diet": "erbivoro", "era": "triassico", "site": "Europa, Sud Africa","category": "Erbivori"},
{"id":13,"name":"Troodon", "height": 0.8, "length": 1.8, "weight": 45, "theorder":"Saurischia","meaning":"Dente rosicchiante","diet": "carnivoro", "era": "tardo cretaceo", "site": "Nord America","category": "Predatori di terra"},
{"id":14,"name":"Spinosaurus", "height": 6.3, "length": 18, "weight": 6000, "theorder":"Saurischia","meaning":"Lucertola spinoso","diet": "carnivoro", "era": "cretaceo tardo","site": "Nord America","category": "Predatori di terra"},
{"id":15,"name":"Supersaurus", "height": 20, "length": 36.6, "weight": 55000, "theorder":"Saurischia","meaning":"Lucertola super","diet": "erbivoro", "era": "giurassico tardo", "site": "Nord America","category": "Giganti"},
{"id":16,"name":"Styracosaurus", "height": 2.7, "length": 5.2, "weight": 2.8, "theorder":"Ornithischia","meaning":"Lucertola con le punte","diet": "erbivoro", "era": "tardo cretaceo", "site": "Nord America","category": "Cornuti"},
{"id":17,"name":"Ultrasaurus", "height": 16, "length": 30.5, "weight": 63.5, "theorder":"Saurischia","meaning":"Lucertola ultra","diet": "erbivoro", "era": "giurassico tardo", "site": "Nord America","category": "Giganti"},
{"id":18,"name":"Argentinosaurus", "height": 21.4, "length": 39.7, "weight": 99800, "theorder":"Saurischia","meaning":"Lucertola argentina","diet": "erbivoro", "era": "tardo cretaceo", "site": "Sud America","category": "Giganti"},
{"id":19,"name": "Protoceratops", "height": 1, "length": 2, "weight": 400, "theorder":"Ornithischia","meaning":"Prima testa cornuta","diet": "erbivoro", "era": "tardo cretaceo", "site": "Asia","category": "Cornuti"},
{"id":20,"name":"Yangchuanosaurus","height":4.6,"length":10,"weight":4000,"theorder":"Saurischia","meaning":"Lucertola Yangchuan","diet":"carnivoro","era":"giurassico tardo","site":"Asia","category":"Predatori di terra"},
{"id":21,"name":"Euoplocephalus","height":1.8,"length":6.1,"weight":3000,"theorder":"Ornithischia","meaning":"Testa ben protetta","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Corazzati"},
{"id":22,"name":"Nanosaurus","height":0.5,"length":1.2,"weight":30,"theorder":"Ornithischia","meaning":"Lucertola nana","diet":"erbivoro","era":"giurassico tardo","site":"Nord America","category":"Bipedi"},
{"id":23,"name":"Dilophosaurus","height":2.4,"length":6.5,"weight":500,"theorder":"Saurischia","meaning":"Lucertola con due cresta","diet":"carnivoro","era":"giurassico inferiore","site":"Nord America","category":"Predatori di terra"},
{"id":24,"name":"Megalosaurus","height":3.7,"length":8,"weight":907,"theorder":"Saurischia","meaning":"Lucertola grande","diet":"carnivoro","era":"giurassico medio","site":"Europa","category":"Predatori di terra"},
{"id":25,"name":"Parasaurolophus","height":4,"length":10,"weight":8000,"theorder":"Ornithischia","meaning":"Simile al Saurolofo","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Misteriosi"},
{"id":26,"name":"Panoplosaurus","height":2.1,"length":7,"weight":2720,"theorder":"Ornithischia","meaning":"Lucertole ben corazzata","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Corazzati"},
{"id":27,"name":"Dimetrodon","height":1.4,"length":3.5,"weight":300,"theorder":"Pelycosauria ","meaning":"Denti di due misure","diet":"carnivoro","era":"permiano","site":"Nord America Europa","category":"Misteriosi"},
{"id":28, "name": "Pentaceratops", "height": 3.4, "length": 7.5, "weight": 5897, "theorder":"Ornithischia","meaning":"Testa con cinque corna","diet": "erbivoro", "era": " tardo cretaceo",  "site": "Centro America", "category": "Cornuti"},
{"id":29, "name": "Deinonychus", "height": 1.5, "length": 2.7, "weight": 79.4, "theorder":"Saurischia","meaning":"Mascella terribile","diet": "carnivoro", "era": "primo cretaceo",  "site": "nord America", "category": "Armato"},
{"id":30,"name":"Tenontosaurus","height":4,"length":7.0,"weight":1800,"theorder":"Ornithischia","meaning":"Lucertola dei tendini","diet":"erbivoro","era":"primo cretaceo","site":"Nord America","category":"Erbivori"},
{"id":31,"name":"Herrerasaurus","height":2.1,"length":4.6,"weight":180,"theorder":"Saurischia","meaning":"Lucertola Herrera","diet":"carnivoro","era":"tardo triassico","site":"Argentina Sud America","category":"Predatori di terra"},
{"id":32,"name":"Coelophysis","height":1.2,"length":2.7,"weight":45,"theorder":"Saurischia","meaning":"Forma cava","diet":"carnivoro","era":"tardo triassico","site":"Nord America","category":"Predatori di terra"},
{"id":33,"name":"Ankylosaurus","height":3.4,"length":10.6,"weight":4.5,"theorder":"Ornithischia","meaning":"Lucertola fusa","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Corazzati"},
{"id":34,"name":"Archaeopteryx","height":0.3,"length":0.9,"weight":0.9,"theorder":"Saurischia","meaning":"Antica Ala","diet":"carnivoro","era":"tardo giurassico","site":"Germania Europa","category":"Rettili volanti"},
{"id":35,"name":"Gallimimus","height":3.4,"length":5.5,"weight":118,"theorder":"Saurischia","meaning":"Finto gallo","diet":"carnivoro","era":"tardo cretaceo","site":"Asia","category":"Predatori di terra"},
{"id":36,"name":"Seismosaurus","height":25.6,"length":47.5,"weight":90720,"theorder":"Saurischia","meaning":"Lucertola terremoto","diet":"erbivoro","era":"tardo giurassico primo cretaceo","site":"Nord America","category":"Giganti"},
{"id":37,"name":"Pachyrhinosaurus","height":3.5,"length":7.0,"weight":3630,"theorder":"Ornithischia","meaning":"Lucertola dal naso spesso","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Cornuti"},
{"id":38,"name":"Edmontosaurus","height":6.1,"length":13.1,"weight":3630,"theorder":"Ornithischia","meaning":"Lucertola di Edmonton","diet":"erbivoro","era":"tardo cretaceo","site":"Nord America","category":"Erbivori"},
{"id":39,"name":"Gorgosaurus","height":2.7,"length":7.8,"weight":2900,"theorder":"Saurischia","meaning":"Lucertola feroce","diet":"carnivoro","era":"tardo cretaceo","site":"Nord America","category":"Predatori di terra"}
]);
    };

	self.insertAll = function(tableName, data) {
		var columns = [],
			bindings = [];
		/*
		for (var columnName in DB_CONFIG.tables[tableName]) {
			columns.push(columnName);
			bindings.push('?');
		}
		*/
		
		for (var i=0; i< DB_CONFIG.tables.length; i++) {
			console.log('table.... ' + DB_CONFIG.tables[i]);
			if(DB_CONFIG.tables[i].name == tableName){
				for (var j=0;j< DB_CONFIG.tables[i].columns.length;j++) {
					var columnName = DB_CONFIG.tables[i].columns[j].name;
					columns.push(columnName);
					bindings.push('?');
				}
			}
		}

		var sql = 'INSERT INTO ' + tableName + ' (' + columns.join(', ') + ') VALUES (' + bindings.join(', ') + ')';

		for (var i = 0; i < data.length; i++) {
			var values = [];
			for (var j = 0; j < columns.length; j++) {
				values.push(data[i][columns[j]]);
			}
			self.query(sql, values);
		}
	};
	
    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });

        return deferred.promise;
    };

    self.fetchAll = function(result) {
        var output = [];
		console.log('fetching from result.rows.length:' + result.rows.length);
        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
			console.log('fetching... ' + result.rows.item(i));
        }
        
        return output;
    };

    self.fetch = function(result) {
        return result.rows.item(0);
    };

    return self;
})

.factory('DinosaurService', function(DB) {
    var self = this;
    
    self.findAll = function() {
        return DB.query('SELECT * FROM dinosaur order by name')
        .then(function(result){
            return DB.fetchAll(result);
        });
    };
    
    self.findById = function(id) {
        return DB.query('SELECT * FROM dinosaur WHERE id = ?', [id])
        .then(function(result){
            return DB.fetch(result);
        });
    };
	
	self.count = function() {
        return DB.query('SELECT count(*) FROM dinosaur')
        .then(function(result){
            return result.rows.item(0)["count(*)"];
        });
    };
	
    return self;
});