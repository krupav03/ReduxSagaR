import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT, RESET } from '../Redux/Action';

function CounterRedux() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{count}</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => dispatch(INCREMENT)}
            >
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => dispatch(DECREMENT)}
            >
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.resetButton]} 
                onPress={() => dispatch(RESET)}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    resetButton: {
        backgroundColor: '#B00020',
    },
});

export default CounterRedux;
