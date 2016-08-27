var sites = {
	"sydney": true,
	"melbourne": true,
	"canberra": true,
	"brisbane": true,
	"perth": true
};

exports.config = {
	domains: ["healthhack.david-ma.net", "healthhack.com.au", "www.healthhack.com.au", "test.healthhack.com.au", "2016.healthhack.com.au"],
	pages: {
		"melbourne": "/site.html",
		"sydney": "/site.html",
		"canberra": "/site.html",
		"brisbane": "/site.html",
		"perth": "/site.html"
	},
	services: {
		"site": function(res, req, db, type){
			if(sites.hasOwnProperty(type.toLowerCase())) {
				var query = "select * from `healthhack_sites` where site='"+type+"' ORDER BY 1 ASC limit 1;";
				db.query(query, function(error, results){
					console.log(error);
					console.log(results);
					if(!error){
						res.writeHead(200);
						res.end(JSON.stringify(results));
					} else {
						res.writeHead(500);
						res.end(JSON.stringify(error));
					}
				});
			} else {
				res.writeHead(500);
				res.end("Error");
			}
		}
	},
	sockets: {
		emit: [],
		on: [{"name": "healthhack_email",
			"callback": function(d, database){
				console.log("someone sent us some email info...");
				var socket = this;

				// We should probably catch some errors... meh

				var query = "INSERT INTO `healthhack_mail` (`name`, `email`, `role`, `message`) VALUES (?, ?, ?, ?)";

				database.queryVariables(query, [d.name, d.email, d.role, d.message], function(err, results) {

					console.log(err);
					console.log(results);
					if(err){
						console.log(err);
					} else {
						console.log(results);
						console.log("success!");
					}
				});

			}
		}]
	}
};
