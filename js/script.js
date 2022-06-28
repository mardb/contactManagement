const gallery = document.getElementById('gallery')
// console.log(gallery)
const modalContainer = document.querySelector('modal-container') 
const searchContainer = document.querySelector('search-container')

/**
 * FETCH FUNCTIONS
 */
fetch('https://randomuser.me/api/?results=12').then(response => response.json())
// .then(data => console.log(data.results))
.then(data => generateIcons(data.results))


/**
 * HELPER FUNCTIONS
 */
const generateIcons = (data) => {
  const icons = data.map(profile => `
    <div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${profile.picture.thumbnail}" alt="profile picture">
      </div>
      <div class="card-info-container">
        <h3 id="name" class="card-name cap">${profile.name.first} ${profile.name.last}</h3>
        <p class="card-text">${profile.email}</p>
        <p class="card-text cap">${profile.location.city}, ${profile.location.state}</p>
       </div>
    </div>
  `
  );
  gallery.insertAdjacentHTML('beforeend', icons)
     
}



/**
 * EVENT FUNCTIONS
 */



/**
 * POST DATA
 */
