const inscriptions = [
  { id: 10, nom: "ALAMI", filiere: "DEVOWFS", frais: 500 },
  { id: 11, nom: "RAJI", filiere: "DEVOWFS", frais: 900 },
  { id: 12, nom: "NAJI", filiere: "DEVOWFS", frais: 100 },
  { id: 13, nom: "IBRAHIMI", filiere: "DEVOWFS", frais: 400 },
];


const pureAppendInscription = (inscriptions, nauvInscription) => {
    return [...inscriptions, nauvInscription];
};

const totalFrais = inscriptions.reduce((total, inscription) => {
    return total + inscription.frais;
}, 0);

const Inscription = pureAppendInscription(inscriptions, { id: 14, nom: "IBRAHIMI", filiere: "DEVOWFS", frais: 400 });
console.log(Inscription);
console.log(`total is ${totalFrais}`);

