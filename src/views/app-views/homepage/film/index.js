import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Tooltip } from 'antd'
import FilmData from 'assets/data/film.data.json'
import {
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { SiSlides } from 'react-icons/si'
import { GiFilmSpool } from 'react-icons/gi'
import { GrLicense } from 'react-icons/gr'
import { IoMdDoneAll } from 'react-icons/io'
import { BiWorld } from 'react-icons/bi'
import {
	AiOutlineStar,
	AiOutlinePoweroff,
	AiFillFileAdd,
	AiOutlineDatabase,
} from 'react-icons/ai'

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

	const addKey = () => {}
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
				return <img src={record.thumbnails} alt='' width={50} />
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
							icon={<SiSlides />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Đề xuất'>
						<Button
							type='default'
							className='mr-2'
							icon={<AiOutlineStar />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Chiếu rạp'>
						<Button
							type='default'
							className='mr-2'
							icon={<GiFilmSpool />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Bản quyền'>
						<Button
							type='default'
							className='mr-2'
							icon={<GrLicense />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Active'>
						<Button
							type='default'
							className='mr-2'
							icon={<AiOutlinePoweroff />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Done'>
						<Button
							type='default'
							className='mr-2'
							icon={<IoMdDoneAll />}
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
							icon={<BiWorld />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Thêm tập phim'>
						<Button
							type='default'
							className='mr-2'
							icon={<AiFillFileAdd />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Danh sách tập'>
						<Button
							type='default'
							className='mr-2'
							icon={<AiOutlineDatabase />}
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
						<Button danger icon={<DeleteOutlined />} size='small' />
					</Tooltip>
				</div>
			),
		},
	]

	return (
		<Card>
			<Flex alignItems='center' justifyContent='start' mobileFlex={false}>
				<Flex className='mb-1' mobileFlex={false}>
					<div className='mr-3 mb-2'>
						<Input
							className='w-100'
							placeholder='Search'
							prefix={<SearchOutlined />}
							onChange={(e) => onSearch(e)}
						/>
					</div>
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
					<div className='mr-3 mb-2'>
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
				<div className='mr-1'>
					<Button
						onClick={addKey}
						type='primary'
						icon={<PlusCircleOutlined />}
						block
					>
						Add
					</Button>
				</div>
				<div>
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
