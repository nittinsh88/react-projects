
import { FaBeer } from 'react-icons/fa'
import {PropTypes}  from 'react'


const decimalToPercent=(decimal)=>{ return (decimal*100)+"%" }

const calGoalProgress=(goal,total)=> {return decimalToPercent(total/goal)}

export const SkiDayCountFn =({total=10,backcountry=10,goal=20,powder=5})=> (
        <div className="ski-day-count">
            <div className="total-days">
            <span>{total	}</span>
                <span> days</span>
                <FaBeer/>
            </div>
            <div className="powder-days">
            <span>{powder}</span>
                <span> days</span>
                
            </div>
            <div className="backcountry-days">
            <span>{backcountry}</span>
                <span> hiking day</span>
                <FaBeer/>
            </div>
            <div>
                
                <span>{calGoalProgress(total,goal)}</span>
                <span> goal in percentage</span>
            </div>
        </div>
    )

    SkiDayCountFn.defaultProps={
        total:50,
        backcountry:40,
        powder:10,
        goal:100
    }
    SkiDayCountFn.PropTypes={
        total:PropTypes.number,
        goal:PropTypes.number,
        powder:PropTypes.number,
        backcountry:PropTypes.number
    }

