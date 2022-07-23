

        $("#login-form").submit(function(e){
            e.preventDefault();
            // alert("trying to login")
            ajaxLoginPost();
            // setloggedUserData();
            // resetData();
        })

function ajaxLoginPost(){
 console.log("trying to login");
// Getting Data from from for validation
    var formData = {
        email : $("#email").val(),
        password : $("#password").val()
    }

    $.ajax({
        type : "POST",
        contentType:"application/json",
        url : "/verify",
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(result){
            console.log(result.email + " " + result.password);
           if (result.email && result.password && result.token) {
            localStorage.setItem("token" , result.token); 
            alert("login successful    " + result.token)
            // setloggedUserData(result.token);
            // let admin = result.Email.split("$");
            if (result.Email.includes("$admin")) {
                window.location = "/data";
            }else{
                window.location = "/home"
            }
           
           }else{
            alert("email or password dosn't match")
           }
        },
        error:function(e){
            console.log("ERROR : ", e);
        }
    });

    // resetting form data after posting
    resetData();
}



function resetData(){
    $("#email").val("");
    $("#password").val("");

}

// })