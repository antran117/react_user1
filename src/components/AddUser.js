import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
      super(props);
      this.state={
     
        id:'',
        name:'',
        tel:'',
        permission:''
      }
    }

    // thaydoiTrangThai=()=>{
    //   this.setState({
    //     editState: !this.state.editState
    //   });
    // }

    isChange=(event) => {
      const name=event.target.name;
      const value=event.target.value;
   
      this.setState({
        [name]:value
      });

      // var item={}
      // item.id=this.state.id;
      // item.name=this.state.name;
      // item.tel=this.state.tel;
      // item.permission=this.state.permission;

 
    }

    // hienthiNut=()=>{
    //   if (this.state.editState===true){
    //     return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.thaydoiTrangThai()}>Close</div>
    //   }
    //   else {
    //     return <div className="btn btn-block btn-outline-primary" onClick={()=>this.thaydoiTrangThai()}>Add user</div>
    //   }
    // }
    
    // searchForm=()=>{

    //   if (this.state.editState===true) {

     
    //   return (
    //     <div className="card border-primary mb-3 mt-2" >
    //     <div className="card-header">Add user</div>
    //     <div className="card-body text-primary">
    //       <div className="form-group">
    //         <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Username" />
    //       </div>
    //       <div className="form-group">
    //         <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Phone" />
    //       </div>
    //       <div className="form-group">
    //         <select className="custom-select" name="permission" required>
    //           <option value>Select permission</option>
    //           <option value={1}>Admin</option>
    //           <option value={2}>Moderate</option>
    //           <option value={3}>Normal</option>
    //         </select>
    //       </div>
    //       <div className="form-group">
    //         <div className="btn btn-block btn-primary">Add</div>  
    //       </div>
    //     </div>
    //   </div>    
    //   ) }    
    // }

    kiemtraForm=()=>{
      if (this.props.hienthiForm){
        return(

    <div className="col">
      <form>
          <div className="card border-primary mb-3 mt-2" >
        <div className="card-header">Add user</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control"  aria-describedby="helpId" placeholder="Phone" />
          </div>
          <div className="form-group">
            <select className="custom-select" name="permission" onChange={(event)=>this.isChange(event)} required>
              <option value>Select permission</option>
              <option value={1}>Admin</option>
              <option value={2}>Moderate</option>
              <option value={3}>Normal</option>
            </select>
          </div>
          <div className="form-group">
            <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission)=>this.props.add(this.state.name,this.state.tel,this.state.permission)} value="Add" />  
          </div>
        </div>
      </div>  
      </form>  
      </div>
        )
      }
    }

    render() {

        return (

          <div>
        {/* {this.hienthiNut()} */}
       {/* {this.searchForm()} */}
        {this.kiemtraForm()}
        
        </div>

        );
    }
}

export default AddUser;