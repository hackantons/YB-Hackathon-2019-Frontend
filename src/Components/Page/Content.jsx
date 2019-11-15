// @flow
import React from 'react';
import cn from 'classnames';

import { Button, ButtonGroup, Icon } from '@theme';
import Chat from '../Chat/Chat.jsx';

import './Content.scss';

type Props = {
  className: string,
};

export default (props: Props) => {
  const [isLoading: boolean, setLoading] = React.useState(false);
  const click = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className={cn(props.className)}>
      <div className="content">
        <h1>Hallo Welt</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor{' '}
          <a href="https://sayhello.ch">invidunt ut labore</a> et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h2>Icons</h2>
        <p>
          <Icon icon="mdi/account" /> Hallo Welt
        </p>
        <h2>Buttons</h2>
        <ButtonGroup>
          <Button
            text="Primary big"
            style="primary"
            loading={isLoading}
            onClick={click}
            large
          />
          <Button
            text="Primary"
            style="primary"
            loading={isLoading}
            onClick={click}
          />
          <Button
            text="Secondary"
            style="secondary"
            loading={isLoading}
            icon="mdi/soccer"
            onClick={click}
          />
          <Button
            text="Alternative"
            style="alt"
            loading={isLoading}
            onClick={click}
          />
          <Button
            text="No Button"
            style="nobutton"
            loading={isLoading}
            onClick={click}
          />
        </ButtonGroup>

        <Chat />
      </div>
    </div>
  );
};
