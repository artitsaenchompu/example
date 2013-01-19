function checkForm() {

	if (form.gender.value == "") {
		alert("Select Gender ")
		

	} else if (form.username.value == "") {
		alert('Fill username');
		form.username.focus();
		return false;

	} else if (form.password.value == "") {
		alert('Fill Password');
		form.password.focus();
		return false;

	} else {
		alert('Thank you ' + form.gender.value + form.username.value);
		document.write('Welcome : ' + form.gender.value + form.username.value + " <a href=''>back</a>");

	}

}

//// METHOD 2

var boy = {
	
	name: "test",
	age: 20,
	
	/**
	 * function to change color on a html element
	 * @param color     color
	 * @param id        id of the html element
	 */
	changeColor: function(color,id){
		document.getElementById(id).style.backgroundColor = color;
	}
	
};
