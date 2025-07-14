import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import TaskTimer from '../components/TaskTimer';
import { COLORS } from '../colors';

export default function TaskDetails({ route, navigation }) {
    const { task } = route.params;
    const [timerVisible, setTimerVisible] = useState(false);

    const handleFinish = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        Alert.alert(
            'Tarefa finalizada!',
            `Você concluiu "${task.title}" em ${min}m ${sec}s.`,
        );
        setTimerVisible(false);
        navigation.goBack(); // volta pra lista
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefa:</Text>
            <Text style={styles.task}>{task.title}</Text>

            <CustomButton
                title="Começar agora"
                size="large"
                onPress={() => setTimerVisible(true)}
                style={{ marginTop: 30 }}
            />

            {timerVisible && (
                <TaskTimer
                    onCancel={() => setTimerVisible(false)}
                    onFinish={handleFinish}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 15,
    },
    task: {
        fontSize: 18,
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
});
