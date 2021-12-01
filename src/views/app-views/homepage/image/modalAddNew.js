import React from 'react'
import { Modal, Row, Col, Form, Select } from 'antd'

const { Option } = Select

const Modaladdnew = ({ modalVisible, setModalVisible, types }) => {
	const handleOk = () => {
		setModalVisible(false)
	}

	const handleCancel = () => {
		setModalVisible(false)
	}

	return (
		<>
			<Modal
				title='Add new'
				style={{ top: 20, maxWidth: '95%' }}
				visible={modalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={700}
			>
				<Row gutter={16}>
					<Col xs={24}>
						<Form layout='vertical'>
							<Row gutter={16}>
								<Col xs={24}>
									<Form.Item
										label='Type'
										name='type'
										rules={[
											{
												required: true,
											},
										]}
									>
										<Select
											initialvalues={types[0]}
											placeholder='Type'
										>
											{types.map((type, i) => {
												return (
													<Option
														key={i}
														value={type.toLowerCase()}
													>
														{type}
													</Option>
												)
											})}
										</Select>
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item
										label='File'
										name='file'
									></Form.Item>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Modal>
		</>
	)
}

export default Modaladdnew
