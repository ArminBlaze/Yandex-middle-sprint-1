const input: HTMLInputElement = document.getElementById('text') as HTMLInputElement;
const output = document.querySelector('.output') as HTMLDivElement;

// версия без объекта - нафига он
// input.addEventListener('input', (e: Event) => {
// 	console.log(e);

// 	output.innerHTML = (e as any).target.value;
// })

// переделка на объект
const data = {
	text: '',
};

input.addEventListener('input', (e: Event) => {
	const event = e as any;

	data.text = event.target.value;

	output.innerHTML = data.text;
	console.log(data.text);
});
