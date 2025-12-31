import React from 'react';
import { View, Text } from 'react-native';

export default function Avatar({ initials, size }) {
  const daireStili = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: '#e67e22', 
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={daireStili}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{initials}</Text>
    </View>
  );
}