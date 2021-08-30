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

/* CHALLENGE 1
 *
 * Create a function to check if a string is empty
 *
 * Function signature
 * - name: isEmpty
 * - parameters: a value that could be either one of the following:
 *    - string
 *    - null
 *    - undefined
 * - return type: boolean
 *
 * When you are done, uncomment the test marked "CHALLENGE 1" in ./2.test.ts
 */

export function isEmpty(a: any): boolean {
  if (!a?.trim()) {
    return true;
  } else {
    return false;
  }
}

/*
 * Please ignore.
 *
 * TypeScript modules can't be empty. This is a hack to overcome that limitation
 */
export {};
