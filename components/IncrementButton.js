import React from 'react'

export default function IncrementButton({setId, id, children}) {
  return (
    <button onClick={() => setId(id + 1)}>{children}</button>
  )
}
