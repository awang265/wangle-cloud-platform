//Viewcount integration
const counter = document.querySelector(".visits");
async function updateCounter() {
	let response = await fetch("https://us-central1-glassy-ion-406900.cloudfunctions.net/wcp-function");
	let data = await response.json();
	counter.innerHTML = data;
}

updateCounter();