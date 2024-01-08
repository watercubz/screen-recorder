# Screen recorder

- how scree recorder works

> screen recorder, is a screen recorder made in js that allows you to record your screen at a rate of 30 frames per second, you can stop recording whenever you want and the recording will automatically be saved on your PC in the following path /download/capture. webm

- screen recorder uses some external library to manage recording and frames

> no screen recorder does not depend on any library for recording management, everything is done natively with the browser API

- the audio is also recorded?

> No, currently the function of being able to record audio has not been incorporated, along with the video.

- I can take the code and make my own screen recorder?

> Of course, this repository is open source, you can download and modify the code as much as you want, just don't forget to give the repo a little star to know what you liked

- I can contribute to the project?

> If anyone who wants can contribute and improve the app

- code example

````javascript

This JavaScript script utilizes the `navigator.mediaDevices` and `MediaRecorder` API to capture the user's screen and save it as a WebM file when a button is clicked.

```javascript
const recorder = document.querySelector("button");

recorder.addEventListener("click", async (e) => {
  e.preventDefault();

  // Capture the user's screen
  const media = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: { ideal: 30 } },
  });

  // Start recording
  const mediarecorder = new MediaRecorder(media, { mimeType: "video/webm;codecs=vp8, opus" });
  mediarecorder.start();

  // Stop recording when the video track ends
  const [video] = media.getVideoTracks();
  video.addEventListener("ended", () => {
    mediarecorder.stop();
  });

  // Download the WebM file when data is available
  mediarecorder.addEventListener("dataavailable", (e) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(e.data);
    link.download = "capture.webm";
    link.click();
  });
});
````

- Thank you very much for stopping by here, if you liked the repository of your little star to know that you liked the repository

> created with ❤ by watercubz
