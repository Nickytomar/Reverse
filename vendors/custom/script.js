AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
});

let intervalId1, intervalId2, intervalId3;

function startCounting(targetCount, displayElementId) {
    let count = 0;
    const countDisplay = document.getElementById(displayElementId);
    const increment = Math.ceil(targetCount / 100);
    const intervalTime = 25;

    const intervalId = setInterval(() => {
        if (count < targetCount) {
            count += increment;
            if (count > targetCount) {
                count = targetCount;
            }
            countDisplay.innerText = count;
        } else {
            clearInterval(intervalId);
        }
    }, intervalTime);

    // Return the interval ID
    return intervalId;
}

let isCountingStarted = false;

function handleScroll() {
    const countingElement = document.getElementById('counting');
    const countingOffset = countingElement.offsetTop;
    const windowScrollTop = window.pageYOffset;

    if (!isCountingStarted && windowScrollTop >= countingOffset) {
        // Start counting when user scrolls to the counting element
        intervalId1 = startCounting(1700, 'count-display');
        intervalId2 = startCounting(8, 'count-display-years');
        intervalId3 = startCounting(3000, 'count-display-slides');
        isCountingStarted = true;
    } else if (isCountingStarted && windowScrollTop < countingOffset) {
        // Reset counting when user scrolls away from the counting element
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        isCountingStarted = false;
    }
}

window.addEventListener('scroll', handleScroll);



// ONLY NUMBER FOR FORM
document.getElementById("Number").addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
});

// VIDEO LOADER
window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    var loaderVideo = document.getElementById("loader-video");
    var skipButton = document.getElementById("skip-button");

    // Function to skip the video and display the content
    function skipVideo() {
        loader.style.display = "none";
        loaderVideo.pause();
        document.getElementById("content").style.display = "block";
    }

    // Add a click event listener to the skip button
    skipButton.addEventListener("click", skipVideo);

    // Automatically hide the loader and show content after a timeout
    setTimeout(function () {
        skipVideo();
    }, 4500);
});



// HOVER Element
 const elements = document.querySelectorAll('.myElement');

 elements.forEach(element => {
   element.addEventListener('mouseover', function() {
     element.classList.add('active-two-text');
   });

   element.addEventListener('mouseout', function() {
     element.classList.remove('active-two-text');
   });
 });



