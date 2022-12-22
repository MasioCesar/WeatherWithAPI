import { FiSun, FiActivity, FiWind } from "react-icons/fi"
import { BsThermometerHalf } from "react-icons/bs"
import { Image, Text, View } from "react-native";
import { CardsTemp } from "./CardsTemp";

export function Temperature() {
    return(
        <View className="px-[7.5%]">
            <Text className="py-6">
                <Text className="font-semibold text-2xl">Bandung,</Text>
                <Text className="text-xl"> Indonesia</Text>
            </Text>
            <View className="flex items-center">
                <View className="w-full bg-[#4A73FC] rounded-2xl flex justify-center items-center pt-6">
                    <Image style= {{height:80, width:80}}
                        source={require('../../assets/nubladoBranco.png')} />
                    <Text className="text-white text-2xl">Heavy Rain</Text>
                    <Text className="text-slate-400 text-xs m-2">Sunday, 02 Oct</Text>
                    <Text className="text-white text-8xl p-6">24°</Text>
                    <View className="flex flex-row items-center w-full">
                        <View className="flex items-center w-[50%]">
                            <CardsTemp  borderT={1} borderB={1} icon={FiWind} name="WIND" dados="19.2km/j" />
                            <CardsTemp  icon={FiSun} name="INDEX UV" dados="2" />
                        </View>
                        <View className="flex items-center w-[50%]">
                            <CardsTemp  borderT={1} borderB={1} borderL={1} icon={BsThermometerHalf} name="FEELS LIKE" dados="25°" />
                            <CardsTemp  borderL={1} icon={FiActivity} name="PRESSURE" dados="1014 mbar"/>
                        </View>
                    </View>       
                </View>
            </View>
        </View>
    )
}