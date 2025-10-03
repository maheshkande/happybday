
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For My Dearest Sister</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💖</text></svg>">
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;700&display=swap">

<style>
    /* ------------------------------------------------ */
    /* GENERAL BODY & BACKGROUND - (Elegant Texture + Color Animation) */
    /* ------------------------------------------------ */
    body { 
        font-family: 'Poppins', sans-serif; 
        text-align: center; 
        margin: 0;
        /* Subtle repeating pattern for elegance (this WILL NOT conflict) */
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 100 100'%3E%3Cg opacity='0.3'%3E%3Cpath fill='%23ffffff' d='M0 0h100v100H0z'/%3E%3Ccircle cx='10' cy='10' r='10' fill='%23f0f0f0'/%3E%3Cpath fill='%23f0f0f0' d='M20 0h60v20H20z'/%3E%3Cpath fill='%23f0f0f0' d='M0 20v60h20V20z'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 80px 80px; 
        background-attachment: fixed;
        color: #1a1a1a;
        min-height: 100vh;
        display: flex; /* Centers everything */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-x: hidden; 
        transition: background-color 0.8s ease; 
    }
    .container { 
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        width: 100%;
        max-width: 420px;
        padding: 0; 
        min-height: 100vh;
    }
    
    /* ------------------------------------------------ */
    /* INITIAL POPUP (START SCREEN) */
    /* ------------------------------------------------ */
    #initialPopup {
        background: #fdf5f8; 
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        max-width: 90%;
        font-family: 'Dancing Script', cursive; 
        margin: auto; 
    }
    #startButton {
        background-color: #d881ab; 
        color: white;
        border: none;
        border-radius: 8px;
        padding: 15px 30px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: 'Poppins', sans-serif;
    }

    /* ------------------------------------------------ */
    /* SLIDE CONTENT - GUARANTEED SIDE-BY-SIDE LAYOUT */
    /* ------------------------------------------------ */
    #storySlide {
        display: none; 
        max-width: 90%;
        width: 380px; 
        height: 85vh; 
        padding: 10px;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
    }

    /* Outer wrapper for the content - Uses FLEXBOX for guaranteed side-by-side */
    .slide-content-wrapper {
        display: flex; 
        flex-direction: row;
        justify-content: space-between; 
        align-items: flex-start;
        width: 100%;
        height: 250px; 
        margin-bottom: 20px;
    }

    /* Image wrapper (The white frame) */
    #slideImageWrapper {
        width: 160px;
        height: 230px;
        background: white; 
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    /* Image inside the wrapper */
    #slideImage {
        width: 150px; 
        height: 220px; 
        object-fit: cover;
        border: 4px solid #b57a9f; 
        border-radius: 4px;
        margin: 0; 
    }

    /* Text box (The other frame) */
    #slideText {
        width: 210px; 
        height: 230px; 
        white-space: pre-wrap;
        font-size: 1em; 
        color: #333;
        padding: 10px;
        overflow-y: auto; 
        text-align: left;
        background: white; 
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    #nextSlideButton {
        background-color: #b57a9f;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 12px 30px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-top: 20px;
    }

    /* Final Slide Styles (Text-Only) */
    .final-slide-text {
        width: 95% !important; 
        height: 80vh !important;
        background: rgba(0, 0, 0, 0.9) !important;
        color: white !important;
        text-align: center !important;
        padding: 20px !important;
        overflow-y: scroll !important;
        box-shadow: none !important;
        font-size: 1.2em !important;
    }
</style>
</head>
<body>
    <audio id="backgroundMusic" preload="auto" loop></audio>

    <div class="container">
        <div id="initialPopup">
            <h1>A Special Gift Awaits You...</h1>
            <p>Please turn up your volume and click 'Start' to begin your birthday story.</p>
            <button id="startButton">Open Your Birthday Story! 💖</button>
        </div>

        <div id="storySlide">
            <div class="slide-content-wrapper">
                <div id="slideImageWrapper">
                    <img id="slideImage" src="" alt="A memory photo">
                </div>
                
                <p id="slideText"></p>
            </div>
            <button id="nextSlideButton">Next Memory</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
