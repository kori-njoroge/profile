import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/kori.jpeg";
import git from "./assets/git.png";

export default function App() {
  const [currentDate, setCurrentDate] = useState(null);
  const track = "Frontend";
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
      // const timeMilliseconds = now.getMilliseconds

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
              <p className="collapse">Today:&nbsp;</p>
              <p className="collapse bold" data-testid="currentDayOfTheWeek">
                {days[currentDate.utcDay]}
              </p> <br />
              <p className="collapse">Time:&nbsp;&nbsp;</p>
              <p className="collapse bold" data-testid="currentUTCTime">{currentDate.timeMilliseconds}</p>
            </div>
          )}
        </div>
        <div>
          <p className="collapse">Track:&nbsp;&nbsp;</p>
          <p className="collapse bold" data-testid="myTrack">{track}</p>
        </div>
        <div class="gitprofile">
          <a
            data-testid="githubURL"
            href="https://github.com/kori-njoroge/profile"
            target="_blank"
          >
            <img className="git-logo" src={git} alt="githubURL"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
