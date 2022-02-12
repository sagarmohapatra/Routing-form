import React from 'react'
import { withRouter } from "react-router-dom"

function Test(props) {
    console.log("test props", props);
    const navigateTOLogin = () => {
        props.history.push("./login")
    }
    return (
        <div>
            Test Component
            <button onClick={() => { navigateTOLogin() }}>login</button>
        </div>
    )
}

export default withRouter(Test)
