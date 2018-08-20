import {SkiDayRow} from './SkiDayRow'
import {PropTypes}  from 'react'


export const SkiDayList=({days})=>(
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>BackCountry</th>
            </tr>
            </thead>
            <tbody>
                {days.map((day,i)=> 
                     <SkiDayRow key={i} 
                date={day.date}
                            resort={day.resort}                            
                            powder={day.powder}
                            backcountry={day.backcountry }
                            />
                            
                )}
                {days.map((day,i)=> 
                <SkiDayRow key={i} 
                                           {...day}
                            />
                            
                
                
                           
                            
                )}
                </tbody>

    </table>
)


SkiDayList.propTypes ={
 days: function(props){
     if(!Array.isArray(props.days)){
         return new Error(
             "SkiDayList Should be an array"
         )}
         else if(!props.days.length){
             return new Error("SkiDayList must have at least one element")
         }else{
             return null;
         }
     
 }
}