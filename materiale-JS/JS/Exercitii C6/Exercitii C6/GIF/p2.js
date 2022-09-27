const images=[
	'img/0.png',
	'img/1.png',
	'img/2.png',
	'img/3.png',
	'img/4.png',
	'img/5.png'

]

let image=document.querySelector('#display');

let index = 0;
function changeImage(){
	if(index==6)
		index = 0;
	image.src=images[index];
	index++;
}

setInterval(changeImage, 100);