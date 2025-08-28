import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function GoalItem (props) {

  return (
    <View  style={styles.goalItem} > 
        <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
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