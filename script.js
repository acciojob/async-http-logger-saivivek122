//your JS code here. If required.
async function getTodos(){
	try{
		let response=awat fetch("https://jsonplaceholder.typicode.com/todos/1")
		let data=await response.json()
		console.log(data)
	}
	catch(error){
		console.log(error)
	}
}
getTodos()