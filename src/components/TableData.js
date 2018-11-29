import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

class TableData extends Component {
    //this.props.editFun

    deleteButtonClick=(idUser)=>{
      this.props.deleteButtonClick(idUser)

      
    }

    mappingDataUser=()=> this.props.dulieu.map((value,key)=>(
      
      <TableDataRow 
      deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
      changeEditUserStatus={()=>this.props.changeEditUserStatus()}
      editFunClick={(user)=>this.props.editFun(value)}
       userName={value.name} id={value.id} key={key} stt={key} tel={value.tel} permission={value.permission}></TableDataRow>
    )
    )
     

    render() {

      console.log(this.props.dulieu)
        return (
<div className="col">
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Phone</th>
        <th>Permission</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
          {this.mappingDataUser()}
    
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;