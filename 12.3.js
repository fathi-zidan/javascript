const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson(type, id) {
        if (type === "teacher") {
            return this.teachers.find((teacher) => teacher.id === id);
        } else if (type === "student") {
            return this.students.find((student) => student.id === id);
        } else {
            return null; // Return null for invalid type
        }
    },
    assignStudent(id, subject) {
        const teacher = this.teachers.find((t) => t.subjects.includes(subject.toLowerCase()));
        const student = this.students.find((s) => s.id === id);

        if (teacher && student && teacher.capacityLeft > 0) {
            teacher.students.push(student.name);
            teacher.capacityLeft--;
            // console.log(`Assigned ${student.name} to ${subject} with teacher ${teacher.name}`);
        } else {
            console.log("Assignment failed. Check subject or teacher capacity.");
        }

    },
    assignTeachersSubject(teacher_id,new_subject){
        const teacher = this.teachers.find((t) =>t.id === teacher_id);
        if(teacher){
            teacher.subjects.push(new_subject);
        }else {
            console.log(`Teacher with ID ${teacher_id} not found.`);
          }
    }
}
// console.log(school.findPerson('student',10));
// console.log(school.findPerson('teacher',2));
console.log(school.assignStudent(10, 'biology'));
console.log(school.assignStudent(12, 'ethics'));
console.log(school.assignTeachersSubject(2, 'math'));
console.log(school.teachers);




// function findPerson(school,id){
//     const teacher = school.teachers;
//     const student = school.students;
//     for(let i=0;i<teacher.length;i++){
//         if (teacher[i].id === id){
//             return teacher[i];
//         }
//     }
//     for(let i=0;i<student.length;i++){
//         if (student[i].id === id){
//             return student[i];
//         }
//     }

// }
// console.log(findPerson(school,1));
// console.log(findPerson(school,10));