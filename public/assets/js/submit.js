
var test;

$("form").on('submit', function(event) {
    event.preventDefault();
    console.log("WOOH")

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

    console.log($("#scores-1").val())
    console.log(newFriend);
    $.ajax({
        url: "/api/friends",
        method: "POST",
        data: newFriend,
    }).then(function(res) {
        console.log(res);
        $("#modal-box").show();
        $("#friend-match").text(res)
    });
})

$("#close").on("click", function() {
    $("#modal-box").hide()
})