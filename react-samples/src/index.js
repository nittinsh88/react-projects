import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount-createClass'
import {SkiDayCountES6 } from './components/SkiDayCountES6'
import {SkiDayCountFn}  from './components/SkiDayCountStatlessFn'
import {SkiDayList} from './components/SkiDayList'
import {App} from './components/App'
import {Whoops404}  from './components/Whoops404'
import {Router,Route,Switch } from 'react-router'
import {AddDayForm}  from './components/AddDayForm'

window.React = React

render(
	<div>
{/* <Router >
<Switch>
<Route  path="/"  component={App}/>>
<Route  path="/users" component={Whoops404}/> 
</Switch>
</	Router> */}
<AddDayForm/>
</div>


	,document.getElementById("react-container")

)


// render(<div><SkiDayCountFn	total={50} powder={50} goal={100} backcountry={5} />
// 	<SkiDayList days={
// 		[
// 			{
// 				resort:"The RainTree",
// 				date:new Date("10/02/1988"),
// 				powder:true,
// 				backcountry:true
// 			},{
// 				resort:"Le Royal",
// 				date:new Date("10/03/1988"),
// 				powder:true,
// 				backcountry:false
// 			},{
// 				resort:"The Ginger",
// 				date:new Date("10/03/1988"),
// 				powder:false,
// 				backcountry:false
// 			}
// 		]
// 	}/></div>,
// 	document.getElementById('react-container')
// )