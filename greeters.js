var allGreeters = [
	'asset/Greeters/Mango.png',
	'asset/Greeters/Ivan.png'
]

var x = Math.floor(Math.random() * allGreeters.length);
var img = document.getElementById('greeterCharacters');
img.src = allGreeters[x];