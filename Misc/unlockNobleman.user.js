// ==UserScript==
// @name                Nobleman Unlocker
// @namespace           @brunommpreto[bonobobo]
// @icon                https://cdn.discordapp.com/avatars/432864216647598100/5af82b694e245c96aa31f9c3ac12fcfa.webp
// @website             https://www.brunommpreto.github.io/
// @email               brunommpreto@disroot.org
// @description 	    Script to automatically unlock Noblemans
// @author		        Bruno Preto (bonobobo#1694)
// @include             https://**.tribalwars.**/game.php?**&screen=snob**
// @version     	    1.0.0
// @copyright           2023, brunommpreto (https://openuserjs.org/)
// @license             AGPL-3.0-or-later
// @supportURL          https://github.com/Tribalwars-Scripts/
// @updateURL           https://github.com/Tribalwars-Scripts/Essentials/raw/main/Misc/unlockNobleman.user.js
// @downloadURL         https://github.com/Tribalwars-Scripts/Essentials/raw/main/Misc/unlockNobleman.user.js
// @grant               GM_getResourceText
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               unsafeWindow
// @run-at              document-end
// @require             http://code.jquery.com/jquery-1.12.4.min.js
// @require             https://raw.githubusercontent.com/Tribalwars-Scripts/Essentials/main/Misc/helpers.min.js
// ==/UserScript==

const Changelog = {
	"1.0.0": "Default Script"
};


/***************************** Configuration ***************************/

/**This will be deprecated, make use of the UI instead => when available**/

// const unlockNobleman = 0; //Set the amount of nobleman u want to unlock
// const reset = 1; // 0 or 1, if you want to reset the values.

/***************************** Configuration *****************************/


let userInputParent =  document.getElementById('additional_snob_form');

// create form element
function getActionValue() {
	//return TribalWars.post('snob', {'action': 'buynobleman'},'', TribalWars.get('snob', {mode: 'train'}));
}

const form = document.createElement("div");
form.id = "additional_snob_form_force";

// create button element and set its properties
const button = document.createElement("button");
button.type = "submit";
button.id = "additional_snob_button_skip";
button.classList.add("btn");

// create span element and set its properties and text content
const span = document.createElement("span");
span.classList.add("coinbag", "before");
span.textContent = "Desbloqueia-me nobres imediatamente";

// append span element to button element
button.appendChild(span);

// append button and input elements to form element
form.appendChild(button);

document.getElementById('additional_snob_button_skip').action

userInputParent.parentNode.insertBefore(form,userInputParent);
document.getElementById('additional_snob_form').remove();

document
	.getElementById('additional_snob_button_skip')
	.addEventListener('click', function () {
		TribalWars.post('snob', {'action': 'buynobleman'},'', TribalWars.get('snob', {mode: 'train'}));
		UI.SuccessMessage("Vamooos 1 Nobre desbloqueado.", 1000);
	})

// if (reset){
// 	localStorage.removeItem('buynobleman')
// }
//
// let config = JSON.parse(localStorage.getItem('buynobleman')) || {
// 	unlockAmounts: {amount: unlockNobleman},
// };
//
// (async function () {
// 	'use strict';
// 	console.log("-- Castle Event Script Started --");
// 	console.log(Changelog["1.0.0"]);
// 	await sleep(3e3);
// 	doPurchase().then(r => {
// 		if (r ===0) return;
// 		let msg="Successfully Unlocked  " + r + " Noblemans\n"
// 		UI.SuccessMessage(msg, 1000);
// 	});
// })();
//
// async function doPurchase() {
// 	for (let i = 0; i < Number(config.unlockAmounts.amount); i++){
// 		(function () {TribalWars.post('snob', {'action': 'buynobleman'},'', TribalWars.get('snob', {mode: 'train'}));})();
// 		await sleep(300);
// 	}
// 	config.unlockAmounts.amount = 0;
// 	localStorage.setItem('buynobleman', JSON.stringify(config));
// 	return unlockNobleman;
// }
