import { Image, Text, View } from "react-native";

export function Cards(props) {
    return(
        <View>            
            <View className="rounded-md p-1 flex items-center border border-gray-300" style={{backgroundColor: props.bg ? props.bg : "#fff"}}>
                <Text className="py-1" style={{color: props.text ? props.text:"black"}}>{props.hora}</Text>
                <Image style= {{height:45, width:45}}
                    source={require(`../../assets/${props.imagem}.png`)} />
                <Text className="py-1 text-lg font-semibold" style={{color: props.text ? props.text:"black"}}>{props.temp}</Text>
            </View>
        </View>
    )
}