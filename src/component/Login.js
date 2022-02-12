import React, { useState } from "react"

function Login(props) {
    const [userDetail, setuserDetail] = useState({
        email: "",
        password: ""

    })
    const login = (event) => {
        event.preventDefault()
        console.log(userDetail);
        if (userDetail.email && userDetail.password) {
            // programaticaly navigate
            console.log("props", props);
            props.history.push("./home")
        }
    }
    // const handleEmailChange = (event) => {
    //     console.log(event);
    //     console.log("name", event.target.name);
    //     console.log("value", event.target.value);
    //     //1- take copy of the state
    //     const userDetailCopy = { ...userDetail }
    //     userDetailCopy.email = event.target.value
    //     setuserDetail(userDetailCopy)
    // }


    // const handlepasswordChange = (event) => {
    //     // 1-take the copy of the state
    //     const userDetailCopy = { ...userDetail }
    //     userDetailCopy.password = event.target.value
    //     setuserDetail(userDetailCopy)
    // }

    // or

    const handleChange = (event) => {
        // 1-take the copy of the state
        console.log(event.target.name);
        const userDetailCopy = { ...userDetail }
        userDetailCopy[event.target.name] = event.target.value
        setuserDetail(userDetailCopy)
    }
    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input type="email" name="email" placeholder="write email"
                        onChange={(event) => { handleChange(event) }}
                        value={userDetail.email} />

                </div>
                <div>
                    <input type="password" name="password" placeholder="write password"
                        onChange={(event) => { handleChange(event) }}
                        value={userDetail.password} />

                </div>
                <div>
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
    )
}

export default Login
