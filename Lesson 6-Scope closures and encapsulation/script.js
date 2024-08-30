// Exercise 1: String Filter Function
String.prototype.filter = function (bannedWords) {
    const words = this.split(' ');
    const filteredWords = words.filter(word => !bannedWords.includes(word));
    return filteredWords.join(' ');
};
console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"

// Exercise 2: Bubble Sort Algorithm
Array.prototype.bubbleSort = function () {
    const arr = this;
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3: Teacher Object using Function Constructor
function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
};

const teacher = new Teacher("Mr. Smith");
teacher.teach("Mathematics"); // Output: "Mr. Smith is now teaching Mathematics."

// Exercise 3: Teacher Object using Object.create
const createTeacher = (name) => {
    const teacher = Object.create(Teacher.prototype);
    teacher.name = name;
    return teacher;
};

const anotherTeacher = createTeacher("Ms. Johnson");
anotherTeacher.teach("Physics"); // Output: "Ms. Johnson is now teaching Physics."

// Exercise 4: Person, Student, and Professor Objects using Prototype Approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.salute = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student = new Student("Alice", 21, "Computer Science");
const professor = new Professor("Dr. Brown", 45, "Mathematics");

student.greeting(); // Output: "Hey, my name is Alice and I am studying Computer Science."
student.salute();   // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

professor.greeting(); // Output: "Greetings, my name is Dr. Brown and I am 45 years old."
professor.salute();   // Output: "Good day, my name is Dr. Brown and I am in the Mathematics department."

// Exercise 4: Person, Student, and Professor Objects using Function Constructor Approach
const createPerson = (name, age) => {
    return {
        name,
        age,
        greeting: function () {
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute: function () {
            console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
        }
    };
};

const createStudent = (name, age, major) => {
    const student = createPerson(name, age);
    student.major = major;
    student.greeting = function () {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };
    return student;
};

const createProfessor = (name, age, department) => {
    const professor = createPerson(name, age);
    professor.department = department;
    professor.salute = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    };
    return professor;
};

const studentFunc = createStudent("Bob", 22, "Biology");
const professorFunc = createProfessor("Dr. Green", 50, "Physics");

studentFunc.greeting(); // Output: "Hey, my name is Bob and I am studying Biology."
studentFunc.salute();   // Output: "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

professorFunc.greeting(); // Output: "Greetings, my name is Dr. Green and I am 50 years old."
professorFunc.salute();   // Output: "Good day, my name is Dr. Green and I am in the Physics department."
