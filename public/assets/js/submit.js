
function cleanForm() {
    $("#form").find(":text").not(":button", ":submit", ":radio").val("");
    $("#form").find(":radio").not(":button", ":submit").prop("checked", false);
};

$("form").on('submit', function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    $.ajax({
        url: '/api/friends',
        method: 'POST',
        data: values
    }).then(function(res) {
        $("#modal-box").show();
        $("#friend-match").text(res.name);
        $(".modal-content").append('<img id="profilePic" src="' + res.photo + '">')
    })
    cleanForm();
})

$("#close").on("click", function() {
    $("#modal-box").hide()
})