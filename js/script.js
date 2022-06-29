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

  const generateModal = (data) => {
    const items2 = data.forEach(item2 => {

      const htmlModal = `
      <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>

                // IMPORTANT: Below is only for exceeds tasks 
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
      `;
      gallery.insertAdjacentHTML('beforeend', htmlModal);
    }) 
  
  }

  // body.insertAdjacentHTML('beforeend', items2)
};
body.addEventListener('click', (e)=>{
 const targetClosest = e.target.closest('.card').children[1].children[0]
 console.log(targetClosest.innerHTML)
 console.log('outside loop')
 const peopleCard = people.forEach((person) => {
  console.log(' inside loop')
  if (person.name === targetClosest.innerHTML){
    //modal
    console.log('true')
   }

 })
 //loop (for each )
//  for(){}
 //if statement for each employee

})
/*
 *NOTE: When adding or concatenating to the DOM, avoid doing this: element.innerHTML += 'HTML string'. That technique rewrites the entire DOM. This is problematic because any rewritten elements won't retain any event listeners that were attached to the DOM before the rewrite occurs. Use this method instead: element.insertAdjacentHTML('beforeend', 'HTML string'). That technique will allow you to add strings of HTML to the DOM without disrupting what already exists in the DOM.
 */
// ------------------ javascript

