// src/components/CustomModal.js
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../colors';

export default function CustomModal({ visible, onClose, onSave }) {
    const [input, setInput] = useState('');

    const handleSave = () => {
        if (input.trim() === '') return;
        onSave(input.trim());
        setInput('');
    };

    return (
        <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Nova Tarefa</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome da tarefa"
                        value={input}
                        onChangeText={setInput}
                        autoFocus
                    />
                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.btn, styles.cancelBtn]} onPress={() => { setInput(''); onClose(); }}>
                            <Text style={styles.btnText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.saveBtn]} onPress={() => { handleSave(); onClose(); }}>
                            <Text style={styles.btnText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
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
    modalContainer: {
        backgroundColor: COLORS.white,
        width: '80%',
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.cardBackground,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
        color: COLORS.textPrimary,
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    cancelBtn: {
        backgroundColor: COLORS.red,
    },
    saveBtn: {
        backgroundColor: COLORS.primary,
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
});
