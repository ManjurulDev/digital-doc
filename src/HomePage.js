import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function HomePage({navigation}) {
  const [userName, setUserName] = useState('');
  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        value={userName}
        onChangeText={newValue => setUserName(newValue)}
      />
      <Button
        onPress={() => {
          navigation.navigate('CallPage', {userName: userName});
        }}
        title="Join Call"
      />
    </View>
  );
}
