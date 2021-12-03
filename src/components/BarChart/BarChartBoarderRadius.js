import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function BarChartBoarderRadius(props){
    const { data, labels } = props
    const canvasDom = useRef(null);
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d');
        const barChartBoarderRadius = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        labels: "월별 버스 이용량 통계",
                        data: data,
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                        borderRadius: 10,
                        borderSkipped: false,
                    },
                    {
                        labels: "월별 버스 이용량 통계",
                        data: data,
                        backgroundColor: "rgba(0, 255, 0, 0.3)",
                        borderRadius: 10,
                        borderSkipped: false,
                    },
                    {
                        labels: "월별 버스 이용량 통계",
                        data: data,
                        backgroundColor: "rgba(0, 0, 255, 0.3)",
                        borderRadius: 10,
                        borderSkipped: false,
                    }
            ]
            }
        })
        return () => {
            barChartBoarderRadius.destroy()
          }
    }, [])
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}

export default BarChartBoarderRadius