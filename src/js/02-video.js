import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

function saveCurrentTime() {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}

const saveCurrentTimeThrottled = throttle(saveCurrentTime, 1000);

player.on('timeupdate', saveCurrentTimeThrottled, { passive: true });

// маю у другому завданні повідомлення в консолі, але це не помилка наче і все працює.
