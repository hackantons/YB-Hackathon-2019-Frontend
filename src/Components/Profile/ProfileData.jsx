// @flow

import React from 'react';
import cn from 'classnames';
import type { User } from '@vendor/types';
import { connect } from 'react-redux';

import './ProfileData.scss';

import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  FormSuccess,
  InputText,
} from '@theme';
import { idb, uuidv4 } from '@/store/idb';
import { updateUserName, updateUserId, updateUserGroup } from '@redux/actions';

export const ProfileData = ({
  className,
  user,
  updateUserName,
  updateUserGroup,
}) => {
  const [formProcessing: boolean, setFormProcessing] = React.useState(false);
  const [error: string, setError] = React.useState('');
  const [success: string, setSuccess] = React.useState('');

  return (
    <Form
      onSubmit={data => {
        updateUserName(data.name);
        idb.set('userName', data.name).then(() => {
          setSuccess('Success!');
          window.setTimeout(() => {
            setSuccess('');
          }, 1000);
        });
      }}
      className={cn(className)}
    >
      <br />
      <FormFieldset>
        <InputText
          name="user"
          label="User"
          register={{ required: 'This field is required' }}
          value={user.id}
          disabled={true}
          large
        />
        <InputText
          name="group"
          label="Gruppe"
          register={{ required: 'This field is required' }}
          value={user.group}
          disabled={true}
          large
        />
        <InputText
          name="name"
          label="Name"
          register={{ required: 'This field is required' }}
          value={user.name}
          large
        />
      </FormFieldset>
      <FormControls>
        {error !== '' && <FormError>{error}</FormError>}
        {success !== '' && <FormSuccess>{success}</FormSuccess>}
        <Button
          text="Aus Gruppe austreten"
          style="nobutton"
          onClick={() => {
            updateUserGroup('');
          }}
        />{' '}
        <Button
          text="Speichern"
          type="submit"
          loading={formProcessing}
          style="primary"
        />
      </FormControls>
    </Form>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { updateUserName, updateUserId, updateUserGroup }
)(ProfileData);
