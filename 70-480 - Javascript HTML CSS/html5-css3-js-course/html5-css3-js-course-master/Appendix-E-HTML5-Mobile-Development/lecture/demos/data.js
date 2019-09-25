// Hard-coded "courses" array, to get us started.
var courses = [
	{ id: 1, name: "HTML5",       duration: 4,  certification: false },
	{ id: 2, name: "ASP.NET MVC", duration: 4,  certification: true  },
	{ id: 3, name: "WCF",         duration: 5,  certification: true  },
	{ id: 4, name: "JavaScript",  duration: 4,  certification: true  },
	{ id: 6, name: "jQuery",      duration: 3,  certification: false },
	{ id: 5, name: "Spring",      duration: 5,  certification: true  } 
];


// =====================================================================================================
// Semantic functions
// =====================================================================================================

// Called on page load, to synchronize local storage with the global "courses" array.
$(document).ready(function() {

	if (window.localStorage) {
	
		var fromDb = localStorage.getItem("courses");
		if (fromDb) {
			// Read the courses from local storage, into the global "courses" array.
			courses = JSON.parse(fromDb);
		}
		else {
			// Store the global "courses" array into local storage.
			storeCourses();
		}
	}
});


// Stores the global "courses" array into local storage.
function storeCourses() {

	if (window.localStorage) {
		localStorage.setItem("courses", JSON.stringify(courses));
	}
}


// Creates a new "course" object, adds it to the global "courses" array, and then saves to local storage.  
function addCourse(courseName, duration, certification) {

	var newId = getNewCourseId();

	var newCourse = {
		id: newId,
		name: courseName,
		duration: duration,
		certification: certification
	};	
	
	courses.push(newCourse);
	storeCourses();
	
	return newId;
}


// Removes an existing "course" object from the global "courses" array, and then saves to local storage.  
function removeCourse(id) {

	var index = getIndexForId(id);
	if (index >= 0) {
		courses.splice(index,1);
		storeCourses();
	}
}


// =====================================================================================================
// Helper functions
// =====================================================================================================

// Gets the next ID to use for a new course.
function getNewCourseId() {

	var max = 0;
	for (var c = 0; c < courses.length; c++) {
		if (courses[c].id > max)
			max = courses[c].id;		
	}
	return max + 1;
}


// Gets the index (i.e. array position) for a course with a specific ID.
function getIndexForId(id) {

	var index = -1;
	for (var c in courses) {
		if (courses[c].id == id) {
			index = c;
			break;
		}
	}
	return index;
}


// Gets the "course" object with a specific ID.
function getCourseById(id) {
	
	var index = getIndexForId(id);
	if (index < 0)
		return null
	else
		return courses[index];
}