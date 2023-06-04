import React from 'react'
import './Table.css'
const Table = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table id='tableData' className='flex-container'>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Cdang</td>
          <td>Mexico</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Ernst dandel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
          <td>Points</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
