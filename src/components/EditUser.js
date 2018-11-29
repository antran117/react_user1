import React, { Component } from 'react';

class EditUser extends Component {
    //this.props.userEditObject
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    
    //getUserEditInfo
    saveButton=()=>{
        var info={}
        info.id=this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.permission=this.state.permission

        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus()
    }
    isChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        this.setState({
            [name]:value
        });
    }
    
    render() {
        console.log (this.props.userEditObject.tel)
        return (
            <div className="row">

            <div className="col-12">
            <form>
                <div className="card text-white bg-warning mb-3 mt-2" >
                <div className="card-header text-center">Edit INFO</div>
                <div className="card-body text-primary">
                <div className="form-group">
                    <input type="text" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name"  className="form-control"  aria-describedby="helpId" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="text" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" className="form-control"  aria-describedby="helpId" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <select className="custom-select" onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission}  name="permission" required>
                    <option value>Select permission</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderate</option>
                    <option value={3}>Normal</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="button" className="btn btn-block btn-danger" onClick={()=>this.saveButton()} value="Save" />  
                </div>
                </div>
            </div>  
            </form>  
            </div>
        </div>  
        );
    }
}

export default EditUser;