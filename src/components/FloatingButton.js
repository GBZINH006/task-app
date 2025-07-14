// src/components/FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../colors';

export default function FloatingButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // sombra android
        shadowColor: '#000', // sombra ios
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    plus: {
        color: COLORS.white,
        fontSize: 36,
        lineHeight: 36,
        fontWeight: 'bold',
    },
});
