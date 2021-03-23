import React, {Component} from 'react';
import calcTime from './components/utils/calcTime';
import Validator from './components/utils/validation';

import App from './components/App';

export class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			limitDate: [],
			error: null,
			period: '',
			date: {
				secs: '00',
				mins: '00',
				hours: '00',
				days: '00',
				months: '00',
				years: '00',
			},
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state) {
			this.update = setInterval(() => this.updateDate(), 1000);
		}
	}

	componentWillUnmount() {
		this.clearCountDown();
	}

	clearCountDown() {
		clearInterval(this.update);
	}

	updateDate() {
		const date = calcTime(this.state.limitDate);

		this.setState({date});
		// console.log(this.state.date);
	}

	handleSubmit = ev => {
		ev.preventDefault();
		const inputDate = ev.target.time.value.split('/');
		const period = ev.target.period.value;

		const limitDate = [
			parseInt(inputDate[0]),
			parseInt(inputDate[1]) - 1,
			parseInt(inputDate[2]),
			parseInt(inputDate[3]),
		];

		const validation = new Validator(limitDate, period);

		const isValidate = validation.validateDate();

		console.log(isValidate);

		// this.setState({limitDate: new Date(...limitDate), period: period});
	};

	render() {
		return (
			<React.Fragment>
				<App time={this.state.date} handleSubmit={this.handleSubmit} />
			</React.Fragment>
		);
	}
}

export default AppContainer;

// [
// 	parseInt(inputDate[1]),
// 	parseInt(inputDate[1]) - 1,
// 	parseInt(inputDate[1]),
// 	inputDate[3],
// ];
