// Selectors
const title = document.querySelector("title");
const changeTitle = document.querySelector("input[type='text']");
const htmlCode = document.querySelector("code");

const copyNotify = document.getElementById("copy-notify");

// Buttons
const copyCode = document.getElementById("copy-code");
const clearTextbox = document.getElementById("clear-textbox");

// Values
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
	copyNotify.textContent = "Copied HTML code to clipboard!";
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
