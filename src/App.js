import React from 'react'
import VerticalBarChart from './components/VerticalBarChart'
import HorizontalBarChart from "./components/HorizontalBarChart"
import LineChart from "./components/LineChart"
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <VerticalBarChart/>
      <HorizontalBarChart/>
      <LineChart/>
    </Layout>
  );
}

export default App;
