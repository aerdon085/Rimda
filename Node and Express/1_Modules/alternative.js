// this file is a demonstration of an alternative way to export

/* instead of exporting variables like this:
const items = ["item0", "item1"];
it can be done like this: */
module.exports.items = ["item0", "item1"];

const person = {name: "Bob"}
// singlePerson will now be how the file that requires this module refers to the var:person object, just like how items will be the name of the array assigned to module.exports.items
module.exports.singlePerson = person;

/* above can also use the following:
module.exports.singlePerson = person.name;
wherein when it will be required, the requiring file will only have to refer to the data "Bob" as var:singlePerson rather than var:singlePerson.name */