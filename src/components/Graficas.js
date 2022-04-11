import React, { Component } from "react";
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from "react-chartjs-2";

class Graficas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Brasil', 'México', 'Colombia', 'Argentina', 'Perú', 'Resto de Latinoamérica y Caribe'],
                datasets: [
                    {
                        label: '2019',
                        data: [17.2, 14.3, 4.0, 4.0, 2.1, 8.4],
                        backgroundColor: [
                            'rgba(15, 94, 202)'
                        ]
                    },
                    {
                        label: '2024',
                        data: [30.0, 24.2, 7.8, 10.1, 4.7, 18.2],
                        backgroundColor: 'rgba(202, 41, 15)',
                    },
                ]
            }
        }
    }



    render() {
        return (
            <div className="grafica">
                <Bar
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Latinoamérica',                                
                                font:{
                                    size:20,
                                    family: 'Rubik'
                                } 
                            },
                            legend: {
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


export default Graficas;