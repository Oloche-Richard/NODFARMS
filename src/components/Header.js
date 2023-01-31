// import 'react' from React;
import {StyleSheet, View, Text, TextInput, } from 'react-native'



export default function Header(){
  return(
    <View style={styles.headerContainer}>
    <View style={styles.header}>
    <View>
      <Text style={styles.headerText}>NODFARMS</Text>
    </View>
    <View>
            <Ionicons name="contact" size={22} color='gold'></Ionicons>
            <Ionicons name="contact" size={22} color='gold'></Ionicons>
            <Ionicons name="contact" size={22} color='gold'></Ionicons>
    </View>
    </View >
    </View>
  )
} 

const styles= StyleSheet.create({
  headerContainer: {
    backgroundColor: 'green',
    padding: 20,
    width: '100%'
  },
  header: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight:20
  },
  headerText:{
    color: '#fff',
    paddingHorizontal: 15
  }
})
