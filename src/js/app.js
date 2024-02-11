/**
 *  @copyright - codewithemmanuel 2023
 */ 

'use strict';


/**
 * Module import
 */

import { addEventOnElements, getGreetingMsg } from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";


// Toggle sidebar in small screen

const /**{HTMLElement} */ $sidebar = document.querySelector('[data-sidebar]');
const /**{Array<HTMLElement>} */ $sidebarTogglers = document.querySelectorAll
('[data-sidebar-toggler]');
const /**{HTMLElement} */ $overlay = document.querySelector('[data-sidebar-overlay')

addEventOnElements($sidebarTogglers, 'click', function () {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});

/**
 * Initial tooltip behavior for all DOM elements with 'data-tooltip' attribute.
 */

const /** {Array<HTMLElement} */ $tooltipElems = document.querySelector('[data-tooltip]');

/**
 * Show greeting message on home page
 */

const /** {HTMLElement} */ $greetElem = document.querySelector('[data-greeting');
const /** {number} */ currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);


/**
 * Show current date on homepage
 */

const /** {HTMLElement} */ $currentDataElem = document.querySelector
('[data-current-date]');
$currentDataElem.textContent = new Date().toDateString().replace(',',',')