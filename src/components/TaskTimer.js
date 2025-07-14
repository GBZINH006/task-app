import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { COLORS } from '../colors';

export default function TaskTimer({ onFinish, onCancel }) {
    const [seconds, setSeconds] = useState(0);
    let intervalId;

    useEffect(() => {
        intervalId = setInterval(() => {
            setSeconds((sec) => sec + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime(seconds)}</Text>
            <View style={styles.buttonsRow}>
                <CustomButton title="Cancelar" size="small" style={styles.cancelBtn} onPress={() => {
                    clearInterval(intervalId);
                    onCancel();
                }} />
                <CustomButton title="Finalizar" size="small" style={styles.finishBtn} onPress={() => {
                    clearInterval(intervalId);
                    onFinish(seconds);
                }} />
            </View>
        </View>
    );
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 20,
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
    },
    cancelBtn: {
        backgroundColor: COLORS.red,
    },
    finishBtn: {
        backgroundColor: COLORS.green,
    },
});
