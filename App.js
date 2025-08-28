import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };

  const addGoalHandler = () => {
    console.log('Add Goal To List');
    setGoals(currentCourseGoals => [...currentCourseGoals, goalInput])
    setGoalInput('');

    console.log(goals)
  };


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandler} value={goalInput}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      
      <View style={styles.goalsContainer}>
        <ScrollView >
          {
            goals.map( goal => (
              <View key={goal} style={styles.goalItem}> 
                <Text style={styles.goalItemText}>{goal}</Text>
              </View>
            ))}
          
          
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: ''
  },

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
  },
  goalsContainer: {
    flex: 4,
    marginTop: 24,
  },
  goalItem: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10
  },
  goalItemText: {
    color: '#ffffff'
  }
  
});
