// Function to speak out loud the selected text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Add event listeners to cells for click events
document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    const text = cell.textContent.trim().split(' ')[0]; // Extract only the emoji
    alert(`You selected: ${text}`);
    speak(text); // Speak out loud the selected text
  });
});
