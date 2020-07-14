function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    listCourses(){
      console.log(this.courses);
    },
    addNote(courseCode, newNote) {
      this.courses.forEach(course => {
        if (course.code === courseCode) {
          course.note ? course.note += ('; ' + newNote) : course.note = newNote;
        }
      })
    },
    updateNote(courseCode, newNote) {
      this.courses.forEach(course => {
        if (course.code === courseCode) {
          course.note = newNote;
        }
      })
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`)
        }
      })
    },
  }
}

let school = {
  students: [],
  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (validYears.includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },
  addGrade(student, courseName, points) {
    const course = student.listCourses().filter((name) => name === courseName)[0];

    if (course) {
      course.grade = points;
    }
  },
  getReportCard(student) {
    student.listCourses().forEach(({grade, name}) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`);
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },
  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || {grade: undefined};
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${String(grade)}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  }

};



/*
Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.
*/

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//    { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
// getReportCard output
school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress
// courseReport output
school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined