function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function tweet() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
		document.getElementById('tweets').i='#7D7FF5';
	}
}

function doTweet(tweetText) {
	var tweets = document.getElementById("tweets");

	//Creando un elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML =tweetText +'<i id="icon" class="glyphicon glyphicon-trash"</i>';
	//Agregar elementos a tweets

	tweets.appendChild(elemento);

	var ex = tweets.lastChild;

}

	function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

