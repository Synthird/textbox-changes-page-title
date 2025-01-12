const title = document.getElementById("title");
const changeTitle = document.getElementById("changeTitle");

const defaultTitle = title.textContent;

changeTitle.onkeyup = function () {
	if (!changeTitle.value.replaceAll(" ", "") == "") {
		console.log("Not empty")
		title.textContent = changeTitle.value;
	} else {
		console.log("Empty")
		title.textContent = defaultTitle;
	}
}