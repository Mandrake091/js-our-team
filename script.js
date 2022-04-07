ourTeam = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

function printCard() {
    let cardContainer = document.getElementsByClassName('team-container')[0];
    for (let i = 0; i < ourTeam.length; i++) {
        cardContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
                <img src=" ${ourTeam[i].img} " alt="Wayne Barnett"/>
            </div>
        <div class="card-text">
            <h3> ${ourTeam[i].name} </h3>
            <p> ${ourTeam[i].job} </p>
         </div>
    </div>`
    }
}
printCard();

let inputName = document.getElementById('name');

let job = document.getElementById('role');

let userImage = document.getElementById('image');

let addButton= document.getElementById('addMemberButton');

addButton.addEventListener('click', addUser);


function addUser(){

}
















console.log('ciao')