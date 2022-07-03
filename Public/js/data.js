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
        url: $("#url").val(),
        amount: $("#amount").val()
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
        $("#url").val("");
        $("#amount").val("");

}