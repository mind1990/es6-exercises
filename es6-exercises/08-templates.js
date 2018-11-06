// Given the data in the starting code, use a template string to produce the
// following string. Make sure the numbers, names, and team name actually come
// from the data.

//     There are 4 people on the tooling team.
//     Their names are Jennie, Ronald, Martin, Anneli.

const teamName = "tooling"
const people = [{name: "Jennie", role: "senior"},
                {name: "Ronald", role: "junior"},
                {name: "Martin", role: "senior"},
                {name: "Anneli", role: "junior"}]

let message = `There are ${people.length} people on the ${teamName} team.\nTheir names are ${people[0].name}, ${people[1].name}, ${people[2].name}, ${people[3].name}.`

console.log(message)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#The_tooling_team
