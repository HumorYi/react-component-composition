import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'

export default class Layout extends Component {
  componentDidMount() {
    const { title = '商城' } = this.props
    document.title = title
  }

  render() {
    const {
      children: { content, txt, btnText, btnClick },
      showTopBar,
      showBottomBar
    } = this.props

    return (
      <div>
        {showTopBar && <TopBar />}
        {content}
        {txt}
        <button onClick={btnClick}>{btnText}</button>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}
