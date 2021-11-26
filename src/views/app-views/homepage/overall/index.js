import React from 'react'
import { Row, Col } from 'antd'

import OverallData from 'assets/data/overall.data.js'
import DataDisplayWidget from 'components/shared-components/DataDisplayWidget'

const DisplayDataSet = () => {
	return (
		<Row gutter={16}>
			{OverallData.map((item, i) => {
				return (
					<Col key={i} xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
						<DataDisplayWidget
							icon={item.icon}
							value={item.value}
							title={item.title}
							color={item.color}
							vertical={true}
							avatarSize={55}
						/>
					</Col>
				)
			})}
		</Row>
	)
}

const Overall = () => {
	return (
		<>
			<DisplayDataSet />
		</>
	)
}

export default Overall
