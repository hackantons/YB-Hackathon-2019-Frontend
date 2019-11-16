// @flow
import React from 'react';
import cn from 'classnames';

import './Single.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Icon } from '@theme';

export default (props: Props) => {
  const [switched, toggleSwitch] = React.useState(false);

  return (
    <div className="section section--playersingle">
      <div className="playersingle section--bkg-dark section--oblique-right">
        <header className="playersingle__header">
          <h1 className="playersingle__title" data-number="18">
            Jean-Pierre Nsame
          </h1>
          <img
            className="playersingle__avatar"
            src="/static/img/statistics/feed-player.png"
          />
        </header>
        <div className="matchinfo playersingle__matchinfo">
          <div className="playersingle__matchinfo-header">
            <span>HEUTE</span>
            <span>DRCHSCHNITT</span>
          </div>
          <ul className="matchinfo__details">
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">1</span>
                <span className="matchinfo__details-label">Tor</span>
                <span className="matchinfo__details-stat">0.7</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="100"
                value="70"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">3</span>
                <span className="matchinfo__details-label">Schüsse</span>
                <span className="matchinfo__details-stat">5</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="5"
                value="3"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">18</span>
                <span className="matchinfo__details-label">Pässe</span>
                <span className="matchinfo__details-stat">14</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="18"
                value="14"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">2</span>
                <span className="matchinfo__details-label">Eckbälle</span>
                <span className="matchinfo__details-stat">1</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="10"
                value="5"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">4.2 KM</span>
                <span className="matchinfo__details-label">Distanz</span>
                <span className="matchinfo__details-stat">4.3 KM</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="42"
                value="43"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">32 KM/H</span>
                <span className="matchinfo__details-label">Sprint</span>
                <span className="matchinfo__details-stat">29 KM/H</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="32"
                value="29"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">3</span>
                <span className="matchinfo__details-label">Schüsse</span>
                <span className="matchinfo__details-stat">5</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="5"
                value="3"
              />
            </li>
            <li className="matchinfo__details-item">
              <div className="matchinfo__details-head">
                <span className="matchinfo__details-stat">2</span>
                <span className="matchinfo__details-label">Fouls</span>
                <span className="matchinfo__details-stat">2</span>
              </div>
              <progress
                className="matchinfo__details-progress"
                max="2"
                value="2"
              />
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
    </div>
  );
};
