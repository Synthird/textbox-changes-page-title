const title = document.querySelector("title");
const changeTitle = document.querySelector("input[type='text']");
const htmlCode = document.querySelector("code");
const copyNotify = document.getElementById("copy-notify");

const copyCode = document.getElementById("copy-code");
const clearTextbox = document.getElementById("clear-textbox");

const defaultTitle = title.textContent;

function clearCopyNotify() {
	copyNotify.textContent = "";
}

function setHTMLCode(pageTitle) {
	title.textContent = pageTitle;
	htmlCode.textContent = `<title>${pageTitle}</title>`;
}

function setCodeToDefault() {
	setHTMLCode(defaultTitle);
}

function copyHTMLCode() {
	navigator.clipboard.writeText(htmlCode.textContent);
	copyNotify.textContent = "Copied HTML code to clipboard!";
	setTimeout(clearCopyNotify, 1300);
}

changeTitle.addEventListener("keyup", event => {
	switch (changeTitle.value.replaceAll(" ", "")) {
		case "":
			setCodeToDefault();
			break;
		default:
			setHTMLCode(changeTitle.value);
			break;
	}

	switch (event.key) {
		case "Enter":
			copyHTMLCode();
			break;
	}
});

clearTextbox.addEventListener("click", () => {
	changeTitle.value = "";
	setCodeToDefault();
	changeTitle.focus();
});

copyCode.addEventListener("click", copyHTMLCode);
