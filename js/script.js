const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// FUNZIONE CHE MI CREA LA SINGOLA CARD 
const generateTeamCard = (member) => {
  const card = document.createElement("div");
  // RESPONSIVE
  card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

  // COPIO L'HTML DELL'ELEMENTO DA GENERARE
  card.innerHTML = `<div class="card shadow d-flex flex-row align-items-center p-2">
                <img src="${member.img}" class="team-img" alt="${member.name}">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                    <p class="card-text"><small class="text-muted">${member.email}</small></p>
                </div>
             </div>
    `; 
}

// CICLO L'ARRAY
for (let i=0; i<teamMembers.length; i++){
  generateTeamCard(teamMembers[i]);
}
