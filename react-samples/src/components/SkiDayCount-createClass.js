import React from 'react'
import {PropTypes} from 'react'
//import '../stylesheets/ui.scss'

export const SkiDayCount = React.createClass({
	propTypes:{
		total:PropTypes.number,
		powder:PropTypes.number,
		backCountry:PropTypes.number,

	},
	getDefaultProps(){
		return{
			total:50,
			powder:10,
			backcountry:15,
			goal:100
		}
	},
decimalToPercent(decimal){
	return ( (decimal*100)+"%")
},
calGoalProgress(total,goal){
	return(this.decimalToPercent((total/goal)))
},

	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
				<span>{this.props.total	}</span>
					<span> days</span>
				</div>
				<div className="powder-days">
				<span>{this.props.powder}</span>
					<span> days</span>
				</div>
				<div className="backcountry-days">
				<span>{this.props.backcountry}</span>
					<span> hiking day</span>
				</div>
				<div>
					
					<span>{this.calGoalProgress(this.props.total,this.props.goal)}</span>
					<span> goal in percentage</span>
				</div>
			</div>
		)
	}
})