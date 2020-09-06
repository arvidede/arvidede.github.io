window.onload = () => {
    /* Footer with current year */
    const footer = document.getElementById("footer")
    const year = new Date().getFullYear()
    // footer.innerHTML = `<a href="mailto:arvid@edenheim.se">arvid@edenheim.se</a>| Registrerad för F-Skatt | ${year}`

    let isPlaying = false

    toggleAudio = () => {
        const player = document.getElementById('audio')
        isPlaying ? player.pause() : player.play()
        // let src = player.src
        // src = src.substring(0, src.length - 1)
        // src += isPlaying ? "0" : "1"
        // player.src = src
        const toggle = document.getElementById('toggle')
        if(isPlaying) {
            toggle.classList.remove('fa-volume-up')
            toggle.classList.add('fa-volume-off')
        } else {
            toggle.classList.remove('fa-volume-off')
            toggle.classList.add('fa-volume-up')
        }
        isPlaying = !isPlaying
    }
}


