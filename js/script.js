const cardsWrapper = document.getElementById('card-wrapper');
//Array dei membri del gruppo
const ourTeamArray = [
    NewMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    NewMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    NewMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    NewMember('Angela Lopez', 'Office LockManager', 'angela-lopez-social-media-manager.jpg'),
    NewMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    NewMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'),

];

for(let i = 0; i < ourTeamArray.length; i++){
    let card = [];
    let imgCard = [];

    createElementAppend('div', 'card', '',  cardsWrapper, 1);

    card =  document.querySelectorAll('.card');

    createElementAppend('img', 'img', '', card[i], 1);

    imgCard = document.querySelectorAll('.img');

    imgCard[i].src = `./img/${ourTeamArray[i].photo}`;

    createElementAppend('h4', 'title', ourTeamArray[i].name, card[i], 1);

    createElementAppend('span', 'subtitle', ourTeamArray[i].work, card[i], 1);

  
}


// FOR IN      --------
//Anche io, come molti, avevo usato il ciclo 'for in' in fase di milestone senza pusharlo, lo rimetto qui 

for(let i = 0;  i < ourTeamArray.length; i++){
    console.log('')
    console.log(ourTeamArray[i].name)
    for(let chiave in ourTeamArray[i]){
        console.log(chiave + ' ' + '='+ ' ' +ourTeamArray[i][chiave])
    }
}



//-------------------------------------
//      Function
//-------------------------------------

/**
 * Restituisce un nuovo oggetto che ha tre parametri interni
 * @param {any} nome
 * @param {any} work
 * @param {any} photo
 * @returns {any}
 */
function NewMember (name, work, photo){

    let member={};

    member.name= name,
    member.work= work;
    member.photo= photo;

    return member

};

/** Crea degli elementi con classe e li aggiunge all'elemento padre, il numero è specificabile */
function createElementAppend (elementoDaCreare, classe, contenuto, elementoGenitore, numeroElementi){
    
    for(let i= 0; i<numeroElementi; i++){

        let newEl = document.createElement(elementoDaCreare);
        newEl.classList.add(classe);
        newEl.innerHTML = contenuto;
    
        elementoGenitore.append(newEl);

    }
}

function inputNewMember(){
    
    const inputName = document.getElementById('name');
    const inputJob = document.getElementById('job');
    const inputPhoto = document.getElementById('photo');
    const btnCreateNewMember = document.getElementById('btn-create-new-memeber');




}