let style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '/hooks/tbg/_tbg.css'
document.head.appendChild(style);

universal.on('_t', (e) => {
	let a = document.createElement('p');
	a.innerText = e;
	a.classList.add('_tbg_main');
	document.body.appendChild(a);
});

universal.send('Request text')