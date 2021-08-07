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

export const ROUTE_NOT_FOUND = "This route isn't registered";
export const URI_EXISTS = 'URI exists';
export const URI_EMPTY = 'uri is empty';


/* CHALLENGE 1
 *
 * JavaScript code is usually distributed as a single file. This boosts performace,
 * reduces latency but most importantly, it is very ergonomic to work with. The
 * process of combining all source files(in this case, all src/*) into a single source
 * file is called bundling.
 *
 * The problem with bundling is that the browser would execute the entire bundle in 
 * on go. This might result in errors when parts of code have page/route specific 
 * dependencies.
 *
 * For instance, password toggle buttons flip input type of the password field from
 * "password" to "text" vice versa, but in order for the button to do this, you
 * must first register onclick event handlers for it. This button may not be
 * available in every single page.
 *
 * PROBLEM:
 *
 * Create a class namded Router which will conditionally execute functions based on
 * the current URI of the user
 *
 * SPECIFICATION:
 *
 * - Class name: Router
 *
 * - Methods:
 *   + register:
 *     Register a route against a function
 *     - parameters:
 *       + path: string
 *          represents the path segment of an URI(path is /about in example.com/about)
 *       + callback funciton: () => void
 *          The function that should be executed when current path matches a
 *          registered path 
 *     - returns: none
 *     - errors: 
 *        - URI passed to register() is empty.
 *            message: URI_EMPTY(defined at the top of this file) 
 *        - URI passed already exists
 *            message: URI_EXISTS(defined at the top of this file) 
 *
 *   + route:
 *     Check if the current URI matches against any registered URIs and execute
 *     the corresponding callback function. 
 *     - parameters: none
 *     - returns: none
 *     - errors: 
 *        - current URI doesn't match any registerd paths
 *            message: ROUTE_NOT_FOUND(defined at the top of this file) 
 *
 *     Example:
 *      ```typescript
 *        const foo = () => alert("Homepage");
 *        const bar = () => alert("About");
 *
 *        const router = new Router();
 *        router.register("/", foo);
 *        router.register("/about/", bar);
 *        router.route();
 *      ```
 *
 * When you are done, uncomment the test marked "CHALLENGE 1" in ./5.test.ts
 */

/*
 * Please ignore.
 *
 * TypeScript modules can't be empty. This is hack to overcome that limitation
 */
export {};
