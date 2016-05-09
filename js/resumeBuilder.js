
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
	"bioPic": "images/me.jpg",
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

bio.display();




var education = {
	"schools": [
		{
			"name": "Eastern Connecticut State University",
			"location": "Willimantic, CT",
			"degree": "BS",
			"majors": ["Communications", "Fine Arts History"],
			"dates": "1999 - 2003",
			"url": "http://www1.easternct.edu"
		},
		{
			"name": "Connecticut School of Broadcasting",
			"location": "Pawcatuck, CT",
			"degree": "Certifications",
			"majors": ["Radio Broadcasting", "Video Production"],
			"dates": "2006",
			"url": "http://www.gocsb.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "May 2016",
			"url": "http://udacity.com/ud804"
		}
	],
	myschools: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedName = formattedName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);			
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajors);
			$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	},
	myOnlineCourses: function() {
		if (education.onlineCourses.length > 0 ) {
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedTitle + formattedSchool);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);
				// var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				// formattedURL = formattedURL.replace("#", education.onlineCourses[course].url);
				// $(".education-entry:last").append(formattedURL);
				$(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
			}			
		}
	}
};

education.myschools();
education.myOnlineCourses();



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
	],
	display: function() {
		for(job in work.jobs) {
			// create new div for work experience
			$("#workExperience").append(HTMLworkStart);
			// concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();





var projects = {
	"projects": [
		{
			"title": "Guilford Center for Children",
			"url": "Guilford, CT",
			"dates": "2015",
			"description": "This web page is the third project for Udacity's Front-End Nanodegree. The project was focused on using JavaScript and HTML5 Canvas to make a classic arcade game on web page.",
			"images": ["images/guilford.jpg"]
		},
		{
			"title": "CT Wine Trail",
			"url": "Guilford, CT",
			"dates": "2012",
			"description": "This web page is the third project for Udacity's Front-End Nanodegree. The project was focused on using JavaScript and HTML5 Canvas to make a classic arcade game on web page.",
			"images": ["images/wine.jpg"]
		}
	],
	display: function() {
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
	}
};

projects.display();



$("#mapDiv").append(googleMap);

