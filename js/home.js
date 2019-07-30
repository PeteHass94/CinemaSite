
function date_time()
{
        var day_hour = [];
        date = new Date;

        /*
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var superscript=" ";
        if(d>3 && d<21) { superscript="th";}
        switch (d % 10) {
            case 1:  superscript="st";
                      break;
            case 2:  superscript="nd";
                      break;
            case 3:  superscript="rd";
                      break;
            default: superscript="th";
        }
        d= d+superscript;
        */
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
        //result = days[day]+' '+months[month]+' '+d+' '+year+', '+h+':'+m+':'+s;
        result = h+':'+m+':'+s+'. ';

        //day_hour.push(days[day]);
        day_hour.push(h);
        document.getElementById('date_time').innerHTML = result;

/*
        var filmTime = document.getElementById("FilmTime").innerHTML.toString();
        filmHour= filmTime.substring(0, 2);
        filmMinute = filmTime.substring(3,5);

        if (h < filmHour)
        {
        document.getElementById("FilmTime").classList.add('btn-outline-success');
        }
        else if (h == filmHour && m < filmMinute)
        {
        document.getElementById("FilmTime").classList.add('btn-outline-success');
        }
        else
        {
        document.getElementById("FilmTime").classList.add('btn-outline-danger');
        }
*/


        setTimeout('date_time();','1000');
        return day_hour;
}

/*
function darkColor()
{
    var currentTime = [];
    date = new Date;
    currentHour = date.getHours();
    currentMinute = date.getMinutes();

    var filmTime = document.getElementById('FilmTime').innerHTML;
    var filmHour= filmTime.subString(0,1);
    var filmMinute = filmTime.subString(3,4);

    if (currentHour < filmHour &&  currentMinute < filmMinute)
    document.getElementById('FilmTime').classList.add('btn-outline-success');
    else
    document.getElementById('FilmTime').addClass('btn-outline-danger');
    setTimeout('filmAvailabilty();','1000');
    return filmAvailabilty;
}
*/
