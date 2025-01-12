const title = document.getElementById("title");
const changeTitle = document.getElementById("changeTitle");

changeTitle.onkeyup = function() {
	title.textContent = changeTitle.value;
}