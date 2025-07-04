// // 1) Normal code => [INSPECT => LIGHTHOUSE SCORE 76%]
// import React, { useState } from 'react'
// import User from './User'

// function App() {
// const [load, setLoad] = useState(false)
//   return (
//     <div>
//       <h1>Lazy loading</h1>
//       <button onClick={() => setLoad(true)}>Load user</button>
//       {load ? <User /> : null}
//     </div>
//   )
// }
// export default App



// **2) Performance optmized code! => [INSPECT => LIGHTHOUSE SCORE 82%]
import React, { lazy, Suspense, useState } from 'react'
const User = lazy(() => import('./User'))

function App() {
const [load, setLoad] = useState(false)

  return (
    <div>
      <h1>Lazy loading</h1>
      <button onClick={() => setLoad(true)}>Load user</button>
      {load ? <Suspense fallback={<h3>loding...</h3>}><User /></Suspense> : null}

    </div>
  )
}
export default App