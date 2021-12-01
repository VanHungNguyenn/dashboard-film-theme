import React, { useState } from 'react'
import { Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function getBase64(img, callback) {
	const reader = new FileReader()
	reader.addEventListener('load', () => callback(reader.result))
	reader.readAsDataURL(img)
}

const Avatar = () => {
	const [state, setState] = useState([{ loading: false, imageUrl: '' }])

	const handleChange = (info) => {
		if (info.file.status === 'uploading') {
			setState({ loading: true })
			console.log(info)
			return
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			console.log(info)
			getBase64(info.file.originFileObj, (imageUrl) =>
				setState({
					imageUrl,
					loading: false,
				})
			)
		}
	}

	const uploadButton = (
		<div>
			{state.loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div className='ant-upload-text'>Upload</div>
		</div>
	)
	const { imageUrl } = state

	return (
		<Upload
			name='avatar'
			listType='picture-card'
			className='avatar-uploader'
			showUploadList={false}
			onChange={handleChange}
		>
			{imageUrl ? (
				<img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
			) : (
				uploadButton
			)}
		</Upload>
	)
}

export default Avatar
