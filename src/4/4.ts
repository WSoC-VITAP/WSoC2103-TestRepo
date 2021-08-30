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
 * User facing error messages are critical to good UX. When something goes wrong,
 * the user should receive feedback about it. Some errors are unrecoverable from
 * a programmer's perspectinve. For instance, when there's no network connectivity,
 * the programmer can't do anything about it but show an error message.
 *
 * PROBLEM:
 *
 * Assume there's a div element with an id of "error__container". You should create
 * a function that would create error dialog boxes within "error__container"
 * with a custom message. The message will be provided via the function arguement.
 *
 * SPECIFICATION:
 *
 * - Error container(provided):
 *   + id: "error__container"
 * - Error dialog box:
 *   + class: "error__dialog-box"
 * - Error dismiss button:
 *   + class: "error__hide-btn"
 *
 * - Error dialog box should automatically disappear after 5000ms or 5 seconds
 *
 * HTML syntax:
 *
 * Please use document.createElement() to create elements.
 * Don't use element.innerHTML. Doing so only updates what's displayed on screen
 * but doesn't update DOM leading to all sorts of nasty bugs.
 *
 * ```html
 * <div id="error__container">
 *   <div class="error__dialog-box">
 *      Custom error message placeholder
 *      <button class="error__hide-btn">x</button>
 *   </div>
 * </div>
 *
 * See ./sample.png for an example implementation
 *
 * Don't bother with styling the element :)
 *
 * Function signature
 * - name: createError
 * - parameters:
 *   + message: string
 *
 * - return type:
 *    + error__dialog: HTMLElement(the HTML error element)
 *
 * When you are done, uncomment the test marked "CHALLENGE 1" in ./4.test.ts
 */

export function createError(message: string): Element | null {
  var error_box = document.createElement("div");
  error_box.className = "error__dialog-box";
  error_box.innerHTML = message;

  // var error_box = document.getElementsByClassName("error__dialog-box")[0];
  // error_box.innerHTML = message;

  const hide_btn = document.createElement("Button");
  hide_btn.className = "error__hide-btn";
  hide_btn.textContent = "x";
  error_box.appendChild(hide_btn);

  document.getElementById("error_container")?.appendChild(error_box);

  return error_box;
}

/*
 * Please ignore.
 *
 * TypeScript modules can't be empty. This is hack to overcome that limitation
 */
export {};
