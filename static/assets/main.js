document.querySelector('.navbar-burger').onclick = function(e) {
	var target = document.querySelector('.navbar-burger').dataset.target

	var menu = document.getElementById(target)

	if(menu.classList.contains('is-active')) menu.classList.remove('is-active')
	else menu.classList.add('is-active')
};