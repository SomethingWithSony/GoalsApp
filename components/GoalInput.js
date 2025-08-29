import { View, TextInput, Button, Modal } from "react-native";
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
        <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandler} value={goalInput}/>
        <View style={styles.ctaContainer}>
          <Button title='Add Goal' onPress={addGoalHandler}/>
          <Button title='Cancel' onPress={hideModal}/>
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
    paddingTop: 24,
    paddingBottom: 24,
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
    padding: 10
  }
});