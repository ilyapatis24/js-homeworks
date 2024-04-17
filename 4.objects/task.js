function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty(`marks`) === false || this.marks.length === 0) {
    return 0;
  }
  const averageMark = this.marks.reduce((acc, mark, index, arr) => {
    acc += mark;
    if (index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
    }, 0);
    return averageMark;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Ilya", "male", 37);
student1.setSubject("Geometry");
student1.addMarks(5,3);
student1.addMarks(4);
student1.addMarks(4);

let student2 = new Student("Masha", "female", 21);
student2.setSubject("Physics");
student2.addMarks(2,3);
student2.addMarks(2);
student2.addMarks(2);
student2.exclude('low grades')

console.log(student1); 
console.log(student2);

