import React from "react"
import  styled  from '@emotion/styled';

export interface UserLoginProps {
    
}

const UserLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 280px;
    justify-content: center;
    align-items: center;
    
`
type userType = 'Employees' | "Managers"

const userTypes: userType[] = ['Employees', 'Managers'] 

const UserLoginComponent = (props: UserLoginProps) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    const [userType, setUserType] = React.useState<userType>(userTypes[0])

    
    const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(event.target.value as userType)
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }


    const handleLoggingIn = () => { 
        console.log("Logging in with username: ", username, " and password: ", password, " as ", userType)
    }


    return (
        <UserLoginContainer >
            <h1 className="text-center text-white">TimeEdit User-Login</h1>
            <select className="select select-bordered w-full max-w-xs" onChange={handleUserTypeChange}>
                {userTypes.map((userType) => (
                    <option key={userType} value={userType}>{userType}</option>
                ))}
            </select>
            <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Username" onChange={handleUsernameChange}/>
            <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Password" onChange={handlePasswordChange}/>
            <button className="btn btn-primary" onClick={handleLoggingIn}>Login</button>
        </UserLoginContainer>
    )
}

export const UserLogin = React.memo(UserLoginComponent)