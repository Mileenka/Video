/* Create preload */

const preloader = document.createElement('div');
preloader.classList.add('preloader');

const preloaderGif = document.createElement('img');
preloaderGif.classList.add('preloader__item');
preloaderGif.src = './assets/img/preloader.gif';
preloaderGif.alt = 'preloader';

preloader.append(preloaderGif);
document.body.append(preloader);

/* Create header */

const header = document.createElement('header');
const video = document.createElement('video');
video.classList.add('video-container');
video.setAttribute('controls', 'controls');
video.setAttribute('muted', 'muted');
video.setAttribute('autoplay', 'autoplay');
video.setAttribute('loop', 'loop');

/* Create video */

const videoSource = document.createElement('source');
videoSource.src = './assets/video/video.mp4';
videoSource.type = 'video/mp4';

video.append(videoSource);
header.append(video);


/* Create h1 */

const h1Element = document.createElement('h1');
h1Element.innerText = 'video project';

header.append(h1Element);

/* Create button */

const buttonElement = document.createElement('button');
buttonElement.classList.add('switch-btn');

const spanElement = document.createElement('span');
spanElement.innerText = 'play';

buttonElement.append(spanElement);
const spanElement2 = document.createElement('span');
spanElement2.innerText = 'pause';

buttonElement.append(spanElement2);

const spanElement3 = document.createElement('span');

spanElement3.classList.add('switch');

spanElement3.innerText = '';

header.append(buttonElement);
document.body.append(header);
