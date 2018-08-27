window.onload = () => {

    console.log(document.getElementsByClassName('inner')[0])
    const sectionHeight = document.getElementsByClassName('inner')[1].offsetTop

    let currentSection = 0
    let shouldScroll = true
    let lastEvent;
    let lastScroll = 0;

    document.addEventListener('mousewheel', handleScroll)

    window.onkeydown = function(event) {
        if (lastEvent && lastEvent.key === event.key) {
            return;
        }
        lastEvent = event;
        if (event.key === 'ArrowDown') {
            doScroll(true)
        } else if (event.key === 'ArrowUp') {
            doScroll(false)
        }
    }

    window.onkeyup = function(event) {
        lastEvent = null;
    }


    function handleScroll(event) {
        event.preventDefault()
        if (shouldScroll && Math.abs(event.deltaY) > lastScroll) {
            const isDown = event.deltaY > 0
            event.deltaY = 0
            doScroll(isDown)
        } else {
            lastScroll = Math.abs(event.deltaY)
        }
    }

    function doScroll(isDown) {
        shouldScroll = false
        currentSection = (currentSection < 2 && isDown) ? (currentSection + 1) : ((currentSection > 0 && !isDown) ? currentSection - 1 : currentSection)
        document.getElementsByClassName('top-navigator')[0].className = currentSection > 0 ? 'top-navigator active' : 'top-navigator'
        document.getElementById('scroll-content').style.transform = `translateY(-${currentSection * sectionHeight}px)`
        setTimeout(handleHasScrolled, 800)
    }

    handleHasScrolled = () => {
        shouldScroll = true
    }

    scrollToTop = () => {
        currentSection = 0
        document.getElementsByClassName('top-navigator')[0].className = 'top-navigator'
        document.getElementById('scroll-content').style.transform = `translateY(0)`
    }
}


