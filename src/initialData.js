const initialData = {
  courses: {
    'course-1': { id: 'course-1', desc: 'Computers and Modern Society' },
    'course-2': { id: 'course-2', desc: 'Programming I' },
    'course-3': { id: 'course-3', desc: 'Programming II' },
    'course-4': { id: 'course-4', desc: 'Data Structures' },
    'course-5': { id: 'course-5', desc: 'Algorithm Design and Analysis' },
  },
  semesters: [
    { id: 'sem-1', title: 'Fall 20',   courseIds: ['course-1', 'course-2', 'course-3']},
    { id: 'sem-2', title: 'Spring 21', courseIds: []},
    { id: 'sem-3', title: 'Fall 21',   courseIds: ['course-4']},
    { id: 'sem-4', title: 'Spring 22', courseIds: []},
    { id: 'sem-5', title: 'Fall 22',   courseIds: []},
    { id: 'sem-6', title: 'Spring 23', courseIds: ['course-5']},
    { id: 'sem-7', title: 'Fall 23',   courseIds: []},
    { id: 'sem-8', title: 'Spring 24', courseIds: []},
  ],
};

export default initialData;
