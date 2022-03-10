const getButton = document.getElementById('get-persons');
const getSButton = document.getElementById('getS');

const personsElement = document.getElementById('persons');
const sAPI = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=S&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';
const apiUrl = 'http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=';


getSButton.addEventListener('click', async e => {
    // Hämta all data
    const response = await fetch(sAPI);
    // Konvertera till JSON
    const data = await response.json();
    console.log(data);
    // Skapa array med alla object
    const allPersons = data.personlista.person;
    
    // Logga namnet på första personen i listan.
    const person = allPersons[0].tilltalsnamn;
    console.log(person);
    
  
})

function createPersonElement() {
    
}
