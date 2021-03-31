const initialData = {
	courses: {
		'course-1':  { id: 'course-1', desc: 'Computers and Modern Society' },
		'course-2':  { id: 'course-2', desc: 'Programming I' },
		'course-3':  { id: 'course-3', desc: 'Programming II' },
		'course-4':  { id: 'course-4', desc: 'Data Structures' },
		'course-5':  { id: 'course-5', desc: 'Algorithm Design and Analysis' },
		'course-6':  { id: 'course-6', desc: 'Discrete Structures' },
		'course-7':  { id: 'course-7', desc: 'Computer Org and Arch' },
		'course-8':  { id: 'course-8', desc: 'C and Unix' },
		'course-9':  { id: 'course-9', desc: 'Operating Systems' },
		'course-10': { id: 'course-10', desc: 'Senior Project' },
		'course-11': { id: 'course-11', desc: 'Database theory and Applications' },
		'course-12': { id: 'course-12', desc: 'Software Engineering' },
		'course-13': { id: 'course-13', desc: 'Secure Programming' },
		'course-14': { id: 'course-14', desc: 'Computer Graphics' },
		'course-15': { id: 'course-15', desc: 'Computer Networking' },
		'course-16': { id: 'course-16', desc: 'Basic Statistics' },
		'course-17': { id: 'course-17', desc: 'Public Speaking' },
		'course-18': { id: 'course-18', desc: 'Calculus I' },

	},
	availableCourses: {
		/* Auto-populated from master course list minus semester course lists on 'boot' */
	},
	semesters: {
		'courselist': { id: 'courselist', title: 'Course List',   courseIds: ['course-6', 'course-7', 'course-8', 'course-9', 'course-10', 'course-11', 'course-12', 'course-13', 'course-14', 'course-15', 'course-16', 'course-17', 'course-18']},
		'sem-1': { id: 'sem-1', title: 'Fall 20',   courseIds: ['course-1', 'course-2', 'course-3']},
		'sem-2': { id: 'sem-2', title: 'Spring 21', courseIds: []},
		'sem-3': { id: 'sem-3', title: 'Fall 21',   courseIds: ['course-4']},
		'sem-4': { id: 'sem-4', title: 'Spring 22', courseIds: []},
		'sem-5': { id: 'sem-5', title: 'Fall 22',   courseIds: []},
		'sem-6': { id: 'sem-6', title: 'Spring 23', courseIds: ['course-5']},
		'sem-7': { id: 'sem-7', title: 'Fall 23',   courseIds: []},
		'sem-8': { id: 'sem-8', title: 'Spring 24', courseIds: []},
	},
};

export default initialData;
