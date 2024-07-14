// script.js

const designers = [
  {
    name: 'Designer 1',
    image: 'designer1.jpg',
    portfolio: 'Portfolio details for Designer 1.',
    email: 'designer1@example.com'
  },
  {
    name: 'Designer 2',
    image: 'designer2.jpg',
    portfolio: 'Portfolio details for Designer 2.',
    email: 'designer2@example.com'
  }
  // Add more designers as needed
];

function displayDesigners(designerList) {
  const gallery = document.getElementById('designerGallery');
  gallery.innerHTML = '';

  designerList.forEach(designer => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${designer.image}" alt="${designer.name}">
      <h3>${designer.name}</h3>
      <p>${designer.portfolio}</p>
      <button onclick="contactDesigner('${designer.email}')">Contact Designer</button>
    `;
    gallery.appendChild(div);
  });
}

function searchDesigners() {
  const query = document.getElementById('designerSearchInput').value.toLowerCase();
  const filteredDesigners = designers.filter(designer => designer.name.toLowerCase().includes(query));
  displayDesigners(filteredDesigners);
}

function contactDesigner(email) {
  alert(`You can contact the designer at: ${email}`);
}

// Initial display of all designers
displayDesigners(designers);

const products = [
  {
    name: 'Product 1',
    image: 'product1.jpg',
    description: 'Description for Product 1.',
    price: '₹1000'
  },
  {
    name: 'Product 2',
    image: 'product2.jpg',
    description: 'Description for Product 2.',
    price: '₹2000'
  }
  // Add more products as needed
];

function displayProducts(productList) {
  const gallery = document.getElementById('productGallery');
  gallery.innerHTML = '';

  productList.forEach(product => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <button onclick="placeOrder('${product.name}')">Place Order</button>
    `;
    gallery.appendChild(div);
  });
}

function searchItems() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
  displayProducts(filteredProducts);
}

function placeOrder(productName) {
  alert(`Order placed for: ${productName}`);
}

// Initial display of all products
displayProducts(products);

// scripts.js
function openPage(page) {
    window.open(`${page}.html`, '_self');
}
// Add this to your existing JavaScript file or a new <script> block
document.addEventListener('DOMContentLoaded', (event) => {
    const arTryonLink = document.querySelector('a[href="artryon.html"]');

    arTryonLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior if necessary
        // Add your custom JS functionality here
        console.log('AR Tryon link clicked');
        // You can redirect or load content dynamically
        window.location.href = 'artryon.html'; // Example redirection
    });
});
// scripts.js
// Example JavaScript for animating the search bar

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search_bar');
    const searchIcon = document.querySelector('.search_bar i');

    searchIcon.addEventListener('click', function() {
        if (searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
            searchIcon.style.transform = 'scale(1)';
        } else {
            searchBar.classList.add('active');
            searchIcon.style.transform = 'scale(1.2)';
        }
    });
});