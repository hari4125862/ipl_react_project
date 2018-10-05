import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
class Winner extends Component {

  state = {
   chartData:{}
    
  };

  componentDidMount() {   
this.getDataFromDb2();    
  }
  


  getDataFromDb2 = () => {
          var x1=[];
          var y1=[];
          var z1=[]
          fetch("http://localhost:5000/api/matches1")
            .then(data => data.json())
            .then(res => {
               for(var i=0;i<res.result2.length;i++)   { 
                x1.push(res.result2[i]._id.winner);
                y1.push(res.result2[i].count);
                z1.push(res.result2[i]._id.season);
    
              }
              

            //     var assoc = [];
            //   for(var i1=0; i1<z1.length; i1++) {
            //     assoc[z1[i1]] = y1[i1];
                

            // }
            // console.log(assoc);
            console.log(z1);
            console.log(y1);
            
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
                // console.log(x1);
                // console.log(y1);
                // console.log(z1);
    
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
                  text: "Winners per year",
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
    

export default Winner;