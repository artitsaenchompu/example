# jquery Create Div 

### อันดับแรกให้  Jquery สร้างปุ่มขึ้นมาก่อน
------
	$(document).ready(function(){
			 	$('<button/>').attr("id","bt").text('Click to Add Div').appendTo('body');
	});
### ต่อไปพอ jquery สร้างปุ่มมาแล้วก็เริ่ม  function สร้าง div ใส่ id ให้ div โดยคำสั่ง .attr()

	$('<div/>').attr("id","newDiv")

### เมื่อได้ div มาแล้วต่อไปเพิ่ม รูปร่างหน้าตาให้มัน โดย คำสั่ง .css() คำสั่ง .css() สามารถใช้คำสั่งเหมือน css โดยระหว่างคำสั่งแต่ละจะเป็นแบบนี้ .css({width:'200',})
 	  
	.css({ background:'#000', width:'200px', height:'200px',margin:'5px'})
### พอสร้างเสร็จเราจะต้องกำหนดว่าเราจะเอาไว้ที่ไหน โดยจากตัวอย่างเพิ่มที่ tag body โดยไช้สำสั่ง .appandTo() แปลว่า เพิ่มที่('ที่ใหนก็ไส่ไป') 
	.appendTo("body");

### ต่อไปคือ ทำให้ function มันทำงานโดยใช้คำสั่ง .click() กำหนดให้เมื่อเรากดที่ปุ่ม ล็อคปุ่มที่ jquery ส้รางมาที่แรก

 	$('#bt').click(createDiv);
	แต่ต้องมี function ให้มัน
	$(function(){
				$('#bt').click(createDiv);
	});
## function เต็มๆ
	$(document).ready(function(){
			 	$('<button/>').attr("id","bt").text('Click to Add Div').appendTo('body');
	 });				
		createDiv = function () {
		  	$('<div/>').attr("id","newDiv").css({ background:'#000', width:'200px', height:'200px',margin:'5px'}).appendTo("body");
			},
				
			$(function(){
				$('#bt').click(createDiv);
			});

 [example](../examples/createDiv.html)