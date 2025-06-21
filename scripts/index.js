const title = document.querySelector("title"),
	favicon = document.querySelector("link[rel='shortcut icon']"),
	htmlCode = document.querySelector("code"),

	textbox = document.getElementById("textbox"),
	copyCode = document.getElementById("copy-code"),
	clearTextbox = document.getElementById("clear-textbox"),
	copyNotify = document.getElementById("copy-notify"),
	addFavicon = document.getElementById("add-favicon"),

	defaultTitle = title.textContent;

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

textbox.addEventListener("keyup", event => {
	switch (textbox.value.replaceAll(" ", "")) {
		case "":
			setCodeToDefault();
			break;
		default:
			setHTMLCode(textbox.value);
			break;
	}

	switch (event.key) {
		case "Enter":
			copyHTMLCode();
			break;
	}
});

clearTextbox.addEventListener("click", () => {
	textbox.value = "";
	setCodeToDefault();
	textbox.focus();
});

addFavicon.addEventListener("change", event => {
	favicon.setAttribute("href", URL.createObjectURL(event.target.files[0]));
});

copyCode.addEventListener("click", copyHTMLCode);
