
function cleanForm() {
    var elements = $('form').elements;
    var field_type = elements.type.toLowerCase;
    
    for (var i in elements) {
        if (field_type == "text") {
            elements[i].val("");
        } else if (field_type == "radio") {
            elements[i].val("");
        }
    }
};

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
    cleanForm();
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