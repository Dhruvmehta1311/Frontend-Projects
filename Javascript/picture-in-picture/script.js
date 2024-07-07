const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to Select Media Stream, pass to video element and then play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(`There's an Error : ${error}`);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false
})

// On Load
selectMediaStream()