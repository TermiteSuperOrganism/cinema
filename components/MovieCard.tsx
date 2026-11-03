import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import Rating from "./Rating";

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

            <View style={{padding: 16/*padding inline*/}}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <View style={styles.sectionCategoryRating}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </View>
                    <Rating value={rating}></Rating>
                </View>

            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    card:{
        borderRadius:18,
        borderWidth:1,
        borderColor:"#242b40",
        backgroundColor:"#141724",
        overflow:"hidden",
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
    sectionCategoryRating:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBlock: 15,
    },
    categoryBadge:{
        backgroundColor:"#1e2437",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#2c344e",
    },
    categoryText:{
        fontSize:14,
        fontWeight:"700",
        color:"#94a3b8",
    },
});