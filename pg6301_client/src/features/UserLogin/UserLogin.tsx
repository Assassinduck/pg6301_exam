import React from "react"
import  styled  from '@emotion/styled';
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()
    const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserType(event.target.value as userType)
    }

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }


    const handleNavigateToEmployee = () => { 
        navigate("/employee")
    }

    const handleNavigateToManager = () => { 
        navigate("/manager")
    }


    return (
        <UserLoginContainer >
            <h1 className="text-center text-white">TimeEdit User-Login</h1>

            <button className="btn btn-primary" onClick={handleNavigateToEmployee}>Login as employee</button>
            <button className="btn btn-primary" onClick={handleNavigateToManager}>Login as Manager</button>

        </UserLoginContainer>
    )
}

export const UserLogin = React.memo(UserLoginComponent)