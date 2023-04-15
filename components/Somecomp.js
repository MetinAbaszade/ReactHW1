import React from 'react'
import Anothercomp from './Anothercomp'

export default function Somecomp({id, children}) {
    // const {p} = props
    return (
        <div>
            {/* {props.p}
            <br/>
            {p} */}

            <Anothercomp id={id}/>
            {children}
        </div>
    )
}
