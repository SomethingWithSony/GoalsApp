import { StyleSheet, View, FlatList } from 'react-native';
import {  useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const addGoal = (item) => {
    setGoals(currentCourseGoals => [...currentCourseGoals, item])
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal}/>
      {/* <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal...' style={styles.textInput} onChangeText={goalInputHandler} value={goalInput}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View> */}
      
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={ itemData => {
          return (
              <GoalItem text={itemData.item.text}/>
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

  goalsContainer: {
    flex: 4,
    marginTop: 24,
  }
});
