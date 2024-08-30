# CSS and Layout Exercises README

## Overview

This document serves as a report for the CSS and layout exercises completed from [the provided link](http://mumstudents.org/cs472/2017-03-KL-AS/Sections/section03layout.php). The exercises are designed to improve CSS skills and prepare for upcoming tests.

## General Instructions

Each exercise was approached with the goal of understanding different ways to solve CSS layout problems. The steps involved include:

1. Attempting to solve the problem independently.
2. Exploring multiple solutions.
3. Reviewing provided solutions to ensure thorough understanding.

## Detailed Exercise Report

### Exercise 1: Float Boxes

**Objective**: Generate the given page appearance using float properties.

**Solution**:

```html
<div id="outer">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>  
  <div class="box break"></div>  
  <div class="box"></div>
  <div class="box"></div>
</div>
```

```css
#outer {
  border: 2px dashed black;
  overflow: hidden;
  padding: 10px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: black;
  margin: 10px;
  float: left;
}

.break {
  clear: left;
}
```

**Difficulties Encountered**:
1. Understanding the `clear` property to manage the layout flow.
2. Ensuring the container (`#outer`) wraps around floated elements using `overflow: hidden`.

**Insights Gained**:
1. Learned how `float` and `clear` properties work together to control layout.
2. Using `overflow: hidden` to contain floated elements within their parent container.

### Exercise 2: Menu

**Objective**: Create a horizontal menu from a vertical list using CSS.

**Solution**:

```html
<ul>
  <li>Bananas</li>
  <li>Apples</li>
  <li>Grapefruit</li>
  <li>Oranges</li>
  <li>Papaya</li>
</ul>
```

```css
ul {
  background-color: red;
  padding: 20px;
  text-align: center;
}

li {
  display: inline;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
}
```

**Difficulties Encountered**:
1. Converting a vertical list to a horizontal layout using `display: inline`.

**Insights Gained**:
1. Learned how `display: inline` can be used to create horizontal lists.
2. Understood the importance of padding and border styling for list items.

### Exercise 3: Layout2

**Objective**: Generate a specified layout with given HTML and additional CSS/HTML as needed.

**Solution**:

```html
<div id="container">
  <h1>Header</h1>

  <div id="column1">
    <h2>Area 1</h2>
    <p>Lorem ipsum ...</p> 
  </div>

  <div id="column2">
    <h2>Area 2</h2>
    <p>Lorem ipsum ...</p>
  </div>

  <h2>Area 3</h2>
  <p>Lorem ipsum ...</p>
</div>
```

```css
#container {
  background-color: lightgray;
  overflow: hidden;
  padding: 10px;
  width: 500px;
}

#column1, #column2 {
  background-color: lightblue;
  float: right;
  margin-left: 10px;
  width: 100px;
}

h1 {
  background-color: yellow;
}
```

**Difficulties Encountered**:
1. Arranging the columns using float properties.
2. Maintaining the overall layout dimensions and spacing.

**Insights Gained**:
1. Gained experience with multi-column layouts using floats.
2. Learned to use padding and margins effectively to space elements.

### Exercise 4: More Floats

**Objective**: Modify HTML and CSS to achieve various layout appearances.

**Solutions**:

1. Floating `#a` left and `#b` right:

```css
#a {
  float: left;
}

#b {
  float: right;
}
```

2. Floating `#a` left, `#b` right with clear:

```css
#a {
  float: left;
}

#b {
  float: right;
  clear: left;
}
```

3. Floating `#a` left, `#b` right, `#c` with clear and text alignment:

```css
#a {
  float: left;
}

#b {
  float: right;
  clear: left;
}

#c {
  clear: left;
  text-align: right;
}
```

**Difficulties Encountered**:
1. Understanding the interaction of `float` and `clear` properties in complex layouts.
2. Managing the positioning and alignment of multiple floated elements.

**Insights Gained**:
1. Improved understanding of how to control layout flow with floats and clear properties.
2. Learned to manage layout complexity with multiple floated elements and positioning techniques.

## Summary

These exercises provided valuable experience in working with CSS layouts and floats. Key lessons included understanding the float and clear properties, creating horizontal menus, and managing multi-column layouts. These foundational skills are crucial for building responsive and well-structured web pages.
