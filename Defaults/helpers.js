const DEF_DELAY = DEF_DELAY || 1000;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}
function getMilliseconds(hrs, min, sec) {
	return ((hrs * 60 * 60 + min * 60 + sec) * 1000);
}

export { sleep, getMilliseconds };