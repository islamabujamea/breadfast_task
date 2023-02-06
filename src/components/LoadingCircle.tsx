import React, {FC} from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

const LoadingCircle: FC<ActivityIndicatorProps> = props => {
  return (
    <ActivityIndicator animating size={props?.size} focusable {...props} />
  );
};

export default LoadingCircle;
