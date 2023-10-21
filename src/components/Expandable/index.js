import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button,} from "react-native";
  
const ExpandableListItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
        setExpanded(!expanded);
    };
  
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={toggleExpand}
                style={styles.itemTouchable}
            >
                <Text style={styles.itemTitle}>
                    {item.title}
                </Text>
            </TouchableOpacity>
            {expanded && (              
                <TouchableOpacity style={styles.itemTouchable} >
                    <Text style={styles.itemContent}>
                        Hi
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
  
const ExpandableList = ({ data }) => {
    const renderItem = ({ item }) => (
        <ExpandableListItem item={item} />
    );
  
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        >
        </FlatList> 
    );
};
  
const Expandable = ({data}) => {
    return (
        <View style={styles.container}>
            <ExpandableList data={data} />
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },  
    itemContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: "white",
        elevation: 3,
    },
    itemTouchable: {
        borderRadius: 10,
        overflow: "hidden",
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    itemContent: {
        marginTop: 10,
        fontSize: 14,
        color: "#666",
    },
});

export default Expandable;