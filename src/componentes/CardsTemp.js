import { Text, View } from "react-native";

export function CardsTemp(props) {
    return(
        <View className="flex flex-row w-full">
            <View className="flex items-center border-gray-300 w-full" 
                style={{borderTopWidth: props.borderT ? props.borderT: 0, borderBottomWidth: props.borderB ? props.borderB: 0, borderLeftWidth: props.borderL ? props.borderL:0}} >
                <View className="flex-1 flex-row items-center">
                    <View className="pr-4">
                        <props.icon size={28} color="#f0efef" />
                    </View>
                    <View className="pr-4">
                        <Text className="text-slate-300 pt-3 pb-1">{props.name}</Text>
                        <Text className="text-white pb-4">{props.dados}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}