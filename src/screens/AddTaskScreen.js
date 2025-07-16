// src/screens/AddTaskScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from '../components/CustomButton';
import { TaskContext } from '../contexts/TaskContext';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';

export default function AddTaskScreen() {
    const { addTask } = useContext(TaskContext);
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    function handleAdd() {
        if (!title.trim()) return; // não adiciona sem título

        addTask({
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            duration: duration.trim(),
            completed: false,
        });

        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder="Título da tarefa"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={[styles.input, styles.multiline]}
                placeholder="Descrição (opcional)"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
            />
            <TextInput
                style={styles.input}
                placeholder="Duração (ex: 30 min, 1h)"
                value={duration}
                onChangeText={setDuration}
            />
            <CustomButton title="Adicionar Tarefa" onPress={handleAdd} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: COLORS.white,
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top',
    },
});
