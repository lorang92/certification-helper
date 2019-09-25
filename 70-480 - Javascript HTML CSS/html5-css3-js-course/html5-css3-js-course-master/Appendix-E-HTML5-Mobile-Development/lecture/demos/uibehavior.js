var selectedCourseId = 0;

// Handle the jQuery mobile "pagebeforechange" event, which occurs before a page transition.
// This will give us an opportunity to pre-populate the fields in the "#itemPanel" page.
$(document).bind("pagebeforechange", function(e, data) {

	if (typeof data.toPage === "string") {

		// Get the URL that we're navigating to.
		var url = $.mobile.path.parseUrl(data.toPage);
		
		// Compare the # part of the URL to see if it's the "#itemPanel" page we're navigating to.
		if (url.hash.search(/^#itemPanel/) !== -1) {
			// Populate the #itemPanel with data for the selected course.
			showCourse(url, data.options);
			e.preventDefault();
		}
	}
});


// Initialization function, displays all the courses in a list.
function loadCoursesFromData() {

	// Get the list of courses and empty it.
	var list = $("ul");
	list.empty();

	// Create <li> elements, containing hyperlinks such as <a href='#itemPanel?course=1'>HTML5</a>
	var template ="<li><a href='#itemPanel?course=id'>courseName</a></li>";
	var listItems = "";
	for (var c = 0; c < courses.length; c++) {
		listItems = listItems + template.replace(/id/g, courses[c].id)
		                                .replace(/courseName/g, courses[c].name);
	}
	
	// Assign the <li> elements to the list, and refresh its UI.
	list.html(listItems);
	list.listview("refresh");

	// Programmatically change to the #homePanel URL (i.e. display the <div> whose id is #homePanel).
	$.mobile.changePage("#homePanel", {});
}


// Show the details for a course. The url parameter is something like "#itemPanel?course=1".
function showCourse(urlObj, options) {

	// Get the course id (i.e. the number after the "#itemPanel?course=" part of the URL).
	var courseId = urlObj.hash.replace(/.*course=/, "");
	
	if (courseId) {

		// Store the id of this course in a global variable.
		selectedCourseId = courseId;
		
		// Get full details for this course from local storage, and display in the UI.
		var course = getCourseById(selectedCourseId);
		$("#headerField").html(course.name);
		$("#idField").html("Course ID: " + course.id);
		$("#durationField").html("Duration: " + course.duration + " days");
		$("#certificationField").html("Certification: " + course.certification);

		// Get the name of the page to display (i.e. everything up to the ? in the URL), and then get that page element.
		var pageSelector = urlObj.hash.replace(/\?.*$/, "");
		var thePage = $(pageSelector);
		
		// Call the jQuery Mobile page() function, to convert the HTML to jquery mobile HTML (for better control/css theming etc).
		thePage.page();
		
		// Now do the page change.
		options.dataUrl = urlObj.href;
		$.mobile.changePage(thePage, options);
	}
}


// Create a new course object from user's input.
function createNewCourse(e) {

	e.preventDefault();
	
	var name = document.getElementById("newNameField").value;
	var duration = document.getElementById("newDurationField").value;
	var certification = document.getElementById("newCertificationField").value;

	addCourse(name, duration, certification);
	loadCoursesFromData();	

	document.getElementById("newNameField").value = "";
}


// Remove the selected course.
function removeSelectedCourse() {
	removeCourse(selectedCourseId);
	loadCoursesFromData();
}


// Helper function, to close UI dialogs.
function closeDialog() {
	$(".ui-dialog").dialog("close");
}


// Called on page load, to load data and to set up event-handlers.
$(document).ready(function() {
	loadCoursesFromData();
	$("#newCourseForm").submit(createNewCourse);
	$("#deleteButton").click(removeSelectedCourse);
	$("#backButton").click(closeDialog);
});


