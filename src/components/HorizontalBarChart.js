import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function HorizontalBarChart(){
    const canvasDom = useRef(null);
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d');
        const horizontalBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [19,20,21,22],
                datasets: [
                    {
                      data: [50, 40, 30, 35, 40],
                    }
                ]
            },
            options: {
              indexAxis: "y",
            }
        })
        return () => {
          horizontalBarChart.destroy()
        }
    }, [])
    return (
      <div>
        <canvas ref={canvasDom}></canvas>
      </div>
    )
}

export default HorizontalBarChart