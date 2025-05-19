const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".closebtn");
const thumbnails = document.querySelectorAll(".smallThumb");

thumbnails.forEach(smallThumb => {
    console.log("click listener ->", smallThumb);
    smallThumb.addEventListener("click", () => {
        console.log("thumb clicked", smallThumb.src);
        modal.style.display = "flex";
        modalImage.src = smallThumb.src;
        console.log("thumb clicked");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
