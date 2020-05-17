# simpleGraphs
Simple and lightweight javascript graph library.

Allows usage of the <strong>graph(array, options, target)</strong> function.

<strong>Parameters</strong>:
<ul>
<li>
  <strong>array</strong>: Takes an array of objects representing each bar in the graph. Each bar object should have the following values:
  <ul>
    <li>value: Takes a value of int between 0-100 representing the height in % of the height of the bar.</li>
    <li>label: Takes a string representing the label of the given bar.</li>
  </ul>
</li>

<li>
  <strong>options</strong>: Takes an object with values of:
  <ul>
    <li>barSpacing: Takes a value of int which represents the margin-right of each bar.</li>
    <li>barWidth: Takes a value of int which represents the width of each bar.</li>
  </ul>
</li>

<li>
  <strong>target</strong>: Takes a string which represents the ID of an existing HTML element to insert the graph into.
</li>
</ul>
