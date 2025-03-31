// Open Video in Modal
function openVideo() {
    document.getElementById("videoModal").style.display = "block";
}

// Close Video Modal
function closeVideo() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
    // Pause video when closing modal
    document.getElementById("youtubeVideo").src = document.getElementById("youtubeVideo").src;
}

// Close modal if clicked outside
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeVideo();
    }
};
