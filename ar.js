// ar.js

document.addEventListener('DOMContentLoaded', () => {
  const uploadFileInput = document.getElementById('uploadFile');
  const generatePreviewButton = document.getElementById('generatePreview');
  const arContainer = document.getElementById('ar-container');
  const loadingSpinner = document.querySelector('.loading');

  // Handle file upload
  uploadFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      // Display the uploaded image
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgURL = e.target.result;
        // Optional: Show the uploaded image (for testing)
        // document.querySelector('.uploaded_image').src = imgURL;
        console.log('File uploaded:', file);
      };
      reader.readAsDataURL(file);
    }
  });

  // Generate AR Preview
  generatePreviewButton.addEventListener('click', () => {
    // Display loading spinner
    loadingSpinner.style.display = 'block';

    // Simulate the process of generating the AR preview
    setTimeout(() => {
      loadingSpinner.style.display = 'none';

      // Example AR container setup (add your AR content and logic here)
      arContainer.innerHTML = `
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" material="color: red;"></a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      `;

      // Initialize the A-Frame scene
      AFRAME.registerComponent('ar-content', {
        init: function () {
          this.el.addEventListener('loaded', () => {
            // Add AR content logic here
            console.log('AR content loaded');
          });
        }
      });

      arContainer.querySelector('a-scene').setAttribute('ar-content', '');
    }, 2000);  // Simulate a 2-second processing delay
  });
});
