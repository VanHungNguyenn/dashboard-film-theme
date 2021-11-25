import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Badge, Menu } from 'antd'
import SettingData from 'assets/data/setting.data.json'
import {
	EyeOutlined,
	DeleteOutlined,
	SearchOutlined,
	PlusCircleOutlined,
} from '@ant-design/icons'

import Flex from 'components/shared-components/Flex'
import utils from 'utils'

const { Option } = Select

const types = ['String', 'Boolean', 'Number']

const Setting = () => {
	const [list, setList] = useState(SettingData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const onSearch = (e) => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value ? list : SettingData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	const handleShowType = (value) => {
		if (value !== 'Types') {
			const key = 'type'
			const data = utils.filterArray(SettingData, key, value)
			setList(data)
		} else {
			setList(SettingData)
		}
	}

	const addKey = () => {}
	const deleteCache = () => {}
	const deleteKey = () => {}

	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		},
	}

	const deleteRow = (row) => {
		const objKey = 'id'
		let data = list
		if (selectedRows.length > 1) {
			selectedRows.forEach((elm) => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	}

	const tableColumns = [
		{
			title: 'Key',
			dataIndex: 'key',
			render: (_, record) => <div className='d-flex'>Hello</div>,
			sorter: (a, b) => utils.antdTableSorter(a, b, 'key'),
		},
		{
			title: 'Types',
			dataIndex: 'type',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'type'),
		},
		{
			title: 'Value',
			dataIndex: 'value',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'value'),
		},
		{
			title: 'Action',
			dataIndex: 'actions',
			render: (_, elm) => <div className='text-right'></div>,
		},
	]

	return (
		<Card>
			<Flex
				alignItems='center'
				justifyContent='between'
				mobileFlex={false}
			>
				<Flex className='mb-1' mobileFlex={false}>
					<div className='mr-md-3 mb-3'>
						<Input
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
							{types.map((elm) => (
								<Option key={elm} value={elm}>
									{elm}
								</Option>
							))}
						</Select>
					</div>
				</Flex>
				<Flex mobileFlex={false} justifyContent='end'>
					<div className='mr-1'>
						<Button
							onClick={addKey}
							type='primary'
							icon={<PlusCircleOutlined />}
							block
						>
							Add key
						</Button>
					</div>
					<div className='mr-1'>
						<Button
							onClick={deleteCache}
							type='danger'
							icon={<DeleteOutlined />}
							block
						>
							Delete Cache
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
							Delete key
						</Button>
					</div>
				</Flex>
			</Flex>
			<div className='table-responsive'>
				<Table
					columns={tableColumns}
					dataSource={list}
					rowKey='id'
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default Setting
