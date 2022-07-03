// import {getToken} from '../js/localStorageToken.js'
 
//  $('document').ready(function(){

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
            alert("login successful    " + result.token)
            // setloggedUserData(result.token);
            window.location = "/home"
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

// function setloggedUserData(token){
//     // const token = getToken();
//     alert("calling setloggeduserdata")
//     $.ajax({
//         type : "GET",
//         header : {"authorization":`Bearer ${token}`} ,
//         url : "/loggeduser",
//         success : function(result){
//             alert("got the result")
//             if(result != null && result!=""){
//             alert("user data : " + result.user)
//             console.log("user data : " + result.user);
//         }else{alert("empty")}
//         }
//     })
// }

function resetData(){
    $("#email").val("");
    $("#password").val("");

}

// })