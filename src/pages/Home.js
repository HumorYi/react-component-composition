import React, { Component } from 'react'
import Layout from './Layout'

export default class Home extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="商城首页">
        {{
          context: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: '这是个文本',
          btnText: 'home btn',
          btnClick: () => {
            console.log('home btn Click')
          }
        }}
      </Layout>
    )
  }
}
