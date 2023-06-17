var playButton = document.getElementById('play-button');
var gameContainer = document.querySelector('.game-container');
var countdownElement = document.getElementById('countdown');
var character = document.getElementById('character');

playButton.addEventListener('click', startGame);

function startGame() {
  var title = document.getElementById('title');
  var playButton = document.getElementById('play-button');

  title.classList.add('hidden');
  playButton.classList.add('hidden');
  character.classList.add('hidden');

  // Countdown 설정
  var countdown = 5;
  countdownElement.textContent = countdown;
  countdownElement.classList.remove('hidden');

  var countdownInterval = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      countdownElement.classList.add('hidden');

      // TODO: 게임 시작 로직 추가

      // 예시: 5가 0이 될 때까지 동작하지 않도록 설정
      gameContainer.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
  }, 1000);
}
