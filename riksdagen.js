// Alla parti knappar:
const getButton = document.getElementById('get-persons');
const getSButton = document.getElementById('getS');
const getMButton = document.getElementById('getM');
const getVButton = document.getElementById('getV');
const getMPButton = document.getElementById('getMP');
const getCButton = document.getElementById('getC');
const getKDButton = document.getElementById('getKD');
const getLButton = document.getElementById('getL');
const testButton = document.getElementById('test');
// Alla andra knappar:
const getYearInputButton  = document.getElementById('input-year-button');

// Alla loggor:
const mLogo = 'https://upload.wikimedia.org/wikipedia/commons/8/85/M_v1.svg';
const vLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/V%C3%A4nsterpartiet_logo.svg/640px-V%C3%A4nsterpartiet_logo.svg.png';
const sLogo = 'https://via.tt.se/data/images/00326/3a5b27f5-069d-4d43-bab4-b8db54db262c.png';
const kdLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Christian_Democrats_Sweden_logo_2017.svg/1200px-Christian_Democrats_Sweden_logo_2017.svg.png';
const mpLogo = 'https://upload.wikimedia.org/wikipedia/commons/d/df/MP_v1.svg';
const cLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C_v1.svg/1200px-C_v1.svg.png';
const lLogo = 'https://www.riksdagen.se/imagevault/publishedmedia/n7r95pms6kjgu7tisj2c/logo-l-large-ny3.jpg';

let emptyName = false

const apiUrl = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';

// Exportera delarna ut i olika funktioner                          x
// Se till att allt funkar                                          x
// Skapa element och sätt in namnet                                 x
// Se till att getData reurnerar lista med alla personer            x
// Gå igenom listan i getAndCreatePersons och skapa namn element    x
// Skapa upp element med alla namn                                  x
// Skapa knappar med alla partier                                   x
// Fixa bool så fönstret blir tomt innan nytt parti laddar          x
// Skicka med hel person till createPelement                        x
// Fixa efternamn                                                   x
// Sortera upp alla personer i en grid                              x
// Försök komma åt födelseår                                        x
// Lägg till sök ledamot på år                                      x
// Se till att rätt parti logo visas                                x
// Byt till flex så att sidan funkar i mobil                        x   
// Flytta upp push knappen                                          x

getYearInputButton.addEventListener('click', function() {
    getAndCompareBirthYear();
    
})





getSButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=S&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getMButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=M&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getVButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=V&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getMPButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=MP&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getCButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=C&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getKDButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=KD&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})

getLButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=L&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
    getAndCreatePersons(api)
    
})



async function getAndCreatePersons(api) {
    if (emptyName == true) {
        console.log("Empty name är true")
        // Om det redan står namn i rutan, töm den.
        const allPersons = document.getElementById('allPersons');
        allPersons.innerHTML = '';
    }
    const name = await getData(api);
   // createPersonElement(name);
}

async function getData(api) {
     // Hämta all data
     const response = await fetch(api);
     // Konvertera till JSON
     const data = await response.json();
     console.log(data);
     // Skapa array med alla object
     const allPersons = data.personlista.person;
     
     allPersons.forEach(person => {
        const newPerson = person;
        createPersonElement(newPerson);

         
     });

     emptyName = true
     // Logga namnet på första personen i listan.
    /*  const person = allPersons[0].tilltalsnamn;
     console.log(person);
     return person; */
}

function createPersonElement(person) {
    // Hitta Parent div
    const allPersons = document.getElementById('allPersons');
    

    // Skapa ny div för enstaka person
    const personElement = document.createElement('div');

    // Lägg till class namn
    personElement.className = 'person';

    // Lägg till bild
    const image = document.createElement('img');
    image.className = 'person-image';
    image.src = person.bild_url_192;

    personElement.appendChild(image);

    // Lägg till image beroende på parti
    const logoImage = document.createElement('img');
    logoImage.className = 'logo-image';
    const party = person.parti;
    switch (party) {
        case 'M':
            logoImage.src = mLogo;
            break;

        case 'S':
            logoImage.src = sLogo;
            break;
        case 'V':
            logoImage.src = vLogo;
            break;
        case 'MP':
            logoImage.src = mpLogo;
            break;
        case 'C':
            logoImage.src = cLogo;
            break;
        case 'L':
            logoImage.src = lLogo;
            break;
        case 'KD':
            logoImage.src = kdLogo;
            break;
        default:
            console.log('No logo')

    }

    
    const personName = document.createElement('p');
    personName.innerHTML = person.tilltalsnamn + ' ' + person.efternamn;
    personElement.appendChild(personName);
    personElement.appendChild(logoImage);
    

    // Appenda till parent
    allPersons.appendChild(personElement);
    
}

async function getAndCompareBirthYear() {
    // Skapa input år const
        const inputBirthYear = getInputYear()
    
    
    // Hämta lista med alla personer
        const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&sort=f%C3%B6dd_%C3%A5r&sortorder=asc&termlista='
        // Hämta all data
        const response = await fetch(api);
        // Konvertera till JSON
        const data = await response.json();
        // Skapa array med alla object
        const allPersons = data.personlista.person;
        // Cleara fönstret OM det inte är clearat.
        if (emptyName == true) {
            console.log("Empty name är true")
            // Om det redan står namn i rutan, töm den.
            const allPersons = document.getElementById('allPersons');
            allPersons.innerHTML = '';
        }
        allPersons.forEach(person => {
            // KOlla så partiet inte är SD
            if (person.parti != 'SD') {

                if (inputBirthYear == person.fodd_ar) {
                    const newPerson = person;
               createPersonElement(newPerson);
                }

            }
    // OM någon är född samma år...skapa element med matchningar!
            
      
        });
    
        emptyName = true
        // OM ingen matchar, skapa felmeddelande!
        
    }
    
    function getInputYear() {
    
        const inputYearField = document.getElementById('input-year');
        const inputYear = inputYearField.value;
        
        if (inputYear.length > 4) {
            /* console.log("To big!") */
        }else{
            /* console.log("Success!") */
            // Tömmer fältet
            inputYearField.value = ''
            return inputYear
        }
          
    }

/* testButton.addEventListener('click', async e => {
    const api = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=MP&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista='
    
    // Hämta all data
    const response = await fetch(api);
    // Konvertera till JSON
    const data = await response.json();

    // Skapa array med alla object
    const allPersons = data.personlista.person;
    // Ta första personen från listan
    const firstPerson = allPersons[0];
    const yob = allPersons[0].fodd_ar;

    console.log(yob);



    //const allPersonsDiv = document.getElementById('allPersons');
    
}) */
