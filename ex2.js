const personnes = [
  { nom: "ALAMI", age: 33, estMember: true },
  { nom: "FATIHI", age: 24, estMember: false },
  { nom: "RAJI", age: 45, estMember: true },
  { nom: "RAMI", age: 37, estMember: false },
];

const members = [];

personnes.map((personne) => {
  if (personne.estMember) {
    members.push(personne);
  }
})
console.log(members)

const filterMembers = personnes.filter((member) => {
  return member.estMember === true;
})

console.log(filterMembers)