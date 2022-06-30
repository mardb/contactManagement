const url = 'https://randomuser.me/api/?nat=us&results=12&inc=name,location,email,dob,cell,picture';
const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');

let people = [];
/**
 * Fetches data from url with specific information and returns 12 users
 * @param {String} url API url
 */
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    generateIcons(data.results);
    people = data.results;
  });

   /**
   * This function loops through api data to populate 12 users
   * appends html with users data to document
   * @param {String} url API url
  */
const generateIcons = (data) => {
  const items = data.forEach((item, index) => {

    const htmlcard = `
  <div class="card" data-index=${index}>
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

  modalOpen();
};
 /**
   * This function loops through api data to populate 12 users
   * @param [array] data 
   * appends html with single user data to document
  */
const generateModal = (singlePerson) => {
  const isoDate = singlePerson.dob.date.split('T')[0].split('-');
  const birthday = `${isoDate[1]}/${isoDate[2]}/${isoDate[0]}`;

  const htmlModal = `
      <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${singlePerson.picture.thumbnail}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${singlePerson.name.first} ${singlePerson.name.last}</h3>
                        <p class="modal-text">${singlePerson.email}</p> 
                        <p class="modal-text cap">${singlePerson.location.city}</p>
                        <hr>
                        <p class="modal-text">${singlePerson.cell}</p>
                        <p class="modal-text">${singlePerson.location.street.number} ${singlePerson.location.street.name}, ${singlePerson.location.city}, ${singlePerson.location.state} ${singlePerson.location.postcode}</p>
                        <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
                </div>
      `;
  gallery.insertAdjacentHTML('beforeend', htmlModal);

  modalClose();
};
 /**
   * This function loops through each user card that was initially created
   * When user clicks card, Modal is generated based on the info of user index that was added previously
  */
const modalOpen = () => {
  [...document.getElementsByClassName('card')].forEach((card) => {
    card.addEventListener('click', (e) => {
      let dataIndex = card.getAttribute('data-index');
      
      generateModal(people[dataIndex]);
    });
  });
};
 /**
   * This function closes modal
   * on click, modal is removed 
  */
const modalClose = () => {
  const closeBtn = document.querySelector('#modal-close-btn');
  const modal = document.querySelector('.modal-container');
  closeBtn.addEventListener('click', (e) => {
    modal.remove();
  });
};
