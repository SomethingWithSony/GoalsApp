import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

export default function GoalItem ({id, text, onDeleteItem}) {

  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}
      style={({pressed}) => pressed && styles.itemPressed}
    >
      <View  style={styles.goalItem} > 
          <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  )

}

const styles = StyleSheet.create({  
    goalItem: {
      backgroundColor: '#5231a3ff',
      padding: 10,
      marginTop: 10
    },

    itemPressed: {
      opacity: 0.75
    }
    ,
    
    goalItemText: {
      color: '#ffffff'
    }
});