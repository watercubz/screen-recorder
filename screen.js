const recorder = document.querySelector("button");

recorder.addEventListener("click", async (e) => {
  e.preventDefault();
  const media = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: { ideal: 30 } },
    audio: true,
  });
  console.log(Audio);
  const mediarecorder = new MediaRecorder(media, {
    mimeType: "video/webm;codecs=vp8, opus",
  });
  mediarecorder.start();

  const [video] = media.getVideoTracks();
  video.addEventListener("ended", () => {
    mediarecorder.stop();
  });

  mediarecorder.addEventListener("dataavailable", (e) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(e.data);
    link.download = "capture.webm";
    link.click();
  });
});
