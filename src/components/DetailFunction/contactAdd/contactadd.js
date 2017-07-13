/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactadd.css'
// import member from '../../../static/images/member.jpg'

class Add extends Component{
    constructor(props){
        super(props);

        this.handelAdd = this.handelAdd.bind(this);

    }
e
    handelAdd (e) {
        e.preventDefault();

            let addNewContact = {
                name: this.refs['name'].value,
                email: this.refs['email'].value,
                phone: this.refs['phone'].value,
                url:this.refs['url'].value,
                notes:this.refs['note'].value
            }
            console.log(addNewContact,"new")

        this.props.addData(false,addNewContact);


    }

    render(){
        console.log(this.props);
        return(
            <div>
                <div>
                    <form onSubmit={this.handelAdd.bind(this)}>
                        <div className="list-group-item">

                            <div className="form-group">

                                <p><label>name: </label> <input id="name" className="form-control" type="text" ref='name' /> </p>
                                <p><label>email:</label> <input id="email" className="form-control" type="text" ref='email'/> </p>
                                <p><label>phone:</label> <input id="phone" className="form-control" type="number" ref='phone' /> </p>
                                <p><label>url:</label> <input id="url" className="form-control" type="text" ref='url'/> </p>
                                <p><label>notes:</label></p>
                                <textarea className="form-control" id="notes" rows="3" ref='note'></textarea>
                            </div>

                            <a>
                                <button className="btn btn-default">
                                    <span className="glyphicon glyphicon-ok"></span>
                                    <span> Add</span>
                                </button>
                            </a>
                        </div>

                    </form>

                    </div>
                </div>

        )
    }
}
export default Add

