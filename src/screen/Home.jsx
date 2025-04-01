import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Open modal" onPress={() => navigation.navigate('Modal')} />
    </View>
  );
}
