import React, {Component} from 'react';
import calcTime from './components/calcTime';

import App from './components/App';

export class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			limitDate: [],
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

		const limitDate = inputDate.map(date => {
			if (date === inputDate[1]) {
				return parseInt(date) - 1;
			}

			return parseInt(date);
		});

		this.setState({limitDate: new Date(...limitDate), period: period});
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
