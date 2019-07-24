function date_time(CurrentDay, CurrentHour)
{
        var day_hour = [];
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
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
        result = days[day]+' '+months[month]+' '+d+' '+year+', '+h+':'+m+':'+s;
        day_hour.push(days[day]);
        day_hour.push(h);
        document.getElementById('date_time').innerHTML = result;
        setTimeout('date_time("'+CurrentDay+','+CurrentHour+'");','1000');
        return day_hour;
}
