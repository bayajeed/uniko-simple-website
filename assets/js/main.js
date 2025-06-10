
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


// select manu
function selectItem(element) {
  // Remove 'selected' class from all items
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => item.classList.remove('selected'));
  
  // Add 'selected' class to clicked item
  element.classList.add('selected');
  
  // Optional: Show which item is selected in console
  console.log("Selected item:", element.textContent);
}
