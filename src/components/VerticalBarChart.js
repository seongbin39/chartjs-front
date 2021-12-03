import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function VerticalBarChart(){
    const canvasDom = useRef(null);
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d');
        const verticalBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [2017, 2018, 2019, 2020 ,2021],
                datasets: [
                    {
                      labels: "월별 버스 이용량 통계",
                      data: [1, 5, 10, 4, 2],
                      backgroundColor: "rgba(255, 0, 0, 0.3)",
                    },
                    {
                    labels: "월별 버스 이용량 통계",
                    data: [1, 5, 10, 4, 2],
                    backgroundColor: "rgba(0, 255, 0, 0.3)",
                    },
                    {
                    labels: "월별 버스 이용량 통계",
                    data: [1, 5, 10, 4, 2],
                    backgroundColor: "rgba(0, 0, 255, 0.3)",
                    }
            ]
            }
        })
        return () => {
            verticalBarChart.destroy()
          }
    }, [])
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}

export default VerticalBarChart