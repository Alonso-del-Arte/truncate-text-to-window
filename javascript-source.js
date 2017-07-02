/* Calling frame should have a body element ID attribute, and pass it as the frameName attribute.
   readMoreFlag should be true if you need a "Read more" link to be dynamically generated, false otherwise.
   pathString may be a relative rather than absolute path if necessary.
   If readMoreFlag is false, pathString can be "Not applicable" or something of that nature.
*/

  function truncateToFrame(frameName, readMoreFlag, pathString) {
    var currFrame = document.getElementById(frameName);
    var truncatables = document.getElementsByClassName("truncatable");
    var counter = truncatables.length;
    while (currFrame.scrollHeight > currFrame.clientHeight && counter > 0) {
      counter--;
      truncatables[counter].style.display = "none";
    }
    if (readMoreFlag) {
      counter--;
      truncatables[counter].innerHTML = truncatables[counter].innerHTML + " ... <a href=\x22" + pathString + "\x22 target=\x22_parent\x22>Read more</a>";
    }
  }
