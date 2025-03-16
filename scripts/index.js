const title = document.getElementById("title");
const changeTitle = document.getElementById("change-title");
const htmlCode = document.getElementById("html-code");
const copyNotify = document.getElementById("copy-notify");

const copyCode = document.getElementById("copy-code");
const clearTextbox = document.getElementById("clear-textbox");

const defaultTitle = title.textContent;

// Functions

function setHTMLCode(pageTitle) {
	htmlCode.textContent = `<title>${pageTitle}</title>`;

	if (title.textContent !== pageTitle) {
		title.textContent = pageTitle;
	}
}

function setCodeToDefault() {
	setHTMLCode(defaultTitle);
}

function clearCopyNotify() {
	copyNotify.textContent = "";
}

function copyHTMLCode() {
	navigator.clipboard.writeText(htmlCode.textContent);
	copyNotify.textContent = "HTML code has been copied to clipboard!";
	setTimeout(clearCopyNotify, 1300);
}

// Setup and event listeners

setCodeToDefault();

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
});

copyCode.addEventListener("click", copyHTMLCode);