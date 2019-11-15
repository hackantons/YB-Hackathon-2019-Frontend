// @flow
import React from 'react';
import cn from 'classnames';

export default (props: Props) => {
  return (
    <div className={cn(props.className)}>
      <div className="content">
        <section className="section">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </section>
        <section className="section section--bkg-dark section--oblique-right">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </section>
        <section className="section">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </section>
        <section className="section section--bkg-yellow section--oblique-left">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </section>
        <section className="section">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
            quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
        </section>
        <section className="section section--bkg-dark section--oblique-right footer-sponsor">
          <h5 className="footer-sponsor__label">Spielsponsor</h5>
          <img
            className="footer-sponsor__logo"
            src="static/img/nike-logo.png"
            alt="Nike Logo"
          />
        </section>
      </div>
    </div>
  );
};
