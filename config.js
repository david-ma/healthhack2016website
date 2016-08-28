const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
const util = require('util');

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
		"perth": "/site.html",
		"edit-melbourne": "/edit-site.html",
		"edit-sydney": "/edit-site.html",
		"edit-canberra": "/edit-site.html",
		"edit-brisbane": "/edit-site.html",
		"edit-perth": "/edit-site.html"
	},


	services: {
		"upload_sponsor": function(res, req, db, type){
			// var form = new formidable.IncomingForm();
            //
			// form.parse(req, function(err, fields, files) {
			// 	res.writeHead(200, {'content-type': 'text/plain'});
			// 	res.write('received upload:\n\n');
			// 	res.end(util.inspect({fields: fields, files: files}));
			// });
            //
			// return;
            //
            //


			console.log("Woo... uploading sponsor...");
			// console.log(type);
			// console.log(req);


			// create an incoming form object
			var form = new formidable.IncomingForm();

			// specify that we want to allow the user to upload multiple files in a single request
			form.multiples = true;

			// store all uploads in the /uploads directory
			form.uploadDir = path.join(__dirname, '/uploads');

			// every time a file has been uploaded successfully,
			// rename it to it's orignal name
			form.on('file', function(field, file) {
				fs.rename(file.path, path.join(form.uploadDir, file.name));
			});

			// log any errors that occur
			form.on('error', function(err) {
				console.log('An error has occured: \n' + err);
			});


			// parse the incoming request containing the form data
			form.parse(req, function(err, fields, files) {
				res.writeHead(200, {'content-type': 'text/plain'});
				res.write('Success!\n');
				res.write('Received upload:\n\n');
				res.end(util.inspect({fields: fields, files: files}));
			});


		},
		"site": function(res, req, db, type){
			if(sites.hasOwnProperty(type.toLowerCase())) {
				var query = "select * from `healthhack_sites` where site='"+type+"' ORDER BY 1 ASC limit 1;";
				db.query(query, function(error, results){
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
		},
		"sponsors": function(res, req, db, type){
			if(sites.hasOwnProperty(type.toLowerCase())) {
				var query = "select * from `healthhack_sponsors` where site = 'national' or site = '"+type+"';";
				db.query(query, function(error, results){
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
