import { Timeline } from 'antd';
import Layout from '../components/Layout'

const Schedule = props => {

  return (
    <Layout>
      <Timeline style={{padding: 20, fontFamily: "Merriweather"}}>
        <Timeline.Item color="green">November 22, 2010: 2010 Redistricting TIGER/Line Shapefiles begins</Timeline.Item>
        <Timeline.Item color="red">January 30, 2011: 2010 Redistricting TIGER/Line Shapefiles ends</Timeline.Item>
        <Timeline.Item color="green">February 2, 2011: P.L. 94-171 Redistricting Data Summary Files begins</Timeline.Item>
        <Timeline.Item color="green">February 14, 2011: P.L. 94-171 Map Series and Block Assignment Files begins</Timeline.Item>
        <Timeline.Item color="red">February 26, 2011: P.L. 94-171 Map Series and Block Assignment Files ends</Timeline.Item>
        <Timeline.Item color="red">March 31, 2011: P.L. 94-171 Redistricting Data Summary Files ends</Timeline.Item>
      </Timeline>
    </Layout>
  )
}

export default Schedule