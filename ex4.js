// Pure Insert using splice
let inscriptions = [
  { id: 10, nom: "ALAMI", filiere: "DEVOWFS" },
  { id: 11, nom: "RAJI", filiere: "DEVOWFS" },
  { id: 12, nom: "NAJI", filiere: "DEVOWFS" },
  { id: 13, nom: "IBRAHIMI", filiere: "DEVOWFS" },
];

const pureInsert = (inscriptions, index, newInscription) => {
  let clonedInscriptions = [...inscriptions];
  clonedInscriptions.splice(index, 0, newInscription);
  return clonedInscriptions;
};

const newInscription = { id: 14, nom: "ABDO", filiere: "DEVOWFS" };
const updatedInscriptions = pureInsert(inscriptions, 4, newInscription);
// console.log(updatedInscriptions);

const pureDeleteByPosition = (inscriptions, index) => {
  let clonedInscriptions = [...inscriptions];
  clonedInscriptions.splice(index, 1);
  return clonedInscriptions;
};

const deleted = inscriptions[2];
const updatedInscriptions2 = pureDeleteByPosition(inscriptions, 2);
// console.log(updatedInscriptions2);
// console.log(deleted);

// Pure Update using splice
const pureUpdateByPosition = (inscriptions, index, updated) => {
  let clonedInscriptions = [...inscriptions];
  clonedInscriptions.splice(index, 1, updated);
  return clonedInscriptions;
};

const updated = inscriptions[2];
const updatedInscriptions3 = pureUpdateByPosition(inscriptions, 2, {
  id: 14,
  nom: "YOUSSEF",
  filiere: "DEVOWFS",
});
// console.log(updatedInscriptions3);

const pureDeleteById = (inscriptions, id) => {
  let clonedInscriptions = [...inscriptions];
  let index = clonedInscriptions.findIndex(
    (inscription) => inscription.id === id
  );
  clonedInscriptions.splice(index, 1);
  return clonedInscriptions;
};

const pureUpdateById = (inscriptions, id, updated) => {
  let clonedInscriptions = [...inscriptions];
  let index = clonedInscriptions.findIndex(
    (inscription) => inscription.id === id
  );
  clonedInscriptions.splice(index, 1, updated);
  return clonedInscriptions;
};
