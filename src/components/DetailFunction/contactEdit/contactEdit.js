/**
 * Created by manish on 13/7/17.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './contactEdit.css'
// import member from '../../../static/images/member.jpg'



class Edit extends Component{
    constructor(props){
        super(props);
        this.handelEdit = this.handelEdit.bind(this);

    }

    componentWillMount(){
        this.setState({
            data:JSON.parse(localStorage.getItem("editData"))
        })

    }


    handelEdit (e) {

        e.preventDefault();
        let nameValue='';
        let emailValue='';
        let phoneValue='';
        let urlValue='';
        let notesValue='';

        if(this.refs['name'].value === ''){
             nameValue=this.state.data.name
        }else{
            nameValue=this.refs['name'].value
        }
        if(this.refs['email'].value === ''){
            emailValue=this.state.data.email
        }else{
            emailValue=this.refs['email'].value
        }
        if(this.refs['phone'].value === ''){
            phoneValue=this.state.data.phone
        }else{
            phoneValue=this.refs['phone'].value
        }
        if(this.refs['url'].value === ''){
            urlValue=this.state.data.url
        }else{
            urlValue=this.refs['url'].value
        }
        if(this.refs['notes'].value ===''){
            notesValue=this.state.data.notes
        }else{
            notesValue=this.refs['notes'].value
        }

        let editContact = {
            id:this.state.data.id,
            name: nameValue ,
            email: emailValue,
            phone: phoneValue,
            url:urlValue,
            notes:notesValue
        }

        this.props.updateContact(false,editContact);
    }


    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.handelEdit.bind(this)}>
                        <div className="list-group-item">

                            <div className="form-group">

                                <p><label>name:</label> <input id="name" placeholder={this.state.data.name} className="form-control" type="text" ref='name' /> </p>
                                <p><label>email:</label> <input id="email" placeholder={this.state.data.email}  className="form-control" type="text" ref='email'/> </p>
                                <p><label>phone:</label> <input id="phone" placeholder={this.state.data.phone} className="form-control" type="number" ref='phone' /> </p>
                                <p><label>url:</label> <input id="url" placeholder={this.state.data.url} className="form-control" type="text" ref='url'/> </p>
                                <p><label>notes:</label></p>
                                <textarea placeholder={this.state.data.notes}  className="form-control" id="notes" rows="3" ref='notes'></textarea>
                            </div>

                            <a>
                                <button className="btn btn-default">
                                    <span className="glyphicon glyphicon-ok"></span>
                                    <span> Edit</span>
                                </button>
                            </a>
                        </div>

                    </form>

                </div>
            </div>

        )
    }
}
export default Edit

