
 $('document').ready(function(){

        $("#login-form").submit(function(e){
            e.preventDefault();
            // alert("trying to login")
            ajaxLoginPost();
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
           if (result.email == formData.email && result.password == formData.password) {
            alert("login successful")
            window.location = "/"
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

})