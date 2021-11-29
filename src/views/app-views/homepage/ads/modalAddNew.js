import React from 'react'
import { Modal, Row, Col, Input, Form, Select } from 'antd'
const { Option } = Select
const { TextArea } = Input

const Modaladdnew = ({ modalVisible, setModalVisible }) => {
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
					<Col>
						<Form layout='vertical'>
							<Row gutter={16}>
								<Col xs={24}>
									<Form.Item
										label='Key'
										name='key'
										rules={[
											{
												required: true,
												message: 'Please input key',
											},
										]}
									>
										<Input placeholder='Enter key' />
									</Form.Item>
								</Col>
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
											initialvalues='all'
											placeholder='Type'
										>
											<Option value='all'>All</Option>
											<Option value='mobile'>
												Mobile
											</Option>
											<Option value='desktop'>
												Desktop
											</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item label='Value' name='value'>
										<TextArea
											rows={2}
											placeholder='Enter value'
										/>
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item
										label='Description'
										name='description'
									>
										<TextArea
											rows={2}
											placeholder='Enter description'
										/>
									</Form.Item>
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
