// const array = ['0', '13', '14','15','16'];

// for (const element of array ) {
//   console.log(element);
// }

// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"


// use Class and constructor

  class User{
    constructor (name, father,age ,nationality) {

  
    this.fullName = name
    this.fatherName =father
    this.Age = age
    this.Nation= nationality
    }
  }
  const userData = new User('ibrahim','sarwar','20','english'
  );
 document.getElementById("demo").innerHTML =" user name is "  +  userData.fullName  +  " father name is " + userData.fatherName + " age is " + userData.Age +" nationality is " + userData.Nation;
