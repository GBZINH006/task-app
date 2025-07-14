import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default function CustomButton({ title, onPress, size = 'medium', style }) {
    const sizeStyles = {
        small: { paddingVertical: 6, paddingHorizontal: 12, fontSize: 14 },
        medium: { paddingVertical: 10, paddingHorizontal: 20, fontSize: 16 },
        large: { paddingVertical: 14, paddingHorizontal: 30, fontSize: 18 },
    };

    return (
        <TouchableOpacity
            style={[styles.button, style, { paddingVertical: sizeStyles[size].paddingVertical, paddingHorizontal: sizeStyles[size].paddingHorizontal }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, { fontSize: sizeStyles[size].fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
});
