const toggleItemSelection = (event) => {
  const item = event.currentTarget;
  item.classList.toggle('selected');
  calculateTotalCost();
};

const calculateTotalCost = () => {
  const selectedItems = document.querySelectorAll('.gear-item.selected');
  const totalCost = Array.from(selectedItems).reduce(
    (acc, item) => acc + parseInt(item.dataset.cost),
    0
  );
  document.getElementById('total-cost').textContent = totalCost;
};

document.addEventListener('DOMContentLoaded', () => {
  const gearItems = document.querySelectorAll('.gear-item');
  gearItems.forEach((item) => {
    item.addEventListener('click', toggleItemSelection);
  });
});
