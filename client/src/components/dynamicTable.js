import { useEffect } from "react";
function DynamicTable({userData}){
// get table column
var column;
var ThData;
var tdData;

if(userData[0])
{
     column = Object.keys(userData[0]);
      ThData =()=>{
    
        return column.map((data)=>{
            return <th key={data}>{data}</th>
        })
    }
   // get table row data
    tdData =() =>{
      
        return userData.map((data)=>{
          return(
              <tr>
                   {
                      column.map((v)=>{
                          return <td>{data[v]}</td>
                      })
                   }
              </tr>
          )
        })
   }
   return (
    <table className="table">
      <thead>
       <tr>{ThData()}</tr>
      </thead>
      <tbody>
      {tdData()}
      </tbody>
     </table>
)
}

}
export default DynamicTable;