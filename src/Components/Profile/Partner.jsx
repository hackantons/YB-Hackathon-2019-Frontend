// @flow

import React from 'react';
import cn from 'classnames';
import './Partner.scss';

export default ({ className }: { className: string } = '') => {
  const [partner] = React.useState([
    {
      title: 'YBPizza',
      description:
        'Dieci bietet für die gesammte Spieldauer die YB Pizza an. Hammer Pizza, hammer Preis!',
      logo: 'dieci.jpg',
      link: 'https://www.dieci.ch/de/',
    },
  ]);

  return (
    <div className={cn(className, 'partner')}>
      {partner.map((p, key) => {
        return (
          <div key={key} className="partner__element">
            <h3 className="partner__title">{p.title}</h3>
            <img
              src={`/static/img/partner/${p.logo}`}
              className="partner__logo"
              alt={p.title}
            />
            <p className="partner__description">{p.description}</p>
            <p className="partner__link">
              <a href={p.link}>Vom Angebot profitieren</a>
            </p>
          </div>
        );
      })}
    </div>
  );
};
