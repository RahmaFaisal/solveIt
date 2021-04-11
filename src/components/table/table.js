import React from 'react'
import { Table } from 'react-bootstrap'
import './table.style.css'

function table(props) {

    let { data } = props
    let tableContent = data.map(item => {
        let values = [];
        for (const key in item) {
            const element = item[key];
            values.push(element)
        }
        return (
            <tr className="trHeight" key={item.id} onClick={()=>props.onRowClick({extra:{"id":item.id},item:item})}>
                {
                    values.map((value, index) => {
                        
                        return (<td  key={index}>{value}</td>)
                    })
                }

            </tr>
        )

    });

    let tableHeaders = props.tableHeaders.map((value, index) => {
        return (<th   key={index}>{value}</th>)
    })

    return (
        <Table striped  hover className="mainContent">
            <thead>
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableContent}
            </tbody>
        </Table>
    )

}


export default table;