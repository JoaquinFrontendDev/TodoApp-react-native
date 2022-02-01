import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Task(props) {
	return (
		<View style={styles.taskItem}>
			<View style={styles.leftItem}>
				<TouchableOpacity style={styles.completeBtn}></TouchableOpacity>
				<Text style={styles.item}>{props.text}</Text>
			</View>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => props.handleDeleteTask()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	taskItem: {
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 20,
		marginTop: 25,
		borderRadius: 12,
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	item: {
		fontSize: 20,
		marginLeft: 12,
	},
	leftItem: {
		flexDirection: 'row',
	},
	completeBtn: {
		height: 24,
		width: 24,
		borderRadius: 6,
		borderColor: '#44bd32',
		borderWidth: 2,
	},
	deleteBtn: {
		height: 24,
		width: 24,
		borderRadius: 6,
		borderColor: 'red',
		borderWidth: 2,
	},
})
