import React, {Component} from 'react'
import { Line } from 'react-chartjs-2'

class Charttwo extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Lemmy Kilmister', 'Steve Harris', 'Cliff Burton', 'Nikki Sixx', 'Corey Parks', 'Ruyter Suys'],
        datasets:[
          {
            label: 'Population',
            data:[
              101743,
              2344566,
              212341,
              54343,
              54656,
              324234
            ],
            backgroundColor:[
              '#5D6D7E',
              '#48C9B0',
              '#E74C3C',
              '#58D68D',
              '#F4D03F',
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
      <Line
        data={this.state.chartData}
        width={100}
        height={50}
        options={{
          title:{
            display: false,
            text: 'Best bassist of all time'
          }
        }}
        />
      </div>
    )
  }
}

export default Charttwo;