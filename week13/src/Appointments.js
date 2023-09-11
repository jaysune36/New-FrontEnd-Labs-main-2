import React from "react";  

export default class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.customersArray = props.customers
    console.log(this.customersArray)
  } 

  render() {

    let customersTable = this.customersArray.map((customer, index)=> {
      return <tr key={index}>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.appointmentTime}</td>
        </tr>
    })

    return(
      <div>
        <table>
          <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Appointment Time</td>
              </tr>
          </thead>
          <tbody>
              {customersTable}
          </tbody>
        </table>
      </div>
    )
  }
}