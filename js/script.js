const url = 'https://randomuser.me/api/?nat=us&results=12&inc=name,location,email,dob,cell,picture';
const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');

let people = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    generateIcons(data.results);
    people = data.results;
    console.log(people);
  });

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

//singel person is JUST a name, it means nothing
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

                // IMPORTANT: Below is only for exceeds tasks 
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
      `;
  gallery.insertAdjacentHTML('beforeend', htmlModal);

  modalClose();
};
const modalOpen = () => {
  [...document.getElementsByClassName('card')].forEach((card) => {
    card.addEventListener('click', (e) => {
      let dataIndex = card.getAttribute('data-index');
      //people[dataIndex] is an object from people array plus or index of (data-index) fron foear each index that i ppassed.
      //generateModal is passing in the information from person with certain index and then the modal of that ppops up
      generateModal(people[dataIndex]);
      nextButton();
    });
  });
};

const modalClose = () => {
  const closeBtn = document.querySelector('#modal-close-btn');
  const modal = document.querySelector('.modal-container');
  closeBtn.addEventListener('click', (e) => {
    modal.remove();
  });
};

/**
 * EXTRA CREDIT
 */
const nextButton = () => {
  const nextBtn = document.querySelector('#modal-next');
  const card = document.getElementsByClassName('.card');

  nextBtn.addEventListener('click', (e) => {
    console.log('next is firing');
  });
};

const backButton = () => {
  const backBtn = document.querySelector('#modal-prev');
  backBtn.addEventListener('click', (e) => {
    console.log('prev is firing');
  });
};

