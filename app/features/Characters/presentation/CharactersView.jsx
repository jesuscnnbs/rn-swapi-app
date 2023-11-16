import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default function CharactersView() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Characters!</Text>
      <Image
        style={{width: 150, height: 150, borderRadius: 5}}
        source={{
          uri: 'https://lumiere-a.akamaihd.net/v1/images/ct_starwarsgalaxyofadventures_luke_ddt-17324_f06bc849.jpeg?region=0,0,600,600&width=160',
        }}
      />
    </View>
  );
}
