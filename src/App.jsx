import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/kori.jpeg";

export default function App() {
  const [currentDate, setCurrentDate] = useState(null);
  const days = [
    "Sunday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const utcDate = now.toISOString();
      const utcDay = now.getUTCDay();
      const timeMilliseconds = now.getTime();

      setCurrentDate({ utcDate, utcDay, timeMilliseconds });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app">
      <div className="section1">
        <h1 data-testid="slackUserName">Gideon Kori</h1>
        <img
          src={profile}
          className="profile-pic"
          data-testid="slackDisplayImage"
          alt="Gideon Kori"
        />
      </div>
      <div className="section2">
        <div>
          {currentDate && (
            <div>
              <p data-testid="currentDayOfTheWeek">
                {days[currentDate.utcDay]}
              </p>
              <p data-testid="currentUTCTime">{currentDate.timeMilliseconds}</p>
            </div>
          )}
        </div>
        <div>
          <p data-testid="myTrack">Frontend</p>
        </div>
        <div class="gitprofile">
          <a
            data-testid="githubURL"
            href="https://github.com/kori-njoroge/profile"
            target="_blank"
          >
            Github URL
          </a>
        </div>
      </div>
    </div>
  );
}
