// Get references to the buttons and count display
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const countDisplay = document.getElementById('count');

// Initialize count variable
let count = 0;

// Function to add a ball
function addBall() {
  count++;
  updateCountDisplay();
}

// Function to subtract a ball
function subtractBall() {
  if (count > 0) {
    count--;
    updateCountDisplay();
  }
}

// Function to update count display
function updateCountDisplay() {
  countDisplay.textContent = count;
}

// Add event listeners to the buttons
addBtn.addEventListener('click', addBall);
subtractBtn.addEventListener('click', subtractBall);
