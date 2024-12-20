import React, {Component} from 'react';
import SplashScreen from './src/Screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

interface IProps {}
interface IState {
  loading: boolean;
}
export class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({loading: true});
    }, 3000);
  }

  render() {
    const {loading} = this.state;
    // console.log('29 ===> ', loading);
    return (
      <View style={{flex: 1}}>
        {loading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </View>
    );
  }
}

export default App;

// <SplashScreen />
//  {loading && <SplashScreen />}

//   <NavigationContainer>
//   <Stack.Navigator initialRouteName='Home'>
//     <Stack.Screen name="Home" component={Home} />
//     {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//   </Stack.Navigator>
// </NavigationContainer>
