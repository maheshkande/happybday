document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const startPageWrapper = document.getElementById('startPageWrapper');
    const storyContainer = document.getElementById('storyContainer');
    const backgroundMusic = document.getElementById('backgroundMusic');

    startButton.addEventListener('click', () => {
        // 1. Start the music on user interaction
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(e => console.error("Music auto-play blocked.", e));

        // 2. Hide the start page
        startPageWrapper.style.opacity = '0';
        
        // 3. Show the story content after the fade
        setTimeout(() => {
            startPageWrapper.style.display = 'none';
            storyContainer.style.display = 'block'; // Change to block/flex for the story
            document.body.classList.add('dotted-background'); // Add the dots
            
            // 4. Fade in the story content
            setTimeout(() => {
                storyContainer.style.opacity = '1';
                // Scroll the page to the top of the content
                window.scrollTo(0, 0); 
            }, 50); 
        }, 1000); // Waits for the 1s CSS transition
    });
});
