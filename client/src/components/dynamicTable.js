import {useEffect} from "react";

function dynamicTable(props)
{
    const array=props.gymData;
    const column = Object.keys(array[0])
    const thData = () => {
        return column.map((data)=> {
            return <th key = {data}>{data}</th>
        })
    }

    const tdData = () =>
    {
        return array.map((data)=>{
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
       <tr>{thData()}</tr>
      </thead>
      <tbody>
      {tdData()}
      </tbody>
     </table>
)
}
export default dynamicTable;