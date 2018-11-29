import React, { Component } from 'react';

class TableDataRow extends Component {
//props.editFunClick


    deleteButtonClick=(idUser)=>{
        this.props.deleteButtonClick(idUser)
    }
    permissionShow=()=>{
        if (this.props.permission===1) {return "Admin"  }
        else if (this.props.permission===2) {return "Moderator"  }
        else {return "Normal User"  }
        
    }

    editClick=()=>{
        this.props.editFunClick()
        this.props.changeEditUserStatus()
    }
    render() {

        return (
    <tr>
        <td >{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning edit" onClick={()=>this.editClick()}><i className="fa fa-edit"> Edit</i></div>
            <div className="btn btn-danger delete"onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fa fa-edit"> Delete</i></div>
          </div>
        </td>
     </tr>
  
        );
    }
}

export default TableDataRow;