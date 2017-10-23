document.querySelector('.navbar-burger').onclick = function(e) {
	var target = document.querySelector('.navbar-burger').dataset.target

	var menu = document.getElementById(target)

	if(menu.classList.contains('is-active')) menu.classList.remove('is-active')
	else menu.classList.add('is-active')
};

document.getElementById('rocket').onclick = function(e) {
	e.preventDefault();

	document.getElementById('rocket').classList.add('go-top');

	setTimeout(function() {
		window.location = document.getElementById('rocket').getAttribute('href')
	}, 1000)
};