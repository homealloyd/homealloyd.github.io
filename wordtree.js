/*
 * Name: Jennie Chung
 * CS 132 Spring 2022
 * Date: May 17th, 2022
 * This is the js file for the Word Tree page, which provides a way to create a tree full of 
 * antonyms and synonyms.
 *
 */

(function()  {
  "use strict";

  /**
   * Function for initializing the Word Tree page. Creates UI elements and adds
   * event listeners for the settings specified in the menu view as well as text
   * input used to grow the tree.
   */
  function init() {
    let buttons = qsa("button");
    qsa('audio').forEach(el => el.pause());
    
    // Make buttons toggle appropriately
    for (const button of buttons) {
      button.addEventListener("click", toggleView);
      // Pause all audio 
      button.addEventListener('click', () => {
        qsa('audio').forEach(el => el.pause());
      });
    }

    let submitBtn = id("submit");
    submitBtn.addEventListener("click", checkAnswer);
  }


  function checkAnswer() {
    let ansInput = id("answer");
    let msg = id("check-correct");
    let groupColor = id("group-color");

    if(ansInput.value.toLowerCase() === "arms") {
      switch(groupColor.value) {
        case "orange":
          msg.textContent = "Focking gr8 job m8! Go over to Arms! Also, your hint is: ryGarden";
          break;
        case "blue":
          msg.textContent = "Focking gr8 job m8! Go over to Arms! Also, your hint is: h";
          break;
        default:
          msg.textContent = "Focking gr8 job m8! Go over to Arms!";
      }
    }
    else {
      msg.textContent = "WRONG! Try again, frosh";
    }

    ansInput.value = "";
    groupColor.value = "";
  }

  /**
   * Function to toggle views between the menu view and the game view.
   */
  function toggleView() {

    // Get the button id, target clue name
    const target_id = this.classList.value;
    const curr_display_id = this.parentNode.id;

    let next_elem = id(target_id);
    let curr_elem = id(curr_display_id);

    next_elem.classList.toggle("hidden");
    curr_elem.classList.toggle("hidden");
  }

  init();
})();