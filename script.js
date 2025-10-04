                         
        document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const startPageWrapper = document.getElementById('startPageWrapper');
    const storySlide = document.getElementById('storySlide');
    const slideImage = document.getElementById('slideImage');
    const slideImageWrapper = document.getElementById('slideImageWrapper');
    const slideText = document.getElementById('slideText');
    const nextSlideButton = document.getElementById('nextSlideButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const finalHeartRain = document.getElementById('finalHeartRain');

    // --- Configuration ---
    let currentSlideIndex = 0;
    const MUSIC_FILE = 'music.mp3'; // Ensure this file exists in your directory!
    const TYPING_SPEED = 40; // Milliseconds per character (Slightly slower for stability)

    // Your Story Content
    const storySlides = [
        {
            image: 'photo1.jpg',
            text: "My Dear Sister, I wanted to tell you how much you mean to me. I know I don't say this often, but you are the best sister a person could ask for. Thank you for always being there for me, unconditionally.",
            buttonText: 'Next Memory'
        },
        {
            image: 'photo2.jpg',
            text: "Remember all those silly fights we used to have? They feel so small now. Every memory we share, whether good or bad, I cherish it all. You are a true blessing in my life.",
            buttonText: 'Next Memory'
        },
        {
            image: 'photo3.jpg',
            text: "Ela start cheyalo, ela end cheyalo teliyadu. Ur the best one ra, you always had my back. Enno sarlu rakhi roju rakhi kadthavu anukune vaadini but I know you love me equally.",
            buttonText: 'Next Memory'
        },
        {
            image: 'photo4.jpg',
            text: "Ala ani yekkuva smile cheyaku ra, distti thakkuthundhi. I love that you're always trying to make things better for everyone, even when you're going through tough times. You are stronger than you think.",
            buttonText: 'Next Memory'
        },
        {
            image: 'photo5.jpg',
            text: "From sharing secrets to covering up for each other, we've done it all. May your special day be filled with joy, laughter, and everything you wished for.",
            buttonText: 'Next Memory'
        },
        // The Final Slide (Special Styling)
        {
            image: null, 
            text: "*\"This may be the last time I get to speak to you like this, and I want every word to matter. You have been my light, my strength, my safe place. You gave me more love and care than I ever deserved, and I failed to hold on to it. Every mistake I made has cost me the most precious person in my life — you.\"*",
            buttonText: 'Finished (Click to Re-read)',
            isFinal: true
        }
    ];

    // --- Core Functions ---

    // CRITICAL FIX: Reverting to stable setTimeout typing function
    function typeWriter(text, element, callback) {
        let i = 0;
        element.textContent = ''; // Clear existing text
        
        // Reset scrolling before typing starts
        element.scrollTop = 0;
        element.style.overflowY = 'hidden'; 
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, TYPING_SPEED); // Use standard setTimeout for reliable timing
            } else {
                // Re-enable scrolling after typing is complete
                element.style.overflowY = 'auto'; 
                if (callback) callback();
            }
        }
        type();
    }

    function showSlide(index) {
        const slide = storySlides[index];

        // 1. Image handling
        if (slide.image) {
            slideImage.src = slide.image;
            slideImageWrapper.style.display = 'block';
            slideImageWrapper.classList.remove('hidden-slide');
        } else {
            // Hide image wrapper for the final slide
            slideImageWrapper.style.display = 'none';
            slideImageWrapper.classList.add('hidden-slide');
        }

        // 2. Button Text Update
        nextSlideButton.textContent = slide.buttonText;
        
        // Ensure the next button logic points to the correct handler function
        if (slide.isFinal) {
            nextSlideButton.onclick = returnToStart;
        } else {
            nextSlideButton.onclick = goToNextSlide;
        }

        // 3. Final Slide Aesthetics and Background Control
        if (slide.isFinal) {
            slideText.classList.add('final-slide-text');
            storySlide.style.backgroundColor = 'black';
            document.body.style.backgroundColor = 'black';
            document.body.classList.remove('dotted-background'); // Remove dots (as requested)
            finalHeartRain.style.display = 'block';
            backgroundMusic.pause(); // Stop music
            backgroundMusic.currentTime = 0;
        } else {
            slideText.classList.remove('final-slide-text');
            const colors = ['#f5c5b5', '#b5f5c5', '#c5b5f5'];
            storySlide.style.backgroundColor = colors[index % colors.length];
            document.body.style.backgroundColor = colors[index % colors.length];
            document.body.classList.add('dotted-background'); // Ensure dots are here
            finalHeartRain.style.display = 'none';
        }
        
        // 4. Typing Effect
        typeWriter(slide.text, slideText);
    }
    
    // Function to handle moving to the next story slide
    function goToNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % storySlides.length;
        showSlide(currentSlideIndex);
    }
    
    // CRITICAL FIX: Function to handle the return to start page
    function returnToStart() {
        currentSlideIndex = 0;
        // Pause and reset music (again, just in case)
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        
        // Fade out story slide
        storySlide.style.opacity = '0';
        finalHeartRain.style.display = 'none';

        // Fade in start page
        setTimeout(() => {
            storySlide.style.display = 'none';
            storySlide.style.opacity = '1'; // Reset opacity for next run
            startPageWrapper.style.display = 'flex';
            document.body.classList.remove('dotted-background');
            document.body.style.backgroundColor = '#f0f0f0'; // Reset body color to light gray (from initial CSS)
            startPageWrapper.style.opacity = '1';
        }, 800);
    }
    
    // Function to start the slideshow from the start page
    function startSlideshow() {
        // Music starts here
        backgroundMusic.src = MUSIC_FILE;
        backgroundMusic.volume = 0.5; 
        backgroundMusic.play().catch(e => console.log("Music auto-play blocked.", e));

        startPageWrapper.style.opacity = '0';
        setTimeout(() => {
            startPageWrapper.style.display = 'none';
            storySlide.style.display = 'flex';
            
            // Start the story with the dot pattern
            document.body.classList.add('dotted-background'); 

            showSlide(currentSlideIndex);
        }, 1000);
    }

    // --- Event Listeners ---
    startButton.addEventListener('click', () => {
        // Add a sparkle animation for visual feedback
        startButton.classList.add('sparkle-effect');
        setTimeout(() => {
            startButton.classList.remove('sparkle-effect');
            startSlideshow();
        }, 300);
    });

    // Initialize the final slide styling for the initial load
    // This is needed to ensure the text box size is initially correct.
    slideText.classList.add('final-slide-text'); 
});
