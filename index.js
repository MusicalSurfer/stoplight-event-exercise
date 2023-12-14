(function () {
	'use strict';

	// YOUR CODE HERE
	// Create references to lights and buttons.
	const stopLight = document.querySelector('#stopLight');
	const slowLight = document.querySelector('#slowLight');
	const goLight = document.querySelector('#goLight');
	const stopButton = document.querySelector('#stopButton');
	const slowButton = document.querySelector('#slowButton');
	const goButton = document.querySelector('#goButton');

	// Function that adds event listeners to toggle css class on click.
	const addToggleLights = () => {
		stopButton.addEventListener('click', () => {
			stopLight.classList.toggle('stop');
		});
		slowButton.addEventListener('click', () => {
			slowLight.classList.toggle('slow');
		});
		goButton.addEventListener('click', () => {
			goLight.classList.toggle('go');
		});
	}
	addToggleLights(); // Invoke function.
})();
