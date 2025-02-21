function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}