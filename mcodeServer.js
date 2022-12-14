// <copyright file="mcodeServer.js" company="MicroCODE Incorporated">Copyright © 2021 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>

/*
 *      Title:    MicroCODE Common Server Function Library
 *      Module:   modules (MicroCODE:mcodeServer.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     January 2022
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
 *      This module implements the MicroCODE's Common JavaScript Server/Back-End functions.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *
 *      VIDEOS:
 *      -------
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
 *  27-Jan-2022   TJM-MCODE  {0001}    New module for common reusable Javascript UI/Client functions.
 *  05-Mar-2022   TJM-MCODE  {0002}    Documentation updates.
 *  04-May-0222   TJM-MCODE  {0003}    Corrected 'month' in timeStamp.
 *
 *
 */
"use strict";

// Create an object to hold our exported methods
var methods = {};

/**
 * timestamp() -- function to generate timestamp string: YYYY-MM-DD HH:MM:SS.mmm.
 * @returns  {String} "YYYY-MM-DD HH:MM:SS.mmm".
 * @api public
 */
methods.timeStamp = function ()
{
    let now = new Date();
    let month = Number(now.getMonth()) + 1;  // {0003}
    return (
        now.getFullYear() +
        "-" +
        month +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes() +
        ":" +
        now.getSeconds() +
        "." +
        now.getMilliseconds()
    );
};

/**
 * Strips a string of BRACES, BRACKETS, QUOTES, etc.
 *
 * @param {string} textToSimplify the string to be simplified to data
 * @returns {string} the simplified text
 * @api public
 */
methods.simplifyText = function (textToSimplify)
{
    let simplifiedText = "";

    for (let i = 0; i < textToSimplify.length; i++)
    {
        switch (textToSimplify[i])
        {
            case '{':
            case '}':
            case '[':
            case ']':
            case '"':
                break;
            case ',':
                simplifiedText += textToSimplify[i];
                simplifiedText += ' ';
                break;
            default:
                simplifiedText += textToSimplify[i];
                break;
        }
    }

    return simplifiedText;
};

/**
 * Rounds a floating point number that represents dollars and cents to 2 decimals digits (pennies).
 *
 * @param {float} numberToRound as a floating point value
 * @returns number rounded to dollars and cents (2 decimals place)
 */
methods.roundToCents = function (numberToRound)
{
    return +(Math.round(numberToRound + "e+2") + "e-2");
};

// NOTE: Build as CommonJS Module for NodeJS Version v16.7.0

module.exports = methods; // Common JS (CJS) form: module.exports = methods;
