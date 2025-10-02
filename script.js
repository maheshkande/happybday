// --- Elements ---
const musicElement = document.getElementById('backgroundMusic'); 
const initialPopup = document.getElementById('initialPopup');
const startButton = document.getElementById('startButton');

const storySlide = document.getElementById('storySlide');
const slideImage = document.getElementById('slideImage');
const slideText = document.getElementById('slideText');
const nextSlideButton = document.getElementById('nextSlideButton');
const container = document.querySelector('.container'); 
const body = document.querySelector('body'); 

// --- Color Palette for Transitions ---
const colorPalette = [
    '#ffc0cb', // Light Pink
    '#add8e6', // Light Blue
    '#90ee90', // Light Green
    '#f08080', // Light Coral
    '#e6e6fa', // Lavender
    '#ffa07a', // Light Salmon
    '#bdb76b'  // Dark Khaki (subtle yellow)
];

// --- Story Data ---
const slideData = [
    {
        image: 'Snapchat-1145838159.jpg', 
        text: "ela start cheyalo or ela cheppalo teliyatledu anyway happiest birthday my most precious one💕. Appude nek 19yrs ochesai ra, lock down lo parchayam ayyavu annayya ani msg chesavu, chala important aipoyavu. Ala neetho years pass ayyayi chala love and care choopinchavu💛"
    },
    {
        image: 'Snapchat-365689331.jpg',
        text: "u r the best one ra. Yeppudu ala navvuthu undu ra, ni smile chala baguntundi. Neetho spend chesina every moment oka manchi memory ra🧡\n\n\"Ala ani yekkuva smile cheyaku ra distti thakkuthadi😸jk\""
    },
    {
        image: 'Snapchat-1427051426.jpg',
        text: "Enno sarlu rakhi roju rakhi kadthavu anukune vaadini but okasari kuda avvaledu kani oka rakhi roju kuda miss cheyale nannu wish cheyadam, na paina entha kopam unna avvi anni pakkaki petti wish chesavu🥺"
    },
    {
        image: 'Snapchat-1836466991.jpg',
        text: "na kosam oka gift 5yr dachipettavu chudu I can feel how I am being mean to you have always been my frst priority."
    },
    {
        image: 'Snapchat-1563547988.jpg',
        text: "No matter how many mistakes I’ve made, my love and respect for you will never change. You’ve always been my strength, my comfort, and my safe place. You deserve someone who will always protect your smile, never hurt your heart, and never let you feel alone."
    },
    {
        image: 'Snapchat-178153357.jpg',
        text: "You were the one who cared for me when no one else did, the one who made sure I never felt alone. Every little act of love from u still lives in my heart, and I realize now how deeply I needed it, how much I need u even today."
    },
    {
        image: 'Snapchat-195531423.jpg',
        text: "You always felt my pain even when I didn’t say a word, and you stood by me when I couldn’t stand for myself. That kind of care is rare, and I will never forget how much you gave without expecting anything in return."
    },
    {
        image: 'Snapchat-3578566.jpg', 
        text: "Happy Birthday to the sweetest sister in the world! 🎂✨ You are my biggest blessing, my endless joy, and the one I’ll love not just for today, but for forever — to infinity and beyond. May your heart always shine as bright as your smile.\" 💖\n\n\"Love you from the moon to the stars and beyond 🤗💕\""
    },
    {
        // THIS IS THE FINAL, TEXT-ONLY APOLOGY SLIDE
        image: null, 
        text: "*\"This may be the last time I get to speak to you like this, and I want every word to matter.\n\nYou have been my light, my strength, my safe place. You gave me more love and care than I ever deserved, and I failed to hold on to it. Every mistake I made has cost me the most precious person in my life — you.\n\nI know now that I’m not the brother you wanted… not the one you deserve. You deserve someone who will always protect your smile, never hurt your heart, and never let you feel alone. I wasn’t that person, though I wished I could be.\n\nNo matter where life takes you from here, please remember: every moment, every memory, every bit of love you gave me will stay with me. Even if I’m no longer by your side, a part of me will always be carrying you in my heart. I’m sorry… for everything.\"🥺❤*"
    }
];

