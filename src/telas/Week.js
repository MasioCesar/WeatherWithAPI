import { TouchableOpacity, View } from "react-native";
import { Days } from "../componentes/Days";
import { Title } from "../componentes/Title";

export function Week({navigation}) {
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.7}>
                <Title />
            </TouchableOpacity>
            <Days />
        </View>
    )
}