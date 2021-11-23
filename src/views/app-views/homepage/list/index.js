import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Category from './category'
import Country from './country'
import Actor from './actor'
import Director from './director'
import Tags from './tags'
import Server from './server'

const List = (props) => {
	const { match } = props

	return (
		<Switch>
			<Redirect
				exact
				from={`${match.url}`}
				to={`${match.url}/category`}
			/>
			<Route path={`${match.url}/category`} component={Category} />
			<Route path={`${match.url}/country`} component={Country} />
			<Route path={`${match.url}/actor`} component={Actor} />
			<Route path={`${match.url}/director`} component={Director} />
			<Route path={`${match.url}/tags`} component={Tags} />
			<Route path={`${match.url}/server`} component={Server} />
		</Switch>
	)
}

export default List
