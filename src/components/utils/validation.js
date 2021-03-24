import monthDays from './monthDays';

class Validator {
	constructor(limit, period) {
		this.limit = limit;
		this.year = limit[0];
		this.month = limit[1];
		this.day = limit[2];
		this.hour = limit[3];

		this.period = period;

		this.date = '';
	}

	validateDate() {
		this.isValidate = true;
		this.message = 'Its Alright';

		this.validateInputs();

		return {
			isValid: this.isValidate,
			message: this.message,
		};
	}

	validateQuantity() {
		switch (this.isValidate) {
			case this.year < 0:
				this.isValidate = false;
				this.message = 'Invalid Year , Check it And Try Again  😨❌';
				this.continue = false;

				break;
			case this.month > 12 || this.month < 0:
				this.isValidate = false;
				this.message = 'Invalid Month , Check it And Try Again  😨❌';
				this.continue = false;

				break;
			case this.days > monthDays[this.month] || this.days < 0:
				this.isValidate = false;
				this.message = 'Invalid Days , Check it And Try Again  😨❌';
				this.continue = false;

				break;
			case this.hour > 24 || this.hour < 0:
				this.isValidate = false;
				this.message = 'Invalid Hour , Check it And Try Again  😨❌';
				this.continue = false;

				break;
			default:
				this.defineDate();
		}
	}

	isNegative() {
		const date = new Date(this.year, this.month, this.day, this.hour);
		const now = new Date();

		if (this.month > monthDays[this.month - 1]) {
			this.isValidate = false;
			this.message = 'Invalid Month Days , Check it And Try Again  😨❌';
		}
		if (date - now < 0) {
			this.isValidate = false;
			this.message =
				'Old Date! please set a date in the future  , Check it And Try Again  😨❌';
		}
	}

	validateInputs() {
		this.limit.forEach(input => {
			if (isNaN(input)) {
				this.continue = false;
				this.isValidate = false;
				this.message = 'Invalid Date, Check it And Try Again 😨❌';
			}
		});

		if (this.isValidate) {
			this.validateQuantity();
		}
	}

	defineDate() {
		if (this.period === 'PM') {
			this.hour = this.hour + 12;
		}

		if (this.period === 'PM' && this.hour === 24) {
			console.log('yes');
			this.hour = 12;
		}

		if (this.period === 'AM' && this.hour === 12) {
			this.hour = 0;
		}

		this.isNegative();
	}
}

export default Validator;
