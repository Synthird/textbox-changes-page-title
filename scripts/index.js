const title = document.querySelector("title"),
	favicon = document.querySelector("link[rel='shortcut icon']"),
	htmlCode = document.querySelector("code"),

	textbox = document.getElementById("textbox"),
	buttons = document.getElementById("buttons"),
	copyNotify = document.getElementById("copy-notify"),
	addFavicon = document.getElementById("add-favicon");

function clearCopyNotify() {
	copyNotify.textContent = "";
}

function setHTMLCode(pageTitle) {
	title.textContent = pageTitle;
	htmlCode.textContent = `<title>${pageTitle}</title>`;
}

function setCodeToDefault() {
	setHTMLCode("Textbox changes page title");
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

buttons.addEventListener("click", event => {
	switch (event.target.textContent) {
		case "Copy code":
			copyHTMLCode();
			break;
		case "Clear textbox":
			textbox.value = "";
			setCodeToDefault();
			textbox.focus();
			break;
	}
});

addFavicon.addEventListener("change", event => {
	URL.revokeObjectURL(favicon.getAttribute("href"));
	favicon.setAttribute("href", URL.createObjectURL(event.target.files[0]));
});
