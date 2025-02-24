const title = document.getElementById("title");
const changeTitle = document.getElementById("change-title");
const htmlCode = document.getElementById("html-code");
const copyCode = document.getElementById("copy-code");
const copyNotify = document.getElementById("copy-notify");

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
	if (changeTitle.value.replaceAll(" ", "") !== "") {
		setHTMLCode(changeTitle.value);
	} else {
		setCodeToDefault();
	}

	if (event.key === "Enter") {
		copyHTMLCode();
	}
});

copyCode.addEventListener("click", copyHTMLCode);