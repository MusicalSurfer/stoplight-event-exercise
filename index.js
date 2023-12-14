(function () {
	'use strict';

	// Create references to lights.
	const stopLight = document.querySelector('#stopLight');
	const slowLight = document.querySelector('#slowLight');
	const goLight = document.querySelector('#goLight');
	// Create references to buttons.
	const stopButton = document.querySelector('#stopButton');
	const slowButton = document.querySelector('#slowButton');
	const goButton = document.querySelector('#goButton');
	// Create lists for buttons.
	const buttonList = [stopButton, slowButton, goButton];

	// Function that adds event listeners to toggle css class on click.
	const addToggleLights = (elemList) => {
		const lightList = [stopLight, slowLight, goLight];
		const classList = ['stop', 'slow', 'go'];
		// For every element in the list
		for (let i = 0; i < elemList.length; i++) {
			// Add a click event listener that toggles css class from classList.
			elemList[i].addEventListener('click', () => {
				lightList[i].classList.toggle(classList[i]);
			});
		}
	}
	// Function to add pointer event listeners to log to console when the mouse is over a button.
	const mouseLogToConsole = (elemList) => {
		// For every button, add a pointerover and pointerout event listener and log it.
		for (let i = 0; i < elemList.length; i++) {
			elemList[i].addEventListener('pointerover', () => {
				console.log('Entered ' + elemList[i].textContent + ' button.')
			});
			elemList[i].addEventListener('pointerout', () => {
				console.log('Left ' + elemList[i].textContent + ' button.')
			});
		}
	}
	// Invoke functions.
	addToggleLights(buttonList);
	mouseLogToConsole(buttonList);
})();