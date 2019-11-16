// @flow
import React from 'react';
import cn from 'classnames';

import './LeaderBoard.scss';

export default (props: Props) => {
  return (
    <div className="section section--leaderboard section--bkg-dark section--oblique-right">
      <div className="leaderboard">
        <h2 className="leaderboard__title">Live Tabelle</h2>
        <div className="leaderboard__board">
          <div className="leaderboard__board-head">
            <span>Team</span>
            <span>SP</span>
            <span>+/-</span>
            <span>PT</span>
            <span></span>
          </div>
          <div className="leaderboard__board-row">
            <span>FCB</span>
            <span>38</span>
            <span>+46</span>
            <span>91</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>38</span>
            <span>+63</span>
            <span>90</span>
            <span className="leaderboard__indicator leaderboard__indicator--down">
              -1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>XYZ</span>
            <span>37</span>
            <span>+12</span>
            <span>88</span>
            <span className="leaderboard__indicator">---</span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
          <div className="leaderboard__board-row">
            <span>BSC YB</span>
            <span>20</span>
            <span>+5</span>
            <span>55</span>
            <span className="leaderboard__indicator leaderboard__indicator--up">
              +1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
