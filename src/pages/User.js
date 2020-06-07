import React, { Component } from 'react'
import Layout from './Layout'

export default class User extends Component {
  render() {
    return (
      <Layout showTopBar={true} showBottomBar={true} title="商城首页">
        {{
          context: (
            <div>
              <h3>UserPage</h3>
            </div>
          ),
          txt: '这是个文本',
          btnText: 'user btn',
          btnClick: () => {
            console.log('user btn Click')
          }
        }}
      </Layout>
    )
  }
}
