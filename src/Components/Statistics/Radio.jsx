// @flow
import React from 'react';
import cn from 'classnames';

import Switch from 'react-toggle-switch';
import '../../../node_modules/react-toggle-switch/dist/css/switch.min.css';

import { Icon } from '@theme';

import './Radio.scss';

export default (props: Props) => {
  const [switched, toggleSwitch] = React.useState(false);

  return (
    <div className="section section--radio section--bkg-yellow section--oblique-right">
      <div className="radio">
        <h2 className="radio__title">
          Radio GS
          <span className="radio__play-button">
            <Icon icon="mdi/play-circle-outline" />
          </span>
        </h2>
        <div className="radio__audio-switch">
          <span>Reporter</span>
          <Switch
            onClick={() => {
              toggleSwitch(!switched);
            }}
            on={switched}
          />
          <span>Stadion Atmosphäre</span>
        </div>
      </div>
    </div>
  );
};
