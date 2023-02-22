import {render, screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserLoginPage } from '../routes/pages';


describe('App', () => { 
    it('renders UserLoginPage component', () => {
        render(< UserLoginPage />, {wrapper: BrowserRouter});
        
    });
});