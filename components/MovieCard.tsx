import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export type MovieCardProps = {
    image: ImageSourcePropType;
    title: string;
    category: string;
    rating: number;
    favorite: boolean;
    onFavorite: () => void;
    onDetails: () => void;
};

export default function MovieCard({
    image,
    title,
    category,
    rating,
    favorite,
    onFavorite,
    onDetails
}: MovieCardProps){
    return(
        <View style={styles.card}>
            <Image source={image} style={styles.image} resizeMode="cover" />

            <View>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    card:{
        borderRadius:18,
        borderWidth:1,
        borderColor:"#242b40",
        marginHorizontal:20,
    },
    image:{
        width: "100%",
        height:195,
    },
    title:{
        fontSize: 18,
        fontWeight: "800",
        color: "#fff",
        height: 24,
    },
})