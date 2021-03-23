// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

// <div>
//   <i class="fas fa-cat"></i>
//   <div class="title">CAT</div>
// </div>

const containerIcone = $(".icons");

// Milestone 2
// Coloriamo le icone per tipo

const colori = [
  "green",
  "red",
  "blue"
];

// creo un array vuoto dove vado ad inserire le categorie che trovo

const categorie = [];

// cerco le categorie nelle icone e se ne trovo di diverse le vado ad inserire nel mio array da riempire
icons.forEach((item, i) => {
  if (categorie.includes(item.category) == false) {
    categorie.push(item.category);
  }
});
console.log(categorie);
console.log(categorie + " categorie trovate tra le icone");

// vado a colorare le icone confrontando indice di colori con indice di categorie
const iconeColorate = icons.map((icone) => {
  const indexCategoria = categorie.indexOf(icone.category);
  const itemColor = colori[indexCategoria];
  icone.color = itemColor;
  return icone;
});

printIcons(containerIcone,iconeColorate);

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// vado a selezionarmi il selettore
const select = $("#type");
console.log(select);

// ciclo le categorie per creare le varie option dentro la select
categorie.forEach((item, i) => {
  // vado a creare l'html per le option
  const optionHtml = `<option value="${item}">${item}</option>`;
  // vado ad inserire html creato con append() nel contenitore select
  select.append(optionHtml);
});

// aggiungo l'evento .change()

select.change(function () {
  const optionSelected = $(this).val();
  let iconeFilter = iconeColorate.filter((icon) =>{
    return icon.category == optionSelected;
  });

  // creo una condizione in caso seleziono all
  if (iconeFilter.length == 0) {
    iconeFilter = iconeColorate;
  }

  printIcons(containerIcone,iconeFilter);
});


// funzioni
function printIcons(target,icons) {
  // setto vuoto l'html prima di andare ad inserire le icone
  target.html("");

  // eseguo un ciclo sulle iconeFilter
  iconeFilter.forEach((icone) => {
  // esplodo l'obj e cosi creo delle variabili da utilizzare
    const {name,family,prefix,color} = icone;
  // creo l'html da inserire
    const html = `<div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
    </div>`;
  // inserisco l'html creato con metodo append() nel div contenitore
    target.append(html);
  });
}
