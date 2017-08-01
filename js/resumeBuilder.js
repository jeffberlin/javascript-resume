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
  "skills" : ["HTML / HTML5", "CSS: Responsive Design, Foundation, Bootstrap, Flexbox, Grid CSS", "JavaScript: JQuery, AJAX, KnockoutJS, ReactJS, NodeJS, Webpack, Jasmine Testing", "Python", "SQL / Postgres", "Git / GitHub", "Slack", "Adobe Creative Cloud: Photoshop, Illustrator, InDesign, Bridge, Dreamweaver"],
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
  $("#topContacts, #footerContacts").append(HTMLlinkedIn.replace(data, bio.contacts.linkedIn).replace('#', 'https://www.linkedin.com/in/jeff-berlin'));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace(data, bio.contacts.github).replace('#', 'https://www.github.com/jeffberlin'));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace(data, bio.contacts.location));
};
bio.display();

var work = {
  "jobs": [
    {
      "employer": "JOMO, Inc.",
      "title": "UI/UX Intern",
      "location": "Wilmington, NC",
      "dates": "January 2017 - Present",
      "description": "Create website content, app features, use responsive website design/development practices to ensure ultimate design layout for the best mobile optimization and functionality.",
      "url": "https://www.jomoapp.com"
    },
    {
      "employer": "No Limit GFX",
      "title": "Operations Manager",
      "location": "North Myrtle Beach, SC",
      "dates": "September 2015 - January 2017",
      "description": "Handled all of the online sales, project scheduling, inventory ordering, and processed all inbound and outbound shipments. Also, worked with the technicians to verify all parts and materials were available to complete projects."
    },
    {
      "employer": "Hadwin-White Buick, GMC, Subaru",
      "title": "Parts Associate, Shipping and Receiving",
      "location": "Conway, SC",
      "dates": "July 2014 - June 2015",
      "description": "Handled all inbound shipments, assisted walk-in customers, and assisted with over the phone inquiries. Worked one-on-one with the Parts Manager to increase sales, productivity, and efficiency.",
      "url": "http://www.hadwin-white.com/"
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
      "description": "Assisted the foreman in completing remodeling projects, demolition work, and maintenance repairs."
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
    "onlineCourses" : [
    {
      "title": "Front-end Website Development Nanodegree",
      "school": "Udacity",
      "dates": "August 2016 - March 2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      "name": "Udacity",
      "location": "Online",
      "degree": "Nanodegree",
      "dates": "August 2016 - March 2017",
      "majors": ["Front-end Website Development"]
    },
    {
      "title": "Full Stack Developer Nanodegree",
      "school": "Udacity",
      "dates": "June 2017 - Present",
      "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
      "name": "Udacity",
      "location": "Online",
      "degree": "Nanodegree",
      "dates": "June 2017 - Present",
      "majors": ["Full Stack Website Development"]
    },
    {
      "title": "React Developer Nanodegree",
      "school": "Udacity",
      "dates": "June 2017 - Present",
      "url": "https://www.udacity.com/course/react-nanodegree--nd019",
      "name": "Udacity",
      "location": "Online",
      "degree": "Nanodegree",
      "dates": "June 2017 - Present",
      "majors": ["React Developer"]
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

  $(".education-entry:last").append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(classes) {
    var formattedTitle = HTMLonlineTitle.replace(data, classes.title).replace('#', classes.url);
    var formattedSchool = HTMLonlineSchool.replace(data, classes.school);
    var formattedURL = HTMLonlineURL.replace(data, classes.url).replace('#', classes.url);
    var formattedDates = HTMLonlineDates.replace(data, classes.dates);
    var formattedOnlineClasses = formattedTitle + formattedSchool + formattedDates + '<div style="padding-bottom: 10px;"' + '</div>' + '<div style="padding-bottom: 10px;"' + '</div>';
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
    "title": "Movie Trailers",
    "dates": "June 2017",
    "description": "Udacity Full Stack course project for building a web page to display our favorite movies with a pop-up movie trailer preview. (Built using HTML, Bootstrap CSS, and Python).",
    "images": ["images/Movie Trailer Python.png"],
    "url": "https://jeffberlin.github.io/Movie_Trailer_python/fresh_tomatoes.html"
  },
  {
    "title": "Black Sheep Content Co.",
    "dates": "May 2017",
    "description": "Created a sample homepage with links to social media pages and a contact form. (Built using HTML, CSS, Bootstrap, JQuery, and JavaScript).",
    "images": ["images/Blacksheep copy.png"],
    "url": "https://jeffberlin.github.io/Black_Sheep_Content_Co/index.html"
  },
  {
    "title": "National Speed",
    "dates": "May 2017 - Present",
    "description": "A sample website created for an automotive performance shop. This page is still a work in progress that has been put on the back-burner. (Built using HTML5, Bootstrap CSS, JavaScript, and JQuery).",
    "images": ["images/National Speed.png"],
    "url": "https://jeffberlin.github.io/Nat-Speed/home.html"
  },
  {
    "title": "Activity Randomizer",
    "dates": "April 2017",
    "description": "Ever wanted to go do something instead of sit around and be bored, but never quite sure what to do? Here is the solution! A web page that randomly picks activities to do! (Built using Foundation CSS, HTML, and JavaScript).",
    "images": ["images/Activity Randomizer2 copy-min.png"],
    "url": "https://jeffberlin.github.io/Activity-Randomizer/picker.html"
  },
  {
    "title": "Wilmington Brewers",
    "dates": "March 2017",
    "description": "An interactive Google Map that displays the breweries in Wilmington, NC and displays infowindow information provided by Foursquare. (Built using HTML, CSS, JavaScript, KnockoutJS, AJAX requests, and Webpack).",
    "images": ["images/Wilmington Brewers.png"],
    "url": "https://github.com/jeffberlin/Wilmington-Brewers"
  },
  {
    "title": "RandomAPI User",
    "dates": "February 2017",
    "description": "Built to the specifications of a design from Gavin Anthony, that pulls certain information from API users. (Built using HTML, Flexbox, and JavaScript).",
    "images": ["images/randomapi.png"],
    "url": "https://jeffberlin.github.io/randomAPI/"
  },
  {
    "title": "JavaScript Arcade Frogger Game",
    "dates": "December 2016",
    "description": "A newer version of the Frogger game, except with different characters and a new layout! (Built using JavaScript, JQuery, HTML, and CSS).",
    "images": ["images/JS Arcade Game.png"],
    "url": "https://jeffberlin.github.io/Frogger-JavaScript/"
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

  var designs = {
    "designs": [
    {
      "title": "Appalachian Slab & Timber",
      "dates": "July 2017",
      "description": "Created a 'brand' logo for a company in Western North Carolina",
      "images": ["images/brandlogo-copy.png"],
      "url": "images/brandlogo-copy.png"
    },
    {
      "title": "Flyer",
      "dates": "March 2017",
      "description": "Sample flyer created using Adobe InDesign.",
      "images": ["images/flyer.png"],
      "url": "images/flyer.png"
    },
    {
      "title": "Side Slice Pizza logo",
      "dates": "March 2017",
      "description": "Using Adobe Illustrator, I recreated a sample logo for 'Side Slice Pizza'.",
      "images": ["images/side-slice-pizza-logo.png"],
      "url": "images/side-slice-pizza-logo.png"
    },
    {
      "title": "Brochure",
      "dates": "March 2017",
      "description": "Sample brochure created using Adobe InDesign.",
      "images": ["images/brochure.png"],
      "url": "images/brochure.png"
    },
    {
      "title": "Business Card",
      "dates": "March 2017",
      "description": "Sample business card created with Adobe InDesign.",
      "images": ["images/business-card.png"],
      "url": "images/business-card.png"
    },
    {
      "title": "Postcard",
      "dates": "March 2017",
      "description": "Sample postcard created with Adobe InDesign.",
      "images": ["images/postcard.png"],
      "url": "images/postcard.png"
    }
]
};

designs.display = function() {
  for (var i = 0; i < designs.designs.length; i++) {
    $("#designs").append(HTMLgraphicStart);

    $(".designs-entry:last").append(HTMLgraphicTitle.replace(data, designs.designs[i].title).replace('#', designs.designs[i].url), (HTMLgraphicDates.replace(data, designs.designs[i].dates)), (HTMLgraphicDescription.replace(data, designs.designs[i].description)), (HTMLgraphicImage.replace(data, designs.designs[i].images)).replace('#', designs.designs[i].images));
  }
};
designs.display();

$("#mapDiv").append(googleMap);
