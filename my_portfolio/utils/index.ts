export const range = function (start, end, step) {
	var range = [];
	var typeofStart = typeof start;
	var typeofEnd = typeof end;

	if (step === 0) {
		throw TypeError('Step cannot be zero.');
	}

	if (typeof end === 'undefined' && typeof 'step' === 'undefined') {
		end = start;
		start = 0;
		typeofStart = typeof start;
		typeofEnd = typeof end;
	}

	if (typeofStart == 'undefined' || typeofEnd == 'undefined') {
		throw TypeError('Must pass start and end arguments.');
	} else if (typeofStart != typeofEnd) {
		throw TypeError('Start and end arguments must be of same type.');
	}

	typeof step == 'undefined' && (step = 1);

	if (end < start) {
		step = -step;
	}

	if (typeofStart == 'number') {
		while (step > 0 ? end >= start : end <= start) {
			range.push(start);
			start += step;
		}
	} else if (typeofStart == 'string') {
		if (start.length != 1 || end.length != 1) {
			throw TypeError('Only strings with one character are supported.');
		}

		start = start.charCodeAt(0);
		end = end.charCodeAt(0);

		while (step > 0 ? end >= start : end <= start) {
			range.push(String.fromCharCode(start));
			start += step;
		}
	} else {
		throw TypeError('Only string and number types are supported');
	}

	return range;
};

export const sample = (arr, len = 1) => {
	let output = [];

	for (let i = 0; i < len; i++) {
		output.push(arr[Math.floor(Math.random() * arr.length)]);
	}

	return output;
};
export const generateId = (len = 4) => {
	// prettier-ignore
	const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	return sample(characters, len).join('');
};
