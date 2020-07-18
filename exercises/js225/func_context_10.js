// const school = {
//   students: [],
//   addStudent(name, year) {
//     if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
//       const student = createStudent(name, year);
//       this.students.push(student);
//       return student;
//     } else {
//       console.log('Invalid Year');
//     }
//   },

//   enrollStudent(student, courseName, courseCode) {
//     student.addCourse({name: courseName, code: courseCode})
//   },

//   addGrade(student, courseName, grade) {
//     const course = student.listCourses().filter(({name}) => name === courseName)[0];

//     if (course) {
//       course.grade = grade;
//     }
//   },

//   getReportCard(student) {
//     student.listCourses().forEach(({grade, name}) => {
//       if (grade) {
//         console.log(`${name}: ${String(grade)}`);
//       } else {
//         console.log(`${name}: In progress`);
//       }
//     });
//   },

//   courseReport(courseName) {
//     function getCourse(student, courseName) {
//       return student.listCourses().filter(({name}) => name === courseName)[0];
//     }

//     const courseStudents = this.students.map(student => {
//       const course = getCourse(student, courseName) || { grade: undefined };
//       return { name: student.name, grade: course.grade };
//     }).filter(({grade}) => grade);

//     if (courseStudents.length > 0) {
//       console.log(`=${courseName} Grades=`);

//       const average = courseStudents.reduce((total, {name, grade}) => {
//         console.log(`${name}: ${String(grade)}`);
//         return total + grade;
//       }, 0) / courseStudents.length;

//       console.log('---');
//       console.log(`Course Average: ${String(average)}`);
//     }
//   },
// };

// In an earlier exercise, we created a school object. It works, however, it can still be improved. The following are improvements for you to implement:

// Make the list students private. Right now, anyone can gain access to it and manipulate it.
// Make the constraint for allowed values for years private variable. As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative.
// Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access.

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

const school = (() => {
  const students = [];
  const allowedYears = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }

  return {
    addStudent(name, year) {
      if (allowedYears.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({
        name: courseName,
        code: courseCode
      })
    },

    addGrade(student, courseName, grade) {
      const course = getCourse(student, courseName);

      if (course) {
        course.grade = grade;
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
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || {
          grade: undefined
        };
        return {
          name: student.name,
          grade: course.grade
        };
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
    },
  };
})();