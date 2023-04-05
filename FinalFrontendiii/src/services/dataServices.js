export const validateName = (name) => {
	return name.length > 5
}

export const validateEmail = (email) => {
	return email.includes('@')
}

export const addToLocalStorage = (dentist) => {
	let newArr = JSON.parse(localStorage.getItem('favDentists'))
	if (newArr) {
		if (!newArr.some((item) => dentist.id === item.id)) {
			localStorage.setItem(
				`favDentists`,
				JSON.stringify([
					...JSON.parse(localStorage.getItem('favDentists')),
					dentist,
				]),
			)
    }
	} else {
		localStorage.setItem('favDentists', JSON.stringify([dentist]))
	}
}
