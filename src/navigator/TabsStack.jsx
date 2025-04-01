import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import HomeScreen from '../screen/Home';
import ProfileScreen from '../screen/Profile';
import {useDrawer} from '../context/DrawerContext';

const Tab = createBottomTabNavigator();

export default function TabsStack() {
  const {isOpen, closeDrawer} = useDrawer();
  return (
    <Drawer
      drawerPosition="left"
      drawerStyle={{flex: 1}}
      onClose={() => {
        closeDrawer();
      }}
      onOpen={() => {}}
      open={isOpen}
      renderDrawerContent={() => (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Drawer</Text>
          <Button title="Hide drawer" onPress={() => closeDrawer()} />
        </View>
      )}
      swipeEnabled={false}>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarHideOnKeyboard: true,
          tabBarVisibilityAnimationConfig: {
            show: {animation: 'timing', config: {duration: 0}},
            hide: {animation: 'timing', config: {duration: 0}},
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return <Text>🏠</Text>;
            },
            tabBarLabel: ({focused}) => {
              return <Text>Home</Text>;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return <Text>👤</Text>;
            },
            tabBarLabel: ({focused}) => {
              return <Text>Profile</Text>;
            },
          }}
        />
      </Tab.Navigator>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#ff0',
    borderTopWidth: 0,
    zIndex: 0,
  },
});
