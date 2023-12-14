(function () {
	'use strict';
	const stopLightObj = {
		lights: {
			stopButton: document.querySelector('#stopLight'),
			slowButton: document.querySelector('#slowLight'),
			goButton: document.querySelector('#goLight')
		},
		buttons: {
			stopButton: document.querySelector('#stopButton'),
			slowButton: document.querySelector('#slowButton'),
			goButton: document.querySelector('#goButton')
		},
		classes: {
			stopButton: 'stop',
			slowButton: 'slow',
			goButton: 'go',
		},

		// Event handler to apply changes to lights when button is clicked.
		eventHandler: (buttonKey) => {
			let lightObj = stopLightObj.lights;
			let classObj = stopLightObj.classes;

			lightObj[buttonKey].classList.toggle(classObj[buttonKey]);

			const hasBeenCLicked = lightObj[buttonKey].classList.contains(classObj[buttonKey]);
			hasBeenCLicked ? console.log(stopLightObj.buttons[buttonKey].textContent + ' bulb on.') : console.log(stopLightObj.buttons[buttonKey].textContent + ' bulb off.')
		},

		// Function that adds event listeners to toggle css class on click.
		addToggleLights: () => {
			let buttonObj = stopLightObj.buttons;

			for (let buttonKey in buttonObj) {
				// Add a click event listener that toggles css class from classList.
				buttonObj[buttonKey].addEventListener('click', () => stopLightObj.eventHandler(buttonKey));
			}
		},

		// Function to add pointer event listeners to log to console when the mouse is over a button.
		mouseLogToConsole: (buttonObjs) => {

			// For every button, add a pointerover and pointerout event listener and log it.
			for (let button in buttonObjs) {
				buttonObjs[button].addEventListener('pointerover', () => {
					console.log('Entered ' + buttonObjs[button].textContent + ' button.')
				});
				buttonObjs[button].addEventListener('pointerout', () => {
					console.log('Left ' + buttonObjs[button].textContent + ' button.')
				});
			}
		}

	};

	// Invoke functions.
	stopLightObj.addToggleLights();
	stopLightObj.mouseLogToConsole(stopLightObj.buttons);
})();