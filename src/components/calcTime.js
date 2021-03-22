const calcTime = limit => {
	const today = new Date();
	const remain = Math.floor((limit - today) / 1000);

	const secs = ('0' + Math.floor((remain % 60) + 1000)).slice(-2);
	const mins = ('0' + Math.floor((remain / 60) % 60)).slice(-2);
	const hours = ('0' + Math.floor((remain / 3600) % 24)).slice(-2);
	const days = Math.floor((remain / (3600 * 24)) % 30);
	const months = Math.floor((remain / (3600 * 24 * 30)) % 12);
	const years = Math.floor(remain / (3600 * 24 * 30 * 12));

	return {
		secs,
		mins,
		hours,
		days,
		months,
		years,
	};
};

export default calcTime;
