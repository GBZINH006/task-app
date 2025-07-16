// src/screens/HomeScreen.js
import React, { useContext, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomModal from '../components/CustomModal';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../colors';
import { TaskContext } from '../contexts/TaskContext';

export default function HomeScreen() {
    const { tasks, deleteTask } = useContext(TaskContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const navigation = useNavigation();

    const handleDelete = () => {
        deleteTask(taskToDelete);
        setModalVisible(false);
    };

    const renderItem = ({ item }) => {
        // DEBUG: conferir se item é válido
        console.log('item:', item);

        // validações básicas
        const title = typeof item.title === 'string' ? item.title : '[Sem título]';
        const description =
            typeof item.description === 'string'
                ? item.description
                : 'Sem descrição';
        const duration =
            typeof item.duration === 'string' ? item.duration : 'Sem duração';

        return (
            <TouchableOpacity
                style={styles.taskItem}
                onPress={() => navigation.navigate('Detalhes', { task: item })}
                onLongPress={() => {
                    setTaskToDelete(item.id);
                    setModalVisible(true);
                }}
            >
                <Text style={styles.taskTitle}>{title}</Text>
                <Text style={styles.taskDesc}>{description}</Text>
                <Text style={styles.taskDuration}>{duration}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma tarefa adicionada</Text>
                }
            />

            <CustomButton
                title="+ Adicionar Tarefa"
                onPress={() => navigation.navigate('Adicionar')}
                style={styles.addButton}
                size="large"
            />

            <CustomModal
                visible={modalVisible}
                message="Deseja deletar essa tarefa?"
                onCancel={() => setModalVisible(false)}
                onConfirm={handleDelete}
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
    taskItem: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    taskDesc: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 6,
    },
    taskDuration: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginTop: 4,
        fontStyle: 'italic',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        color: COLORS.textSecondary,
        fontSize: 18,
    },
    addButton: {
        marginTop: 20,
        backgroundColor: 'tomato',
    },
});
