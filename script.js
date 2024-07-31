// Function to play audio or toggle play/pause
function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Add event listeners for play buttons

document.querySelectorAll('.play').forEach(function(playButton) {
    playButton.addEventListener('click', function() {
        const audioSrc = this.dataset.audioSrc;
        const audioElement = document.getElementById('audio-element');
        
        if (audioElement.src !== audioSrc) {
            audioElement.src = audioSrc;
            audioElement.load();
        }
        
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });
});

document.querySelectorAll('.controls').forEach(function(controlGroup) {
    const playButton = controlGroup.querySelector('.play');
    const pauseButton = controlGroup.querySelector('.pause');
    const restartButton = controlGroup.querySelector('.restart');

    playButton.addEventListener('click', function() {
        const audioSrc = playButton.dataset.audioSrc;
        const audioElement = document.getElementById('audio-element');
        
        if (audioElement.src !== audioSrc) {
            audioElement.src = audioSrc;
            audioElement.load();
        }
        
        audioElement.play();

        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
        restartButton.style.display = 'inline-block';
    });

    pauseButton.addEventListener('click', function() {
        const audioElement = document.getElementById('audio-element');
        audioElement.pause();

        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    });

    restartButton.addEventListener('click', function() {
        const audioElement = document.getElementById('audio-element');
        audioElement.currentTime = 0;

        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
        restartButton.style.display = 'inline-block';
    });
});

// Add event listener for the Liked Songs button
document.getElementById('liked-songs-btn').addEventListener('click', function () {
    var likedSongsContainer = document.getElementById('liked-songs-container');

    // Toggle the visibility of the liked songs container with a slide-down animation
    if (likedSongsContainer.classList.contains('show')) {
        likedSongsContainer.classList.remove('show');
        likedSongsContainer.style.maxHeight = '0';
    } else {
        likedSongsContainer.classList.add('show');
        likedSongsContainer.style.maxHeight = likedSongsContainer.scrollHeight + 'px';
    }
});


// Add event listeners for play buttons inside the Liked Songs container
document.querySelectorAll('#liked-songs-container .play').forEach(function (playButton) {
    playButton.addEventListener('click', function () {
        const audioSrc = this.dataset.audioSrc;
        const audioElement = document.getElementById('audio-element');

        if (audioElement.src !== audioSrc) {
            audioElement.src = audioSrc;
            audioElement.load();
        }

        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });
});

// Add event listeners for like and dislike buttons inside the Liked Songs container
document.querySelectorAll('#liked-songs-container .like-button').forEach(function (likeButton) {
    likeButton.addEventListener('click', function () {
        // Add your logic for liking a song here
        console.log('Liked:', this.closest('.item').querySelector('h4').textContent);
    });
});

document.querySelectorAll('#liked-songs-container .dislike-button').forEach(function (dislikeButton) {
    dislikeButton.addEventListener('click', function () {
        // Add your logic for disliking a song here
        console.log('Disliked:', this.closest('.item').querySelector('h4').textContent);
    });
});
