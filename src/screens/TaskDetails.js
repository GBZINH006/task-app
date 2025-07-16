// src/screens/TaskDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../colors';

export default function TaskDetails() {
    const navigation = useNavigation();
    const route = useRoute();

    const { task } = route.params || {};

    if (!task) {
        navigation.goBack();
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.label}>Descrição:</Text>
            <Text style={styles.description}>{task.description || 'Sem descrição'}</Text>

            <Text style={styles.label}>Tempo gasto:</Text>
            <Text style={styles.duration}>{task.duration || 'Não informado'}</Text>

            <CustomButton
                title="Voltar"
                onPress={() => navigation.goBack()}
                style={{ marginTop: 30 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textSecondary,
        marginTop: 12,
    },
    description: {
        fontSize: 16,
        color: COLORS.textPrimary,
        marginTop: 4,
    },
    duration: {
        fontSize: 16,
        color: COLORS.textPrimary,
        marginTop: 4,
    },
});
