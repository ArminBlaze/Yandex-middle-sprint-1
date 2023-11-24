function namespace(str: string): {} {
	const regexp = /^\w\.\w(\.\w)*$/i;
	if(!regexp.test(str)) {
		throw new Error('Строка в неправильном формате');
	}

	let result = {};

	str.split('.').reverse().forEach(item => {
		result = {
			[item]: result,
		};
	});

	return result;
}

const result = namespace('a.b.c.d.e');
console.log(result);
