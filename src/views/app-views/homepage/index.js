import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from 'components/shared-components/Loading'

const Homepage = ({ match }) => (
	<Suspense fallback={<Loading cover='content' />}>
		<Switch>
			<Route
				path={`${match.url}/overall`}
				component={lazy(() => import(`./overall`))}
			/>
			<Route
				path={`${match.url}/film`}
				component={lazy(() => import(`./film`))}
			/>
			<Route
				path={`${match.url}/list`}
				component={lazy(() => import(`./list`))}
			/>
			<Route
				path={`${match.url}/image`}
				component={lazy(() => import(`./image`))}
			/>
			<Route
				path={`${match.url}/ads`}
				component={lazy(() => import(`./ads`))}
			/>
			<Route
				path={`${match.url}/article`}
				component={lazy(() => import(`./article`))}
			/>
			<Route
				path={`${match.url}/video`}
				component={lazy(() => import(`./video`))}
			/>
			<Route
				path={`${match.url}/setting`}
				component={lazy(() => import(`./setting`))}
			/>
			<Redirect from={`${match.url}`} to={`${match.url}/overall`} />
		</Switch>
	</Suspense>
)

export default Homepage
