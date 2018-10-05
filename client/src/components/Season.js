import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
class Season extends Component {

  state = {
   chartData:{}
    
  };

  componentDidMount() {   
this.getDataFromDb();    
  }
  


getDataFromDb = () => {
    var x=[];
    var y=[];
    fetch("http://localhost:5000/api/matches")
      .then(data => data.json())
      .then(res => {
         for(var i=0;i<res.result2.length;i++)   { 
          x.push(res.result2[i]._id.season);
          y.push(res.result2[i].count);

        }
        this.setState({
          chartData: {
            labels: x,
            datasets: [
              {
                data: y,
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
                  "rgba(75, 192, 192)"
                ]
              }
            ]
          }
        });
          console.log(x);
         console.log(y);

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
                  text: "Matches played per year",
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
    

export default Season;