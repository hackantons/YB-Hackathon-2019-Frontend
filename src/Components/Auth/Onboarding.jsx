// @flow

import React from 'react';
import cn from 'classnames';
import { idb, uuidv4 } from '@/store/idb';
import { Auth } from 'aws-amplify';

export default ({ className }: { className: string } = '') => {
  const setUserfromDB = async () => {
    return;
    let dbUser = await idb.get('userId');
    if (!dbUser) {
      dbUser = uuidv4() + '@bscyb.dev';
    }

    console.log(dbUser);

    const newUser = await Auth.signUp({
      username: dbUser,
      password: 'yb1898',
    });

    const auth = await Auth.signIn(dbUser, 'yb1898');
    console.log(auth);

    const dbSet = await idb.set('userId', dbUser);
    setUser(dbUser);
    /*
    idb.get('user').then(resp => {
      if (resp) {
        setUser(resp);
      } else {
        const id = uuidv4();
        idb.set('userKey', id);
        setUser(id);
      }
    });
     */
  };

  React.useEffect(() => {
    //setUserfromDB();
  });

  return (
    <div className={cn(className, 'coins')}>
      <div className="page-loading">
        <Loader className="page-loading__loader" />
      </div>
    </div>
  );
};
