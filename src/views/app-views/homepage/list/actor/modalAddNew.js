import React from 'react'
import { Modal, Row, Col, Card, Input, Form, Select, Checkbox } from 'antd'
const { Option } = Select
const { TextArea } = Input

const Modaladdnew = ({ modalVisible, setModalVisible }) => {
	const handleOk = () => {
		setModalVisible(false)
	}

	const handleCancel = () => {
		setModalVisible(false)
	}

	const options = [
		{ label: 'Complete', value: 'Complete' },
		{ label: 'Recommend', value: 'Recommend' },
		{ label: 'Movie', value: 'Movie' },
		{ label: 'Slider', value: 'Slider' },
		{ label: 'License', value: 'License' },
		{ label: 'Active', value: 'Active' },
	]

	return (
		<>
			<Modal
				title='Add new'
				style={{ top: 20, maxWidth: '95%' }}
				visible={modalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={1400}
			>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
						<Card title='Basic Information'>
							<Form layout='vertical'>
								<Row gutter={16}>
									<Col
										xs={24}
										sm={12}
										md={8}
										lg={8}
										xl={8}
										xxl={8}
									>
										<Form.Item
											label='Title'
											name='title'
											rules={[
												{
													required: true,
													message:
														'Please input title',
												},
											]}
										>
											<Input placeholder='Enter title' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={8}
										lg={8}
										xl={8}
										xxl={8}
									>
										<Form.Item
											label='English title'
											name='titleEnglish'
										>
											<Input placeholder='Enter English title' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={8}
										lg={8}
										xl={8}
										xxl={8}
									>
										<Form.Item label='Url' name='url'>
											<Input placeholder='Enter url' />
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Trailer'
											name='trailer'
										>
											<Input placeholder='Enter trailer url' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Film type'
											name='filmType'
										>
											<Select
												defaultValue='movie'
												placeholder='Types'
											>
												<Option value='movie'>
													Movie
												</Option>
												<Option value='film'>
													Film
												</Option>
												<Option value='upcomingMovie'>
													Upcoming Movie
												</Option>
											</Select>
										</Form.Item>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col
										xs={12}
										sm={12}
										md={6}
										lg={6}
										xl={6}
										xxl={6}
									>
										<Form.Item label='Year' name='year'>
											<Input placeholder='Enter year' />
										</Form.Item>
									</Col>
									<Col
										xs={12}
										sm={12}
										md={6}
										lg={6}
										xl={6}
										xxl={6}
									>
										<Form.Item label='Imdb' name='imdb'>
											<Input placeholder='Enter imdb' />
										</Form.Item>
									</Col>
									<Col
										xs={12}
										sm={12}
										md={6}
										lg={6}
										xl={6}
										xxl={6}
									>
										<Form.Item
											label='Time'
											name='time'
											rules={[
												{
													required: true,
													message:
														'Please input time',
												},
											]}
										>
											<Input placeholder='Enter time' />
										</Form.Item>
									</Col>
									<Col
										xs={12}
										sm={12}
										md={6}
										lg={6}
										xl={6}
										xxl={6}
									>
										<Form.Item label='Label' name='label'>
											<Input placeholder='Enter label' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item label='Note' name='note'>
											<TextArea
												rows={2}
												placeholder='Enter note'
											/>
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item
											label='Content'
											name='content'
											rules={[
												{
													required: true,
													message:
														'Please input content',
												},
											]}
										>
											<TextArea
												rows={2}
												placeholder='Enter note'
											/>
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Card>

						<Card title='Thông tin nâng cao'>
							<Form layout='vertical'>
								<Row gutter={16}>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Category'
											name='category'
											rules={[
												{
													required: true,
													message:
														'Please input category',
												},
											]}
										>
											<Input placeholder='Enter category' />
										</Form.Item>
									</Col>

									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Country'
											name='country'
											rules={[
												{
													required: true,
													message:
														'Please input country',
												},
											]}
										>
											<Input placeholder='Enter country' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Actor'
											name='actor'
											rules={[
												{
													required: true,
													message:
														'Please input actor',
												},
											]}
										>
											<Input placeholder='Enter actor' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Director'
											name='director'
											rules={[
												{
													required: true,
													message:
														'Please input director',
												},
											]}
										>
											<Input placeholder='Enter director' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Tags'
											name='tags'
											rules={[
												{
													required: true,
													message: 'Please input tag',
												},
											]}
										>
											<Input placeholder='Enter tag' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={12}
										md={12}
										lg={12}
										xl={12}
										xxl={12}
									>
										<Form.Item
											label='Codes'
											name='code'
											rules={[
												{
													required: true,
													message:
														'Please input code',
												},
											]}
										>
											<Input placeholder='Enter code' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Checkbox.Group options={options} />
									</Col>
								</Row>
							</Form>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
						<Card title='Media'>
							<Form layout='vertical'>
								<Row gutter={16}>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item
											label='Poster'
											name='poster'
											rules={[
												{
													required: true,
													message:
														'Please input poster',
												},
											]}
										></Form.Item>
									</Col>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item
											label='Thumbnails'
											name='thumbnails'
											rules={[
												{
													required: true,
													message:
														'Please input thumbnails',
												},
											]}
										></Form.Item>
									</Col>
								</Row>
							</Form>
						</Card>
						<Card title='SEO'>
							<Form layout='vertical'>
								<Row gutter={16}>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item
											label='SEO title'
											name='seoTitle'
										>
											<Input placeholder='Enter SEO title' />
										</Form.Item>
									</Col>
									<Col
										xs={24}
										sm={24}
										md={24}
										lg={24}
										xl={24}
										xxl={24}
									>
										<Form.Item
											label='SEO description'
											name='seoDescription'
										>
											<TextArea placeholder='Enter SEO description' />
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Card>
					</Col>
				</Row>
			</Modal>
		</>
	)
}

export default Modaladdnew
