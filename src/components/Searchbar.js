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
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <Feather name="search" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
      {clicked && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          style={{ padding: 1 }}
          onPress={() => {
            setSearchPhrase("");
          }}
        />
      )}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%"
  },

  input: {
    width: "90%",
    fontSize: 20,
    marginLeft: 10
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center"
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
