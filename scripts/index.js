const title = document.getElementById("title");
const changeTitle = document.getElementById("change-title");
const htmlCode = document.getElementById("html-code");
const copyCode = document.getElementById("copy-code");
const copyNotify = document.getElementById("copy-notify");

const defaultTitle = title.textContent;

function setCodeToDefault() {
	htmlCode.textContent = `<title>${defaultTitle}</title>`;
}

function clearCopyNotify() {
	copyNotify.textContent = "";
}

setCodeToDefault();
changeTitle.focus();

changeTitle.onkeyup = function () {
	if (changeTitle.value.replaceAll(" ", "") != "") {
		title.textContent = changeTitle.value;
		htmlCode.textContent = `<title>${changeTitle.value}</title>`
	} else {
		title.textContent = defaultTitle;
		setCodeToDefault();
	}
}

copyCode.onclick = function () {
	navigator.clipboard.writeText(htmlCode.textContent);
	copyNotify.textContent = "HTML code has been copied to clipboard!";
	setTimeout(clearCopyNotify, 1300);
}
