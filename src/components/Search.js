import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            userObj:{}
        }
    }

    getUserEditInfo=(info)=>{
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info)
        
    }
    //props.userEditObj

    //this.props.changeEditUserStatus

    isShowEditForm=()=> {
        if (this.props.editUserStatus) {
            return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
        }
    }

    isChange=(event)=>{
        
        this.setState(
            {tempValue : event.target.value}
        );
        this.props.getTextSearchProps(this.state.tempValue)
    }

    hienThiNut=()=>{
        if(this.props.hienthiForm) {
           return <div className="btn  btn-outline-secondary" onClick={()=>this.props.ketnoi()}>Close</div>
        }
        else {
            return  <div className="btn  btn-outline-success"onClick={()=>this.props.ketnoi()}>Add user</div>
        }
    }

    render() {
        return (
            <div className="col-md-12">

            {this.isShowEditForm()}
            
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhap tu khoa tim kiem" style={{width: 500}} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.getTextSearchProps(this.state.tempValue)}>Search</div>
                    </div>  
                    <div className="btn-group">
                        
                        {this.hienThiNut()}
                       
                    </div> 
                    <hr/>
                </div>
            </div>   
            
        );
    }
}

export default Search;