import {render, screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EmployeeActivities } from '../features/EmployeeActivitiesView';
import { UserLoginPage } from '../routes/pages';
import { ProvideReactQueryService } from '../services/reactQueryService';


const UserLoginPageWrapper = ()  => (
    <ProvideReactQueryService>
    <BrowserRouter>
    <UserLoginPage/>
        </BrowserRouter>
        </ProvideReactQueryService>
)

const EmployeePageWrapper = ()  => (
    <ProvideReactQueryService>
    <BrowserRouter>
    <EmployeeActivities/>
        </BrowserRouter>
        </ProvideReactQueryService>
)

declare global {
    interface Window {
        _app: {
            [k: string]: unknown
        }
    }
}
window._app = window._app ?? {}

describe('Renders alle pages without crashing', () => { 
    it('renders UserLoginPage component', () => {
        render(< UserLoginPageWrapper /> );
    });
    it('renders EmployeeActivityView component', () => {
        render(< EmployeePageWrapper />);
    });
});