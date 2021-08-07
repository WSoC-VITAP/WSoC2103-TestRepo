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

/*
 * Since identity is a frontend only program, it's important that we validate
 * all user input. HTML tags to restrict input to a subset of chosen values are
 * fine but they can be bypassed. A courrupt input could crash the whole program so
 * validation is important.
 */

/* CHALLENGE 1
 *
 * Vanilla JavaScript is magnitudes faster than frameworks like React
 * but there are tricks to make Vanilla JavaScript go even faster!
 *
 * Accessing elements on the DOM is expensive. You don't want to search the DOM
 * too frequently. There's a game development trick that uses lazy initialization
 * to search the DOM for elements and store their pointers/handles somewhere(in
 * variables, of course) for later use. Whenever there's a need to access the
 * element, you can use use the already initialized handle rather than querying the DOM.
 *
 *
 * PROBLEM:
 *
 * Assume there's a div element with an id of "id". You are to lazyily grab
 * hold of this element.
 *
 * HINT:
 * checkout Singleton desing pattern
 *
 *
 * Function signature
 * - name: lazyElement
 * - parameters: none
 * - return type: HTMLElement
 *
 * When you are done, uncomment the test marked "CHALLENGE 1" in ./3.test.ts
 */

/*
 * Please ignore.
 *
 * TypeScript modules can't be empty. This is hack to overcome that limitation
 */
export {};
