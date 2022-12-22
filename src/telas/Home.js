import { TouchableOpacity, View } from "react-native";
import { Topbar } from "../componentes/Topbar";

import { Temperature } from "../componentes/Temperature";
import { Time } from "../componentes/Time";


export function Home({navigation}) {
    return(
        <View style={{height:"100vh", backgroundColor:"white"}}>
            <Topbar />
            <Temperature />
            <TouchableOpacity onPress={()=>navigation.navigate("Week")}>
                <Time />
            </TouchableOpacity>
        </View>
    )
}