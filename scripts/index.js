const title = document.getElementById("title");
const changeTitle = document.getElementById("changeTitle");

const defaultTitle = title.textContent;

changeTitle.onkeyup = function () {
	if (!changeTitle.value.replaceAll(" ", "") == "") {
		title.textContent = changeTitle.value;
	} else {
		title.textContent = defaultTitle;
	}
}