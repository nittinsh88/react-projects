import {createClass,Component} from 'react'
import {SkiDayList}  from './SkiDayList'
import {SkiDayCountFn}  from './SkiDayCountStatlessFn'


export class App extends Component{
   constructor(props){
       super(props)
       this.state= {        allSkiDays : [
                        {
                            resort:"The RainTree",
                            date:new Date("10/02/1988"),
                            powder:true,
                            backcountry:true
                        },{
                            resort:"Le Royal",
                            date:new Date("10/03/1988"),
                            powder:true,
                            backcountry:false
                        },{
                            resort:"The Ginger",
                            date:new Date("10/03/1988"),
                            powder:false,
                            backcountry:false
                        }
                    ]
                }
   }

   

countDays(filter){
return this.state.allSkiDays.filter(function(day){
    if(filter){
        return day[filter]
    }else{
                return day
    }
}).length
}

    render (){
        return (
            <div className="app">
            <SkiDayList days={this.state.allSkiDays}/>

       <SkiDayCountFn total={this.countDays()}
                       powder={this.countDays("powder")}
                       backcountry={this.countDays("backCountry")}/>  
            </div>
        )
    }
}