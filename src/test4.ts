function isInRangeValidMonth(
	authorizationStartDate,
	clearanceStartDate,
	month,
	quarter,
) {
	if (!quarter || (!authorizationStartDate && !clearanceStartDate)) {
		return false
	}
	// authorizationStartDate 格式为 20250115-20260310
	// month格式为 1月
	// quarter格式为 2025-Q1
	const [clStartDate, clEndDate] = (clearanceStartDate || '').split('-')
	const [authStartDate, authEndDate] = (authorizationStartDate || '').split('-')
	// const startDate = clStartDate < authStartDate ? clStartDate : authStartDate
	let startDate = authStartDate
	if (!startDate && clStartDate) {
		startDate = clStartDate
	} else if (clEndDate && clEndDate < authStartDate) {
		startDate = clStartDate
	}
	let endDate = authEndDate
	if (!endDate && clEndDate) {
		endDate = clEndDate
	} else if (clEndDate && authEndDate < clEndDate) {
		endDate = clEndDate
	}
	const startDateMonth = startDate.substring(0, 6)
	const endDateMonth = endDate.substring(0, 6)
	const currentMonth =
		quarter.split('-')[0] + `0${month.replace('月', '')}`.slice(-2)
	if (currentMonth >= startDateMonth && currentMonth <= endDateMonth) {
		return true
	}
	return false
}
