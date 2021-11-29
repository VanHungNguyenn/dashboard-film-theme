import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Tooltip, message } from 'antd'
import FilmData from 'assets/data/film.data.json'
import {
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
	EditOutlined,
	CheckOutlined,
	FolderOutlined,
	FolderAddOutlined,
	GlobalOutlined,
	PoweroffOutlined,
	CopyrightOutlined,
	LikeOutlined,
	SlidersOutlined,
	YoutubeOutlined,
} from '@ant-design/icons'
import ModalAddNew from './modalAddNew'

import Flex from 'components/shared-components/Flex'
import utils from 'utils'

const { Option } = Select

const types = ['Phim bộ', 'Phim lẻ', 'Phim sắp chiếu']
const slider = ['Hiển thị', 'Không hiển thị']
const recommend = ['Có', 'Không']
const theater = ['Có', 'Không']
const license = ['Có', 'Không']
const publish = ['Hoàn thành', 'Chờ duyệt']
const status = ['Hoàn thành', 'Chưa hoàn thành']

const Film = () => {
	const [list, setList] = useState(FilmData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [modalVisible, setModalVisible] = useState(false)

	const deleteUser = (userId) => {
		setList(list.filter((item) => item.name !== userId))
		message.success({ content: `Deleted ${userId}`, duration: 2 })
	}

	const onSearch = (e) => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value ? list : FilmData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	const handleShowType = (value) => {
		if (value !== 'Types') {
			const key = 'type'
			const data = utils.filterArray(FilmData, key, value)
			setList(data)
		} else {
			setList(FilmData)
		}
	}

	const handleShowSlider = (value) => {}
	const handleShowRecommend = (value) => {}
	const handleShowTheater = (value) => {}
	const handleShowLicense = (value) => {}
	const handleShowPublish = (value) => {}
	const handleShowStatus = (value) => {}

	const addKey = () => {
		setModalVisible(true)
	}
	const deleteKey = () => {}

	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		},
	}

	const tableColumns = [
		{
			title: 'Thumbnails',
			dataIndex: 'thumbnails',
			render: (_, record) => {
				return <img src={record.thumbnails} alt='' width={40} />
			},
		},
		{
			title: 'Name',
			dataIndex: 'name',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
		},
		{
			title: 'Film type',
			dataIndex: 'type',
		},
		{
			title: 'Person',
			dataIndex: 'person',
		},
		{
			title: 'Information',
			dataIndex: 'info',
			render: (_, elm) => (
				<div className='text-right d-flex justify-content-end'>
					<Tooltip title='Slider'>
						<Button
							type='default'
							className='mr-2'
							icon={<SlidersOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Đề xuất'>
						<Button
							type='default'
							className='mr-2'
							icon={<LikeOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Chiếu rạp'>
						<Button
							type='default'
							className='mr-2'
							icon={<YoutubeOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Bản quyền'>
						<Button
							type='default'
							className='mr-2'
							icon={<CopyrightOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Active'>
						<Button
							type='default'
							className='mr-2'
							icon={<PoweroffOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Done'>
						<Button
							type='default'
							className='mr-2'
							icon={<CheckOutlined />}
							size='small'
						/>
					</Tooltip>
				</div>
			),
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className='text-right d-flex justify-content-end'>
					<Tooltip title='Ngôn ngữ'>
						<Button
							type='default'
							className='mr-2'
							icon={<GlobalOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Thêm tập phim'>
						<Button
							type='default'
							className='mr-2'
							icon={<FolderAddOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Danh sách tập'>
						<Button
							type='default'
							className='mr-2'
							icon={<FolderOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Edit'>
						<Button
							type='default'
							className='mr-2'
							icon={<EditOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Delete'>
						<Button
							danger
							icon={<DeleteOutlined />}
							onClick={() => {
								deleteUser(elm.name)
							}}
							size='small'
						/>
					</Tooltip>
				</div>
			),
		},
	]

	return (
		<Card>
			<Flex alignItems='center' justifyContent='start' mobileFlex={false}>
				<Flex className='mb-1' mobileFlex={false}>
					<div className='mr-md-3 mb-3'>
						<Input
							style={{ minWidth: 180 }}
							className='w-100'
							placeholder='Search'
							prefix={<SearchOutlined />}
							onChange={(e) => onSearch(e)}
						/>
					</div>
					<div className='mr-md-3 mb-3'>
						<Select
							defaultValue='Types'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowType}
							placeholder='Types'
						>
							<Option value='Types'>Types</Option>
							{types.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
					<div className='mr-md-3 mb-3'>
						<Select
							defaultValue='Slider'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowSlider}
							placeholder='Slider'
						>
							<Option value='Slider'>Slider</Option>
							{slider.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
					<div className='mb-3'>
						<Select
							defaultValue='Recommend'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowRecommend}
							placeholder='Đề xuất'
						>
							<Option value='Recommend'>Đề xuất</Option>
							{recommend.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
				</Flex>
			</Flex>
			<Flex alignItems='center' justifyContent='start' mobileFlex={false}>
				<Flex className='mb-1' mobileFlex={false}>
					<div className='mr-md-3 mb-3'>
						<Select
							defaultValue='Theater'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowTheater}
							placeholder='Chiếu rạp'
						>
							<Option value='Theater'>Chiếu rạp</Option>
							{theater.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
					<div className='mr-md-3 mb-3'>
						<Select
							defaultValue='License'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowLicense}
							placeholder='Bản quyền'
						>
							<Option value='License'>Bản quyền</Option>
							{license.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
					<div className='mr-md-3 mb-3'>
						<Select
							defaultValue='Publish'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowPublish}
							placeholder='Xuất bản'
						>
							<Option value='Publish'>Xuất bản</Option>
							{publish.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
					<div className='mb-3'>
						<Select
							defaultValue='Status'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowStatus}
							placeholder='Trạng thái'
						>
							<Option value='Status'>Trạng thái</Option>
							{status.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
				</Flex>
			</Flex>
			<Flex
				className='mb-3'
				alignItems='center'
				mobileFlex={false}
				justifyContent='end'
			>
				<div className='ml-1 mb-3'>
					<Button
						onClick={addKey}
						type='primary'
						icon={<PlusCircleOutlined />}
						block
					>
						Add
					</Button>
				</div>
				<div className='ml-1 mb-3'>
					<Button
						onClick={deleteKey}
						type='danger'
						icon={<DeleteOutlined />}
						block
						disabled={true}
					>
						Delete choose items
					</Button>
				</div>
			</Flex>
			<ModalAddNew
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
			<div className='table-responsive'>
				<Table
					className='w-100'
					columns={tableColumns}
					dataSource={list}
					rowKey='id'
					rowSelection={{
						type: 'checkbox',
						...rowSelection,
					}}
					bordered={true}
				/>
			</div>
		</Card>
	)
}

export default Film
