import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

const index = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="testing" />
        <title>Index</title>
      </Helmet>
      <div>Index</div>
    </Fragment>
  )
}

export default index
