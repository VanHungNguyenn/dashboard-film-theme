/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Table, Tag, Space } from 'antd'

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
]

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		sorter: {
			compare: (a, b) => a.age - b.age,
			multiple: 3,
		},
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		dataIndex: 'tags',
		key: 'tags',
		render: (tags) => (
			<>
				{tags.map((tag, i) => {
					let color = tag.length > 5 ? 'geekblue' : 'green'
					if (tag === 'loser') {
						color = 'volcano'
					}

					return (
						<Tag color={color} key={i}>
							{tag.toUpperCase()}
						</Tag>
					)
				})}
			</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Space size='middle'>
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
]

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			'selectedRows: ',
			selectedRows
		)
	},
}

const Article = () => {
	return (
		<>
			<Table
				rowSelection={{
					type: 'checkbox',
					...rowSelection,
				}}
				dataSource={data}
				columns={columns}
				bordered={true}
			/>
		</>
	)
}

export default Article
