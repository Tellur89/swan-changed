const supportTemplate = function () {
	return 'content' in document.createElement('template');
};

document.addEventListener('DOMContentLoaded', () => {
	if (supportTemplate) {
		console.log('templates are supported');
		let temp = document.getElementById('navTemplate');
		let content = temp.content;
		console.log(content);
		temp.parentNode.appendChild(content);
	} else {
		console.log('error');
	}
});
