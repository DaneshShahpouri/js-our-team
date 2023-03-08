
//Array dei membri del gruppo
const ourTeamArray = [
    NewMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    NewMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    NewMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    NewMember('Angela Lopez', 'Office LockManager', 'angela-lopez-social-media-manager.jpg'),
    NewMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    NewMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'),
];



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
function NewMember(nome, work, photo){

    let member={};

    member.nome= nome,
    member.work= work;
    member.photo= photo;

    return member

}

