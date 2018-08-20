import { PropTypes,Component }  from 'react'


export class  AddDayForm  extends Component{
       constructor(props){
           super(props)
           this.submit =this.submit.bind(this)
       }


submit(e){
    e.preventDefault()
    console.log('resort',this.refs.resort.value)
}

render(){

    const {resort,date,powder,backCounrty} =this.props
    return(
        <form  onSubmit={this.submit}className="add-day-form">
        <label  htmlFor="resort">ResortName</label>
          <input id="resort"  type="text" ref="resort" defaultValue={resort} required/>
          <label  htmlFor="date">Date</label>
          <input id="date"  type="date" defaultValue="date" required/>
          <div>
          <label  htmlFor="powder">isPowderDay</label>
          <input id="powder"  defaultChecked={powder}   type="checkbox"/>
          <label  htmlFor="backCountry">isBackcountryDay</label>
          <input id="backCountry"   type="checkbox"/>
          </div>
          <button>Add Day</button>
        </form>
    )
}}


AddDayForm.defaultProps={
    resort:"The Raintree",
    date:"05/10/1988",
    powder:"true",
    backCountry:false
}

AddDayForm.propTypes={
resort: PropTypes.string.isRequired,
date :PropTypes.string.isRequired,
powder: PropTypes.string.isRequired,
backCountry: PropTypes.bool.isRequired

}