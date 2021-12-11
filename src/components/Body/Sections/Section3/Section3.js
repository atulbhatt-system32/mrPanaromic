import React, { useEffect, useState } from "react";
import "./assets/css/section3.css";
import axios from "axios";
import workoutImage from "./assets/images/workout.svg";
import goodnightbrushImage from "./assets/images/goodnightbrush.svg";
import sixPlusSleepImage from "./assets/images/6hours-sleep.svg";
import totaltrackedImage from "./assets/images/totaltracked.svg";

export default function Section1() {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState({
    daysPassed: 0,
    workoutDays: 0,
    goodnightBrushDays: 0,
    sixPlusSleep: 0,
  });
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://notionhabits.herokuapp.com/habits")
      .then(function (response) {
        setHabits(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section3">
      <h2>I track my habits on Notion.</h2>
      {!loading ? (
        <div className="content">
          <div className="bigCard">
            <div className="workout-card card-margin inner-card">
              <img src={workoutImage} alt="workout" height="250px" width="150px" />
              <span className="activity-title">
                <p className="value">{habits.workoutDays}</p>
                <p>Workout Days</p>
              </span>
            </div>
            <div className="goodnight-brush-card card-margin inner-card">
              <img src={goodnightbrushImage} alt="brushing" height="250px" width="150px" />
              <span className="activity-title">
                <p className="value">{habits.goodnightBrushDays}</p>
                <p>GoodNight Brush</p>
              </span>
            </div>
            <div className="6-hour-plus-sleep-card card-margin inner-card">
              <img src={sixPlusSleepImage} alt="sleep" height="250px" width="150px" />
              <span className="activity-title">
                <p className="value">{habits.sixPlusSleep}</p>
                <p>6+ Hours Sleep</p>
              </span>
            </div>
            <div className="total-days-passed card-margin inner-card">
              <img src={totaltrackedImage} alt="day passed" height="250px" width="150px"/>
              <span className="activity-title">
                <p className="value">{habits.daysPassed}</p>
                <p>Total Tracked Days</p>
              </span>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
}
