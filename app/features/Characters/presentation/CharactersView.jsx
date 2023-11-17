import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/data'

const ImageItem = ({ name, uri, navigation }) => (
  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details')}>
    <Image
      style={styles.image}
      source={{
        uri: uri,
      }}
    />
    <Text style={styles.title}>{name}</Text>
    <Ionicons name={'chevron-forward-circle'} size={34} color={'#B7441A'} style={styles.icon} />
  </TouchableOpacity>
);

export default function CharactersView() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ImageItem name={item.name} uri={item.uri} navigation={navigation}/>}
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
