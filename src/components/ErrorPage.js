import React from 'react'
import { useRouteError} from 'react-router-dom'

function ErrorPage() {
  const { error } = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>
        404 Error Page
      </h1>
      <h2>
        error : {error.message}
      </h2>
    </div>

  )
}

export default ErrorPage