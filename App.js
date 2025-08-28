import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };

  const addGoalHandler = () => {
    setGoals(currentCourseGoals => [...currentCourseGoals, {text: goalInput, key: Math.random().toString()}])
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
        <FlatList data={goals} renderItem={ itemData => {
          return (
              <View  style={styles.goalItem} > 
                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
              </View>
          )
        }}/>
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
