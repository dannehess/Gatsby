import React, {Component} from 'react'
import { Bar } from 'react-chartjs-2'

class Chartone extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Jimi Hendrix', 'Yngwie Malmsteen', 'Steve Vai', 'Slash', 'Jimmy Page', 'Eddie Van Halen'],
        datasets:[
          {
            label: 'Number of votes',
            data:[
              3061743,
              2554566,
              3023412,
              2623430,
              3606560,
              3002234
            ],
            backgroundColor:[
              '#5DADE2',
              '#48C9B0',
              '#F4D03F',
              '#E74C3C',
              '#5D6D7E',
              '#58D68D'
            ]
          }
        ]
      }
    }
  }

  render(){
    return (
      <div className="chart">
        <Bar
        data={this.state.chartData}
        width={100}
        height={50}
        options={{
          title:{
            display: true,
            text: 'Best guitarist of all time'
          }
        }}
        />
      </div>
    )
  }
}

export default Chartone;