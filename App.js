import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { useState } from 'react'
import Task from './components/Task'

export default function App() {
	const [task, setTask] = useState('')
	const [taskItems, setTaskItems] = useState([])
	const handleAddTask = () => {
		Keyboard.dismiss()
		setTaskItems([...taskItems, task])
		setTask(null)
	}
	const handleDeleteTask = (index) => {
		console.log(index)
		let itemsCopy = [...taskItems]
		itemsCopy.splice(index, 1)
		setTaskItems(itemsCopy)
	}
	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.title}>Today's Tasks</Text>
				<View style={styles.taskItems}>
					{taskItems.map((item, index) => (
						<Task key={index} text={item} handleDeleteTask={handleDeleteTask} />
					))}
				</View>
			</View>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.inputWrapper}>
				<TextInput
					placeholder={'Add new task'}
					style={styles.addInput}
					onChangeText={(text) => setTask(text)}
					value={task}
				/>
				<TouchableOpacity
					style={styles.addTask}
					onPress={() => handleAddTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
	tasksWrapper: {
		paddingTop: 60,
		paddingHorizontal: 20,
		flex: 4,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	taskItems: {},
	inputWrapper: {
		position: 'absolute',
		bottom: 30,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	addInput: {
		paddingHorizontal: 12,
		fontSize: 20,
		borderWidth: 1,
		borderColor: '#fff',
	},
	addInput: {
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: '#fff',
		borderRadius: 60,
		borderColor: '#c0c0c0',
		borderWidth: 1,
		width: 250,
		fontSize: 20,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#c0c0c0',
		borderWidth: 1,
	},
	addText: {
		fontSize: 30,
	},
})
