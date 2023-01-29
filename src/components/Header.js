// import 'react' from React;
import {StyleSheet, View, Text, TextInput, } from 'react-native'



export default function Header(){
  return(
    <View style={styles.Header}>
    <View >
      <Text style={styles.headerText}>NODFARMS</Text>
    </View>
    </View>
  )
} 

const styles= StyleSheet.create({
  Header: {
    backgroundColor: 'green',
    padding: 20,
    width: '100%'
  },
  headerText:{
    color: '#fff',
    paddingHorizontal: 15
  }
})