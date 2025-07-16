// src/components/CustomModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS } from '../colors';

export default function CustomModal({ visible, message, onCancel, onConfirm }) {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.message}>{message}</Text>
                    <CustomButton title="Cancelar" onPress={onCancel} size="small" />
                    <CustomButton title="Confirmar" onPress={onConfirm} size="small" />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        padding: 20,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        color: COLORS.textPrimary,
        marginBottom: 20,
        textAlign: 'center',
    },
});
