import React from 'react'
import VerticalBarChart from './components/VerticalBarChart'
import HorizontalBarChart from "./components/HorizontalBarChart"
import LineChart from "./components/LineChart"
import StackedBarChart from "./components/StackedBarChart"
import StackedBarChartWithGroups from "./components/StackedBarChartWithGroups"
import Layout from './components/Layout'

function App() {
  const data = [50, 40, 30, 35, 40]
  const labels = [2017, 2018, 2019, 2020 ,2021]
  return (
    <Layout>
      <VerticalBarChart data={data} labels={labels}/>
      <HorizontalBarChart data={data} labels={labels}/>
      <LineChart data={data} labels={labels}/>
    </Layout>
  );
}

export default App;
