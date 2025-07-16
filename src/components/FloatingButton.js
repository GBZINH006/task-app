// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default function CustomButton({ title, onPress, style, size = 'medium' }) {
    const sizeStyles = {
        small: styles.small,
        medium: styles.medium,
        large: styles.large,
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, sizeStyles[size], style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    small: {
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    medium: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    large: {
        paddingVertical: 14,
        paddingHorizontal: 24,
    },
});
