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
	}

	console.log(data);

	AuthApi.register(data)
}));
