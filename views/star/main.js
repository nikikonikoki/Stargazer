document.querySelector('.navbar-burger').onclick = function(e) {
	var target = document.querySelector('.navbar-burger').dataset.target

	var menu = document.getElementById(target)

	if(menu.classList.contains('is-active')) menu.classList.remove('is-active')
	else menu.classList.add('is-active')
};

document.getElementById('link').onclick = function(e) {
	e.preventDefault();

	document.getElementById('link').classList.add('click');

	setTimeout(function() {
		window.location = document.getElementById('links).getAttribute('href')
	}, 
};

