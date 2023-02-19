import { config } from 'https://rawcdn.githack.com/Tribalwars-Scripts/Essentials/91d921398078f35867247a44d896e1b2ce6ef525/Defaults/config.js';

const DEF_DELAY = config.DEF_DELAY || 1000;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}
function getMilliseconds(hrs, min, sec) {
	return ((hrs * 60 * 60 + min * 60 + sec) * 1000);
}

export { sleep, getMilliseconds };