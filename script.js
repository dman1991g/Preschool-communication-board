document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    const text = cell.textContent.trim().split(' ')[0]; // Extract only the emoji
    alert(`You selected: ${text}`);
    // You can add more functionality here, such as speaking out the selected item or performing an action
  });
});
