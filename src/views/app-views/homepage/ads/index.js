import React, { useState } from 'react'
import { Card, Table, Select, Input, Button, Badge, Menu } from 'antd'

const getStockStatus = (stockCount) => {
	if (stockCount >= 10) {
		return (
			<>
				<Badge status='success' />
				<span>In Stock</span>
			</>
		)
	}
	if (stockCount < 10 && stockCount > 0) {
		return (
			<>
				<Badge status='warning' />
				<span>Limited Stock</span>
			</>
		)
	}
	if (stockCount === 0) {
		return (
			<>
				<Badge status='error' />
				<span>Out of Stock</span>
			</>
		)
	}
	return null
}

const Ads = () => {
	return (
		<>
			<div className='mt-3'>{getStockStatus(5)}</div>
			<div className='mt-3'>{getStockStatus(0)}</div>
			<div className='mt-3'>{getStockStatus(100)}</div>
		</>
	)
}

export default Ads
