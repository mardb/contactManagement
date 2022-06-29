const url = 'https://randomuser.me/api/?results=12';
const body = document.querySelector('body');
const gallery = document.querySelector('.gallery')
let people = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    generateIcons(data.results)
      people = data.results
      console.log(people)
  })


const generateIcons = (data) => {
  const items = data.forEach((item) => {
    const htmlcard = `
  <div class="card">
  <div class="card-img-container">
      <img class="card-img" src="${item.picture.thumbnail}" alt="profile picture">
  </div>
  <div class="card-info-container">
      <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
      <p class="card-text">${item.email}</p>
      <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
  </div>
</div>
  `;
  gallery.insertAdjacentHTML('beforeend', htmlcard);
  });

  const generateIcons = () => {
    const items2= data.forEach(item => {

      const htmlModal = `
    
      `
    }) 
  
  }


  // body.insertAdjacentHTML('beforeend', icons)
};
body.addEventListener('click', (e)=>{
 const targetClosest = e.target.closest('.card').children[1].children[0]
 console.log(targetClosest)
 //loop (for each )
 //if statement for each employee
 if (people.name === targetClosest.textContent){
  //modal
  console.log('true')
 }
})
/*
 *NOTE: When adding or concatenating to the DOM, avoid doing this: element.innerHTML += 'HTML string'. That technique rewrites the entire DOM. This is problematic because any rewritten elements won't retain any event listeners that were attached to the DOM before the rewrite occurs. Use this method instead: element.insertAdjacentHTML('beforeend', 'HTML string'). That technique will allow you to add strings of HTML to the DOM without disrupting what already exists in the DOM.
 */
