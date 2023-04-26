
const apiUrl = 'https://api.openai.com/v1/images/generations';
const chatgptKey = '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';

// function getIqAirVisualData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', api);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     console.log(xhr.status);
//     console.log(xhr.response);
//   });
//   xhr.send();
// }

// getIqAirVisualData();

function generateImg() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', apiUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${chatgptKey}`);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.status !== 200) {
        throw new Error(`API returned status code ${response.status}`);
      }
      const generatedImageUrl = response.data.data[0].url;
      return generatedImageUrl;
    } else {
      console.error(`API returned status code ${xhr.status}`);
      // Display user-friendly error message
      alert('Error generating image');
      throw new Error('Error generating image');
    }
  };
  const payload = JSON.stringify({
    model: 'image-alpha-001',
    prompt: 'little girl in pink dress',
    size: '512x512',
    response_format: 'url'
  });
  xhr.send(payload);
}

generateImg(function (error, imageUrl) {
  if (error) {
    // Handle error
    console.error(error);
  } else {
    // Use the generated image URL
    console.log(imageUrl);
  }
});
