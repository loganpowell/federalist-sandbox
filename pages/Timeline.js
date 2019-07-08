import { Timeline } from 'antd';
import Layout from '../components/Layout'

const Schedule = props => {

  return (
    <Layout>
      <Timeline style={{padding: 20, fontFamily: "Merriweather"}}>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Layout>
  )
}

export default Schedule