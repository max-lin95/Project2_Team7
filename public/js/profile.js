const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#info-name').value.trim();
  const username = document.querySelector('#info-username').value.trim();
  const country = document.querySelector('#info-country').value.trim();
  const city = document.querySelector('#info-city').value.trim();
  const state = document.querySelector('#info-state').value.trim();
  const address = document.querySelector('#info-address').value.trim();
  const bio = document.querySelector('#info-bio').value.trim();
  const gender = document.querySelector('#info-gender').value.trim();
  const birthday = document.querySelector('#info-birthday').value.trim();
  const height = document.querySelector('#info-height').value.trim();
  const weight = document.querySelector('#info-weight').value.trim();


  if (name && username && country && city && state && address && bio && gender && birthday && height && weight) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, username, country, city, state, address, bio, gender, birthday, height, weight }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to make changes');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'Update',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to make updates');
    }
  }
};

document
  .querySelector('.info')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);