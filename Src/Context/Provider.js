import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import moment from "moment";
const context = createContext();

const Provider = ({ children }) => {
  const [timings, setTimings] = useState([]);
  const [date, setDate] = useState({});
  const [sunrise, setSunrise] = useState("");
  const getData = async () => {
    const res = await axios
      .get(
        "https://api.aladhan.com/timingsByAddress?address=Cairo,EG&method=5&tune=2,3,4,5,2,3,4,5,-3&school=0"
      )
      .catch((err) => console.log(err));
    setTimings(res.data.data.timings);
    setSunrise(res.data.data.timings.Sunrise);
    setDate({
      date: res.data.data.date.readable,
      dayEn: res.data.data.date.gregorian.weekday.en,
      dayAr: res.data.data.date.hijri.weekday.ar,
      monthHijri: res.data.data.date.hijri.month.ar,
      hijriYear: res.data.data.date.hijri.year,
      hijriDay: res.data.data.date.hijri.day,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const prayers = [
    {
      id: "1",
      name: "الفجر",
      time: timings.Fajr,
    },
    {
      id: "2",
      name: "الضهر",
      time: timings.Dhuhr,
    },
    {
      id: "3",
      name: "العصر",
      time: timings.Asr,
    },
    {
      id: "4",
      name: "المغرب",
      time: timings.Maghrib,
    },
    {
      id: "5",
      name: "العشاء",
      time: timings.Isha,
    },
  ];
  // ////////////////////////////////////////////////
  const [timeIn, setTimeIn] = useState("");
  // //////////////////////////////////////
  useEffect(() => {
    let interval = setInterval(() => {
      moment();
      setTimeIn(moment().format("hh:mm:ss a"));
      setupCountdownTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);
  // ///////////////////////////////////////////////////////
  const setupCountdownTimer = () => {
    const timeInMoment = moment();
    let nextPrayer = null;
    let nextPrayerTime = null;
    if (
      timeInMoment.isAfter(moment(prayers[0].time, "hh:mm")) &&
      timeInMoment.isBefore(moment(prayers[1].time, "hh:mm"))
    ) {
      nextPrayer = prayers[1].name;
      nextPrayerTime = prayers[1].time;
    } else if (
      timeInMoment.isAfter(moment(prayers[1].time, "hh:mm")) &&
      timeInMoment.isBefore(moment(prayers[2].time, "hh:mm"))
    ) {
      nextPrayer = prayers[2].name;
      nextPrayerTime = prayers[2].time;
    } else if (
      timeInMoment.isAfter(moment(prayers[2].time, "hh:mm")) &&
      timeInMoment.isBefore(moment(prayers[3].time, "hh:mm"))
    ) {
      nextPrayer = prayers[3].name;
      nextPrayerTime = prayers[3].time;
    } else if (
      timeInMoment.isAfter(moment(prayers[3].time, "hh:mm")) &&
      timeInMoment.isBefore(moment(prayers[4].time, "hh:mm"))
    ) {
      nextPrayer = prayers[4].name;
      nextPrayerTime = prayers[4].time;
    } else if (
      timeInMoment.isAfter(moment(prayers[4].time, "hh:mm")) ||
      timeInMoment.isBefore(moment(prayers[0].time, "hh:mm"))
    ) {
      nextPrayer = prayers[0].name;
      nextPrayerTime = prayers[0].time;
    }

    setNextPrayerIs({ name: nextPrayer, time: nextPrayerTime });
    // ////////////////////////////////////////
    let timeLeft = moment(nextPrayerTime, "hh:mm").diff(timeInMoment);

    if (timeLeft < 0) {
      const afterIshaToMidnight = moment("23:59:59", "hh:mm:ss").diff(
        moment(timeInMoment, "hh:mm")
      );
      const beforeFajrFromMidnight = moment(prayers[0].time, "hh:mm").diff(
        moment("00:00", "hh:mm:ss")
      );
      const timeFromIshaToFajr = afterIshaToMidnight + beforeFajrFromMidnight;
      timeLeft = timeFromIshaToFajr;
    }
    const timeLeftDuration = moment.duration(timeLeft);
    setTimeToNextPrayerIs(
      `${timeLeftDuration.hours()}:${timeLeftDuration.minutes()}:${timeLeftDuration.seconds()}`
    );
  };
  const [nextPrayerIs, setNextPrayerIs] = useState({ name: "", time: "" });
  const [timeToNextPrayerIs, setTimeToNextPrayerIs] = useState("");
  return (
    <context.Provider
      value={{
        prayers,
        sunrise,
        date,
        timeIn,
        nextPrayerIs,
        timeToNextPrayerIs,
      }}
    >
      {children}
    </context.Provider>
  );
};
const useAuth = () => {
  return useContext(context);
};
export { Provider, useAuth };
