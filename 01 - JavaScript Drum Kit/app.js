const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const dataKey = e.currentTarget.dataset.key;

    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});
