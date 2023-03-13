import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    try {
        onReboot()
    } catch {
        player.setCurrentTime(0)
    }

    player.on('timeupdate', throttle(pressPlay,1000))

    function pressPlay(data) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
    }

    function onReboot() {
        player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
    }

