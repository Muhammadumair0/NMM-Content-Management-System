import React from 'react';
import { notification } from 'antd';

export const openNotificationWithIcon = ({ type, title, description }) => {
    notification[type]({
    //   message: title,
      description,
    });
  };