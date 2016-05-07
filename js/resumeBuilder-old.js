//$("#main").append("Sarah");


//var formattedName = HTMLheaderName.replace("%data%", "Sarah Crowley");

//var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


//var skills = ["awesomeness", "programming", "teaching", "unicorn wrangling"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);


//var work = {};
//work.position = "Web Developer";
//work.employer = "Miranda Creative";
//work.years = 4.8;

//var education = {};
//education["name"] = "Eastern Connecticut State University";
//education["years"] = "1999-2003"
//education["city"] = "Willimantic, CT";

//$("#main").append(work["position"]);
//$("#main").append(education.name);





//var bio = {
//	"name": "Sarah Crowley",
//	"role": "Web Developer",
//	"contacts": {
//		"mobile": "860-729-3576",
//		"email": "sweet_cera@hotmail.com",
//		"github": "sweetcera",
//		"twitter": "@SarahCrowley",
//		"location": "Connecticut"
//	},
//	"welcomeMessage": "This is my welcome message for now.",
//	"skills": [
//	"awesomeness", "programming", "teaching", "unicorn wrangling"
//	],
//	"bioPic": "images/fry.jpg"
//}




var bio = {
	"name": "Sarah Crowley",
	"role": "Web Developer",
	"contacts": {
		"mobile": "860-729-3576",
		"email": "sweet_cera@hotmail.com",
		"github": "sweetcera",
		"twitter": "@SarahCrowley",
		"location": "Connecticut"
	},
	"welcomeMessage": "This is my welcome message for now.",
	"skills": [
		"HTML", "CSS", "Wordpress", "unicorn wrangling"
	],
	"bioPic": "images/fry.jpg",
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);	
		$("#header").append(formattedBioPic);	
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};




var education = {
	"schools": [
		{
			"name": "Eastern Connecticut State University",
			"location": "Willimantic, CT",
			"degree": "BS",
			"majors": ["Communications", "Fine Arts History"]
			//"dates": "1999 - 2003",
			//"url": "http://www1.easternct.edu"
		},
		{
			"name": "Connecticut School of Broadcasting",
			"location": "Pawcatuck, CT",
			"degree": "Certifications",
			"majors": ["Radio Broadcasting", "Video Production"]
			//"dates": "2006",
			//"url": "http://www.gocsb.com"
		}
	]
}


var work = {
	"jobs": [
		{
		 "employer": "Miranda Creative",
			"title": "Web Designer/Developer",
			"url": "http://www.mirandacreative.com",
			"location": "Norwich, CT",
			"dates": "Oct. 2011 - Present",
			"description": "Miranda Creative is a marketing and design agency in Norwich, CT. As Web Designer and Developer, I design and develop websites in HTML/CSS, Wordpress, Woocommerce, Joomla, Mobile Themes, and Responsive Websites. I meet with clients to plan their websites, using tools like sitemaps, wireframes, style tiles. I, also, meet with the clients at the end of the process to train them on how to use and maintain to their website."
		},
		{
		  "employer": "Whoistheoldguy",
			"title": "Web Designer/Developer",
			"url": "http://www.whoistheoldguy.com",
			"location": "East Haddam, CT",
			"dates": "Feb. 2011 - Oct. 2011",
			"description": "Whoistheoldguy was a small web design agency in East Haddam, CT. As Web Designer/Developer, I designed, developed, and maintained websites with HTML/CSS, Javascript, PHP, Wordpress, and Miva Merchant. I helped clients plan their websites, business cards, brochures, and promotional materials."
		}
	]
}


var projects = {
	"projects": [
		{
			"title": "Guilford Center for Children",
			"url": "Guilford, CT",
			"dates": "2015",
			"description": "This web page is the third project for Udacity's Front-End Nanodegree. The project was focused on using JavaScript and HTML5 Canvas to make a classic arcade game on web page.",
			"images": ["images/frogger.jpg"]
		},
		{
			"title": "CT Wine Trail",
			"url": "Guilford, CT",
			"dates": "2012",
			"description": "This web page is the third project for Udacity's Front-End Nanodegree. The project was focused on using JavaScript and HTML5 Canvas to make a classic arcade game on web page.",
			"images": ["images/frogger.jpg"]
		}
	]
}

projects.display: function() {
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}



// If Statement

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("skills").append(formattedSkill);
}





// Loops

//var sarah = {};
//sarah.job = "web dev";
//
//var makeCourse = function() {
	// make a course
//	console.log("Make a course");
//}

//var courses = 0;
//while(sarah.job === "web dev") {
//	makeCourse();
//	courses = courses + 1;
//	if (courses === 10) {
//		sarah.job = "web developer";
//	}
//}

//console.log(sarah.job);


//for (job in work.jobs) {
//	$("#workExperience").append(HTMLworkStart);

//	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//	var formattedEmployerTitle = formattedEmployer + formattedTitle;

//	$(".work-entry:last").append(formattedEmployerTitle);
//}





function displayWork() {
	for (job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employer
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%". work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();





























