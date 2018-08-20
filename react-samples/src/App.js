import {render}  from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'
import {SkiDayCountES6 } from './components/SkiDayCountES6'
import {SkiDayCountFn}  from './components/SkiDayCountStatlessFn'
import {SkiDayList} from './components/SkiDayList'


export const App =()=>(
    <div>
    <SkiDayCountFn/>
    <SkiDayList/>
    </div>

)