// @flow
import React from 'react';
import cn from 'classnames';

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
        <h1>Statistiken</h1>
      </div>
    </div>
  );
};
