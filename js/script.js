console.log('js ok');

/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i 
membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche 
in allegato */ 

/* Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg  */


const cards = document.getElementById('cards');
//Creare l’array di oggetti con le informazioni fornite (bonus 2)
const teamMembers = [
    {
        Name:"Wayne Barnett",
        Role:"Founder & CEO",
        Img: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Img: "img/angela-caroll-chief-editor.jpg",
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Img: "img/walter-gordon-office-manager.jpg",
    },
    {
        Name: "Angela Lopez",
        Role: "Social Media Manager",
        Img: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Img: "img/scott-estrada-developer.jpg",
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Img: `img/barbara-ramos-graphic-designer.jpg`,
    },
];
console.log (teamMembers)
