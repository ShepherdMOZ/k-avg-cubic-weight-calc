import React, { Component } from 'react'
import { Jumbotron} from 'reactstrap'


export default class MainJumbotron extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1 className="display-3">G'day!</h1>
            <p className="lead">Developed by Le(Josh). Lu, built on React.JS + Bootstrap 4</p>
            <hr className="my-2" />
            <p>To get the average cubic weight, paste the Url of API to the input field below and click 'Calc!'. Here is the sample: http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1</p>
        </Jumbotron>
      </div>
    )
  }
}
