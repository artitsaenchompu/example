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
	},

	

	createDiv : function () {		
		
	  	$('<div/>').attr("id","newDiv").css({ background:'#000', width:'200px', height:'200px',margin:'5px'}).appendTo("body");

	},
	
};

    number = 1 ;

	addDivIdnumber = function(){
	if(number >= 5){
	   		$("#delete").show();
	   		$('#addButton').hide();
		}
				 
  		$('body').append('<div id="NewDiv'+ number +'">'+ number ); 		

     	number++; 		
		},	
	
		deleteDivById = function(){
		if(number <= 2){
			$("#addButton").show();
			$("#delete").hide();
		}		
		number--;
		$("#NewDiv"+ number).remove();		
	
	},

	slideshow = function(){	

		if (num>=imagesBackground.length-1){
			num = 0;
		}
		$(".image").fadeOut(delay,function(){
			$(this).css({
						'width': '100%',
						'height': 'auto',
						'position': 'fixed',
						'top': '0',
						'left': '0',
						'z-index': '-10',
						});
			$(".image").attr(imagesBackground[num]).fadeIn(delay);	
		});
		num++;
		console.log(num);

	}
		
	
		



