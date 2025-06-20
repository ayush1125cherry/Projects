let images = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let fullImage = document.querySelector(".view-image img");
let closeBtn = document.querySelector(".view-image span");

let prevBtn = document.querySelector(".view-image .prev");
let nextBtn = document.querySelector(".view-image .next");


let currentIndex=0;

function fullScreen(e){
    viewImage.style.display="flex";
    fullImage.src=e.target.src;
}
function showPrevious(){
    currentIndex= (currentIndex -1 + images.length)%images.length;
    fullImage.src = images[currentIndex].src;
};

function showNext(){
    currentIndex= (currentIndex +1)%images.length;
    fullImage.src = images[currentIndex].src;
};

function closeFullScreen(){
    viewImage.style.display = "none";
 
};


// Handle keyboard events
function handleKeyDown(e) {
    if (viewImage.style.display === "flex") { // Only respond when fullscreen is open
        if (e.key === "ArrowLeft") {
            showPrevious(); // Navigate to the previous image
        } else if (e.key === "ArrowRight") {
            showNext(); // Navigate to the next image
        } else if (e.key === "Escape") {
            closeFullScreen(); // Close fullscreen view
        }
    }
}


for(let image of images){
    image.addEventListener("click",fullScreen);
};
closeBtn.addEventListener('click',closeFullScreen);
prevBtn.addEventListener("click", showPrevious);
nextBtn.addEventListener("click", showNext);



// Add keyboard event listener
document.addEventListener("keydown", handleKeyDown);