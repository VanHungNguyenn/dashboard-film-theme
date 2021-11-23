import React from 'react'
import { Avatar, Button, Typography, Row, Col, Pagination } from 'antd'
import { UserOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Title } = Typography

const Image = () => {
	return (
		<>
			<div className='text-center mt-3'>
				<Avatar size={80} icon={<UserOutlined />} />
				<h3 className='mt-2 mb-0'>VanHung</h3>
				<span className='text-muted'>Web developer</span>
			</div>
			<div className='button'>
				<Button
					type='primary'
					loading
					size='large'
					block
					className='mr-2 mb-2'
				>
					Large Primary Button
				</Button>
				<Button type='primary' danger className='mr-2'>
					Normal Primary Button
				</Button>
				<Button type='primary' size='small' ghost className='mr-2'>
					Small Primary Button
				</Button>
				<Button
					shape='circle'
					icon={<UserOutlined />}
					className='mr-2'
				></Button>
				<Button shape='round' icon={<UserOutlined />} className='mr-2'>
					Button
				</Button>
				<Button className='mr-2'>Default Button</Button>
				<Button type='dashed' className='mr-2'>
					Dashed Button
				</Button>
				<br />
				<Button type='text'>Text Button</Button>
				<Button type='link'>Link Button</Button>
			</div>
			<div className='mt-3 icon'>
				<MenuFoldOutlined rotate='45' className='mr-5' />
				<MenuFoldOutlined
					spin={true}
					style={{ fontSize: '20px', color: 'red' }}
				/>
			</div>
			<div className='mt-3 typography'>
				<Title>h1. Ant Design</Title>
				<Title level={2}>h2. Ant Design</Title>
				<Title level={3}>h3. Ant Design</Title>
				<Title level={4}>h4. Ant Design</Title>
				<Title level={5}>h5. Ant Design</Title>
			</div>
			<div className='grid'>
				<Row>
					<Col span={24}>col</Col>
				</Row>
				<Row>
					<Col span={12}>col-12</Col>
					<Col span={12}>col-12</Col>
				</Row>
				<Row>
					<Col span={8}>col-8</Col>
					<Col span={8}>col-8</Col>
					<Col span={8}>col-8</Col>
				</Row>
				<Row>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
				</Row>
			</div>
			<div className='mt-3 pagination'>
				<Pagination defaultCurrent={6} total={500} />
			</div>
		</>
	)
}

export default Image
