import React from 'react'
import dayjs from 'dayjs'
function CountDownTimer(timestamps) {
    const lastTimestampDayjs = dayjs(timestamps);
    const nowDayjs = dayjs();
    if(lastTimestampDayjs.isBefore(nowDayjs)){
        return {
            seconds : '00',
            minutes : '00',
            hours   : '00',
            days    : '00'
        }
    }
    return{
        seconds : getRemainingSeconds(nowDayjs,lastTimestampDayjs),
        minutes : getRemainingMinutes(nowDayjs,lastTimestampDayjs),
        hours   : getRemaininghours(nowDayjs,lastTimestampDayjs),
        days    : getRemainingdays(nowDayjs,lastTimestampDayjs)
    }
}
function getRemainingSeconds(nowDayjs,lastTimestampjs){
        const seconds = lastTimestampjs.diff(nowDayjs , 'seconds') % 60;
        return seconds;
}
function getRemainingMinutes(nowDayjs,lastTimestampjs){
        const minutes = lastTimestampjs.diff(nowDayjs , 'minutes') % 60;
        return minutes;
}
function getRemaininghours(nowDayjs,lastTimestampjs){
    const hours  = lastTimestampjs.diff(nowDayjs , 'hours') % 60;
    return  hours;
}
function getRemainingdays(nowDayjs,lastTimestampjs){
        const days  = lastTimestampjs.diff(nowDayjs , 'days') % 24;
        return  days;
}

export default CountDownTimer