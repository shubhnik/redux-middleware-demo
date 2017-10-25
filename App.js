/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'

const AppView = (props) => {
    const {color, dispatch} = props
    return (
      <View style={{flex:1, backgroundColor:color, justifyContent:'space-around', alignItems:'center'}}>
        <TouchableOpacity 
          onPress={() => dispatch({type: 'LIGHT_GREEN'})}
          style={{paddingHorizontal:40, paddingVertical:15, justifyContent:'center', alignItems:'center', backgroundColor:'lightgreen'}}
        >
          <Text>Light Green</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => dispatch({type: 'PINK'})}
          style={{paddingHorizontal:40, paddingVertical:15, justifyContent:'center', alignItems:'center', backgroundColor:'pink'}}
        >
          <Text>Pink</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => dispatch({type:'ORANGE'})}
          style={{paddingHorizontal:40, paddingVertical:15, justifyContent:'center', alignItems:'center', backgroundColor:'orange'}}
        >
          <Text>Orange</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => dispatch({type: 'GREEN_YELLOW'})}
          style={{paddingHorizontal:40, paddingVertical:15, justifyContent:'center', alignItems:'center', backgroundColor:'greenyellow'}}
        >
          <Text>Green Yellow</Text>
        </TouchableOpacity>
      </View>
    );
}

mapStateToProps = state => ({
  color:state.color
})

const App = connect(mapStateToProps)(AppView)

export default App;
