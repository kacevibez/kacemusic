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

// Music modal
const musicPortfolioItems = document.querySelectorAll(".music-portfolio__item");
const musicModal = document.getElementById("music-modal");

musicPortfolioItems.forEach(function(item, index, src) {
    item.addEventListener("click", () => {
        const musicModalImg = document.getElementById("music-modal-img");
        const home = document.getElementById("music-modal-home");
        const download = document.getElementById("music-modal-download");
        const audioPlayer = document.getElementById("audioPlayer");
        const background = document.getElementById("music-modal");
        const caption = document.getElementById("music-modal-caption");
        
        audioPlayer.src = musicPortfolioItems[index].dataset.file;
        musicModalImg.src = musicPortfolioItems[index].dataset.img;
        download.href = musicPortfolioItems[index].dataset.file;
        background.style.backgroundImage = `url("${musicPortfolioItems[index].dataset.background}")`;
        caption.innerHTML = musicPortfolioItems[index].dataset.caption;    
        musicModal.classList.add("modal-open");
        
        home.addEventListener("click", () => {
            musicModal.classList.remove("modal-open");
            song.pause();
            pPause.src = "img/icons/play.png"
            playing = true;
        })  
           
    })
})

// Music player
        const pPause = document.getElementById("play-pause");
        const progressBar = document.getElementById("progress-bar");
        const song = document.getElementById("audioPlayer");
        const currentTime = document.getElementById("currentTime");
        const durationTime = document.getElementById("durationTime");

        let playing = true;
        
        pPause.addEventListener("click", playPause);

        function playPause() {
          if (playing) {
            pPause.src = "img/icons/pause.png";
            song.play();
            playing = false;
          } else {
            pPause.src = "img/icons/play.png"
            song.pause();
            playing = true;
          }
        }

        function updateProgressValue() {
            progressBar.max = song.duration;
            progressBar.value = song.currentTime;
            currentTime.innerHTML = formatTime(song.currentTime);
            durationTime.innerHTML = formatTime(song.duration);
            if (song.duration === song.currentTime) {
                song.currentTime = 0;
                playPause();
            }
        };

        setInterval(updateProgressValue, 500);

        function changeProgressBar() {
          song.currentTime = progressBar.value;
        };

        function formatTime(seconds) {
            let min = Math.floor((seconds / 60));
            let sec = Math.floor(seconds - (min * 60));
            if (sec < 10){ 
                sec  = `0${sec}`;
            };
            return `${min}:${sec}`;
        };

        function changeProgressBar() {
            song.currentTime = progressBar.value;
        };


// Video modal
const videoPortfolioItems = document.querySelectorAll(".video-portfolio__item");
const videoModal = document.getElementById("video-modal");

videoPortfolioItems.forEach(function(item, index, src) {
    item.addEventListener("click", () => {
        const videoModalVid = document.getElementById("video-modal-vid");
        const left = document.getElementById("video-modal-left");
        const right = document.getElementById("video-modal-right");
        const home = document.getElementById("video-modal-home");
        const download = document.getElementById("video-modal-download");
        let currentVideo = index;
        
        videoModal.classList.add("modal-open");
        setVideo();
        
        function setVideo() {
            videoSource = videoPortfolioItems[currentVideo].children[0].dataset.source;
            videoModalVid.src = videoSource;
            download.href = videoPortfolioItems[currentVideo].children[0].dataset.file;
        }
        
        left.addEventListener("click", () => {
            currentVideo = currentVideo - 1;
            if (currentVideo < 0) {
                currentVideo = videoPortfolioItems.length - 1;
            } 
            setVideo();
        });
        
        right.addEventListener("click", () => {
            currentVideo = currentVideo + 1;
            if (currentVideo > videoPortfolioItems.length - 1) {
                currentVideo = 0;
            }
            setVideo();
        });
        
        home.addEventListener("click", () => {
            videoModal.classList.remove("modal-open");
            videoModalVid.src = "";
        })  
    })
})

// Picture modal 
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

