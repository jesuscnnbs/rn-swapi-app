import * as React from 'react';
import { Text, SafeAreaView, TouchableOpacity, Image, FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useCharacters from '../domain/useCharacters';
import blanckImage from '../../../../assets/blanck_profile.png'

const ImageItem = ({ name, uri, navigation }) => (
  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details')}>
    <Image
      style={styles.image}
      source={uri ? {
        uri: uri,
      } : blanckImage}
    />
    <Text style={styles.title}>{name}</Text>
    <Ionicons name={'chevron-forward-circle'} size={34} color={'#B7441A'} style={styles.icon} />
  </TouchableOpacity>
);

export default function CharactersView() {
  const navigation = useNavigation();
  const { characters: {people, nextPage}, loading, handleGetPeople } = useCharacters();
  React.useEffect(() => {
    handleGetPeople(nextPage)
  }, [])
  return (
        <SafeAreaView style={styles.container}>
          {people.length > 0 && <FlatList
            data={people}
            renderItem={({ item }) => <ImageItem name={item.name} uri={item.uri} navigation={navigation} />}
            keyExtractor={item => item.name}
            onEndReached={() => handleGetPeople(nextPage)}
            onEndReachedThreshold={1}
          />}
          {loading &&
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" />
            </View>
          }
        </SafeAreaView>
)
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
  },
  loadingContainer: {
    padding: 20,
  }
});
