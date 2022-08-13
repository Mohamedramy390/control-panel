import { Chart } from 'chart.js';
import '../../../node_modules/chart.js/dist/chart.js';
import { Line } from '../../../node_modules/chart.js/dist/chart.js';

const canvas = document.getElementById('chart')
const data= JSON.parse(canvas.parentElement.dataset.values);
const colorBrand = (window.getComputedStyle(canvas)).getPropertyValue('--color-brand');
const chart = new Chart(canvas, {
    type:"line",
    data:{
        labels: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        datasets:[{
            labels : "البيعات",
            data: data,
            borderColor:colorBrand,
            backgroundColor:"transparent",
            lineTension:0.2,
        }]
    },
    options:{
        legend:{
            display: false
        },
        scales:{
            yAxes:[{
                display: false
            }],
            xAxes:[{
                position: "top"
            }],
        }

    }
})

const navigation= document.querySelector(".c-table__navigation");
const randomArray= (mylength, max) => Array.from({length: mylength}, () => Math.round(Math.random()*max));
navigation.addEventListener("click", () => {
    chart.data.datasets[0].data= randomArray(12, 1200);
    chart.update();
})
(function(){
    
}) ();