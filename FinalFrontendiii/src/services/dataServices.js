export const validateName = (name) => {
	return name.length > 5
}

export const validateEmail = (email) => {
	return email.includes('@')
}

export const addToLocalStorage = (dentist) => {
	let favArr = JSON.parse(localStorage.getItem('favDentists'))
	if (favArr) {
		if (!favArr.some((item) => dentist.id === item.id)) {
			localStorage.setItem(
				`favDentists`,
				JSON.stringify([
					...JSON.parse(localStorage.getItem('favDentists')),
					dentist,
				]),
			)
    }else{
					let newArr = favArr.filter(item=>item.id!==dentist.id)
					localStorage.setItem(
						`favDentists`,
						JSON.stringify(newArr))
				}
	} else {
		localStorage.setItem('favDentists', JSON.stringify([dentist]))
	}
}
