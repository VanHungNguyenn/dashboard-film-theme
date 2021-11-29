import React, { useState } from 'react'
import {
	Card,
	Table,
	Select,
	Input,
	Button,
	Tooltip,
	Switch,
	message,
} from 'antd'
import DirectorData from 'assets/data/list/director.data.json'
import {
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
	EditOutlined,
} from '@ant-design/icons'

import Flex from 'components/shared-components/Flex'
import utils from 'utils'

const { Option } = Select

const googleIndex = [true, false]

const Director = () => {
	const [list, setList] = useState(DirectorData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const onSearch = (e) => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value ? list : DirectorData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	const handleShowType = (value) => {
		if (value !== 'GoogleIndex') {
			const key = 'googleIndex'
			const data = utils.filterArray(DirectorData, key, value)
			setList(data)
		} else {
			setList(DirectorData)
		}
	}

	const addKey = () => {}
	const deleteKey = () => {}

	const deleteUser = (userId) => {
		setList(list.filter((item) => item.name !== userId))
		message.success({ content: `Deleted ${userId}`, duration: 2 })
	}

	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		},
	}

	const onChangeChecked = (checked, title) => {
		if (checked) {
			checked = false
			message.success({
				content: `Đã bật Google Index cho ${title}`,
				duration: 2,
			})
		} else {
			checked = true
			message.success({
				content: `Đã tắt Google Index cho ${title}`,
				duration: 2,
			})
		}
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
			title: 'Url',
			dataIndex: 'url',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'url'),
		},
		{
			title: 'Google Index',
			dataIndex: 'googleIndex',
			render: (_, record) => {
				return (
					<Switch
						defaultChecked={record.googleIndex}
						onChange={(checked) =>
							onChangeChecked(checked, record.name)
						}
					/>
				)
			},
			sorter: (a, b) => utils.antdTableSorter(a, b, 'googleIndex'),
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
							defaultValue='GoogleIndex'
							className='w-100'
							style={{ minWidth: 180 }}
							onChange={handleShowType}
							placeholder='Google Index'
						>
							<Option value='GoogleIndex'>Google Index</Option>
							{googleIndex.map((elm, i) => (
								<Option key={i} value={elm}>
									{elm ? 'Có' : 'Không'}
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

export default Director
