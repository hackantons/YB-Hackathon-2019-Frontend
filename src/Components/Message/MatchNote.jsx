// @flow
import React from 'react';
import cn from 'classnames';
import { spielminuten } from '@vendor/helpers';

import './Message.scss';
import { connect } from 'react-redux';

type Props = {
  type: string,
  data: Object,
};

const MatchNote = (props: Props) => {
  console.log(props);
  return '';
};

export default connect(state => {
  return {
    user: state.user,
    started: state.gameStarted,
  };
})(MatchNote);
