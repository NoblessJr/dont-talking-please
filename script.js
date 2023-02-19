const body = document.getElementById('xdxddxxdxd')
const root = document.getElementById('xdxdxd');
body.addEventListener('mousemove', (e) => {
    const x = (body.offsetWidth / 2) - e.clientX;
    const y = (body.offsetHeight / 2) - e.clientY;

    const c = ((Math.sqrt((x * x) + (y * y))) / 100);






    root.style.fontSize = `${c}rem`;
	

})