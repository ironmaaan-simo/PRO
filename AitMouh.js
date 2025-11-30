//exercice 1
nums = [2, 5, 8, 7, 3]
nums2 = nums.map(function (num) {
    return num * 3
}
)

//exercice 2
const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chakib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];


mumbers = personnes.filter(function (m) {
    if (m.estMember == true) {
        return m.estMember
    }
})
names = mumbers.map(function (m) {
    return m.nom
})

//// Exercice 3
const inscriptions = [
    { id: 10, nom: 'Rami', filiere: 'DEV' },
    { id: 11, nom: 'Kamali', filiere: 'DEV' },
    { id: 12, nom: 'Fahmi', filiere: 'DEV' },
    { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];
function ajouterInscription(inscriptions, nouvelleInscription) {
    return [...inscriptions, nouvelleInscription];
}
