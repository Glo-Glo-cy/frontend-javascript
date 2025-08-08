import { Subjects } from './subjects/Cpp';
import { Subjects as SubjectsJava } from './subjects/Java';
import { Subjects as SubjectsReact } from './subjects/React';

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

// Create and export one Teacher object with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
