$('document').ready(function(){
    $("#userForm").submit(function(e){
        e.preventDefault();
        ajaxPost();

    });

    function ajaxPost(){

        //preparing form data

        const formData = {
            name :   $("#name").val(),
            email : $("#email").val(),
            password :  $("#password").val(),
          
       

        }
console.log("posting data........");
        // Do Post
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "/save",
            data : JSON.stringify(formData),
            dataType : "json",
            success : function(result){
                // alert("data in result")
                if (result!=null && result!="") {
                    alert("registered successfully" )
                    window.location="/"
                }else{
                alert("something went wrong try again");
                }
            },
            error : function(e){
                alert("ERROR : ",e)
            }
        });
console.log("post success..........");
        resetData();

    }

    function resetData(){
        $("#name").val("");
        $("#email").val("");
        $("#password").val("");


    }
})