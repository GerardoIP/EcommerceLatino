import React, {Component} from "react";
import Chart from 'chart.js/auto';
import {Bar, Line, Pie} from "react-chartjs-2";

class GrafBrasil extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: [' '],
                datasets: [
                    {
                        label: '2019',
                        data:[17.2],
                        backgroundColor:[
                            'rgba(15, 94, 202)'
                        ]
                    },
                    {
                        label: '2024',
                        data: [30.0],
                        backgroundColor: 'rgba(202, 41, 15)',
                      },
                ]
            }
        }
    }


    
    render(){
        return (
            <div className="grafica">
                <Bar
                data={this.state.chartData}
                options={{
                    responsive: true,
                    plugins:{
                        title:{
                            display: true,
                            text:'Brasil',                                
                            font:{
                                size:20,
                                family: 'Rubik'
                            } 
                        },
                        legend:{
                            labels: {
                                display: true,
                                font: {
                                    size: 13
                                }
                            }
                        }
                    }
                    
                }}
                />
                
            </div>
        )
    }
}


export default GrafBrasil;