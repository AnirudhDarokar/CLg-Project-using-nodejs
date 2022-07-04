$('documnet').ready(function () {
    $('#data-form').submit(function (e) {
        e.preventDefault();
        dataAjaxPost();
    })
})

function dataAjaxPost() {
    // preaparing form data

    const formdata = {
        title: $("#title").val(),
        type: $("#type").val(),
        url: $("#url").val(),
        amount: $("#amount").val(),
        details : $("#details").val()
    }

    console.log("posting data");
    // Do post
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/postdata",
        data: JSON.stringify(formdata),
        dataType: 'json',
        success: function (result) {
            if (result != null && result != "") {
                alert("data created succesfully")
            } else {
                alert("something went wrong")
            }
        },
        error: function (e) {
            alert("error :", e)
        }
    })
    console.log("post success..........");

    resetData();
}

function resetData() {
         $("#title").val("");
         $("#type").val("");
        $("#url").val("");
        $("#amount").val("");
        $("#details").val("");

}