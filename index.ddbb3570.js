window.onload = ()=>{
    let isPlaying = false;
    toggleAudio = ()=>{
        const player = document.getElementById("audio");
        isPlaying ? player.pause() : player.play();
        // let src = player.src
        // src = src.substring(0, src.length - 1)
        // src += isPlaying ? "0" : "1"
        // player.src = src
        const toggle = document.getElementById("toggle");
        if (isPlaying) {
            toggle.classList.remove("fa-volume-high");
            toggle.classList.add("fa-volume-off");
        } else {
            toggle.classList.remove("fa-volume-off");
            toggle.classList.add("fa-volume-high");
        }
        isPlaying = !isPlaying;
    };
};

//# sourceMappingURL=index.ddbb3570.js.map
