window.onload = () => {
    const sectionHeight = document.getElementsByClassName('inner')[1].offsetTop

    let currentSection = 0
    let shouldScroll = true
    let lastEvent;
    let lastScroll = 0;
    let swipeY = 0
    let isSwiping = false

    document.addEventListener('mousewheel', handleScroll)
    document.addEventListener("touchmove", phoneScroll, true);
    document.addEventListener("touchend", scrollEnd, false);

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

    function scrollEnd() {
        isSwiping = false
    }

    function phoneScroll(event) {
        event.preventDefault()
        var currentY = event.touches[0].clientY;
        if (!isSwiping) {
            console.log('current:', currentY, 'old', swipeY)
            if(currentY > swipeY){
                doScroll(true)
            } else if(currentY < swipeY){
                doScroll(false)
            }
            isSwiping = true
        }
        swipeY = currentY;
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
        document.getElementsByClassName('inner')[currentSection].classList.remove('active')
        currentSection = (currentSection < 2 && isDown) ? (currentSection + 1) : ((currentSection > 0 && !isDown) ? currentSection - 1 : currentSection)
        document.getElementsByClassName('inner')[currentSection].classList.toggle('active')
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

    navigateDown = () => {
        doScroll(true)
    }
}


