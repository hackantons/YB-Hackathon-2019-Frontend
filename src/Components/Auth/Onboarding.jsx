// @flow

import React from 'react';
import cn from 'classnames';
import { idb, uuidv4 } from '@/store/idb';
import { Auth } from 'aws-amplify';
import { endpointGroups } from '@/store/amplify';
import { Button, Form, FormError, InputText, Loader } from '@theme/index';
import axios from 'axios';

import './Onboarding.scss';
import { connect } from 'react-redux';
import { updateUserGroup, updateUserId, updateUserName } from '@redux/actions';

const Onboarding = ({
  className,
  user,
  updateUserGroup,
  updateUserId,
  updateUserName,
}) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [newGroup: string, setNewGroup] = React.useState('');
  const [error: string, setError] = React.useState('');

  const setUserfromDB = async () => {
    if (user.id !== '' && newGroup !== '' && newGroup !== 'new') {
      updateUserGroup(newGroup);
    }

    if (user.id !== '') {
      return;
    }
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

    await Auth.signIn(dbUser, 'yb1898');
    const auth = await Auth.currentAuthenticatedUser();
    const JWT = auth.signInUserSession.idToken.jwtToken;

    axios.defaults.headers.common = {
      Authorization: JWT,
    };

    const dbSet = await idb.set('userId', dbUser);
    const dbUserName = await idb.get('userName');
    if (dbUserName) {
      updateUserName(dbUserName);
    }
    updateUserId(dbUser);
  };

  React.useEffect(() => {
    setUserfromDB();
  });

  if (user.id === '') {
    return (
      <div className={cn(className, 'coins')}>
        <div className="page-loading">
          <Loader className="page-loading__loader" />
        </div>
      </div>
    );
  }

  /**
   * Onboarding
   */
  let form = (
    <React.Fragment>
      <h1 className="onboarding__title">Sälü!</h1>
      <p className="onboarding__text">TRIFF DICH MIT FREUNDEN</p>
      <Form
        id="groupFindForm"
        onSubmit={data => {
          setFormProcessing(true);
          axios
            .get(endpointGroups + data.group + '/')
            .then(resp => {
              setNewGroup(data.group);
              setFormProcessing(false);
            })
            .catch(() => {
              setFormProcessing(false);
              alert('gruppe konnte nicht gefunden');
            });
        }}
        className="onboarding__form"
        oneliner
      >
        <InputText
          name="group"
          label="Gruppe"
          placeholder="Gruppe"
          register={{ required: 'This field is required' }}
          value=""
          large
        />
        <Button
          text=""
          type="submit"
          loading={formProcessing}
          style="primary"
          icon="mdi/send"
        />
        {error !== '' && <FormError>{error}</FormError>}
      </Form>
      <Button
        text="Erstelle eine neue Gruppe"
        style="secondary"
        className="onboarding__new-group"
        onClick={() => {
          setNewGroup('new');
        }}
      />
    </React.Fragment>
  );

  /**
   * Create Group
   */
  if (newGroup === 'new') {
    form = (
      <React.Fragment>
        <h2 className="onboarding__title">Gib eurer Gruppe</h2>
        <h1 className="onboarding__text">Einen Namen</h1>
        <Form
          id="groupCreateForm"
          onSubmit={formData => {
            setFormProcessing(true);
            console.log('name', formData.group);
            axios
              .post(endpointGroups, {
                name: formData.group,
              })
              .then(resp => {
                console.log(resp);
                setNewGroup(formData.group);
                setFormProcessing(false);
              })
              .catch(() => {
                setFormProcessing(false);
                alert(
                  'gruppe konnte nicht erstellt werden. Versuche einen anderen Namen'
                );
              });
          }}
          className="onboarding__form"
          oneliner
        >
          <InputText
            name="group"
            label="Gruppe"
            placeholder="Irgendwas mässig witziges"
            register={{ required: 'This field is required' }}
            value=""
            large
          />
          <Button
            text=""
            type="submit"
            loading={formProcessing}
            style="primary"
            icon="mdi/send"
          />
          {error !== '' && <FormError>{error}</FormError>}
        </Form>
        <Button
          text="zurück"
          onClick={() => {
            setNewGroup('');
          }}
          style={'nobutton'}
        />
      </React.Fragment>
    );
  }

  return <div className={cn(className, 'onboarding')}>{form}</div>;
};

export default connect(
  state => {
    return {
      user: state.user,
    };
  },
  { updateUserGroup, updateUserId, updateUserName }
)(Onboarding);
