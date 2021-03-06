/*
 * Copyright (C) 2021  Aravinth Manivannan <realaravinth@batsense.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as lib from './1';

import * as utils from '../testUtil';

'use strict';
utils.placeholder();

test('S1C1: add works', () => {
  expect(lib.add(1, 1)).toBe(2);
});

/* CHALLENGE 2
 *
 * Please uncomment the following lines to activate the test
 *
 */

//test('S1C2: multiply works', () => {
//  expect(lib.multiply(5, 2)).toBe(10);
//});
