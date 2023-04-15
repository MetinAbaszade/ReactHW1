import React from 'react'

export default function DecrementButton({setId, id}) {
  return (
    <button onClick={() => setId(id - 1)}>-</button>
  )
}
