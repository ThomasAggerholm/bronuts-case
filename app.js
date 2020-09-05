const 
    playbackConst = 700,
    video = document.querySelector('[data-video]'),
    body = document.querySelector('body')

let frameNumber = 0

video.addEventListener('loadedmetadata', () => {
    body.style.height = `${Math.floor(video.duration) * playbackConst}px`
})

const scrollPlay = () => {  
    var frameNumber  = window.pageYOffset/playbackConst
    video.currentTime  = frameNumber
    window.requestAnimationFrame(scrollPlay)
}

window.requestAnimationFrame(scrollPlay)