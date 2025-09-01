// Umar J's real projects and tools
const toolsData = [
    {
        id: 1,
        name: "Drive to Drive Uploader",
        category: "web",
        description: "Upload files directly from one Google Drive to another without downloading. My biggest and most popular project that helps thousands of users transfer files seamlessly!",
        icon: "fas fa-cloud-upload-alt",
        technologies: ["Google Apps Script", "JavaScript", "OAuth 2.0"],
        demoUrl: "https://script.google.com/macros/s/AKfycbxdJYgCNzyfqj6AhlrNCP2tLdeiKPr8JWI3O0dgJ-FWCteYY92y3dmrb1eEw1k1EGNO/exec",
        githubUrl: "https://github.com/umarJ-max",
        downloadUrl: "https://script.google.com/macros/s/AKfycbxdJYgCNzyfqj6AhlrNCP2tLdeiKPr8JWI3O0dgJ-FWCteYY92y3dmrb1eEw1k1EGNO/exec",
        features: [
            "Direct Google Drive to Drive transfer",
            "No download/upload required",
            "Secure OAuth authentication",
            "Works on any device with internet",
            "Saves time and bandwidth"
        ]
    },
    {
        id: 2,
        name: "ULTIMATE Drive Downloader",
        category: "web",
        description: "Download any file or folder from Google Drive with just a link. My second biggest project that makes Google Drive downloads super easy and fast!",
        icon: "fas fa-download",
        technologies: ["Google Apps Script", "JavaScript", "Drive API"],
        demoUrl: "https://script.google.com/macros/s/AKfycbw02NxUZO3kjSpdEuqNG4hATcmziTfGHze5xcNrjh0oG8zqOyQkstwLLjNocUMjCZbb/exec",
        githubUrl: "https://github.com/umarJ-max/Ultimate-Drive-Downloder",
        downloadUrl: "https://script.google.com/macros/s/AKfycbw02NxUZO3kjSpdEuqNG4hATcmziTfGHze5xcNrjh0oG8zqOyQkstwLLjNocUMjCZbb/exec",
        features: [
            "Download Google Drive files/folders instantly",
            "No sign-in required for public files",
            "Fast and simple interface",
            "Bypass Google Drive download limits",
            "Works with any Google Drive link"
        ]
    },
    {
        id: 3,
        name: "Text to QRCode Generator",
        category: "utility",
        description: "Convert any text, URL, or message into a beautiful QR code instantly. Perfect for sharing WiFi passwords, links, or contact information!",
        icon: "fas fa-qrcode",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vercel"],
        demoUrl: "https://text-to-qr-code-eta.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Text-To-QR_Code",
        downloadUrl: "https://text-to-qr-code-eta.vercel.app/",
        features: [
            "Instant QR code generation",
            "Download QR codes as images",
            "Clean and modern interface",
            "Mobile-friendly design",
            "No limits, completely free"
        ]
    },
    {
        id: 4,
        name: "Gun, Snake, Water Game",
        category: "game",
        description: "A fun and addictive browser game based on the classic Rock-Paper-Scissors concept. Play against the computer and test your strategy skills!",
        icon: "fas fa-gamepad",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vercel"],
        demoUrl: "https://gun-water-snake-game.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Gun_Water_Snake-Game",
        downloadUrl: "https://gun-water-snake-game.vercel.app/",
        features: [
            "Classic Gun-Snake-Water gameplay",
            "Play against smart computer AI",
            "Score tracking and statistics",
            "Responsive design for all devices",
            "Simple and addictive gameplay"
        ]
    },
    {
        id: 5,
        name: "The Perfect Guess Game",
        category: "game",
        description: "Test your intuition and luck! Guess the secret number in this engaging number guessing game. Simple to play but hard to master!",
        icon: "fas fa-dice",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vercel"],
        demoUrl: "https://the-perfect-guess-game.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/The-Perfect-Guess-Game",
        downloadUrl: "https://the-perfect-guess-game.vercel.app/",
        features: [
            "Random number guessing challenge",
            "Multiple difficulty levels",
            "Score tracking system",
            "Fun for all ages",
            "Responsive and mobile-friendly"
        ]
    },
    {
        id: 6,
        name: "Would You Rather",
        category: "game",
        description: "A fun decision-making game that presents you with challenging 'Would You Rather' questions. Perfect for parties, friends, or just passing time!",
        icon: "fas fa-question-circle",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vercel"],
        demoUrl: "https://would-you-rather-khaki.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Would-you-Rather",
        downloadUrl: "https://would-you-rather-khaki.vercel.app/",
        features: [
            "Hundreds of thought-provoking questions",
            "Clean and intuitive interface",
            "Perfect for social gatherings",
            "Mobile-responsive design",
            "Endless entertainment"
        ]
    },
    {
        id: 7,
        name: "Currency Converter",
        category: "utility",
        description: "Real-time currency converter with live exchange rates. Convert between different currencies instantly with accurate and up-to-date rates!",
        icon: "fas fa-exchange-alt",
        technologies: ["JavaScript", "API Integration", "CSS3", "Vercel"],
        demoUrl: "https://currency-converter-taupe-beta.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Currency-Converter",
        downloadUrl: "https://currency-converter-taupe-beta.vercel.app/",
        features: [
            "Real-time exchange rates",
            "Support for 100+ currencies",
            "Clean and modern interface",
            "Fast conversion calculations",
            "Mobile-friendly design"
        ]
    },
    {
        id: 8,
        name: "ROLLING Dice Simulator",
        category: "game",
        description: "A realistic dice rolling simulator with beautiful animations. Perfect for board games, decision making, or just having fun!",
        icon: "fas fa-dice-six",
        technologies: ["JavaScript", "CSS3 Animations", "HTML5", "Vercel"],
        demoUrl: "https://rolling-dice-simulater.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Rolling-Dice-Simulater",
        downloadUrl: "https://rolling-dice-simulater.vercel.app/",
        features: [
            "Realistic dice rolling animation",
            "Multiple dice support",
            "Sound effects and visuals",
            "Random number generation",
            "Perfect for board games"
        ]
    },
    {
        id: 9,
        name: "Link Lock Sites Blocker",
        category: "extension",
        description: "Chrome extension to block distracting websites and increase productivity. Take control of your browsing habits and stay focused!",
        icon: "fas fa-shield-alt",
        technologies: ["JavaScript", "Chrome Extensions API", "HTML5", "CSS3"],
        demoUrl: "https://chrome.google.com/webstore",
        githubUrl: "https://github.com/umarJ-max/LinkLock-Sites-Blocker-Extension",
        downloadUrl: "https://chrome.google.com/webstore",
        features: [
            "Block distracting websites",
            "Custom website lists",
            "Time-based blocking",
            "Productivity enhancement",
            "Easy Chrome installation"
        ]
    },
    {
        id: 10,
        name: "Password Generator",
        category: "utility",
        description: "Generate strong, secure passwords with customizable options. Create uncrackable passwords for all your accounts and stay secure online!",
        icon: "fas fa-key",
        technologies: ["JavaScript", "Cryptography", "HTML5", "CSS3"],
        demoUrl: "https://password-generator-two-sand.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Password-Generator",
        downloadUrl: "https://password-generator-two-sand.vercel.app/",
        features: [
            "Customizable password length",
            "Include/exclude character types",
            "Strong encryption algorithms",
            "Copy to clipboard functionality",
            "Security strength indicator"
        ]
    },
    {
        id: 11,
        name: "Website Blocker Desktop",
        category: "desktop",
        description: "Desktop application to block websites and increase productivity. Self-hosted solution for managing internet usage and staying focused!",
        icon: "fas fa-desktop",
        technologies: ["Python", "Tkinter", "System APIs", "Desktop App"],
        demoUrl: "https://github.com/umarJ-max/Website-Blocker-Desktop-version-",
        githubUrl: "https://github.com/umarJ-max/Website-Blocker-Desktop-version-",
        downloadUrl: "https://github.com/umarJ-max/Website-Blocker-Desktop-version-",
        features: [
            "Block websites system-wide",
            "Schedule blocking times",
            "Password protection",
            "Self-hosted solution",
            "Cross-platform desktop app"
        ]
    },
    {
        id: 12,
        name: "PDF to Image Converter",
        category: "utility",
        description: "Convert PDF files to high-quality images instantly. Support for multiple formats and batch conversion for all your document needs!",
        icon: "fas fa-file-pdf",
        technologies: ["JavaScript", "PDF.js", "Canvas API", "Vercel"],
        demoUrl: "https://pdf-to-image-converter-rosy.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/PDF-to-Image-converter",
        downloadUrl: "https://pdf-to-image-converter-rosy.vercel.app/",
        features: [
            "Convert PDF to PNG/JPG",
            "High-quality image output",
            "Batch conversion support",
            "No file size limits",
            "Client-side processing"
        ]
    },
    {
        id: 13,
        name: "GIF Creator",
        category: "utility",
        description: "Create animated GIFs from images or videos easily. Perfect for memes, social media, or just having fun with animations!",
        icon: "fas fa-images",
        technologies: ["JavaScript", "Canvas API", "File Processing", "Vercel"],
        demoUrl: "https://gif-creator-zeta.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Gif-Creator",
        downloadUrl: "https://gif-creator-zeta.vercel.app/",
        features: [
            "Create GIFs from images",
            "Customizable frame rate",
            "Easy drag-and-drop interface",
            "Preview before download",
            "High-quality output"
        ]
    },
    {
        id: 14,
        name: "Instagram Downloader",
        category: "utility",
        description: "Download Instagram photos, videos, and stories easily. Save your favorite content from Instagram with just a few clicks!",
        icon: "fab fa-instagram",
        technologies: ["JavaScript", "API Integration", "HTML5", "Vercel"],
        demoUrl: "https://instagram-dowloder.vercel.app/",
        githubUrl: "https://github.com/umarJ-max/Instagram-dowloder",
        downloadUrl: "https://instagram-dowloder.vercel.app/",
        features: [
            "Download Instagram photos",
            "Download Instagram videos",
            "Download Instagram stories",
            "High-quality downloads",
            "Simple and fast interface"
        ]
    }
];

// Export for use in main.js
window.toolsData = toolsData;
