// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

const greeting = function(greeting, firstName, lastName){
	if (greeting && firstName && lastName) {
		return `${greeting[0].toUpperCase() + greeting.slice(1)}, ${firstName[0].toUpperCase() + firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}.`;
	}
  return `Hello, Tirapat Numsinvichietchai.`
}

console.log(greeting());

console.log(greeting('hi', 'harry', 'hedger'));


