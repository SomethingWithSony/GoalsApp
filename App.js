import { StyleSheet, View, FlatList } from 'react-native';
import {  useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const addGoalHandler = (enteredText) => {
    setGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredText, id: Math.random().toString()}]);
  }
  const deleteGoalHandler = (id) => {
    setGoals(currentCourseGoals => {
      return currentCourseGoals.filter( goal => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={ itemData => {
          return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>
          )
        }}
        keyExtractor={(item, index) => { return item.id}}
        />
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
