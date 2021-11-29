import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Tooltip, message } from 'antd'
import AdsData from 'assets/data/ads.data.json'
import {
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
	EditOutlined,
} from '@ant-design/icons'

import Flex from 'components/shared-components/Flex'
import utils from 'utils'

const { Option } = Select

const types = ['All', 'Mobile', 'Desktop']

const Ads = () => {
	const [list, setList] = useState(AdsData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const deleteUser = (userId) => {
		setList(list.filter((item) => item.key !== userId))
		message.success({ content: `Deleted ${userId}`, duration: 2 })
	}

	const onSearch = (e) => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value ? list : AdsData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	const handleShowType = (value) => {
		if (value !== 'Status') {
			const key = 'active'
			const data = utils.filterArray(AdsData, key, value)
			setList(data)
		} else {
			setList(AdsData)
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
			title: 'Key',
			dataIndex: 'key',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'key'),
		},
		{
			title: 'Type',
			dataIndex: 'type',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'key'),
		},
		{
			title: 'Description',
			dataIndex: 'description',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'description'),
		},
		{
			title: 'Content',
			dataIndex: 'content',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'content'),
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
								deleteUser(elm.key)
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
							defaultValue='Type'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowType}
							placeholder='Type'
						>
							<Option value='Type'>Type</Option>
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
						Add key
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
					rowKey='name'
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

export default Ads
