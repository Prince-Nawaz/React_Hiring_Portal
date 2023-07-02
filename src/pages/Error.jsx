import React, { useState } from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Switch from 'react-switch';
import Card from '../components/UI/Card';

const Error = () => {
    const errorData = useRouteError();
    const [theme, setTheme] = useState('light');
    const onChangeTheme = () => {
        setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
    };
    console.log(errorData);
    let title = 'An error has occurred';
    let message = 'Something went wrong';
    if (errorData.status === 500) {
        // message = JSON.parse(errorData.data).message;
        message = errorData.data.message;
    }
    if (errorData.status === 404) {
        title = 'Page not found';
        message = 'Sorry, we could not find the page you were looking for.';
    }
    return (
        <>
            <MainNavigation theme={theme}>
                <label htmlFor='material-switch'>
                    <span>Light </span>
                    <Switch
                        onChange={onChangeTheme}
                        checked={theme === 'dark'}
                        className='react-switch'
                        onColor='#86d3ff'
                        onHandleColor='#2693e6'
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                        height={20}
                        width={48}
                        id='material-switch'
                    />
                    <span>Dark</span>
                </label>
            </MainNavigation>
            <main id={theme}>
                <Card>
                    {' '}
                    <h2>{title}</h2>
                    <p>{message}</p>
                </Card>
            </main>
        </>
    );
};

export default Error;
