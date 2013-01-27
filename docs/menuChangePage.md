## menu chenge page with jquery and css
##	function เปลี่ยน page โดยใช้ jquery กับ css 

	$(function(){
     $('.first').css('opacity','1');
            $(".second_show").hide();
            $(".third_show").hide();
            	$('.second').css('opacity','0.5');
                $('.third').css('opacity','0.5');
            

            $('.first').click(function(e){
                $('.first_show').show();
                    $(".second_show").hide();
                    $(".third_show").hide();                
                       	$('.first').css('opacity','1');
                        $('.second').css('opacity','0.5');
                        $('.third').css('opacity','0.5');                        
                 			e.preventDefault();
            });

            $('.second').click(function(e){
                $('.second_show').show();
                    $(".third_show").hide();              
                    $('.first_show').hide();
                    	$('.second').css('opacity','1');
                        $('.first').css('opacity','0.5');
                        $('.third').css('opacity','0.5');                        
                 		e.preventDefault();
            });
             $('.third').click(function(e){
                $('.third_show').show();              
                    $('.first_show').hide();
                    $(".second_show").hide();
                    	$('.third').css('opacity','1');
                        $('.first').css('opacity','0.5');
                        $('.second').css('opacity','0.5');                        
                 		e.preventDefault(); 

    		});

	});
	<style type="text/css">

		.wrapper{
			width: 500px;
		}
	
		li{
			float: left;
			list-style: none;
			margin-left: 1px;
		}
	   li a{
			color: #fff;
			padding: 5px;
			background: #000;
			text-decoration: none;
			border-radius: 10px 10px 0 0;  
		}
		.page{
			margin-left: 41px;
			margin-top: 5px;
			background: #000;
			color: red;
		}

	</style>

		<div class="wrapper">
				<ul>
					<li><a href="#" class="first">first page</a></li>
					<li><a href="#" class="second">second page</a></li>
					<li><a href="#" class="third">third page</a></li>
				</ul>
				<div style="clear:both"></div>
				<div class="first_show page">first page</div>
				<div class="second_show page">second page</div>
				<div class="third_show page">third page</div>
	
		</div>

[example](../examples/menuChangePage.html)
