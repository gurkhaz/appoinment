// JavaScript Document

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
				//Your code for AJAX starts       
		
				jQuery.ajax({
							 url:'/cgi-bin/appoinment.pl',
							 type: "post",
							 data: $(form).serialize(),
							success: function(result){
								console.log("dfkjldjf");
								console.log(result);
								//$("#result").html('Submitted successfully');
							},
							error:function(){
					//            alert("failure");
								//$("#result").html('There is error while submit');
							}                
				//Your code for AJAX Ends
			});       
		  }
		});
	
	
	
});