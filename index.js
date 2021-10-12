
 $(function() {
 	$('a').hover(function() {
 		$('a').addClass('.a-hover');
 	})
/////////////////// SIGN FORM HTML : JAVASCRIPT FILE //////////////////////////////////////////////////////
 	var $invalidMsg = $('#invalid'); //invalid msg element
 	var $submit = $('button');
 	var $form = $('.login-todo');	//login form
 	//var sign_user, username;		//declare var
 	var notMatchpass = '<small class="text-danger" id="notMatchpass">Password no match</small>';
	 				$('#sign-pass-conf').after(notMatchpass);
	 				$('#notMatchpass').hide();
 	$('.sign-form').submit(function(e) {		//sign up form submitting	
 		if(window.localStorage) {				//storing function username in local storage					
 				var sign_user = $('#sign-user:text').val(); // value of username in sign up
	 			var storedUserId = localStorage.getItem('user-id'); //getvalue of user-id
	 			localStorage.setItem('user-id',sign_user);		//set storage user-id as username in sign up	 			
	 			//	$('#sign-user-id').html(storedUserId);		//put username in header of sign up
	 			var sign_pass = $('#sign-pass:password').val(); //value of password in sign up
	 			var storedPassword = localStorage.getItem('password'); //getvalue of password
	 			localStorage.setItem('password',sign_pass);			//set storage password as password in sign up
	 			var pass_conf = $('#sign-pass-conf:password').val();
	 			if (pass_conf !== storedPassword) {
	 				e.preventDefault();
	 				$('#notMatchpass'),show();
	 			}
	 		}		
 	})
 	var storedUserId = localStorage.getItem('user-id');
 	var storedPassword = localStorage.getItem('password');
 	var loginPassword = storedPassword;
 	var loginUserid = storedUserId;
	 	//$('#user-id').html(storedUserId); //put username in header of login
	 	$('#home-id').html(loginUserid);  //put username in header of home
	 	$('#home-pass').html(loginPassword); //put password in header of home



 	/////CHECKING CORRECT USERNAME AND PASSWORD FUNCTION

 	//var username = sign_user;
 	var passVal = "0286";
 	var login_name = $('.nameUser');
 	var login_form = $('#login-form');
 	var user_name = $('.user_name');
 	login_form.width('100%');
 	$form.submit(function(e) {
 			//CHECK CORRET USER-NAME & PASSWORD
	  		var userNameVal = $('#user-name:text').val();
	  		var $password = $('#referel:text').val();
	  		//CHECK LOGIN USERNAME AS SIGN USERNAME ALSO PASSWORD
	  		if ((userNameVal !== storedUserId) || ($password !== storedPassword)) {
	  			e.preventDefault();
	  			$invalidMsg.show();	
	  		}
	  		//SHOW INVALID MESSAGE
	  		if ($password !== storedPassword) {
	  			e.preventDefault();
	  			$('.password').after($invalidMsg);
	  		}	
		})
 	

///////////////// HOME PAGE HTML : JAVASCRIPT FILE//////////////////////////////////////////////////////////	 	
 	//////////////////////////////////////ADDING TASK INTO THE VIEW
	var add_task = $('.add-task');
	var task = $('.task');
	add_task.on('click',function() {
		task.show();
		add_task.hide();
	})
	var task_date = $('.task-date');
	var task_time = $('.task-time');

	var added_tasks = $('.added-tasks')
	var task_form = $('#save');
	task_form.on('click',function(e) {
		e.preventDefault();
		var task_name_input = $('#task-name:text').val();
		var task_name = $('.task-name');
		var task_date_input = $('.date').val();
		var task_time_input = $('.time').val();
		
		var added_tasks_el = '<div class="col-md-7 col-sm-7 col-10"><h4 id="task-date" style="font-weight:bold;">'
		 					+ task_date_input + 
		 					'</h4></div><div class="col-md-7 col-sm-10 col-10 mb-3" style="box-shadow: -2px 0 9px -6px black "><div class="row bg-light pt-3"><div class="col-md-3 col-sm-4 col-4 ml-4"><h5 class="mb-3" style="margin-bottom:0rem;"><span class="fas fa-clock"> </span> <span class="task-time">'
		 					 +  task_time_input + '</span></h5></div><div class="col-md-5 col-sm-6 col-6"><h5 class="task-name text-capitalize mb-3" style="font-size: 23px;margin-bottom:0rem;font-weight: bold;">'
		 					   + task_name_input + '</h5></div><div class="col-md-1 col-sm-4 col-5 text-right"><span class="fas fa-edit"></span></div><div class="col-md-1 col-sm-4 col-4 text-right"><p class="text-primary">Done</p></div><div class="col-md-1"><span class="fas fa-delete"></span></div></div></div>';
		$('.added-tasks').prepend(added_tasks_el);
		var task_name_text =  $('#task-name:text');
		$('#task-name:text').val('');
		$('.date').val('');
		$('.time').val('');
		task.hide();
		add_task.show();
		var task_date_text = $('.task-date').text();
		var task_date = $('.task-date');
		//171			
	})

///////////////////DROP DOWN MENU IN NAV DIV
	$('#drop-down').hide();					//hide drop down menu
	$('#drop-down p').addClass('pointer');	//add class to drop down as pointer
	$('.nameUser').click(function(){	//showing and hiding by clicking userId
		$('#drop-down').toggle();
		//$('.row:first').removeClass('mb-5').addClass('mabo');
		//$('.mabo').removeClass('mabo').addClass('mb-5');
	})

	/*$('#logOut').click(function() {         ///CLEAR LOGIN ID
		var loginUserid = "";
		var loginPassword = "";
	})*/


//////////////////////// CHAGNE PASSWORD WINDOW
	$('#Change-pass-div').hide();		//hide chagne password window
	$('#close-chng-pass-window').click(function() {		//change pass window close button
		$('#Change-pass-div').hide();
	})  //END
	$('#change-pass').click(function() {	//when click "change password"
		$('#Change-pass-div').show();	//appear chagne pass window
		$('#drop-down').hide();			//hide dropdown nav
	}) //END
	$('#conf-new-pass').blur(function() {
		if($('#conf-new-pass').val() !== $('#new-pass').val()) {
			alert('does not match');
			$('#conf-new-pass').addClass('border-danger');
			e.preventDefault();
		}
	}) //END
	$('.Change-password').submit(function(e) {         //Event Submit for change Password
		if ($('#current-pass').val() !== storedPassword) { //Event if Current Password is Wrong
			alert('wrong password');
			e.preventDefault();
		}
		if (($('#new-pass').val() == "") || ($('#conf-new-pass').val() == "")) {  //Event if new Password & confirm is empty
			alert('Enter New Password & Confirm It');
			e.preventDefault();
		} else {										//
			if($('#conf-new-pass').val() == $('#new-pass').val()) {
				localStorage.setItem('password',$('#new-pass').val());
				$('#Change-pass-div').hide();
				$('#new-pass').val('');
				$('#conf-new-pass').val('');	
		  	}
		  }
		if($('#conf-new-pass').val() !== $('#new-pass').val()) {
			alert('does not match');
			$('#conf-new-pass').addClass('border-danger');
			e.preventDefault();
		}	
	}) //END
}); //END