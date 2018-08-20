import { FaBeer } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'
import { PropTypes}  from 'react'

export const SkiDayRow=({resort,date,powder,backcountry})=>(
   <tr>
           <td>{date.getFullYear()}</td>
       <td>{resort}</td>
   
       <td>{(powder)=true?<FaBeer/ >:<FaBed/>}</td>
       <td>{backcountry==true?<FaBeer/ >:<FaBed/>}</td>
   </tr>
)

SkiDayRow.propTypes={
    resort:PropTypes.string.isRequired,
    date:PropTypes.instanceOf(Date).isRequired,
    powder:PropTypes.bool,
    backcountry:PropTypes.bool

}