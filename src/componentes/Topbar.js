import { FiMenu } from "react-icons/fi"
import { BiDotsHorizontalRounded } from "react-icons/bi"

import { View } from "react-native";

export function Topbar(){
    return(
        <View className="flex flex-row justify-between px-[7.5%] py-4">
            <FiMenu size={32} color="#100f0f" />
            <BiDotsHorizontalRounded size={32} color="#100f0f" />
        </View>
    )
}
