import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

export default function GoalItem ({id, text, onDeleteItem}) {

  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View  style={styles.goalItem} > 
          <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  )

}

const styles = StyleSheet.create({  
    goalItem: {
      backgroundColor: 'green',
      padding: 10,
      marginTop: 10
    },
    
    goalItemText: {
      color: '#ffffff'
    }
});