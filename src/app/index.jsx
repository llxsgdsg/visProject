import React, { Component } from 'react'
import './app.css'

import Right from '../components/right'
import Martix from '../components/matrix'
import Radar from '../components/radar'
import Control from '../components/control'
import Map from '../components/map'
import '../../node_modules/antd/dist/antd.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '为什么这样子',
    };
  }
  handleData = (data) => {
    // console.log('APP组件获取的数据：')
    // console.log(data);
    this.setState({
      data
    })
    // return data;
  }
  componentDidMount(){
    //
  }
  render () {
    return (
      <div className="row no-gutters" id='page'>
        <div className='col-md-10'>

          <div id='left-top' className='row no-gutters'>
            {/* step3 从control页面获取数据 */}
            <Control handleChildData={this.handleData} />
            <Map />
          </div>

          <div id='left-bottom' className='row no-gutters'>
            <Radar />
            {/* step4 将数据传给matrix组件,问题在于:step4在step3之前执行了*/}
            <Martix value={this.state.data}/>
          </div>
        </div>

        <div className='col-md-2'>
          <Right />
        </div>

      </div>
    )
  }
}
