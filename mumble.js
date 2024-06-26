/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// My solution:

function mumble(str) {
    let mumbling = "";
    for (let i = 0; i < str.length; i++) {
      // Repeat each character (i + 1) times
      mumbling += str.charAt(i).repeat(i + 1);
      // Add a hyphen after each group except the last one
      if (i < str.length - 1) {
        mumbling += "-";
      }
    }
    return mumbling;
  }
  