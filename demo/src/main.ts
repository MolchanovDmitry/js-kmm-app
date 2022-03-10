import Greeting from "NutPlayer-shared"

// Waiting for loading DOM document.
function onDReady() {

	console.log(Greeting.greeting())

	const button = document.getElementById('button')
	if (button != null) {
		button.addEventListener('click',() => { console.log("clicked") } )
	}
}

if (document) { document.addEventListener('DOMContentLoaded', onDReady); }
