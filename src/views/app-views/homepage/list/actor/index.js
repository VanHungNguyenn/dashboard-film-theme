import React, { useState } from 'react'
import { Button } from 'antd'
import ModalAddNew from './modalAddNew'

const Actor = () => {
	const [modalVisible, setModalVisible] = useState(false)

	const addKey = () => {
		setModalVisible(true)
	}

	return (
		<>
			<Button type='primary' onClick={addKey}>
				Open Modal
			</Button>
			<ModalAddNew
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	)
}

export default Actor
