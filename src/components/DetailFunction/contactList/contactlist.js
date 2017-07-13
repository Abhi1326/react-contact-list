/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactlist.css'
import contactList from '../../../common/dummyList'

class ContactList extends Component{
    constructor(props){
        super(props)

        this.setData = this.setData.bind(this)

    }


    setData(data){
       this.props.getlist(data);
    }

    render(){
        console.log(this.props.list,"lllllllllll")

        return(
            <div>

                    <ul>
                        {this.props.list.map((list,i)=>(
                           <li key={i} onClick={()=>this.setData(list)}>{list.name}</li>
                        ))}
                    </ul>

            </div>
        )
    }
}
export default  ContactList
