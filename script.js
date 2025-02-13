
    document.getElementById("loveButton").addEventListener("click", function() {
        // Set the surprise message
        document.getElementById("surpriseMessage").innerHTML = "This Valentine’s Day, here’s to those moments that make your heart skip a beat—the stolen glances, the quiet gestures, and that feeling you just can’t shake. It’s not always straightforward, but it’s real in its own way. Here’s to whatever this is—messy, complicated, and full of possibility—and to the excitement of seeing where it takes us.";
    
        // Show the surprise image
        document.getElementById("surpriseImage").style.display = "block";
    });
    document.getElementById("loveButton").addEventListener("click", function() {
        // Set the surprise message
        document.getElementById("surpriseMessage").innerHTML = "This Valentine’s Day, here’s to those moments that make your heart skip a beat—the stolen glances, the quiet gestures, and that feeling you just can’t shake. It’s not always straightforward, but it’s real in its own way. Here’s to whatever this is—messy, complicated, and full of possibility—and to the excitement of seeing where it takes us.";
    
        // Create flying hearts
        for (let i = 0; i < 10; i++) { // You can change the number of hearts here
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️'; // Heart symbol
            heart.style.left = Math.random() * window.innerWidth + 'px'; // Random position
            heart.style.animationDelay = Math.random() * 2 + 's'; // Random delay
    
            document.body.appendChild(heart);
    
            // Remove heart after animation ends
            setTimeout(() => heart.remove(), 3000);
        }
    });
    document.getElementById("loveButton").addEventListener("click", function() {
        // Set the surprise message
        document.getElementById("surpriseMessage").innerHTML = "This Valentine’s Day, here’s to those moments that make your heart skip a beat—the stolen glances, the quiet gestures, and that feeling you just can’t shake. It’s not always straightforward, but it’s real in its own way. Here’s to whatever this is—messy, complicated, and full of possibility—and to the excitement of seeing where it takes us.";
    
        // Create flying hearts continuously
        setInterval(function() {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️'; // Heart symbol
            heart.style.left = Math.random() * window.innerWidth + 'px'; // Random position
            heart.style.top = Math.random() * window.innerHeight + 'px'; // Random position
    
            document.body.appendChild(heart);
    
            // Optional: Remove hearts after animation ends
            setTimeout(() => heart.remove(), 4000); // Adjust the duration to match the animation
        }, 100); // Hearts appear every 100ms
    });
        
    

