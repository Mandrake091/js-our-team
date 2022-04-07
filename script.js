ourTeam = [{
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
let cardContainer = document.getElementsByClassName('team-container')[0]

function printCard() {
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
console.log(ourTeam)
printCard();

/////////Bonus


let addButton = document.getElementById('addMemberButton');
addButton.style.cursor = 'Pointer';
addButton.addEventListener('click', addUser);

let job = document.getElementById('role');
let inputName = document.getElementById('name');
let userImage = document.getElementById('image');

imageArray = [
    'img/new-team-member-01.jpg',
    'img/new-team-member-02.jpg',
    'img/new-team-member-03.jpg',
    'img/new-team-member-04.jpg'
];


function addUser() {

 for (let i = 0; i < imageArray.length; i++) { 
    
    newUser = {
        name: `${inputName.value}`,
        job: `${job.value}`,
        img: `${imageArray[i]}`
    }
}
    ourTeam.push(newUser)

        cardContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
                <img src=" ${imageArray[userImage.value]} " alt="Wayne Barnett"/>
            </div>
        <div class="card-text">
            <h3> ${newUser.name} </h3>
            <p> ${newUser.job} </p>
         </div>
    </div>`
}