// --- State Management ---
let currentSlideIndex = 0;
let isTyping = false;


// -----------------------------------------------------------
// A. TYPING EFFECT FUNCTION
// -----------------------------------------------------------
function typeWriter(text, i, element, callback) {
    if (i < text.length) {
        isTyping = true;
        
        const char = text.substring(i, i + 1);
        element.innerHTML = text.substring(0, i + 1).replace(/\n/g, '<br>');
        
        setTimeout(() => {
            typeWriter(text, i + 1, element, callback);
        }, 30); 
    } else {
        isTyping = false;
        if (callback) callback();
    }
}

// -----------------------------------------------------------
// B. COLOR CHANGER FUNCTION
// -----------------------------------------------------------
function changeBodyColor() {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    const newColor = colorPalette[randomIndex];
    
    // Smoothly transition the body's background color
    body.style.backgroundColor = newColor;
}


// -----------------------------------------------------------
// C. DISPLAY SLIDE FUNCTION
// -----------------------------------------------------------
function displaySlide(index) {
    const slide = slideData[index];
    slideText.innerHTML = ''; 
    const isLastSlide = index === slideData.length - 1;

    // --- CRITICAL FIX: LAST SLIDE & COLOR CHANGE STYLE ---
    if (isLastSlide) {
        // Black background for the final slide
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'; 
        body.style.backgroundColor = 'black'; 
        slideText.style.color = 'white';
        slideText.style.fontSize = '1.2em';
        
        // Hide the picture wrapper and center the text
        const wrapper = document.querySelector('.slide-content-wrapper');
        wrapper.style.display = 'block'; 
        slideImage.style.display = 'none';
        
        // FIX: Makes the final apology text box tall and scrollable
        slideText.style.width = '90%'; 
        slideText.style.height = '70vh'; 
        slideText.style.overflowY = 'scroll'; 
        slideText.style.textAlign = 'center';

    } else {
        // Color Change for all other slides
        changeBodyColor(); 
        
        // Reset styles for regular slides
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'; 
        slideText.style.color = '#333';
        slideText.style.fontSize = '1em';
        
        const wrapper = document.querySelector('.slide-content-wrapper');
        wrapper.style.display = 'flex'; 
        slideText.style.width = '200px'; 
        slideText.style.height = '390px'; 
        slideText.style.overflowY = 'auto'; 
        slideText.style.textAlign = 'left';
    }

    // 1. Handle Image Display (Standard Slides)
    if (slide.image) {
        slideImage.style.display = 'block';
        slideImage.src = slide.image;
    } 

    // 2. Set Button Text
    if (isLastSlide) {
        nextSlideButton.innerText = 'Finished (Click to Re-read)'; 
    } else {
        nextSlideButton.innerText = 'Next Memory';
    }

    // 3. Start Typing
    typeWriter(slide.text, 0, slideText, () => {
        // Typing complete
    });
}


// -----------------------------------------------------------
// D. EVENT LISTENERS
// -----------------------------------------------------------

// 1. Initial Start Button Click (Gatekeeper)
startButton.addEventListener('click', () => {
    // START MUSIC ONCE
    musicElement.src = 'aud.mp3'; 
    musicElement.loop = true;
    musicElement.play().catch(error => {
        console.log('Music playback failed, continuing story.');
    });

    // Hide the initial popup and show the story container
    initialPopup.style.display = 'none';
    storySlide.style.display = 'flex';

    // Start the very first slide
    displaySlide(currentSlideIndex);
});

// 2. Next Slide Button Click (Flow Controller)
nextSlideButton.addEventListener('click', () => {
    if (isTyping) return; 

    if (currentSlideIndex < slideData.length - 1) {
        currentSlideIndex++;
        displaySlide(currentSlideIndex);
    } else {
        // FIX: Play music when looping back to the first slide
        musicElement.play();
        currentSlideIndex = 0;
        displaySlide(currentSlideIndex);
    }
});
