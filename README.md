addEventListener-passing-objects-polyfill
=========================================

Polyfill for addEventListener Taking Objects as Second Arguements

<a href="http://qnimate.com/passing-objects-to-addeventlistener/">Refer this article</a> on passing objects to addEventListener.

Internet Explorer verions less than 8 don't support it. Event BBOS6 don't support it. Therefore this polyfill adds this support.

Add this script as early as possible in your HTML page.

Note: This polyfill uses <a href="https://gist.github.com/dsingleton/1312328">.bind() polyfill</a> to support it on browsers less than ECMAScript 5.
