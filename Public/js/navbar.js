$(document).on('click', '#user-data-button', function () {
    // alert("clicked");
    $.ajax({
        type: "GET",
        url: "/getloggeduserdata",
        success: function (result) {
            // console.log(result.name);
            let bet = `<tr><td>Name</td><td>${result.name}</td></tr><tr><td>User Id</td><td>${result.email}
            </td></tr><tr><td>Account creatiion date</td><td>${result.join.slice(0 , 10)}</td></tr>`;
            let userInfoModal = '<div class="userInfo">' + '<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' +
                ' <div class="modal-dialog">' +
                ' <div class="modal-content">' +
                ' <div class="modal-header">' +
                '<h5 class="modal-title" id="staticBackdropLabel">Your are a Shopify Customer</h5>' +
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                ' </div>' +
                ' <div class="modal-body">' +
                ' <table class="table table-secondary">' +
                '  <tbody>' +
                bet +
                ' </tbody>' +
                ' </table>' +
                ' </div>' +
                ' <div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
                ' </div></div></div></div></div>';




            $("body").append(userInfoModal);
            $('#staticBackdrop').modal('show');
            $("#staticBackdrop").on('hidden.bs.modal', function () {
                $("#staticBackdrop  ").remove();
            })

            $(".userID").html(result.name);
        }
    
    })


})

$(document).on('click', "#logut-btn", function(){window.location="/"
    $(".userInfo").hide();
})
