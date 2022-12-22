import { Image, Text, View } from "react-native";

export function CardsDays(props) {
    return( 
            <View style={{ backgroundColor:'#4A73FC', flexDirection:'row', paddingLeft:"7.5%", paddingTop:40 }}>

                <Image style= {{height:40, width:40}}
                source={require(`../../assets/${props.tempo}.png`)} />

                <View className="flex-1 flex-row">
                    <Text style={{display:'flex', alignItems:'center', fontSize: 18, color:'#F8FAFD', paddingLeft:"7.5%"}}>{props.name}, </Text>
                    <Text style={{display: 'flex', alignItems: 'center', fontSize: 15, color: '#cec9cb'}}>{props.day}</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center', paddingRight:"7.5%", flexDirection:'row'}}>
                    <Text style={{fontSize: 18, color: '#F8FAFD'}}>{props.tempMin} </Text>
                    <Text style={{fontSize: 15, color: '#dcdcdc',}}>/ {props.tempMax}°</Text>
                </View>
            </View>

    )
}