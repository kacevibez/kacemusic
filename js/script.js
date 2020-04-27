// Navigation 

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
})

// Video modal
const videoPortfolioImages = document.querySelectorAll(".video-portfolio__img");
const videoModal = document.getElementById("video-modal");

videoPortfolioImages.forEach(function(image, index, src) {
    image.addEventListener("click", () => {
        const videoModalVid = document.getElementById("video-modal-vid");
        const left = document.getElementById("video-modal-left");
        const right = document.getElementById("video-modal-right");
        const home = document.getElementById("video-modal-home");
        const download = document.getElementById("video-modal-download");
        let currentVideo = index;
        
        videoModal.classList.add("modal-open");
        setVideo();
        
        function setVideo() {
            videoSource = videoPortfolioImages[currentVideo].dataset.source;
            videoModalVid.src = videoSource;
            download.href = videoPortfolioImages[currentVideo].dataset.file;
        }
        
        left.addEventListener("click", () => {
            currentVideo = currentVideo - 1;
            if (currentVideo < 0) {
                currentVideo = videoPortfolioImages.length - 1;
            } 
            setVideo();
        });
        
        right.addEventListener("click", () => {
            currentVideo = currentVideo + 1;
            if (currentVideo > videoPortfolioImages.length - 1) {
                currentVideo = 0;
            }
            setVideo();
        });
        
        home.addEventListener("click", () => {
            videoModal.classList.remove("modal-open");
        })  
    })
})


// Picture slider 
const picturePortfolioImages = document.querySelectorAll(".picture-portfolio__img");
const pictureModal = document.getElementById("picture-modal");

picturePortfolioImages.forEach(function(image, index, src) {
    image.addEventListener("click", () => {
        const pictureModalImg = document.getElementById("picture-modal-img");
        const left = document.getElementById("picture-modal-left");
        const right = document.getElementById("picture-modal-right");
        const home = document.getElementById("picture-modal-home");
        const download = document.getElementById("picture-modal-download");
        let currentImage = index;
        
        pictureModal.classList.add("modal-open");
        setPicture();
        
        function setPicture() {
            pictureModalImg.src = picturePortfolioImages[currentImage].src;
            download.href = picturePortfolioImages[currentImage].src;
        }
        
        left.addEventListener("click", () => {
            currentImage = currentImage - 1;
            if (currentImage < 0) {
                currentImage = picturePortfolioImages.length - 1;
            } 
            setPicture();
        });
        
        right.addEventListener("click", () => {
            currentImage = currentImage + 1;
            if (currentImage > picturePortfolioImages.length - 1) {
                currentImage = 0;
            }
            setPicture();
        });
        
        home.addEventListener("click", () => {
            pictureModal.classList.remove("modal-open")
        })  
    })
})


