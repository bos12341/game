var playButton = document.getElementById('play-button');
var audio = new Audio('sound/sound.mp3');

playButton.addEventListener('click', startGame);

function startGame() {
  var title = document.getElementById('title');
  var playButton = document.getElementById('play-button');

  title.classList.add('hidden');
  playButton.classList.add('hidden');

  // 음악 파일 재생
  audio.play();
}
