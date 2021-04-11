import React ,{ Component } from 'react'
import Pagination from "rc-pagination";
import Table from '../table/table'
import './pag.style.css'

class DataPagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            currentData:[],
            countPerPage:5,
            currentPage:1,
            page:1
        }
    }

    updatePage(page)
    {
        
        let maxLimit=page*this.state.countPerPage>this.state.allData.length
        if(maxLimit)
        {  
            this.setState({currentPage:page},()=>this.requestData())
           
        }else{
            this.setState({currentPage:page},()=>this.getCurrentData())
            
        }
    }


    getCurrentData()
    { 
       console.log(this.state.currentPage)
       let end = this.state.countPerPage * this.state.currentPage;
       let start = end - this.state.countPerPage;
       let data=this.state.allData.slice(start,end)
       this.setState({currentData:data})
       console.log(this.state)
    
    }

    componentDidMount() {
      this.requestData()
    }

    requestData()
    {
        console.log(this.props)
        let requestParams={
            "number":this.state.page
        }
        if(this.props.id)
        {
            requestParams.id=this.props.id 
        }

        this.props.requestData(requestParams).then(data => {

            if( this.props.setMetaInfo)this.props.setMetaInfo(data.meta.pagination)
            console.log(data)
            let allData=this.props.mapData(data.data)
            allData=this.state.allData.concat(allData)
            this.setState({ allData: allData ,page:this.state.page+1})
            this.getCurrentData()
        })
    }

    handleSearch(e){

        if (e.key === 'Enter') {
            console.log(e.target.value)
            if(e.target.value){
                let filtered=this.state.currentData.filter((user=>user.name.includes(e.target.value)))
                console.log(filtered)
                this.setState({currentData:filtered})
            }
        }   
    }

    reset(e)
    {
       
        if(e.target.value=='')
        {
            this.getCurrentData()
        }
    }

    render() {
        return (
            <div className="mainContent">
              
              <h6>{this.props.title}</h6>
                <div className="searchDiv">
                {this.props.hasSearch &&<input type="text" id="lname" name="lname" onChange={this.reset.bind(this)}  onKeyDown={this.handleSearch.bind(this)}/>}
                {/* <div className="showNumber">
                    <p>showing {this.state.countPerPage} of {this.state.allData.length}  per page </p>
                </div> */}
                </div>
               
         
                <Table
                data={this.state.currentData} 
                tableHeaders={this.props.tableHeaders}
                onRowClick={this.props.onRowClick}
                />
               
                <Pagination     
                    pageSize={this.state.countPerPage}
                    onChange={(page)=>this.updatePage(page)}
                    current={this.state.currentPage}
                    total={this.state.allData.length+1}
                />
                <br/>           
            </div>
        )
    }
}

export default DataPagination;