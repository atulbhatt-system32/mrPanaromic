import React,{useEffect, useState} from "react"
import "./assets/css/section3.css"
import axios from 'axios'

export default function Section1(){

    const [loading, setLoading] = useState(true)
    const [habits, setHabits] = useState({
        daysPassed: 0,
        workoutDays: 0,
        goodnightBrushDays: 0,
        sixPlusSleep: 0
    })
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
        <div className = "section3">
            <h2>I track my habits on Notion.</h2>
            {!loading 
            ?
            <div className="content">
                <div className="bigCard">
                    <div className="total-days-passed card-margin">
                        <p className="value">{habits.daysPassed}</p>
                    </div>
                    <div className="workout-card card-margin">
                        <p className="value">{habits.workoutDays}</p>
                    </div>
                    <div className="goodnight-brush-card card-margin">
                        <p className="value">{habits.goodnightBrushDays}</p>
                    </div>
                    <div className="6-hour-plus-sleep-card card-margin">
                        <p className="value">{habits.sixPlusSleep}</p>
                    </div>                 
                </div>
            </div>
            :
            "Loading..."}
        </div>
    )
}