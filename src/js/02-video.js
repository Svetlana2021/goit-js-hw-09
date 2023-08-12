import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function saveCurrentTime() {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem(STORAGE_KEY, currentTime);
  });
}

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

const saveCurrentTimeThrottled = throttle(saveCurrentTime, 1000);

player.on('timeupdate', saveCurrentTimeThrottled, { passive: true });

// маю у другому завданні повідомлення в консолі, але це не помилка наче і все працює.
