import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

function FloatingBarChart(props){
    const { data, labels } = props
    const canvasDom = useRef(null);

    const testArray = [1, 2, 3, 4, 5];
    const mappedArray = testArray.map((number) => {
        return number +1
    })
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d');
        const floatingBarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data.map(() => {
                            return [100, -100]
                        }),
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                    },
                    {
                        data: data.map(() => {
                            return [100, -100]
                        }),
                        backgroundColor: "rgba(0, 255, 0, 0.3)",
                    },
                    {
                        data: data.map(() => {
                            return [100, -100]
                        }),
                        backgroundColor: "rgba(0, 0, 255, 0.3)",
                    }
            ]
            }
        })
        return () => {
            floatingBarChart.destroy()
          }
    }, [])
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}

export default FloatingBarChart