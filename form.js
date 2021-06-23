function validateForm() { 
			var name= document.forms["form"]["Name"].value;
			var email= document.forms["form"]["email"].value;
			var comment= document.forms["form"]["comment_box"].value;
			if (name == "" || email == "" || comment == ""){
				alert ("Empty field found.please fill up the form.");
			}
			else{
				alert("Thank you " + name + " for the comment.");
			}
		}