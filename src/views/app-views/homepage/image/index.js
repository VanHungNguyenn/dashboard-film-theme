import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Tooltip, message } from 'antd'
import ImageData from 'assets/data/image.data.json'
import {
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
	EditOutlined,
} from '@ant-design/icons'

import Flex from 'components/shared-components/Flex'
import utils from 'utils'

const { Option } = Select

const types = [
	'Poster',
	'Thumbnails',
	'Video',
	'Episode',
	'Actor',
	'Director',
	'Post',
]

const Image = () => {
	const [list, setList] = useState(ImageData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const deleteUser = (userId) => {
		setList(list.filter((item) => item.name !== userId))
		message.success({ content: `Deleted ${userId}`, duration: 2 })
	}

	const onSearch = (e) => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value ? list : ImageData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	const handleShowType = (value) => {
		if (value !== 'Types') {
			const key = 'type'
			const data = utils.filterArray(ImageData, key, value)
			setList(data)
		} else {
			setList(ImageData)
		}
	}

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
			title: 'Image',
			dataIndex: 'image',
			render: (_, record) => {
				return <img src={record.image} alt='' width={40} />
			},
		},
		{
			title: 'Name',
			dataIndex: 'name',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name'),
		},
		{
			title: 'Types',
			dataIndex: 'type',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'type'),
		},
		{
			title: 'Edited date',
			dataIndex: 'date',
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className='text-right d-flex justify-content-end'>
					<Tooltip title='Edit'>
						<Button
							type='primary'
							className='mr-2'
							icon={<EditOutlined />}
							size='small'
						/>
					</Tooltip>
					<Tooltip title='Delete'>
						<Button
							onClick={() => {
								deleteUser(elm.name)
							}}
							danger
							icon={<DeleteOutlined />}
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
							placeholder='Search'
							prefix={<SearchOutlined />}
							onChange={(e) => onSearch(e)}
						/>
					</div>
					<div className='mb-3'>
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
				</Flex>
			</Flex>
			<Flex mobileFlex={false} justifyContent='end'>
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
			<div className='table-responsive'>
				<Table
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

export default Image
