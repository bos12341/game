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

      // 0초가 지난 후 팝업 창 생성
      setTimeout(function() {
        var popupWindow = window.open('', '', 'width=500,height=500');
        popupWindow.document.write('<html><head><title>팝업 창</title></head><body></body></html>');

        // 버튼 스타일
        var buttonStyle = 'width: 200px; height: 200px; font-size: 32px; color: white; background-color: blue; border: none; border-radius: 50%;';

        // 동그라미 버튼 생성
        var button = document.createElement('button');
        button.setAttribute('style', buttonStyle);
        button.textContent = 'DISCORD';
        button.addEventListener('click', function() {
          // 내가 지정한 사이트로 이동
          window.location.href = 'https://discord.gg/9GVAAndp5u';
        });

        // 팝업 창 가운데에 버튼 배치
        var popupBody = popupWindow.document.body;
        popupBody.setAttribute('style', 'display: flex; justify-content: center; align-items: center; height: 100%; margin: 0;');
        popupBody.appendChild(button);
      }, 0);

      // 예시: 5가 0이 될 때까지 동작하지 않도록 설정
      gameContainer.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
  }, 1000);
}
