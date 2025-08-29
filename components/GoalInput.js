import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput ({onAddGoal, showModal, hideModal}) {
    const [goalInput, setGoalInput] = useState('');
  
   const goalInputHandler = (enteredText) => {
      setGoalInput(enteredText);
    };
  
    const addGoalHandler = () => {
      onAddGoal(goalInput)
      setGoalInput('');
    };

  return (
    <Modal visible={showModal} animationType="slide" >
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image}/>
        <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandler} value={goalInput}/>
        <View style={styles.ctaContainer}>
          <Button title='Add Goal' onPress={addGoalHandler} color={'white'}/>
          <Button title='Cancel' onPress={hideModal} color={'white'}/>
        </View>
      </View>
    </Modal>
          
  )
}

const styles = StyleSheet.create({
  inputContainer :{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 24,
    backgroundColor: '#311b6b'
  },
  image :{
    width: 100,
    height: 100,
    margin: 20
  },

  ctaContainer: {
    flexDirection : 'row',
    justifyContent: 'center',
    gap: 40,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '75%',
    padding: 10,
    color: 'white'
  }
});