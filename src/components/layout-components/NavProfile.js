import React from 'react'
import { Menu, Dropdown, Avatar } from 'antd'
import { connect } from 'react-redux'
import { LogoutOutlined } from '@ant-design/icons'
import { signOut } from 'redux/actions/Auth'

const menuItem = []

export const NavProfile = ({ signOut }) => {
	const profileImg = '/img/avatars/avatar.jpg'
	const profileMenu = (
		<div className='nav-profile nav-dropdown'>
			<div className='nav-profile-header'>
				<div className='d-flex'>
					<Avatar size={45} src={profileImg} />
					<div className='pl-3'>
						<h4 className='mb-0'>Van Hung</h4>
						<span className='text-muted'>Frontend Developer</span>
					</div>
				</div>
			</div>
			<div className='nav-profile-body'>
				<Menu>
					<Menu.Item
						key={menuItem.length + 1}
						onClick={(e) => signOut()}
					>
						<span>
							<LogoutOutlined className='mr-3' />
							<span className='font-weight-normal'>Sign Out</span>
						</span>
					</Menu.Item>
				</Menu>
			</div>
		</div>
	)
	return (
		<Dropdown
			placement='bottomRight'
			overlay={profileMenu}
			trigger={['click']}
		>
			<Menu className='d-flex align-item-center' mode='horizontal'>
				<Menu.Item key='profile'>
					<Avatar src={profileImg} />
				</Menu.Item>
			</Menu>
		</Dropdown>
	)
}

export default connect(null, { signOut })(NavProfile)
