// src/components/TaskTimer.js
import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS } from '../colors';

export default function TaskTimer({ visible, task, onCancel, onFinish }) {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        let timer;
        if (visible && running) {
            timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [visible, running]);

    const formatTime = () => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    const handleFinish = () => {
        setRunning(false);
        onFinish(seconds);
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{task.title}</Text>
                    <Text style={styles.timer}>{formatTime()}</Text>
                    <CustomButton title="Finalizar" onPress={handleFinish} />
                    <CustomButton title="Cancelar" onPress={onCancel} size="small" />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 24,
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 16,
    },
    timer: {
        fontSize: 32,
        marginBottom: 20,
        color: COLORS.textPrimary,
    },
});
