const placeIdInput = document.getElementById('placeIdInput');

placeIdInput.addEventListener('focus', function() {
  this.style.transition = 'width 0.3s, height 0.3s';
  this.style.width = '400px';
  this.style.height = '60px';
});

placeIdInput.addEventListener('blur', async function() {
  this.style.width = '200px';
  this.style.height = '30px';

  const enteredPlaceId = this.value.trim();
  
  if (enteredPlaceId !== '') {
    try {
      const response = await fetch(`https://games.roblox.com/v1/games/multiget-place-details?placeIds=${enteredPlaceId}`);
      const data = await response.json();
      
      console.log('Result:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    console.error('Please enter a valid Place ID');
  }
});
