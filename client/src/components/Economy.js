import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
class Economy extends Component {

  state = {
   chartData:{}
    
  };

  componentDidMount() {   
this.getDataFromDb4();    
  }
  


  getDataFromDb4 = () => {
              var x1=[];
              var y1=[];
              fetch("http://localhost:5000/api/deliveries1")
                .then(data => data.json())
                .then(res => {
                   for(var i=0;i<res.length;i++)   { 
                    x1.push(res[i]._id.bowler);
                    y1.push(res[i].count);
      
                  }
                  this.setState({
                    chartData: {
                      labels: x1,
                      datasets: [
                        {
                          
                          data: y1,
                          backgroundColor: [
                            "rgba(255, 99, 132)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)",
                            "rgba(255, 159, 64)",
                            "rgba(255, 99, 132)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(255, 99, 132)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(75, 192, 192)",
                            "rgba(153, 102, 255)"
                          ]
                        }
                      ]
                    }
                  });
                    console.log(x1);
                    console.log(y1);
      
                });
              }
          

    render() {
    
  
        return (
          
          <div className="App">
                
            <Bar
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: "Best economy bowlers",
                  fontSize:30
                },
                legend:{
                  display:false,
                  position:"right"
                }
              }}
            />
    
    
           
             
          </div>
        );
      }
    }
    

export default Economy;