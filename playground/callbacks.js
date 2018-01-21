const getUser = (id, callback) => {
	const user = {
		id,
		name: 'named person'
	}
	setTimeout(() => {
		callback(user)
	}, 3000)
}

getUser(21, (userObject) => {
	console.log(userObject)
})
