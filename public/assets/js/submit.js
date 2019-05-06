
function cleanForm() {
    $("#form").find(":text").not(":button", ":submit", ":radio").val("");
    $("#form").find(":radio").not(":button", ":submit").prop("checked", false);
};

$("form").on('submit', function(event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#scores-1").val(),
            $("#scores-1").val(),
            $("#scores-2").val(),
            $("#scores-3").val(),
            $("#scores-4").val(),
            $("#scores-5").val(),
            $("#scores-6").val(),
            $("#scores-7").val(),
            $("#scores-8").val(),
            $("#scores-9").val()
        ]
    };
    cleanForm();
    $.ajax({
        url: "/api/friends",
        method: "POST",
        data: newFriend,
    }).then(function(res) {
        $("#modal-box").show();
        $("#friend-match").text(res[0]);
        $(".modal-content").append('<img id="profilePic" src="' + res[1] + '">')
    });
})

$("#close").on("click", function() {
    $("#modal-box").hide()
})