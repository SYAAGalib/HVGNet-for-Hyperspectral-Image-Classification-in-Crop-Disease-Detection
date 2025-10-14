'use strict';

// Client-side deterrents to copying/inspection. Note: Not foolproof; power users can bypass.
(function () {
  // Disable right-click context menu
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, { capture: true });

  // Disable drag start (e.g., images)
  window.addEventListener('dragstart', function (e) {
    e.preventDefault();
  }, true);

  // Block common copy/select shortcuts and keys
  window.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey; // meta covers Cmd on macOS

    // Block DevTools shortcuts
    if (
      key === 'f12' ||
      (ctrl && key === 'u') || // view-source
      (ctrl && key === 's') || // save page
      (ctrl && key === 'p') || // print
      (ctrl && key === 'c') || // copy
      (ctrl && key === 'x') || // cut
      (ctrl && key === 'a') || // select-all
      (ctrl && shiftPressed(e) && (key === 'i' || key === 'j' || key === 'c')) // devtools
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    function shiftPressed(e) { return e.shiftKey; }
  }, true);

  // Intercept copy, cut, paste events
  ['copy', 'cut', 'paste', 'selectstart'].forEach(function (type) {
    window.addEventListener(type, function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, true);
  });

  // Attempt to blur selections if any managed to occur
  document.addEventListener('selectionchange', function () {
    const sel = window.getSelection();
    if (sel && sel.removeAllRanges) {
      try { sel.removeAllRanges(); } catch (_) {}
    }
  });

  // Optional: blur on focus of input/textarea to reduce copying from fields
  // Array.from(document.querySelectorAll('input, textarea')).forEach(function (el) {
  //   el.addEventListener('focus', function () { this.blur(); }, true);
  // });
})();
