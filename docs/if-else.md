# if-else function
	การใช้ if-else 
	ยกตัวการเช็ค เกรด นักเรียน

	var grade = $('.input').val();
                if(grade >= 90 ){
                    alert('This Grade = A')
                }else if(grade >= 80 ){
                    alert('This Grade = B')
                }else if(grade >= 70 ){
                    alert('This Grade = C')
                }else if(grade >= 60 ){
                    alert('This Grade = D')
                }else if(grade >= 50 ){
                    alert('This Grade = E')
                }else if(grade >= 40 ){
                    alert('This Grade = F')
                }else{
                    alert('No Grade for this to bad')
                }
	จากตัวอย่างคือกำหนดเกรดให้ tag input ถ้าเราใส้จำนวนคะแนนลงไปใน tag input แล้วให้โปรแกรมค้นหาว่าคะแนนเท่านี้ได้เกรดอะไร และก็ สุดท้ายคือ else คือถ้า มีคะแนนต่ำกว่า 40-0 คือไม่มี เกรดไห้แล้วเพราะเราไม่ได้กำหนดว่าจะได้เกรดอะไร
	function เต็มๆคือ 
	CheckGrade = function(){
            var grade = $('.input').val();
                if(grade >= 90 ){
                    alert('This Grade = A')
                }else if(grade >= 80 ){
                    alert('This Grade = B')
                }else if(grade >= 70 ){
                    alert('This Grade = C')
                }else if(grade >= 60 ){
                    alert('This Grade = D')
                }else if(grade >= 50 ){
                    alert('This Grade = E')
                }else if(grade >= 40 ){
                    alert('This Grade = F')
                }else{
                    alert('No Grade for this to bad')
                }
            console.log(grade) ;
        },
      $(function(){
        $('.checkG').click(CheckGrade);
      });

	<input type="text" name="grade" class="input" />
    <input type="submit" value="Check" class="checkG">

[Example](../examples/if-else.html)