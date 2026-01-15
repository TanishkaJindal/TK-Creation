document.addEventListener("DOMContentLoaded", () => {
    
    // --- TYPEWRITER EFFECT ---
    const textElement = document.querySelector(".typewriter");
    const text = textElement.textContent;
    textElement.textContent = ""; // Clear text initially
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Typing speed
        }
    }
  
    setTimeout(typeWriter, 500);



    const overlay = document.getElementById("modal-overlay");
    
    
   
    function openModal(modal) {
        overlay.classList.remove("hidden");
     
        document.querySelectorAll('.modal-box').forEach(box => box.classList.add('hidden'));
     
        modal.classList.remove("hidden");
    }

  

});