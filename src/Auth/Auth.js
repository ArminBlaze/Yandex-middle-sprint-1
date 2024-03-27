/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/quotes
import AuthApi from "../api/auth-api";

console.log('LOGIN!');

// eslint-disable-next-line no-undef
const form = document.querySelector('.Auth');

form.addEventListener('submit', (e => {
	console.log('FORM ADDEVENTLISTENER SUBMIT');
	e.preventDefault();
	// eslint-disable-next-line @typescript-eslint/keyword-spacing
	const {
		login,
		password,
	} = e.target;

	console.log(e);

	const data = {
		login: login.value,
		password: password.value,
	};

	console.log(data);

	const isFormValid = validateForm([login, password]);

	if(isFormValid) {
		console.log('Отправляю запрос');
		// AuthApi.register(data);
	}
}));

function validateForm(fieldsArr) {
	console.log('Запускаю валидацию формы!!!');
	let result = true;

	fieldsArr.forEach(field => {
		const inputResult = validateField(field);
		if(inputResult === false) result = false;
	});
	console.log('Результат валидации формы: ', result);
	return result;
}

form.addEventListener('focusout', e => {
	validateField(e.target);
});

function validateField(input) {
	// const input = e.target;
	const name = input.name;
	const value = input.value.trim();

	if(!value) {
		showError(input, 'Заполните это поле');
		return false;
	}
	if(value.length >= 256) {
		showError(input, 'Слишком много букв, нужно меньше');
		return false;
	}

	switch (name) {
		case 'login': {
			if(!value.match(/^[a-zA-Z\d_]+$/)) {
				showError(input, 'Логин может может состоять из английских букв и цифр');
			}
			else {
				hideError(input);
				return true;
			}
			break;
		}

		case 'password': {
			if(value.length < 8) {
				showError(input, 'Пароль должен быть длиннее 7 символов');
			}
			else {
				hideError(input);
				return true;
			}
			break;
		}

		default:
			return false;
	}
	return false;
}

function showError(input, errorMessage = '') {
	if(input.nodeName.toUpperCase() !== 'INPUT') {
		return;
	}
	const parent = input.parentElement;
	parent.classList.add('Error');

	if(errorMessage) {
		const errorBlock = parent.querySelector('.Auth__Error');
		errorBlock.innerText = errorMessage;
	}
}

function hideError(input) {
	input.parentElement.classList.remove('Error');
}
