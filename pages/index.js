import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { withPageRouter } from '../components/withPageRouter'
import { DatePicker, Table, Divider, Tag } from "antd"
import Layout from '../components/Layout'

// import { KEY } from 'babel-dotenv'

// dotenv.config()

// const Index = () => (
//   <div>
//     <p>Hello Next.js</p>
//     <DatePicker />
//   </div>
// )

const { Column, ColumnGroup } = Table;


// const fetcher = async (url, key) => {
//   const result = await fetch(url, {
//     method: "GET",
//     headers: {
//       '...' : '...'
//     }
//   })
  
//   const prime = await result.json()
//   console.log("api call: " + url);
//   // console.log("SearchResult:")
//   const { SearchResult: { SearchResultItems } } = prime
//   // console.log(SearchResultItems)
//   return SearchResultItems.map(({ MatchedObjectDescriptor }, idx) => {
//     const {
//       ApplicationCloseDate,
//       ApplyURI: [ applyLink ],
//       DepartmentName,
//       JobCategory: [ { Name: catagory } ],
//       OrganizationName,
//       PositionEndDate: applyBy,
//       PositionLocation: [ { CityName, CountryCode, CountrySubDivisionCode, Latitude, LocationName, Longitude } ],
//       PositionOfferingType: [ { Name : appointmentType } ],
//       PositionRemuneration: [ { MinimumRange: minPay, MaximumRange: maxPay, RateIntervalCode: per} ],
//       PositionTitle,
//       PositionURI
//     } = MatchedObjectDescriptor
//     return {
//       key: idx,
//       positionTitle: PositionTitle,
//       deadline: applyBy,
//       location: LocationName,
//       tags: DepartmentName,
//       link: applyLink,
//       payRange: `$${Number(minPay).toFixed(0)} to $${Number(maxPay).toFixed(0)} ${per}`
//     }
//   }) // summaries is an object
// }

// console.log(data)

const data = [
  {
    key: '1',
    positionTitle: 'John',
    deadline: 'Brown',
    age: 32,
    location: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    positionTitle: 'Jim',
    deadline: 'Green',
    age: 42,
    location: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    positionTitle: 'Joe',
    deadline: 'Black',
    age: 32,
    location: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Index = ({ router: { query: { key } } }) => {
  
  // const [ data, setData ] = useState([])
  
  // WARNING IN CONSOLE:
  // useEffect(async () => {
  //   const res = await fetcher("url")
  //   setData(res)
  // }, [])

  // useEffect(() => {
  //   const fetchData = async ( key ) => {
  //     const res = await fetcher("url", key)
  //     setData(res)
  //   }
  //   fetchData(key)
  // }, [])
  return (
    <div className="container">
       <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Roboto+Mono|Source+Sans+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        something here
      </Layout>

    </div>
  )
}

Index.getInitialProps
// const Index = fetcher("url").then(r => tabular(r))

export default withPageRouter(Index)