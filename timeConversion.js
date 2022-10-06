//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


function timeConversion(s) {
    // Write your code here
    var time = s.toLowerCase().split(':');
    var hours = parseInt(time[0]);
    var _ampm = time[2];
    if(_ampm.indexOf('am') != -1 && hours == 12) {
        time[0] = '00';
    }
    if(_ampm.indexOf('pm') != -1 && hours < 12) {
        time[0] = hours + 12;
    }
        return time.join(':').replace(/(am|pm)/, '');
}
