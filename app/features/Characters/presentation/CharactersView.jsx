import * as React from 'react';
import { Text, SafeAreaView, View, Image, FlatList, StyleSheet } from 'react-native';
import data from '../data/data'

const ImageItem = ({ name, uri }) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={{
        uri: uri,
      }}
    />
    <Text style={styles.title}>{name}</Text>
  </View>
);

export default function CharactersView() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ImageItem name={item.name} uri={item.uri} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171212'
  },
  item: {
    backgroundColor: '#4A4446',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5 
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10,
    fontSize: 20,
    color: '#BCC9DA'
  },
});
