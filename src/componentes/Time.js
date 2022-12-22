import { Text, View } from "react-native";
import { AiOutlineRight } from "react-icons/ai"
import { Cards } from "./Cards";

export function Time() {
    return(
        <View>
            <View className="flex flex-row justify-between items-center px-[7.5%] pt-10 pb-4">
                <Text className="font-semibold text-lg">Today</Text>
                <View className="flex flex-row items-center">
                    <Text className="text-lg pr-4 text-gray-500">Next 7 Days</Text>
                    <AiOutlineRight size={20} color="#696969" />
                </View>
            </View>

            <View className="flex flex-row items-center justify-center px-[7.5%] gap-[4%]">
                <View>
                    <Cards hora="12:00" imagem="nuvem" temp="Now" bg="#4A73FC" text="white"  />
                </View>
                <View>
                    <Cards hora="14:00" imagem="chovendo" temp="22°" />
                </View>
                <View>
                    <Cards hora="16:00" imagem="nubladoAzul" temp="26°" />
                </View>
                <View>
                    <Cards hora="18:00" imagem="nubladoAzul" temp="25°" />
                </View>
                <View>
                    <Cards hora="20:00" imagem="sol" temp="31°" />
                </View>
            </View>
            
        </View>
    )
}