import { StyleSheet, View, Button, TextInput } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default function SearchBar({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setCLicked
}) {
  return (
        <View style={styles.container}>
     <View  style={styles.searchContainer} >
           <Feather
           name='menu' 
           size={25} 
           color='black' />

                 <View        
       style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }>

          <Feather
           name='search' 
           size={20} 
           color='black'
          />
          <TextInput
            style={styles.input}
            placeholder='Search'
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
            setClicked(true);
          }}
          />
      </View>
       </View>

            {clicked && (
          <Entypo 
          name="cross" 
          size={20} 
          color="black"
          style={{ padding: 1 }} 
          onPress={() => {
          setSearchPhrase("")
          }}/>
        )}
         {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}>
            </Button>
        </View>
         )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },

  input:{
    width: '90%',
    fontSize: 15,
    marginLeft: 10,
    outline:'none'
  },
    searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    // marginLeft:30,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center'

  }
})
