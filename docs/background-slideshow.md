## background slide show 
## function ให้ภาพ background เปลี่ยนรูปได้

	var	imagesBackground = [ ที่อยู่ของไฟล์รูป ดึงมาจากที่ก็ได้ โดยไช้คำสั่งนี้ { src:'images/background/bg1.jpg'}, ต่อไปเรื่อยๆ
                { src:'images/background/bg1.jpg'},
                { src:'images/background/bg2.jpg'},
                { src:'images/background/bg3.jpg'},
                { src:'images/background/bg4.jpg'},
                { src:'images/background/bg5.jpg'},
                { src:'images/background/bg6.jpg'},

                 ];


	var num = 0; กำหนด num
	var delay = 4000;   delay เวลา ในการเปลี่ยน ภาพแต่ละภาพ 
	var speed = 6000; 	กำหนดความเร็วของเวลาในการทำงาน

	slideshow = function(){		

		if (num>=imagesBackground.length-1){ ถ้า num มากกว่าหรือเท่ากับของรูปทั้งหมด -1 
			num = 0; กำหนดให้ num เท่ากับ 0
		}		

		$(".image").fadeOut(delay,function(){  แล้วเริ่มการทำงาน ให้ภาพแรก fadeOut

			$(".image").attr(imagesBackground[num]).fadeIn(delay); แล้วภาพต่อมา fadeIn

		})

		num++; แล้วให้ num เพิ่มทีละหนึ่ง
		
		}
		
	
		$(function(){

		 setInterval(slideshow,speed); เริ่มทำงาน 

			setInterval() คือ ใช้ตั้งเวลาให้พังก์ชันทำงาน โดยจะทำงานวนซ้ำไปเรื่อยๆ 
		
		});

	<style>
		img {
		width: 100%;
		height: auto;
		position: fixed;
		top: 0;
		left: 0;
		z-dex:-10;
		}
	</style>

[example](../examples/background-slideshow.html)
