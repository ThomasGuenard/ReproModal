import {Button, Text, View} from 'react-native';
import {useDrawer} from '../context/DrawerContext';

export default function ProfileScreen() {
  const {openDrawer} = useDrawer();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Show drawer" onPress={() => openDrawer()} />
    </View>
  );
}
