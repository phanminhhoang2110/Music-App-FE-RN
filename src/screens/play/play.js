import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {Image, View, Text} from 'react-native-ui-lib';

const Player = () => {
  const width = Dimensions.get('window').width
  const spinValue = useRef(new Animated.Value(0)).current;
  const [isPlaying, setIsPlaying] = useState(false);
  var intervalId = useRef();
  const [process, setProcess] = useState(0);
  const time = 360

  useEffect(() => {
    if(isPlaying){
        if(process >= time){
            clearInterval(intervalId.current)
        }else{
          intervalId.current = setInterval(() => {
              processer()
          }, 1000)
        }
    }else{
      clearInterval(intervalId.current)
    }
    return () => {
        if(intervalId){
            console.log('clear interval ' + intervalId)
            clearInterval(intervalId.current)
        }
    }
  })

  const processer = () => {
    setProcess(process + 1)
  }

  const converProcessToTime = () => {
      minute = Math.floor(process/60);
      second = Math.floor(process%60);
      if(minute < 10){
          minute = `0` + minute
      }
      if(second < 10){
        second = `0` + second
      }
      return minute + ':' + second
  } 

  useEffect(()=>{
    if(isPlaying){
      Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 3000,
            //easing: Easing.linear,
            useNativeDriver: true,
        }),
      ).start();

    } else{
      spinValue.stopAnimation(({value}) => console.log("Final Value: " + value));
    }
  },[isPlaying])

  const onPlayPress = () => {
    setIsPlaying(!isPlaying)
  };

  const onFastForward = (value) => {
    forwardTo = Math.floor(value[0]);
    setProcess(forwardTo)
  }

  return (
    <SafeAreaView 
      style={{backgroundColor: '#0E0B1F', flex: 1, width: width, paddingTop: 70}}
    >
      <Animated.View
        style={{
          transform: [
            {
              rotateZ: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <Image
          style={style.disk}
          assetName="bgSignUp"
        />
      </Animated.View>
      <Text white title2b center marginT-15>Come to me</Text>
      <Text white center r18>One republic</Text>
      <Text primary center marginT-20>It is a long established fact that a reader</Text>
      <View row style={{justifyContent: 'space-evenly'}} marginT-40>
        <TouchableOpacity>
            <Image assetName='share'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='playlist_add'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='heart'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='download'/>
        </TouchableOpacity>
      </View>
      <View marginT-40 marginL-30 marginR-30>
        <Slider
            value={process}
            maximumValue={time}
            trackStyle={{height: 1}}
            trackClickable={true}
            thumbTintColor='#CBFB5E'
            thumbStyle={{width:10, height: 10}}
            minimumTrackTintColor='#CBFB5E'
            onValueChange={(value) => {onFastForward(value)}}
        />
        <View row style={{justifyContent: 'space-between'}}>
            <Text white>{converProcessToTime()}</Text>
            <Text white>06:00</Text>
        </View>
      </View>
      <View row style={style.containerPlayer}>
        <TouchableOpacity>
            <Image assetName='shuffe'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='pre'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPress}>
            <View style={style.playBtn}>
                <Image assetName='play'/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='next'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image assetName='loop'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Player;



const style = StyleSheet.create({
    disk: {
        borderRadius: 500, 
        borderColor: 'white', 
        borderWidth: 1, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        height: 250,
        width: 250
    },
    containerPlayer: {
        justifyContent: 'space-between', 
        marginLeft: 30, 
        marginRight: 30, 
        marginTop: 30, 
        alignItems: 'center'
    },
    playBtn: {
        width: 60, 
        height: 60, 
        backgroundColor:'#CBFB5E', 
        borderRadius: 100, 
        alignItems:'center', 
        justifyContent: 'center'
    },
    dot: {
      width: 15,
      height: 4,
      backgroundColor: 'gray',
      borderRadius: 3,
      marginLeft: 5,
      marginRight: 5
    },
    seletedDot: {
      width: 15,
      height: 4,
      backgroundColor: 'white',
      borderRadius: 3,
      marginLeft: 5,
      marginRight: 5
    }
});
