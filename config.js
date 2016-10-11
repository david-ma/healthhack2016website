const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
const util = require('util');
const request = require('request');

const password = "password";

var sites = {
	"sydney": true,
	"melbourne": true,
	"canberra": true,
	"brisbane": true,
	"perth": true
};

var challenges = [{"location":"Melbourne","title":"Medical reminders","presenters":"Julie Walter","summary":"Help us help the nearly half a million Australians aged 85 years and over maintain good health by building a better diary, calendar, social interaction and medication reminder solution.","description":"<p>Ageing well is an urgent and pressing issue across Australian society. Over the past two decades, the number of persons aged 85 years and over increased by 148%, compared with a total population growth of 32.1% over the same period.<p>Cognitive decline, and in particular short term memory loss, occurs for most people in their late 80s and 90s, and even earlier for those who do not enjoy good physical heath. Moreover, the majority of older people retain the ability to care for themselves, even with the onset of dementia.<p><em>However, there is a major problem challenging the ability of older Australians to care for themselves. </em>Many older people are not able to maintain good health because:<ul><li>remembering,<li>attending medical appointments,<li>taking medications and<li>keeping socially interactive</ul><p>are more challenging.</p><p>As people begin to lose cognitive ability, many will use a calendar or diary to help remember and organise their outings and appointments. The diaries of people with dementia and memory problems often become cluttered with notes as they attempt to keep all the details that they may forget. Over time, the ability to plan diminishes and diary and calendar notes disappear, or are written by others.<p>Help us help the nearly half a million Australians aged 85 years and over maintain good health by building a better diary, calendar, social interaction and medication reminder solution.<h4>Possible Solutions</h4><li>A tablet that allows multiple agencies and family members remote access<li>A Display at the clients home that has clear information on what will be happening today<li>Ability for the care team to access the tablet and avoid booking appointments that will clash with other events<li>An easy alert system with a reminders for medications<li>Ability to dial the client and have a ‘facetime’ conversation<li>A clear contact list display with a phone call made at the touch of the screen</li></ul>","image":"LCH.png","organisation":"Lorne Community Hospital","organisationLink":"barwonhealth.org.au"},{"location":"Melbourne","title":"Public Health spending optimization","presenters":"Ruth Pearson","summary":"Optima Nutrition is used by countries to inform their public health spending on nutritional interventions. The optimisation routine samples many different spending scenarios. However, currently only the ‘best’ scenario is presented as a recommendation for spending. It would be useful for the user to be able to explore the parameter space more interactively, as there may be other spending allocations which fit better with their practical or political constraints.","description":"<h4>Background</h4><p>Undernutrition causes 45% of child deaths per year and leads to 159 million stunted children. Early investment in nutritional interventions can build human capital and boost shared prosperity. The United Nation’s Sustainable Development Goals (SDGs) specify a 40% reduction in the number of stunted children by 2030. The World Bank estimates that this target will not be met without nutrition-specific interventions.</p><h4>Methods</h4><p>Optima Nutrition is a tool to inform policy decisions in child nutrition. It consists of an epidemiological model which is integrated with economic and financial analysis frameworks and a formal mathematical optimisation routine. The model is a partial cohort model written in Python which tracks the health of children from birth to age five. Cost and coverage information about nutritional interventions are used to predict health outcomes such as death and stunting. A unique feature of Optima Nutrition is the optimisation function that is used to calculate the optimal allocation of resources to different program areas to minimise adverse outcomes. Additionally, it has capability to optimise funds across geographical regions, as well as being used for scenario forecasting.</p>","image":"burnet.jpg","organisation":"Burnet Institute","organisationLink":"https://www.burnet.edu.au/"},{"location":"Brisbane","title":"3D annotation of Terrascale biomedical imaging data in a 2D web","presenters":"Andrew Janke","summary":"Web based visualisation and annotation of 3D imaging data is difficult, the TissueStack project (www.tissuestack.org) is an open source attempt at this via HTML5 canvas elements akin to 2D mapping websites. We now want to delve into annotation of datasets and need to develop new methods of annotation beyond dropped pins and 2D polygons.","description":"<p>Neuroimaging datasets are large, too large for desktop computers, the answer is the web. We can currently view multi GB and TB imaging datasets via a HTML5 + JavaScript interface based around tiling in a Canvas Element <a href=\"http://www.tissuestack.org\">www.tissuestack.org</a>. A detailed overview of the interface and how it works can be seen <a href=\"https://www.youtube.com/watch?v=qQ4IUrx0jrA\">here.</a>  Full description of the challenge can be found on our <a href=\"https://github.com/NIF-au/TissueStack/wiki/HealthHack-2015-Challenge\">GitHub repository.</a></p><h4>Challenge</h4><p>Our (international) users have now become very familiar with this style of interface but want more. The #1 request we have is for annotation. Even the ability to add simple elements on top of the image would be a great outcome. Landmarks, simple polygonal lines and text.</p>How this data is stored is a vexed question, currently all data on a TissueStack server is open, so the tracings and annotations would also be open. For now everything being open is a reasonable approach.</p><p>Thought needs to be given as to how tracings and annotations work beyond a 2D plane as is more typical in traditional web interfaces. A common approach it to treat a point as a sphere and show smaller circles in adjacent slices. Failing that a user will only be able to find annotations by chance when scrolling through the volume. User cues should feature heavily here but the mechanism for doing this requires a group of coders with some novel visual design ideas for web interfaces.</p><h4>Stretch Goal</h4><p>Collaborative annotation across multiple instances of TissueStack. We have diverse groups of researchers working from multiple sites in Australia (and internationally). Ideally each volume should be traced by the combined knowledge and skill of multiple experts. Being able to collaboratively annotate images would be a fantastic boon to science ala google docs and other collaborative tools.</p>","image":"NIF-logo.jpg","organisation":"National Imaging Facility","organisationLink":"http://www.cai.uq.edu.au/"},{"location":"Brisbane","title":"A more efficient database for cardiology patient management","presenters":"Jerome Goldstein","summary":"To improve the efficiency of managing pateint admission and follow-up for certain cardiac surgery procedures.","description":"<p>The demand for cardiac surgery to be performed via the groin is soaring. These procedures give older patients unfit for open heart surgery a second chance. Despite the rapid increase in number of procedures performed hospitals currently use an excel spreadsheet to track patient data and determine procedural eligibility. A specialized database system to support decision making is desperately lacking.</p><p>The rate of growth in the number of procedures performed is outstripping the ability to manage patients using an excel spreadsheet. It has become a workflow and efficiency problem. The number of people across the cardiology, radiology and surgical departments with access to the excel spreadsheet is growing and data integrity is an issue. It is also impacting on arranging timely follow up for these patients.</p><p>The ideal solution is a .NET application with a SQL server backend. The database would be accessible by multiple users from multiple computers within a healthcare network.</p><p>Using Microsoft's .NET framework, the most common platform used in the healthcare system, building a database within 48 hours is a realistic target. If time allows a simple text messaging service that asks the patient to rate their breathlessness in the weeks following their procedure with the responses incorporated into the database would allow for improved patient follow up.</p><p>As described above the current solution uses an excel spreadsheet to manage data.</p>","image":"","organisation":"Queensland Health","organisationLink":"https://www.health.qld.gov.au/"},{"location":"Perth","title":"Collecting experience reports from Meningitis survivors ","presenters":"Dr Charlene Kahler","summary":"The purpose of this project is to create an application that enables patients recovering from meningitis to document their experiences with the disease which can then be compiled to assist researchers in understanding what support mechanisms are required for patients.","description":"<h5>The sequelae from infection with Neisseria meningitidis</h5><p> Neisseria meningitidis is a bacterium that is an exclusively human pathogen and is a major cause of bacterial    meningitis in children and young adults. It has a fatality rate of about 10% and in survivors causes serious    impairment. Meningitis and sepsis can result in long term disabilities such as amputation, chronic kidney disease or    epilepsy. However, other issues such as post traumatic stress syndrome and learning difficulties are less well    known. At the moment researchers need more data from survivors of meningitis so that they can understand what    support mechanisms are required for these patients.</p><p> Meningococcal disease is currently at very low levels in the population. Although meningococcal disease can be    vac
var time = 0;
function refreshChallenges(){
	if(time < Date.now() - 900000){
		console.log("JSON was refreshed more than 15 mins ago. Refresh it now.");
		time = Date.now();
		request.get(
			'https://sheetsu.com/apis/v1.0/533772eb0bba',
			function(err, response, body) {
				challenges = JSON.parse(body);
			}
		);
	} else {
		console.log("JSON was refreshed less than 15 mins ago. Don't refresh.");
	}
};

exports.config = {
	domains: ["healthhack.david-ma.net", "healthhack.com.au", "www.healthhack.com.au", "test.healthhack.com.au", "2016.healthhack.com.au"],
	pages: {
		"challenges": "/challenges.html",
		"previouschallenges": "/previouschallenges.html",
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
	redirects: {
		"/problems": "https://docs.google.com/forms/d/e/1FAIpQLSdlprdRXQkP_d4uwzd2_0FQRv5qNdSfh3TND7JY4L4ezAX0lw/viewform",
		"/problems.html": "https://docs.google.com/forms/d/e/1FAIpQLSdlprdRXQkP_d4uwzd2_0FQRv5qNdSfh3TND7JY4L4ezAX0lw/viewform",
		"/site/melbourne.html": "/melbourne",
		"/site/sydney.html": "/sydney",
		"/site/perth.html": "/perth",
		"/site/canberra.html": "/canberra",
		"/site/brisbane.html": "/brisbane"
	},
	services: {
		"edit_site": function(res, req, db, type){
			console.log("Ok, Editing Site...");

			// create an incoming form object
			var form = new formidable.IncomingForm();

			// specify that we want to allow the user to upload multiple files in a single request
			form.multiples = true;

			// store all uploads in the /uploads directory
			form.uploadDir = path.join(__dirname, '/tmp');

			// log any errors that occur
			form.on('error', function(err) {
				console.log('An error has occured: \n' + err);
			});

			// parse the incoming request containing the form data
			form.parse(req, function(err, fields, files) {

				// Protected by a password... change your password here
				// We should also probably rate limit this shit
				if(fields.password === password) {

					var images = {
						venue_logo: fields.venue_logo,
						venue_image: fields.venue_image,
						site_photo: fields.site_photo
					};

					Object.keys(files).forEach(function(key){
						if(files[key].name) {
							images[key] = '/images/uploads/'+fields.site.toLowerCase()+'/'+files[key].name;
							fs.createReadStream(files[key].path).pipe(fs.createWriteStream(path.join(__dirname, '/public'+images[key])));
							fs.rename(files[key].path, path.join(form.uploadDir, files[key].name));
						}
					});

					var query = "INSERT INTO `healthhack_sites` (`id`, `site`, `venue`, `address`, `lat`, `lng`, `placeId`, `venue_logo`, `venue_image`, `venue_description`, `site_info_title`, `site_photo`, `site_description`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

					db.queryVariables(query, [fields.site, fields.venue, fields.address, fields.lat, fields.lng, fields.placeId, images.venue_logo, images.venue_image, fields.venue_description, fields.site_info_title, images.site_photo, fields.site_description], function(err, results) {
						if(!err) {
							if (fields.password === "debug") {
								res.writeHead(200, {'content-type': 'text/plain'});
								res.write('Success!\n');
								res.write('Received upload:\n\n');
								res.write(util.inspect({fields: fields, files: files}));
								res.write('\n\nDatabase results:\n');
								res.write(JSON.stringify(results));
								res.end();
							} else {
								console.log(fields);
								var url = fields.current_url;
								var body ='<meta http-equiv="refresh" content="0; url='+url+'">';
								res.writeHead(302, {"Location": url});
								res.end(body);
							}
						} else {
							res.writeHead(500, {'content-type': 'text/plain'});
							res.end(JSON.stringify(err));
						}
					});
				} else {
					res.writeHead(403, {'content-type': 'text/plain'});
					res.end("Wrong Password");
				}
			});

		},
		"upload_sponsor": function(res, req, db, type){
			console.log("Woo! Uploading sponsor...");

			// create an incoming form object
			var form = new formidable.IncomingForm();

			// specify that we want to allow the user to upload multiple files in a single request
			form.multiples = true;

			// store all uploads in the /uploads directory
			form.uploadDir = path.join(__dirname, '/tmp');

			// log any errors that occur
			form.on('error', function(err) {
				console.log('An error has occured: \n' + err);
			});

			// parse the incoming request containing the form data
			form.parse(req, function(err, fields, files) {

                // Protected by a password... change your password here
                // We should also probably rate limit this shit
				if(fields.password === password) {
					var logo_src = fields.logo,
						auth = fields.auth === "confirmed" ? 1 : 0;

					if(files.logo && files.logo.name !== "") {
						logo_src = '/images/uploads/'+files.logo.name;
						fs.createReadStream(files.logo.path).pipe(fs.createWriteStream(path.join(__dirname, '/public'+logo_src)));
						fs.rename(files.logo.path, path.join(form.uploadDir, files.logo.name));
					}

					var query = "INSERT INTO `healthhack_sponsors` (`id`, `name`, `logo`, `link`, `text`, `site`, `priority`, `auth`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);";

					db.queryVariables(query, [fields.name, logo_src, fields.link, fields.text, fields.site, fields.priority, auth], function(err, results) {
						if(!err) {
							if (fields.password === "debug") {
								res.writeHead(200, {'content-type': 'text/plain'});
								res.write('Success!\n');
								res.write('Received upload:\n\n');
								res.write(util.inspect({fields: fields, files: files}));
								res.write('\n\nDatabase results:\n');
								res.write(JSON.stringify(results));
								res.end();
							} else {
								console.log(fields);
								var url = fields.current_url;
								var body ='<meta http-equiv="refresh" content="0; url='+url+'">';
								res.writeHead(302, {"Location": url});
								res.end(body);
							}
						} else {
							res.writeHead(500, {'content-type': 'text/plain'});
							res.end(JSON.stringify(err));
						}
					});
				} else {
					res.writeHead(403, {'content-type': 'text/plain'});
					res.end("Wrong Password");
				}
			});

		},
		"site": function(res, req, db, type){
			if(type && sites.hasOwnProperty(type.toLowerCase())) {
				var query = "select * from `healthhack_sites` where site='"+type+"' ORDER BY 1 DESC limit 1;";
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
			if(type && sites.hasOwnProperty(type.toLowerCase())) {
				// var query = "select * from `healthhack_sponsors` where site = 'national' or site = '"+type+"';";
				var query = "select max.id, max.name, logo, link, text, site, priority, auth from (select MAX(id) as id, name from `healthhack_sponsors` where site='national' or site='"+type+"' group by name) as max, `healthhack_sponsors` where `healthhack_sponsors`.id = max.id;";
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
		"challengesjson": function(res){
			res.writeHead(200);
			res.end(JSON.stringify(challenges));
			refreshChallenges();
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
