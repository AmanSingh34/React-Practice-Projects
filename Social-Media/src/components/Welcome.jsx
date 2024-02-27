import React from 'react'

function Welcome({getPosts}) {

  return (
    <center className='welcome'>
        <h1>There are no Posts</h1>
        <button type="button" className="btn btn-primary"
        onClick={getPosts}
        >Click To Fetch Posts</button>
    </center>
  )
}

export default Welcome