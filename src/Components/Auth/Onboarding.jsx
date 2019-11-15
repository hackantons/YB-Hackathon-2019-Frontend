// @flow

import React from 'react';
import cn from 'classnames';
import { idb, uuidv4 } from '@/store/idb';
import { Auth } from 'aws-amplify';
import {
  Form,
  FormFieldset,
  InputText,
  InputTextarea,
  Loader,
} from '@theme/index';
import axios from 'axios';

export default ({ className }: { className: string } = '') => {
  const [user, setUser] = React.useState('');

  const setUserfromDB = async () => {
    let dbUser = await idb.get('userId');
    if (!dbUser) {
      dbUser = uuidv4() + '@bscyb.dev';
    }

    try {
      await Auth.signUp({
        username: dbUser,
        password: 'yb1898',
      });
    } catch (error) {}

    const signIn = await Auth.signIn(dbUser, 'yb1898');
    const auth = await Auth.currentSession();
    const accessToken = auth.getAccessToken();
    axios.defaults.headers.common = {
      Authorization: accessToken.getJwtToken(),
    };

    const dbSet = await idb.set('userId', dbUser);
    setUser(dbUser);

    console.log('DO TEST');

    axios
      .get(
        'https://tg9tjq6kak.execute-api.eu-central-1.amazonaws.com/prod/profile'
      )
      .then(resp => {
        console.log(resp);
      });
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
    setUserfromDB();
  });

  return (
    <div className={cn(className, 'onboarding')}>
      <h1>Sälü</h1>
      <p>TRIFF DICH MIT FREUNDEN</p>
      <Form
        onSubmit={data => {
          console.log(data);
        }}
        className={cn(className)}
      >
        <FormFieldset legend="Personal Data">
          <InputText
            name="name"
            label="Name"
            placeholder="Muster"
            register={{ required: 'This field is required' }}
          />
        </FormFieldset>
      </Form>
    </div>
  );

  return (
    <div className={cn(className, 'coins')}>
      <div className="page-loading">
        <Loader className="page-loading__loader" />
      </div>
    </div>
  );
};
