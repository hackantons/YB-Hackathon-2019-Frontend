// @flow

import React from 'react';
import cn from 'classnames';
import './Partner.scss';

export default ({ className }: { className: string } = '') => {
  const [partner] = React.useState([
    {
      title: '5 CHF Rabatt bei Lieferungen in bern',
      description:
        'Du kannst heute nicht im Stadion sein? Dieci liefert dir feinste Pizzas für deinen TV Abend.',
      logo: 'dieci.png',
      link: 'https://www.dieci.ch/de/',
    },
    {
      title: '5 CHF Rabatt bei Lieferungen in bern',
      description:
        'Du kannst heute nicht im Stadion sein? Dieci liefert dir feinste Pizzas für deinen TV Abend.',
      logo: 'dieci.png',
      link: 'https://www.dieci.ch/de/',
    },
  ]);

  return (
    <div className={cn(className, 'partner')}>
      {partner.map((p, key) => {
        return (
          <div key={key} className="partner__element">
            <img
              src={`/static/img/partner/${p.logo}`}
              className="partner__logo"
              alt={p.title}
            />
            <h3 className="partner__title">{p.title}</h3>
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
