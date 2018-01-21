console.log('Starting app');

setTimeout(() => {
	console.log('inside of callback');
}, 2000)


setTimeout(() => {
	console.log('something');
}, 0)
console.log('Stoping app');
