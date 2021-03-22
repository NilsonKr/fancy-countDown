import React, {Component} from 'react';
import calcTime from './components/calcTime';

import App from './components/App';

export class AppContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
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

	componentDidMount() {
		this.update = setInterval(() => this.updateDate(), 1000);
	}

	clearCountDown() {
		clearInterval(this.update);
	}

	componentWillUnmount() {
		this.clearCountDown();
	}

	updateDate() {
		const limit = new Date(2021, 2, 23, 0);
		const date = calcTime(limit);

		this.setState({date});
		// console.log(this.state.date);
	}

	render() {
		return (
			<React.Fragment>
				<App time={this.state.date} />
			</React.Fragment>
		);
	}
}

export default AppContainer;
