// Use ES6 features like 'const' for constants and arrow functions

// Function to toggle selection of an item
const toggleItemSelection = (event) => {
  const item = event.currentTarget;
  item.classList.toggle('selected');
  calculateTotalCost();
};

// Function to calculate the total cost
const calculateTotalCost = () => {
  const selectedItems = document.querySelectorAll('.gear-item.selected');
  const totalCost = Array.from(selectedItems).reduce(
    (acc, item) => acc + parseInt(item.dataset.cost),
    0
  );
  document.getElementById('total-cost').textContent = totalCost;
};

// Add event listeners to each gear item
document.addEventListener('DOMContentLoaded', () => {
  const gearItems = document.querySelectorAll('.gear-item');
  gearItems.forEach((item) => {
    item.addEventListener('click', toggleItemSelection);
  });
});
