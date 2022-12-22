import { View, Text } from "react-native";
import { CardsDays } from "./CardsDays";

export function Days() {
    return (
      <View style={{height:"100vh", backgroundColor:"#4A73FC"}}>
        <Text style={{textAlign:"left", fontSize: 22, color:'#F8FAFD', paddingLeft:"7.5%", paddingTop:16}}>Next 7 Days</Text>

        <View>
          <CardsDays name="Monday" day="3 Oct" tempMin="32" tempMax="31" tempo="sol" />
          <CardsDays name="Tuesday" day="4 Oct" tempMin="22" tempMax="23" tempo="chovendoBranca" />
          <CardsDays name="Wednesday" day="5 Oct" tempMin="30" tempMax="31" tempo="sol" />
          <CardsDays name="Thursday" day="6 Oct" tempMin="24" tempMax="26" tempo="nuvem" />
          <CardsDays name="Tuesday" day="7 Oct" tempMin="26" tempMax="27" tempo="nubladoBranco" />
          <CardsDays name="Friday" day="8 Oct" tempMin="27" tempMax="28" tempo="nubladoBranco" />
          <CardsDays name="Saturday" day="9 Oct" tempMin="22" tempMax="23" tempo="chovendoBranca" />
        </View>    

      </View>
    );
  }