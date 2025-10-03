    
// -----------------------------------------------------------
// C. DISPLAY SLIDE FUNCTION (The guaranteed stable version)
// -----------------------------------------------------------
function displaySlide(index) {
    const slide = slideData[index];
    slideText.innerHTML = ''; 
    const isLastSlide = index === slideData.length - 1;
    const wrapper = document.querySelector('.slide-content-wrapper');

    // *** TRIGGER SPARKLE EFFECT ON THE BUTTON ***
    nextSlideButton.classList.add('sparkle-effect');
    
    // Remove the class immediately after the animation completes (0.4s)
    // This MUST be done on a delay to avoid crashing the animation engine.
    setTimeout(() => {
        nextSlideButton.classList.remove('sparkle-effect');
    }, 400); 

    // --- LAST SLIDE (Full-screen apology) ---
    if (isLastSlide) {
        body.style.backgroundColor = 'black'; 
        
        // Hide image wrapper
        slideImageWrapper.style.display = 'none'; 
        
        // Make wrapper display block (not flex) and center the text container
        wrapper.style.display = 'block'; 
        wrapper.style.textAlign = 'center'; 
        wrapper.style.height = 'auto'; 

        // Apply final slide styles defined in CSS
        slideText.classList.add('final-slide-text');
        
    } else {
        // --- STANDARD SLIDES (Side-by-side) ---
        changeBodyColor(); 
        
        // Show image wrapper
        slideImageWrapper.style.display = 'block'; 
        
        // Make wrapper display flex (side-by-side)
        wrapper.style.display = 'flex'; 
        wrapper.style.textAlign = 'left';
        wrapper.style.height = '250px'; 

        // Remove final slide styles
        slideText.classList.remove('final-slide-text');
    }

    // 1. Handle Image Display
    if (slide.image) {
        slideImage.src = slide.image;
    } 

    // 2. Set Button Text
    nextSlideButton.innerText = isLastSlide ? 'Finished (Click to Re-read)' : 'Next Memory'; 

    // 3. Start Typing
    typeWriter(slide.text, 0, slideText, () => {
        // Typing complete
    });
}
