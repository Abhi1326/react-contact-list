/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactinfo.css'

class Detail extends Component{

    constructor(props){
        super(props)
        this.state = {
            edit:false
        }
        this.removeItem = this.removeItem.bind(this)
        this.edit = this.edit.bind(this)
    }

    removeItem(id){
        console.log('click')
        this.props.remove(id);
    }
    edit(val){
        this.props.editData(true,val)
    }

    render(){
        return(
            <div>
                <div>
                    <div>
                        <div className="list-group-item text-center">Please select a contact to view</div>
                    </div>

                    <div className="list-group-item">
                        <h3 className="text-center">{this.props.list.name}</h3>
                        <p className="infotitle"><span>Email</span>: <a>{this.props.list.email}</a></p>
                        <p className="infotitle"><span>Phone </span>: {this.props.list.phone}</p>
                        <p className="infotitle"><span>URL </span>: <a>{this.props.list.url}</a></p>
                        <p className="infotitle"><span>Notes</span>: {this.props.list.notes}</p>


                        <a>
                            <button className="btn btn-default btnaction" onClick={()=>this.edit(this.props.list)}>
                                <span className="glyphicon glyphicon-pencil" ></span><span>  Edit</span>
                            </button>
                        </a>

                        <a><button className="btn btn-default btnaction" onClick={()=>this.removeItem(this.props.list.id)}>
                            <span className="glyphicon glyphicon-remove" ></span><span>  Remove</span>
                        </button>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}
export default Detail

