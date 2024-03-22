// const baseUrl = 'ya-praktikum.tech/api/v2';
const baseUrl = 'https://ya-praktikum.tech/api/v2';

class AuthApi {
	// constructor() {

  // }

	register = async ({
		email,
		login,
		first_name,
		second_name,
		phone,
		password,
	}) => {
		const path = '/auth/signup';
		const fullPath = baseUrl + path;
		console.log(fullPath);

		const response = await fetch(fullPath, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				email,
				login,
				first_name,
				second_name,
				phone,
				password,
			}),
		});

		console.log(response.text().then(console.log));
	};
}

export default new AuthApi();
