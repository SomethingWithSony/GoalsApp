import { View, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput ({onAddGoal}) {
    const [goalInput, setGoalInput] = useState('');
  
   const goalInputHandler = (enteredText) => {
      setGoalInput(enteredText);
    };
  
    const addGoalHandler = () => {
      onAddGoal({text: goalInput, key: Math.random().toString()})
      setGoalInput('');
    };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandler} value={goalInput}/>
      <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
          
  )
}

const styles = StyleSheet.create({
  inputContainer :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,

  },

  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '75%',
    padding: 10
  }
  
});