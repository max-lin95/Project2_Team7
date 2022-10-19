const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#program-name').value.trim();
    const volume = document.querySelector('#program-volume').value.trim();
    const description = document.querySelector('#program-desc').value.trim();
  
    if (name && volume && description) {
      const response = await fetch(`/api/programs`, {
        method: 'POST',
        body: JSON.stringify({ name, volume, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create Workout Program');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/programs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete Workout Program');
      }
    }
  };
  
  document
    .querySelector('.new-program-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.program-list')
    .addEventListener('click', delButtonHandler);