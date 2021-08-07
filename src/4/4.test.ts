/*
 * Copyright (C) 2021  Aravinth Manivannan <realaravinth@batsensnet>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOS  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as lib from './4';

import * as utils from '../testUtil';

utils.placeholder();

'use strict';

jest.useFakeTimers();

/* CHALLENGE 1
 *
 * Please uncomment the following lines to activate the test
 *
 */

//it('checks if error boxes work', () => {
//  const ERR_CONTAINER_ID = 'error__container';
//
//  const ERR_MSG_CONTAINER = 'error__dialog-box'; // class
//  const ERR_CLOSE = 'error__hide-btn'; // class
//
//  const getMsg = (num: number) => `message ${num}`;
//
//  // create error container
//  const container = document.createElement('div');
//  container.id = ERR_CONTAINER_ID;
//  document.body.append(container);
//
//  // create first error message
//  let msg = lib.createError(getMsg(1));
//  expect(msg).toEqual(document.querySelector(`.${ERR_MSG_CONTAINER}`));
//  expect(msg.innerHTML).toContain(getMsg(1));
//
//  // find created error message's button and click it
//  let btn = <HTMLButtonElement>msg.getElementsByClassName(ERR_CLOSE)[0];
//  btn.click();
//  expect(document.querySelector(`.${ERR_MSG_CONTAINER}`)).toEqual(null);
//
//  // create a second error message
//  msg = lib.createError(getMsg(2));
//  expect(msg).toEqual(document.querySelector(`.${ERR_MSG_CONTAINER}`));
//  expect(msg.innerHTML).toContain(getMsg(2));
//
//  // wait the timer out
//  jest.runOnlyPendingTimers();
//  expect(document.querySelector(`.${ERR_MSG_CONTAINER}`)).toEqual(null);
//});
