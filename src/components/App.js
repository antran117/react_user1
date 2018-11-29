import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './data.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      hienthiForm:false,
      data: [],
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {

    if (localStorage.getItem('userData') == null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else {
      var tempa=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:tempa
      });

    }
  }
  

  deleteButtonClick=(idUser)=>{
      console.log(idUser)

      var tempData=this.state.data.filter(item => item.id!== idUser)
      this.setState({
        data:tempData
      });
      // DAY VAO DU LIEU  
      localStorage.setItem('userData',JSON.stringify(tempData))
  }

  getUserEditInfoApp=(info)=>{
    console.log('thong tin da sua' +info.name)
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id) {
        value.name=info.name
        value.tel=info.tel
        value.permission=info.permission
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  changeEditUserStatus=()=>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }


  editUser=(user)=>{
    console.log('ket noi thanh cong')
  
    this.setState({
      userEditObject:user
    });
    console.log(user)
  }

  getNewUserData=(name,tel,permission)=>{
    console.log('ket noi thanh cong')

    var item={}
    item.id=''
    item.name=name
    item.tel=tel
    item.permission=permission

    var items=this.state.data
    items.push(item)
    console.log(items)
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items))
  }
  getTextSearch=(dl)=>{
   
    this.setState({
      searchText:dl
    });

  }
  

  thaydoiTrangthai=()=>{
    this.setState({
      hienthiForm: !this.state.hienthiForm
    });
  }


  render() {
    // localStorage.setItem("userData",JSON.stringify(DataUser))


    var ketqua=[]
   this.state.data.forEach((item)=>{

      if(item.name.indexOf(this.state.searchText) !== -1) {
          ketqua.push(item)
      }

    })



    return (
        <div>
          <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search 
                getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                editUserStatus={this.state.editUserStatus} 
                changeEditUserStatus={()=>this.changeEditUserStatus()}
                ketnoi={()=>this.thaydoiTrangthai()} hienthiForm={this.state.hienthiForm} getTextSearchProps={(dl)=>this.getTextSearch(dl)}/>
                <TableData 
                deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
                changeEditUserStatus={()=>this.changeEditUserStatus()}
                dulieu={ketqua}
                editFun={(user)=>this.editUser(user)} />
                <AddUser hienthiForm={this.state.hienthiForm} add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
