// JavaScript Document

function getAppointments() {
			
			var search_item = $("#search").val();
			
						jQuery.ajax({
							 url:'/cgi-bin/getAppoinment.pl',
							 type: "post",
							 data: {search_item:search_item},
							 success: function(result){
								
								 $("#details").empty();
								 $(".notice").empty();
								 	 var to_append = '';
									 
									 
									 var result1 = jQuery.parseJSON(result);
									 
									  $.each(JSON.parse(result), function( i, result2 ) {
										  
										  console.log(result2);
										 
										  to_append = to_append+'<tr><td>'+result2['date']+'</td><td>'+result2['time']+'</td><td>'+result2['description']+'</td></tr>';
										  
										  });
									 $(to_append).appendTo('#details'); 
								 
								
							},
							error:function(){
					
							}                
				
			});
			
			
		}
		
		
		

$(document).ready(function(){
	
	
	
	// display add form when click new button
    $("#new").click(function(){
        $("#new").hide();
		
		$("#add").show();
    });
	
	
	
	// cancel add form
	$("#cancel").click(function(){
		
		 $("#add").hide();		
		 $("#new").show();
		 $('#appoinmentForm').trigger("reset");
		
	});
	
	
	//validate current date
	var todayDate = new Date().toISOString().slice(0,10);
	$("#date").attr("min", todayDate);
	
	
	
	
	//form validate and ajax call
	 $("#appoinmentForm").validate({ 
	 
			rules: {   
			
				date: {
					
					required: true,
				},
				        
				time: {
					required: true,
					
				},
				desc: {
					required:  true
				}
			},
			messages: {
				 date: "Please choose date",
				 time: "Please enter time.",
    			 desc: "Please enter a description.",
			},
			errorElement : 'div',
			errorLabelContainer: '.alert-danger',
			
			submitHandler: function(form) {
				   
		
				jQuery.ajax({
							 url:'/cgi-bin/appoinment.pl',
							 type: "post",
							 data: $(form).serialize(),
							success: function(result){
								
								
								   $(".alert-success").fadeIn(1000).delay(1000).fadeOut(2000);
								   $("#add").hide();
								   $("#new").show();	
								   $('#appoinmentForm').trigger("reset");
								
								
							},
							error:function(){
					
							}                
				
			});       
		  }
		});
		
		
		
		
	
	
	
});

