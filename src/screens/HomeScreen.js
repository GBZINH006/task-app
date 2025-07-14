import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import FloatingButton from '../components/FloatingButton';
import CustomModal from '../components/CustomModal';
import { COLORS } from '../colors';

const initialTasks = [
    { id: '1', title: 'Estudar React Native' },
    { id: '2', title: 'Fazer exercício' },
    { id: '3', title: 'Ler um livro' },
];

export default function HomeScreen() {
    const [tasks, setTasks] = useState(initialTasks);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const addTask = (title) => {
        const newTask = {
            id: (Math.random() * 100000).toFixed(0),
            title,
        };
        setTasks([...tasks, newTask]);
    };

    const renderItem = ({ item }) => (
        <View style={styles.taskContainer}>
            <Text
                style={styles.taskText}
                onPress={() => navigation.navigate('Detalhes da Tarefa', { task: item })}
            >
                {item.title}
            </Text>
            <CustomButton
                title="Excluir"
                size="small"
                style={styles.deleteButton}
                onPress={() => setTasks(tasks.filter(task => task.id !== item.id))}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Minhas Tarefas</Text>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa 😴</Text>}
            />

            <FloatingButton onPress={() => setModalVisible(true)} />

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={addTask}
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
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 12,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 8,
    },
    taskText: {
        fontSize: 18,
        color: COLORS.textSecondary,
        flex: 1,
    },
    deleteButton: {
        backgroundColor: COLORS.red,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        color: COLORS.textSecondary,
    },
});
