// src/screens/HistoryScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS } from '../colors';
import { TaskContext } from '../contexts/TaskContext';

export default function HistoryScreen() {
    const { history } = useContext(TaskContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={history}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.time}>Finalizado em: {item.duration}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Sem tarefas finalizadas ainda.</Text>}
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
    card: {
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    time: {
        marginTop: 4,
        color: COLORS.textSecondary,
    },
    empty: {
        textAlign: 'center',
        marginTop: 50,
        fontStyle: 'italic',
        color: COLORS.textSecondary,
    },
});
