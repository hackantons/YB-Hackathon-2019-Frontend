// @flow
import React from 'react';
import cn from 'classnames';

type Props = {
  className: string,
};

export default (props: Props) => {
  return (
    <div className={cn(props.className)}>
      <div className="content">
        <h1>Data visualization</h1>
        <p>
          Hier können ein paar Beispiele für Charts oder Datenvisualisierung
          sein. ;)
        </p>
      </div>
    </div>
  );
};
