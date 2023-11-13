window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sleep(min, max) {
  const randomDelay = Math.floor(Math.random() * (max - min + 1) + min);
  return new Promise((resolve) => setTimeout(resolve, randomDelay));
}

async function newTab() {
  let words = [];
  try {
    const response = await fetch("words.json");
    words = await response.json();
    shuffleArray(words);

    const used = new Set();
    for (let i = 1; i <= 36; i++) {
      let index = Math.floor(Math.random() * words.length);
      while (used.has(index)) {
        index = Math.floor(Math.random() * words.length);
      }
      used.add(index);
      var a = i % 8;
      if (a == 0) {
        a = 8;
      }
      const openedWindow = window.open(
        `https://www.bing.com/search?q=${words[index]}+${words[index + 2]}+&FORM=QSRE${a}`,
        "_blank"
      );

      if (i < 36) {
        // Wait between 10 and 35 seconds randomly before the next opening
        await sleep(10000, 35000);
      }

      if (openedWindow) {
        openedWindow.close();
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

