/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import Header from '../Header/header'
import './home.css'
// import {Link} from 'react-router-dom'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
import ContactList from "../DetailFunction/contactList/contactlist";
import Detail from "../DetailFunction/contactInfo/contactinfo";
import _ from 'underscore'
import contactList from '../../common/dummyList'
import Add from "../DetailFunction/contactAdd/contactadd";
import Edit from "../DetailFunction/contactEdit/contactEdit";



export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            contactList:[],
            searchItem:'',
            list:null,
            complete:[],
            open:false,
            editDataContact:{},
            edit:false
        }
        this._handleSearchChange = this._handleSearchChange.bind(this)
        this.editData = this.editData.bind(this)
        this.openContact = this.openContact.bind(this)

    }

    getList(list){
        console.log(list,"list")
        this.setState({
            list:list,
            open:false,
            edit:false

        })
    }

    openContact(val){
        this.setState({
            open:val
        })
    }

    componentWillReceiveProps(newProps){

    }
    componentWillMount(){
        let data = contactList
        this.setState({
            contactList:data,
            complete:data

        })

    }
    removeItem(id){
        console.log(id,"id")
        let index = this.state.contactList.findIndex((o)=>{
            return o.id === id;
        })
         let newList = this.state.contactList.splice(index, 1);
        console.log(this.state.contactList,"del")
        this.setState({
            contactList:this.state.contactList,
            list:null
        })

    }
    _handleSearchChange(e){
        let contactListCopy = this.state.contactList;

        if(e.target.value===''){
            this.setState({
                contactList:this.state.complete,
                searchItem:e.target.value
            })
        }
        else{
            console.log(e.target.value,"eee")
            let list = _.filter(contactListCopy,(x)=>{return x.name.toLowerCase().includes(e.target.value)})
            console.log(list,"list")
            this.setState({
                contactList:list,
                searchItem:e.target.value
            })
        }

    }

    addData(open,data){
        let len = this.state.contactList.length;
        data['id']=len+1
        // console.log(data,"dddddd")
        let newList = this.state.contactList.concat(data)
        console.log(newList,'nl')
        this.setState({
            contactList:newList,
            open:open,
            edit: false
        })
    }
    updateContact(open,data){

        let newEditContact = this.state.contactList[data.id];
        newEditContact.id = data.id;
        newEditContact.name = data.name;
        newEditContact.email = data.email;
        newEditContact.phone = data.phone;
        newEditContact.url = data.url;
        newEditContact.notes = data.notes;
        this.setState({
            edit:open,
            contactList:this.state.contactList
        })

    }

    editData(open,data){

        this.setState({
            edit:open,

        },()=>{
            this.setState({
                open:false
            })
        })
        localStorage.setItem("editData",JSON.stringify(data))
    }


    render(){
        console.log(this.state.open,"open")
        return(
            <div>
                <Header/>
                <div className="container">
                    <div className="row panel panel-primary">
                        <div className="panel-heading">
                            <h2 className="panel-title">React contact list app</h2>
                        </div>

                        <div className="col-xs-12 col-md-5 col-sm-6 panel-body">
                            <ul className="list-group">
                                <li className="list-group-item"> <h4 className="heading_h4">Contacts </h4>

                                    <a className="text-center pull-right addbtn" onClick={()=>this.openContact(true)}>Add</a>

                                    <input className="form-control"
                                           value={this.state.searchItem}
                                           onChange={this._handleSearchChange}
                                           placeholder="Seach Your Contacts"
                                           type="text" />
                                        <ContactList getlist = {this.getList.bind(this)} list={this.state.contactList}/>
                                </li>
                            </ul>

                        </div>

                        <div className="col-xs-12 col-md-7 col-sm-6">
                            <div className="list-group panel-body">
                                {(this.state.list!==null && this.state.open===false && this.state.edit === false)?<Detail list={this.state.list} editData={this.editData.bind(this)} remove={this.removeItem.bind(this)}/>:
                                    <div>
                                        <div className="list-group-item text-center">Please select a contact to view</div>
                                    </div>}
                            </div>
                            <div className="list-group panel-body">
                                {this.state.open===true ? <Add addData={this.addData.bind(this)} /> : <div>{this.state.edit === true && <Edit updateContact={this.updateContact.bind(this)} /> }</div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {

    }
}


export default connect(mapStateToProps,actions)(Home);
