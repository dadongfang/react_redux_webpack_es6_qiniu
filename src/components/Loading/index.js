import React from 'react'
import { Spin } from 'antd'

import './index.less'

export default function (props) {
  const { loading } = props
  return <div className="spin_wrapper" style={{ display: loading ? 'flex' : 'none' }}><Spin delay={1000} spinning={props.loading} /></div>
}
