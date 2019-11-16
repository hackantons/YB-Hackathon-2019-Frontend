// @flow
import React from 'react';
import cn from 'classnames';

import './MatchInfo.scss';

export default (props: Props) => {
  return (
    <div className="section section--matchinfo">
      <div className="matchinfo">
        <ul className="matchinfo__details">
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">62%</span>
              <span className="matchinfo__details-label">Ballbesitz</span>
              <span className="matchinfo__details-stat"></span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="100"
              value="62"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">52%</span>
              <span className="matchinfo__details-label">Angriff</span>
              <span className="matchinfo__details-stat"></span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="100"
              value="52"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">18</span>
              <span className="matchinfo__details-label">Schüsse</span>
              <span className="matchinfo__details-stat">3</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="21"
              value="18"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">123</span>
              <span className="matchinfo__details-label">Pässe</span>
              <span className="matchinfo__details-stat">45</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="168"
              value="123"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">7</span>
              <span className="matchinfo__details-label">Eckbälle</span>
              <span className="matchinfo__details-stat">0</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="7"
              value="7"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">123KM</span>
              <span className="matchinfo__details-label">Distanz</span>
              <span className="matchinfo__details-stat">118KM</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="241"
              value="123"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">1</span>
              <span className="matchinfo__details-label">Gelbe Karten</span>
              <span className="matchinfo__details-stat">2</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="3"
              value="1"
            ></progress>
          </li>
          <li className="matchinfo__details-item">
            <div className="matchinfo__details-head">
              <span className="matchinfo__details-stat">0</span>
              <span className="matchinfo__details-label">Rote Karten</span>
              <span className="matchinfo__details-stat">0</span>
            </div>
            <progress
              className="matchinfo__details-progress"
              max="1"
              value="2"
            ></progress>
          </li>
        </ul>
        <div className="matchinfo__heatmap">
          <img
            className="matchinfo__heatmap-img"
            src="/static/img/statistics/game-stats-heatmap.png"
            alt="Heatmap"
          />
        </div>
      </div>
    </div>
  );
};
