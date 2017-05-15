var bio = {
  "name" : "Jeff Berlin",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "302-463-5129",
    "email": "jeff@jbrally.com",
    "linkedIn": "Jeff Berlin",
    "github": "jeffberlin",
    "location": "Wilmington, NC"
  },
  "placesLived": [
    "Wilmington, DE",
    "North Myrtle Beach, SC",
    "Wilmington, NC"
  ],
  "welcomeMessage" : "Front-end Web Developer and race car driver!",
  "skills" : ["HTML", "CSS", "Responsive CSS Design", "JavaScript", "JQuery", "AJAX", "KnockoutJS", "NodeJS", "Bootstrap", "Zurb Foundation CSS", "ReactJS", "Adobe Creative Cloud: Photoshop, Illustrator, inDesign"],
  "biopic" : "images/racing-min.jpg"
};

var data = "%data%";

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
  $("#header").prepend(HTMLheaderName.replace(data, bio.name));
  $("#header").append(HTMLbioPic.replace(data, bio.biopic), (HTMLwelcomeMsg.replace(data, bio.welcomeMessage)));

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace(data, bio.skills[i]));
  }

  $("#topContacts, #footerContacts").append(HTMLmobile.replace(data, bio.contacts.mobile));
  $("#topContacts, #footerContacts").append(HTMLemail.replace(data, bio.contacts.email));
  $("#topContacts, #footerContacts").append(HTMLlinkedIn.replace(data, bio.contacts.linkedIn).replace('#', 'https://www.linkedin.com/in/jeff-berlin-8a199813a'));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace(data, bio.contacts.github).replace('#', 'https://www.github.com/jeffberlin'));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
};
bio.display();

var work = {
  "jobs": [
    {
      "employer": "JOMO, Inc.",
      "title": "Mobile UI/UX Intern",
      "location": "Wilmington, NC",
      "dates": "January 2017 - Present",
      "description": "Create website content, app features, and help with the design layout for mobile optimization. Assit the marketing team with focus group questioning for the UI/UX.",
      "url": "https://www.jomoapp.com"
    },
    {
      "employer": "No Limit GFX",
      "title": "Operations Manager",
      "location": "North Myrtle Beach, SC",
      "dates": "September 2015 - January 2017",
      "description": "Handled all of the online sales, project secheduling, inventory ordering, and processed all inbound and outbound shipments. Worked with the technicians to verify all parts and materials were available to complete projects."
    },
    {
      "employer": "Hadwin-White Buick, GMC, Subaru",
      "title": "Parts Associate, Shipping and Receiving",
      "location": "Conway, SC",
      "dates": "July 2014 - June 2015",
      "description": "Handled all inbound shipments, assisted walk-in customers, and answered phone calls. Worked one-on-one with the Parts Manager to increase sales, productivity, and efficiency."
    },
    {
      "employer": "J&P Management Inc., DBA Jersey Mike's Subs",
      "title": "Night Manager/Shift Leader",
      "location": "North Myrtle Beach, SC",
      "dates": "September 2007 - July 2014",
      "description": "Assigned daily tasks for employees, counted the money at the end of the shift, and made sure all duties were completed. Consulted with the General Manager and Owners to solve any issues that would arise."
    },
    {
      "employer": "Service Tech",
      "title": "Carpenter/Painter",
      "location": "North Myrtle Beach, SC",
      "dates": "July 2010 - November 2012",
      "description": "Assisted the foreman in completing remodeling projects, demolition work, and repairs."
    }
  ]
  };

  work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer).replace('#', work.jobs[i].url);
      var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[i].location), (HTMLworkDates.replace(data, work.jobs[i].dates)), (HTMLworkDescription.replace(data, work.jobs[i].description)));
    }
  };
  work.display();

  var education = {
    "schools" : [
      {
      "name": "Horry-Georgetown Technical College",
      "location": "Conway, SC",
      "degree": "Associates",
      "majors": ["Digital Arts"],
      "dates": "August 2009 - April 2016",
      "url": "https://www.hgtc.edu"
    },
    {
      "name": "EFI University",
      "location": "Jacksonville, NC",
      "degree": "Certificate",
      "majors": ["Electronically Fuel Injection Tuning - Advanced"],
      "dates": "October 2013 - May 2014",
      "url": "https://www.efi101.com"
    }
  ],
    "onlineCourses": [{
      "title": "Front-end Website Developement Nanodegree",
      "school": "Udacity",
      "dates": "August 2016 - March 2017",
      "url": "https://www.udacity.com",
      "name": "Udacity",
      "location": "Online",
      "degree": "Nanodegree",
      "dates": "August 2016 - March 2017",
      "majors": "Front-end Website Development"
    }
  ]
};

