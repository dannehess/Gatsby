import React, {Component} from 'react'
import { Pie } from 'react-chartjs-2'

class Chartthree extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label: 'Population',
            data:[
              61743,
              234566,
              2123412,
              54343,
              54656,
              324234
            ],
            backgroundColor:[
              'black',
              'red',
              'blue',
              'green',
              'purple',
              'yellow'
            ]
          }
        ]
      }
    }
  }

  render(){
    return (
      <div className="chart">
        <Pie
        data={this.state.chartData}
        width={100}
        height={50}
        options={{
          title:{
            display: true,
            text: 'Largest cities in Massachussetts'
          }
        }}
        />

      </div>
    )
  }
}

export default Chartthree;