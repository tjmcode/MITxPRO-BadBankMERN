// #region  H E A D E R
// <copyright file="index.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Bad Bank React App
 *      Module:   Modules (./index.js)
 *      Project:  MicroCODE Bad Bank React App
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     June 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Bad Bank React App Entry Point.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      ---------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  03-Jun-2022   TJM-MCODE  {0001}    New module implementing the Bad Bank App Entry.
 *
 *
 */

// #endregion
// #endregion
// #endregion

// #region  I M P O R T S

import React, {useContext} from 'react';

import {HashRouter, Routes, Route} from 'react-router-dom';

import {AppContext} from './components/AppContext';

import NavBar from './components/NavBar';
import Account from './components/Account';
import AllData from './components/AllData';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Withdraw from './components/Withdraw';

import './App.css';

// #endregion

// #region  J A V A S C R I P T

// #region  F U N C T I O N S

// #endregion

// #region  C O N S T A N T S

// #endregion

// #region  P R I V A T E   F I E L D S

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  C O M P O N E N T – P U B L I C

// #endregion

// #region  C O M P O N E N T S

/**
 * App() – Bad Bank's Single Page App (SPA).
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      App();
 *
 */
function App()
{
    // validate PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // #region  P R I V A T E   F U N C T I O N S

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <>
            <HashRouter>

                <NavBar />

                <div className="container" style={{padding: "20px"}}>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/Account/" element={<Account />}></Route>
                        <Route path="/Login/" element={<Login />}></Route>
                        <Route path="/Deposit/" element={<Deposit />}></Route>
                        <Route path="/Withdraw/" element={<Withdraw />}></Route>
                        <Route path="/AllData/" element={<AllData />}></Route>
                    </Routes>
                </div>

                <p>{ctx.Version}</p>

            </HashRouter>
        </>
    );
}

// #endregion
// #endregion

// #region  C O M P O N E N T - E X P O R T S

export default App;

// #endregion