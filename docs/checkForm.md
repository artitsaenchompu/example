# function checkForm 
function ตรวจสอบ login Form   
	function checkForm () {
		
		if(form.gender.value == ""){
		alert("Select Gender ")

		}else if(form.username.value == ""){		
			alert('Fill username');		
			form.username.focus();
			return false;
			
			}else if(form.password.value == "") {
				alert('Fill Password');
				form.password.focus();
				return false;
				
				}else{
				alert('Thank you ' + form.gender.value + form.username.value);
			 document.write('Welcome : ' + form.gender.value + form.username.value + " <a href=''>back</a>" );  
		
				
			}
		
	  
	}
## html 
	<form name="form" onsubmit="return checkForm();">
		<form name="form" onsubmit="return checkForm();">
			<select name="gender">
				<option value="">Gender</option>
				<option value="Mr.">Mr.</option>
				<option value="Miss.">Miss.</option>
			</select>
			<p>Username : <input type="text" name="username" /></p>
			<p>Password : <input type="ttext" name="password" /></p>		
			<input type="submit" value="Send"/>
	</form>


- [Example](../examples/checkForm.html)