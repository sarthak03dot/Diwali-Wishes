// Fireworks and cursor trail
document.addEventListener("DOMContentLoaded", () => {
    const fireworksContainer = document.querySelector(".fireworks");
  
    // Function to create fireworks randomly
    function createFirework() {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 40 + "vh";
      fireworksContainer.appendChild(firework);
      setTimeout(() => firework.remove(), 2000);
    }
  
    setInterval(createFirework, 500); // Create fireworks every 500ms
  
    // Cursor trail effect
    const trailContainer = document.createElement("div");
    trailContainer.classList.add("trail-container");
    document.body.appendChild(trailContainer);
  
    // Function to create trail
    function createTrail(x, y) {
      const trail = document.createElement("div");
      trail.classList.add("trail");
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trailContainer.appendChild(trail);
  
      // Remove trail after a delay
      setTimeout(() => trail.remove(), 800);
    }
  
    // Event listener for mousemove
    window.addEventListener("mousemove", (event) => {
      createTrail(event.clientX, event.clientY);
    });
  });
  

  // Automatically play music on load
window.addEventListener("load", () => {
    const music = document.getElementById("diwaliMusic");
    const controlButton = document.getElementById("musicControl");
  
    // Play music automatically on load
    music.play();
  
    // Update the button text based on the state
    controlButton.textContent = music.paused ? "Play Music" : "Pause Music";
  });
// Toggle music playback
function toggleMusic() {
    const music = document.getElementById("diwaliMusic");
    const controlButton = document.getElementById("musicControl");
  
    if (music.paused) {
      music.play();
      controlButton.textContent = "Pause Music";
    } else {
      music.pause();
      controlButton.textContent = "Play Music";
    }
  }
  