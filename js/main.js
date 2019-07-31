
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


function getFilmNameTime(filmName, filmTime) {
  var name = filmName.toString();
  var time = filmTime.toString();

  window.location.href = "booking.html";
  console.log(name);
  console.log(time);



  document.getElementById('selectedFilm').value = name;


}
