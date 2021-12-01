import React from 'react'
import { Modal, Row, Col, Input, Form, Checkbox } from 'antd'
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
										label='Title'
										name='title'
										rules={[
											{
												required: true,
												message: 'Please input title',
											},
										]}
									>
										<Input placeholder='Enter title' />
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item label='Url' name='url'>
										<Input placeholder='Enter url' />
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item label='Content' name='content'>
										<TextArea
											rows={2}
											placeholder='Enter content'
										/>
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item
										label='SEO title'
										name='seoTitle'
									>
										<Input placeholder='Enter SEO title' />
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item
										label='SEO description'
										name='seoDescription'
									>
										<Input placeholder='Enter SEO description' />
									</Form.Item>
								</Col>
								<Col xs={24}>
									<Form.Item
										label='Image'
										name='image'
									></Form.Item>
								</Col>
								<Col xs={24}>
									<Checkbox defaultChecked={true}>
										Active
									</Checkbox>
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
