## Category: Attributes

	.addclass() คือ	 เพิ่ม คุณสมบัติ ของ CSS หรือ Style Sheet ที่ได้สร้างขึ้น หรือ add class ลงใน element อื่น ๆ ที่กำหนด การใช้งาน addClass สามารถใช้งาน removeClass ได้เช่นเดียวกัน
		$('.addclass-css').addClass("test-addclass + test-addclass2");

	.removeClass() ใช้สำหรับลบ class ใดๆ ออกจาก DOM โดยสามารถลบครั้งละ 1 ตัว หรือหลายๆตัวในครั้งเดียวก็ได้

	.attr() คือ คือ คำสั่งที่เพิ่มหรือเปลี่ยนการกระทำให้สิ่งที่เรา $(select)
			$(".show").click(function(){
                    $("img").attr({
	                        src:"images/test.jpg" ,
	                        width:100
                         //text:'test',
                        })
			    });
	.removeAttr()ในกรณีที่เราต้องการ remove attribute ออกจาก element ภายในเพจ jQuery ได้เตรียมคำสั่งไว้คำสั่งหนึ่งคือ removeAttr อย่างถ้าสมมติว่า ในฟอร์มของเรามีช่องเท็กบ้อกช่องหนึ่ง ซึ่งเราเซตไว้ว่าให้อ่านได้อย่างเดียว
				<input type="text" name="username" id="username" readonly="readonly" />
				$('#username').removeAttr( 'readonly' );
	

	.hasClass() คำสั่ง .hasClass ใช้สำหรับเช็คว่า selector ของเรามี class นั้นอยู่หรือไม่
	.hasClass(class) Returns: boolean(true หรือ false)

	.toggleClass(className) ถ้าจะแปลเป็นภาษาชาวบ้านก็คือ การสลับ class เข้า-ออก คือ ถ้ามี class อยู่ใน selector ให้เอาออก หากไม่มีอยู่ ก็ให้เอา class เข้าไปนั่นเอง

	.html()คำสั่งนี้ใช้สำหรับดึงเนื้อหาออกมาจากอีลีเม้นท์ คำสั่ง html() นี้จะดึงเอาทุกสิ่งทุกอย่างที่อยู่ข้างในออกมารวมถึงแท็ก html ด้วย

	.val() ใช้สำหรับแสดงค่า value ของ form ทั้งที่เป็น แบบ selected , checked , และ value โดยหาก input form นั้นๆ สามารถมีค่าเป็นแบบ select multiple=”multiple” ได้ ค่าที่ return กลับมาจะเป็น array

## Category: CSS
	
	.css()เพิ่ม css ให้กับ seletor 
		$(seletor).css({
			 color : 'blue'
             width:200
            })
	.innerHeight() ใช้สำหรับกำหนดค่าความสูงของ element ที่อยู่ใน border
	
	.innerWidth()ใช้กำหนดค่าและอ่านค่าความกว้าง ของ element ที่อ้างถึง ที่อยู่ใน border
	
	 .scrollLeft() ในการกำหนดความกว้างของ Scollbar ว่ามีความกว้างเท่าไหร่ถึงจะขึ้น Scollbar โดยอ้างถึงตำแหน่งในด้านซ้าย scrollLeft
		$("div.demo").scrollLeft(300); เป็นการกำหนด $("div.demo") ให้มีความกว้าง 300 px และจากนั้นจะให้การแสดงผลเป็น Scollbar แทน

	 .scrollTop() ในการกำหนดความสูงของ Scollbar ว่ามีความสูงเท่าไหร่ถึงจะขึ้น Scollbar โดยอ้างถึงตำแหน่งในด้านซ้าย scrollTop
		$("div.demo").scrollTop(300); เป็นการกำหนด $("div.demo") ให้มีความสูง 300 px และจากนั้นจะให้การแสดงผลเป็น Scollbar แทน
	
	



	