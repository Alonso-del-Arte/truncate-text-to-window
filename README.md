# truncate-text-to-window
Javascript to truncate text to a given window or frame.
The calling HTML frame should have p or span elements with class="truncatable". The Javascript code looks for the last such element; if the window or frame has scrollbars, the code turns off display of the element. The process is repeated until either there are no scrollbars or the truncatable elements have been exhausted.
Sometimes the code results in a window or frame with too much blank space at the bottom; I've generally found this to be more aggressive in Firefox than Chrome. A future improvement might be to take the particular browser into account.
There is the option to create a "Read more" link.
