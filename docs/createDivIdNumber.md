## functiont create new Div with Id Number

## สร้าง div ใหม่กับเพื่ม เลข Id ให้ Div

 number = 1 ; กำหนด เลขไห้เท่ากับ 1

	addDivIdnumber = function(){ function เพิ่ม Div
	
	if(number >= 5){  ถ้าเลขของ div มากกว่าหรือเท่ากับให้ทำข้างล่าง
	   		$("#delete").show();
	   		$('#addButton').hide();
		}
		 ให้ body เพิ่ม div id + ตัวเลขของ div 
  		$('body').append('<div id="NewDiv'+ number +'">'+ number);

     	number++; ให้เพิ่มทีละ 1		

	}
	
	deleteDivById = function(){ function ลบ Div
	if(number <= 2){ ถ้า div หมด ให้ทำ ข้างล่าง
			$("#addButton").show();
			$("#delete").hide();
		}		
		number--; ให้ลบทีละ 1 
		$("#NewDiv"+ number).remove(); ลบ Div กับ เลขของ Div
		
	
	}

[Example](../examples/createDivIdNumber.html)