education.display = function() {

  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace(data, school.name).replace('#', school.url);
    var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
    var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors);
    var formattedEducation = formattedSchool + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
    $(".education-entry:last").append(formattedEducation);
  });

  education.onlineCourses.forEach(function(classes) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace(data, classes.title).replace('#', classes.url);
    var formattedSchool = HTMLonlineSchool.replace(data, classes.school);
    var formattedURL = HTMLonlineURL.replace(data, classes.url).replace('#', classes.url);
    var formattedDates = HTMLonlineDates.replace(data, classes.dates);
    var formattedOnlineClasses = formattedTitle + formattedSchool + formattedDates + formattedURL;
    $(".education-entry:last").append(formattedOnlineClasses);
  });
};
education.display();

  function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
  }

  $('#main').append(internationalizeButton);

  var projects = {
    "projects": [
  {
    "title": "Black Sheep Content Co.",
    "dates": "May 2017",
    "description": "Created a sample homepage with links to social media pages and a contact form. (Built using HTML, CSS, Bootstrap, JQuery, and JavaScript).",
    "images": ["images/Blacksheep copy.png"],
    "url": "https://jeffberlin.github.io/Black_Sheep_Content_Co/index.html"
  },
  {
    "title": "Activity Randomizer",
    "dates": "April 2017",
    "description": "Ever wanted to go do something instead of sit around and be boring, but never quite sure what to do? Here is the solution! A webpage that randomly picks activities to do! (Built using Foundation CSS).",
    "images": ["images/Activity Randomizer2 copy-min.png"],
    "url": "https://jeffberlin.github.io/Activity-Randomizer/picker.html"
  },
  {
    "title": "JavaScript Arcade Frogger Game",
    "dates": "December 2016",
    "description": "A newer version of the Frogger, except with different characters and a new layout! (Built with JS, JQuery, HTML, and CSS).",
    "images": ["images/JS Arcade Game.png"],
    "url": "https://jeffberlin.github.io/Frogger-JavaScript/"
  },
  {
    "title": "Wilmington Brewers",
    "dates": "March 2017",
    "description": "An interactive Google Map that displays the breweries in Wilmington, NC and displays infowindow information provided by Foursquare. (Built using KnockoutJS).",
    "images": ["images/Wilmington Brewers.png"],
    "url": "https://github.com/jeffberlin/Wilmington-Brewers"
  },
  {
    "title": "RandomAPI User",
    "dates": "February 2017",
    "description": "Built to the specifications of a design from Gavin Anthony, that pulls certain information from API users.",
    "images": ["images/randomapi.png"],
    "url": "https://jeffberlin.github.io/randomAPI/"
  }
]
};

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(HTMLprojectTitle.replace(data, projects.projects[i].title).replace('#', projects.projects[i].url), (HTMLprojectDates.replace(data, projects.projects[i].dates)), (HTMLprojectDescription.replace(data, projects.projects[i].description)), (HTMLprojectImage.replace(data, projects.projects[i].images)).replace('#', projects.projects[i].images));
  }
};
projects.display();

$("#mapDiv").append(googleMap);
