import React, {Component} from 'react'
import { Pie } from 'react-chartjs-2'

class Chartthree extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['JavaScript', 'Python', 'Java', 'C++', 'PHP', 'Ruby'],
        datasets:[
          {
            label: 'Population',
            data:[
              2123412,
              61743,
              234566,
              54343,
              54656,
              324234
            ],
            backgroundColor:[
              '#58D68D',
              '#5D6D7E',
              '#F4D03F',
              '#E74C3C',
              '#E25DC0',
              '#5DADE2'
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
            display: false,
            text: 'Most popular programminglanguages'
          }
        }}
        />

      </div>
    )
  }
}

export default Chartthree;