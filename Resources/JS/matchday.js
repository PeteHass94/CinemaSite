function displayTeams() {
    document.getElementById("teams").style.display = "flex";
    document.getElementById("hideTeams").style.display = "flex";
    document.getElementById("displayTeams").style.display = "none";
}
function hideTeams() {
    document.getElementById("teams").style.display = "none";
    document.getElementById("displayTeams").style.display = "flex";
    document.getElementById("hideTeams").style.display = "none";
}

var detailsText = null;


$(function () {
    $('#orderModal').modal({
        keyboard: true,
        backdrop: "static",
        show: false,
    }).on('show', function () {
    });
    $(".FixList").find('tr[data-id]').on('click', function () {
        debugger;
        var element1 = document.getElementById("orderTickets");
        $(element1).removeClass("ticketForm");
        //do all your operation populate the modal and open the modal now. DOnt need to use show event of modal again
        detailsText =('I would like to go see ' + $(this).data('id') + ' on '+ $(this).children('td:nth-child(1)').html())
        $('#orderDetails').html(detailsText);
        $('#orderModal').modal('show');
    });
});

new ClipboardJS('.copyButton');

function order() {
  var element1 = document.getElementById("orderTickets");
  $(element1).addClass("ticketForm");
}
