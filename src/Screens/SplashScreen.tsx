import {Text, StyleSheet, View,  Animated} from 'react-native';
import React, {Component, createRef} from 'react';
import LottieView from 'lottie-react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {}

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default class SplashScreen extends Component<IProps> {
  animationRef: React.RefObject<LottieView>;

  constructor(props: IProps) {
    super(props);

    this.animationRef = createRef();
  }

  componentDidMount(): void {
    // Animated.timing(animationProgress.current,{

    // })
    this.animationRef.current && this.animationRef.current.play();
    this.animationRef.current?.play(10, 150);
    // if (this.animationRef.current) {
    //     this.animationRef.current.play();
    //     this.animationRef.current.play(30, 120);
    //   } else {

    //   }
  }

  render() {
    return (
      // <>
      // <AnimatedLottieView source={require('../assets/Lotties/RippleAnimation2.json')} />
      // </>
      <LinearGradient
        style={styles.linearGradient}
        colors={['#F16102', '#F46B13']}>
        <View style={styles.rippleContainer}>
          <LottieView
            style={styles.ripple} duration={6000}
            source={require('../assets/Lotties/RippleAnimation2.json')}
            autoPlay loop
            testID="lottieViewID"
          />
        </View>
        <View style={styles.rippleTextContainer}>
            <Text style={styles.rippleText}>Ravi kiran Patil</Text>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  ripple: {
    width: responsiveWidth(350),
    height: responsiveHeight(300),
    opacity: 0.05,
  },
  rippleContainer: {
    height: responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rippleText: {
    color: '#FCF8F5',
    fontSize: 42,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: -15,
  },
  rippleTextContainer: {
    position: 'absolute',
    width: responsiveWidth(98),
    height: responsiveHeight(50),
    backgroundColor: 'rgba(246, 102, 8,0.91)',
    bottom: 0,
  },
  linearGradient: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#298BE9',
  },
});

// Start color:- #F16102, end color:- #f46b13, ripple color:- #f1680f
