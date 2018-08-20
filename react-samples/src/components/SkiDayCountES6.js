import React from 'react'
import {PropTypes}  from 'react'


export class SkiDayCountES6 extends React.Component{

    decimalToPercent(decimal){
        return ( (decimal*100)+"%")
    }

    calGoalProgress(total,goal){
        return(this.decimalToPercent((total/goal)))
    }
    
    render(){
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

}

SkiDayCountES6.defaultProps={
    total:50,
    backcountry:40,
    powder:10,
    goal:100
}

SkiDayCountES6.PropTypes={
    goal:PropTypes.number,
    total:PropTypes.number,
    powder:PropTypes.number,
    backCountry:PropTypes.number,


}