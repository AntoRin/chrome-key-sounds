let allSounds = [
  "KeySounds/Sound1.mp3",
  "KeySounds/Sound2.mp3",
  "KeySounds/Sound3.mp3",
];

let soundElement = document.createElement("audio");
soundElement.autoplay = true;

document.addEventListener("keyup", playSound);

function playSound() {
  let sound = allSounds[Math.floor(Math.random() * allSounds.length)];
  let soundUrl = chrome.runtime.getURL(sound);
  soundElement.src = soundUrl;
  soundElement.id = "keyboardSound";
  document.body.append(soundElement);
}
