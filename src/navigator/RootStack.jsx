import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsStack from './TabsStack';
import ModalScreen from '../screen/Modal';

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          headerShadowVisible: false,
          headerBackTitle: '',
          contentStyle: {flex: 1},
          headerBackVisible: false,
          headerTitleAlign: 'center',
          orientation: 'portrait_up',
        })}>
        <Stack.Screen
          name="Tabs"
          component={TabsStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={({navigation}) => {
            return {
              title: 'Attachments',
              presentation: 'modal',
              animation: 'slide_from_bottom',
              headerBackVisible: true,
              headerShown: true,
            };
          }}
        />
      </Stack.Navigator>
    </>
  );
}
