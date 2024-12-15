import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
// const img = require("./loginImg.png");
import Box from "./components/Box";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView>
        <View style={[styles.containerHead, styles.shadow]}>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              height: 80,
              width: "100%",
            }}
          >
            <Image
              source={require("./assets/Andre Danika.jpg")}
              style={{
                width: 46,
                height: 46,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "teal",
              }}
            ></Image>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Andre Danika</Text>
              <Text>Personal Account</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <Icon name="sunny" color={"orange"} size={30} />
          </View>
        </View>
      </SafeAreaView>

      <View
        style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}
      >
        <View style={styles.hero}>
          <Text style={styles.title}>Good Morning, Andre!</Text>
          <Text style={styles.desc}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image source={require("./assets/Group.png")} />
      </View>

      <Box style={{ backgroundColor: "#19918F" }}>Account No. 100899</Box>

      <View style={styles.balance}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "semi-bold" }}>Balance</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Rp 10.000.000
          </Text>
          <Ionicons name="eye-outline" size={24} color="#E5E5E5" />
        </View>
        <View>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="add" color={"white"} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, styles.iconSend]}>
            <Icon name="send" color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 20,
              marginHorizontal: 15,
            }}
          >
            Transaction History
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const DATA = [
  {
    nama: "Adityo Gizwanda",
    jenis: "Transfer",
    tanggal: "08 December 2024",
    nominal: "-75.000,00",
  },
  {
    nama: "Adityo Gizwanda",
    jenis: "Topup",
    tanggal: "08 December 2024",
    nominal: "+75.000,00",
  },
  {
    nama: "Adityo Gizwanda",
    jenis: "Transfer",
    tanggal: "08 December 2024",
    nominal: "-75.000,00",
  },
  {
    nama: "Adityo Gizwanda",
    jenis: "Transfer",
    tanggal: "08 December 2024",
    nominal: "-75.000,00",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  containerHead: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  shadow: {
    shadowColor: "gray",
    shadowOpacity: 0.25,
    // shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
  },
  iconButton: {
    backgroundColor: "#19918F",
    padding: 10,
    borderRadius: 10,
  },
  iconSend: {
    marginTop: 10,
  },
  balance: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    borderRadius: 10,
  },
  button: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
  },
  logo: {
    marginLeft: 15,
    marginTop: 10,
  },
  text: {
    margin: 15,
    fontSize: 16,
  },
  primary: {
    backgroundColor: "teal",
    marginVertical: 15,
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "teal",
    fontWeight: "medium",
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 16,
    fontWeight: "medium",
    marginTop: 10,
  },
  hero: {},
});
