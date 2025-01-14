const title = document.getElementById("title");
const changeTitle = document.getElementById("changeTitle");
const titleCode = document.getElementById("htmlCode");
const copyCode = document.getElementById("copyCode");
const copyNotify = document.getElementById("copyNotify");

const defaultTitle = title.textContent;

function setCodeToDefault() {
	titleCode.textContent = `<title>${defaultTitle}</title>`;
}

function clearCopyNotify() {
	copyNotify.textContent = "";
}

setCodeToDefault();

changeTitle.onkeyup = function () {
	if (!changeTitle.value.replaceAll(" ", "") == "") {
		title.textContent = changeTitle.value;
		titleCode.textContent = `<title>${changeTitle.value}</title>`
	} else {
		title.textContent = defaultTitle;
		setCodeToDefault();
	}
}

copyCode.onclick = function () {
	navigator.clipboard.writeText(titleCode.textContent);
	copyNotify.textContent = "HTML code has been copied to clipboard!";
	setTimeout(clearCopyNotify, 1300);
}