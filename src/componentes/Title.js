import { AiOutlineLeft } from "react-icons/ai";
import { StyleSheet, Text, View } from "react-native";

export function Title(){
    return(
        <View className="p-8 bg-[#4A73FC] pl-[7.5%]">
            <View style={{display: 'flex', textAlign: 'center', flexDirection: 'row'}} >
                <AiOutlineLeft size={20} color="#FFF"/>

                <Text className="absolute w-full">
                    <Text style={styles.header1}>Bandung, </Text>
                    <Text style={styles.header2}>Indonesia</Text>
                </Text>
            </View>    
        </View>
    )
}


const styles = StyleSheet.create({
    header1:{
        fontSize: 18,
        fontWeight: 500,
        color: '#F8FAFD',
    },
    header2:{
        fontSize: 15,
        color: '#F8FAFD',
    },
});