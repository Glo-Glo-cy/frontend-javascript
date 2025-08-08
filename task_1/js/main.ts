// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Readonly after initialization
  readonly lastName: string; // Readonly after initialization
  fullTimeEmployee: boolean; // Always defined
  yearsOfExperience?: number; // Optional
  location: string; // Always defined
  [key: string]: any; // Allow additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// task_1/js/main.ts

// Teacher interface
export interface Teacher {
  readonly firstName: string; // Readonly after initialization
  readonly lastName: string;  // Readonly after initialization
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [propName: string]: any;    // Allow other attributes
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // Required
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// task_1/js/main.ts

// Teacher interface
export interface Teacher {
  readonly firstName: string; // Readonly after initialization
  readonly lastName: string;  // Readonly after initialization
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [propName: string]: any;    // Allow other attributes
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // Required
}

// Interface for the function printTeacher
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test printTeacher
console.log(printTeacher("John", "Doe")); // J. Doe


// task_1/js/main.ts

// Teacher interface
export interface Teacher {
  readonly firstName: string; // Readonly after initialization
  readonly lastName: string;  // Readonly after initialization
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [propName: string]: any;    // Allow other attributes
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // Required
}

// Interface for the function printTeacher
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface for StudentClass constructor
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing StudentClass methods
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
export class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ==== Example usage for testing ====
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher("John", "Doe")); // J. Doe

const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working


