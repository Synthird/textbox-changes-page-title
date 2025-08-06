const title = document.querySelector("title"),
	favicon = document.querySelector("link[rel='shortcut icon']"),
	htmlCode = document.querySelector("code"),

	textbox = document.getElementById("textbox"),
	copyCode = document.querySelector("button"),
	copyNotify = document.getElementById("copy-notify"),
	addFavicon = document.getElementById("add-favicon");

function setHTMLCode(pageTitle) {
	title.textContent = pageTitle;
	htmlCode.textContent = `<title>${pageTitle}</title>`;
}

function copyHTMLCode() {
	navigator.clipboard.writeText(htmlCode.textContent);
	copyNotify.textContent = "Copied HTML code to clipboard!";
	setTimeout(() => copyNotify.textContent = "", 1300);
}

textbox.addEventListener("keyup", event => {
	switch (textbox.value.replaceAll(" ", "")) {
		case "":
			setHTMLCode("Textbox changes page title");
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

copyCode.addEventListener("click", copyHTMLCode);

addFavicon.addEventListener("change", event => {
	URL.revokeObjectURL(favicon.getAttribute("href"));
	favicon.setAttribute("href", URL.createObjectURL(event.target.files[0]));
});
