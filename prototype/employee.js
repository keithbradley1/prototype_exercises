function Employee (lastName, firstName) {
  this.firstName = firstName
  this.lastName = lastName
}

function Clinician (specialty) {
  this.profession = "Clinician"
  this.specialty = specialty

}
Clinician.prototype = new Employee();

function Operations (responsibility) {
  this.profession = 'Operations'
  this.responsibility = responsibility
}
Operations.prototype = new Employee();

function Department (departmentName) {
  this.departmentName = departmentName
}

function FieldOffice (city) {
  this.city = city
}
FieldOffice.prototype = new Department();


function Headquarters () {

}
Headquarters.prototype = new Department();

