import * as React from 'react';
import { Text, SafeAreaView, View, Image, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    <Ionicons name={'chevron-forward-circle'} size={34} color={'#B7441A'} style={styles.icon} />
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
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    height: 110,
    width: 110,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    color: '#E6E2DF'
  },
  icon: {
    marginRight: 8,
    marginTop: 36
  }
});
