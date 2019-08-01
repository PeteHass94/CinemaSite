
function date_time()
{
        var day_hour = [];
        date = new Date;
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = h+':'+m+':'+s+'. ';

        day_hour.push(h);
        document.getElementById('date_time').innerHTML = result;

        setTimeout('date_time();','1000');
        return day_hour;
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//source https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_sessionstorage
function getFilmNameTime(name, time) {
  // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("selectedFilmName", name);
    sessionStorage.setItem("selectedFilmTime", time);

    window.location.href = "booking.html";

  } else {
    document.getElementById("userMessage").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


}
function addDates() {
  var y = document.getElementById("theFilmDate");

  theDate = new Date;
  day = theDate.getDay();
  weekDays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');


  for (i = 0; i <= 6; i++) {
    weekDay= day + i;
    weekDay = weekDay % 7;

    if (weekDay == "0")
    text = "Sunday closed"
    else if (weekDay == day)
    text = weekDays[weekDay]+ " (today) " + " open";
    else if (weekDay == day + 1)
    text = weekDays[weekDay]+ " (tomorrow) " + " open";
    else {
    text = weekDays[weekDay] + " open";
    }

    y.options[y.options.length] = new Option(text, i);
  }


}


function autoFill() {
  //sourced https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_add

  var x = document.getElementById("theFilmTimes");
  var option = document.createElement("option");

  //console.log(sessionStorage.getItem("selectedFilmName"));
  //console.log(sessionStorage.getItem("selectedFilmTime"));

  // Retrieve
  if (sessionStorage.getItem("selectedFilmName") === null || sessionStorage.getItem("selectedFilmTime") === null) {
    document.getElementById("theFilmNames").selectedIndex = 0;
    option.text = "Select Movie needed";
    x.add(option);


  }
  else {
    document.getElementById('theFilmNames').value = sessionStorage.getItem("selectedFilmName");
    option.text = sessionStorage.getItem("selectedFilmTime");
    x.add(option);
  }


  document.getElementById('theFilmDate').selectedIndex = 1;


}
function calculateTotal() {
  var total = [];
  var noTicket = document.getElementById("theTicketOrder");
  var userSelected = noTicket.options[noTicket.selectedIndex].text;
  var amount = userSelected *5;
  document.getElementById('subTotal').innerHTML = "£" + amount;
  total.push(amount);
  setTimeout('calculateTotal();','1000');
  return total;
}

function submitOrder() {
if (typeof(Storage) !== "undefined") {

  var orderedDate = document.getElementById("theFilmDate");
  orderedDate = orderedDate.options[orderedDate.selectedIndex].text;
  sessionStorage.setItem("orderDate", orderedDate);

  var orderedMovie = document.getElementById("theFilmTitle");
  orderedMovie = orderedMovie.options[orderedMovie.selectedIndex].text;
  sessionStorage.setItem("orderMovie", orderedMovie);

  var orderedTime =document.getElementById("theFilmTime");
  orderedTime = orderedTime.options[orderedTime.selectedIndex].text;
  sessionStorage.setItem("orderTime", orderedTime);

  var orderedTotal = document.getElementById("theTicketOrder");
  orderedTotal = (orderedTotal.options[orderedTotal.selectedIndex].text)*5;
  sessionStorage.setItem("orderDate", orderedTotal);

  if (orderedDate === "Sunday closed")
  document.getElementById("userMessage").innerHTML = "Sorry, we are not open on sundays please change the date";
  else
  window.location.href = "order.html";

} else {
  document.getElementById("userMessage").innerHTML = "Sorry, your browser does not support Web Storage... make your order in person";
}


}
