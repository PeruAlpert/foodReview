import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import DetailsScreen from '../src/containers/Details';
import ReviewsScreen from '../src/containers/Reviews';
import IngradianScreen from '../src/containers/Ingradian';
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          backgroundColor: '#fefaef',
          width: '80%',
          alignSelf: 'center',
          marginVertical: 10,
        },
      }}
    >
      <Tab.Screen name='Details' component={DetailsScreen} />
      <Tab.Screen name='Reviews' component={ReviewsScreen} />
      <Tab.Screen name='Ingradian' component={IngradianScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
