import {ActivityIndicator, Image, View} from 'react-native';
import React, {useState} from 'react';

import {theme} from '../constants';

const ImageLoader = ({source, style, resizeMode, indicatorStyle}) => {
  const [loading, setLoading] = useState(false);

  const onloading = (value) => {
    setLoading(value);
  };

  const renderActivityIndicator = () => {
    return (
      <ActivityIndicator
        size='small'
        color={theme.colors.mainColor}
        style={{
          zIndex: 0,
          opacity: 1,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          ...indicatorStyle,
        }}
      />
    );
  };

  return (
    <View style={style}>
      {loading && renderActivityIndicator()}
      <Image
        style={style}
        source={source}
        onLoadStart={() => onloading(true)}
        onLoadEnd={() => onloading(false)}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default ImageLoader;
