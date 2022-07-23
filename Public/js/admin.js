$('document').ready|(function () {
    $('data-form').sumbit(function (e) {
        e.preventDefault();
        DataPost();
        resetData();
    })
})

function DataPost (){
    const fromData ={
        title: $("#title").val(),
        type: $("#type").val(),
        url: $("#url").val(),
        amount: $("#amount").val(),
        details : $("#details").val()
    }

    console.log("sending data by datapost thorugh admin");
    $.ajax({
        type:'POST',
        conytentType : "application/json",
        url: "/admin",
        data: JSON.stringify(fromData),
        dataType: "json",
        success:function(result){
            if (result != null && result != "") {
                alert("data posted succesfully")
            } else {
                alert("something went wrong")
            }
        },
        error: function (e){
            alert("e: ",e)
        }
    })
}

function resetData() {
    $("#title").val("");
    $("#type").val("");
   $("#url").val("");
   $("#amount").val("");
   $("#details").val("");

}