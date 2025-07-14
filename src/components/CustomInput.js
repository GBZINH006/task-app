import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export default function CustomInput({ value, onChangeText, placeholder, style }) {
    return (
        <TextInput
            style={[styles.input, style]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.textSecondary}
            selectionColor={COLORS.primary}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 14,
        fontSize: 16,
        color: COLORS.textPrimary,
        marginVertical: 12,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 3,
    },
});
