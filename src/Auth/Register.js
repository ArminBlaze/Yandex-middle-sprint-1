/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/quotes
import AuthApi from "../api/auth-api";

console.log('REGISTER!');

// eslint-disable-next-line no-undef
const form = document.querySelector('.Auth');

form.addEventListener('submit', (e => {
	e.preventDefault();
	// eslint-disable-next-line @typescript-eslint/keyword-spacing
	const {
		email,
		login,
		first_name,
		second_name,
		phone,
		password,
	} = e.target;

	console.log(e);

	const data = {
		email: email.value,
		login: login.value,
		first_name: first_name.value,
		second_name: second_name.value,
		phone: phone.value,
		password: password.value,
	};

	console.log(data);

	AuthApi.register(data);
}));

form.addEventListener('focusout', e => {
	console.log(e.target);

	const input = e.target;
	const name = input.name;
	const value = input.value;
	console.log(name, value);

	switch (name) {
		case 'email': {
			if(!value || !value.match(/^[a-zA-Z_-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$/)) {
				showError(input);
			}
			else {
				hideError(input);
			}
			break;
		}
		case 'login': {
			if(!value || !value.match(/^[a-zA-Z\d_]+$/)) {
				showError(input);
			}
			else {
				hideError(input);
			}
			break;
		}

		default:
			break;
	}
});

function showError(input) {
	input.parentElement.classList.add('Error');
}

function hideError(input) {
	input.parentElement.classList.remove('Error');
}
