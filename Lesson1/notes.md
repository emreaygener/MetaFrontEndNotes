<p>paragraph</p>
<p>paragraph<i>italic</i></p>
self-closing element
<element>
<br/> or </br>
<img src="icon.png"/> ==> self closing

Headings
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>

Paragraphs
<p>
    This is a paragraph.
</p>

Line Breaks
<p>
    This is a<br />
    paragraph with<br>
    a line break.
</p>

Strong
<p>
    This is a <strong>strong</strong> paragraph.
</p>

Bold
<p>
    This is a <b>bold</b> paragraph.
</p>
Bold can also be used multiple times
<p>
    The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b> and <b>Javascript</b>.
</p>

Emphasis
<p>
    This is an <em>emphasized</em> paragraph.
</p>

Italics --> rendered as emphasized
<p>
    This is an <i>italic</i> paragraph.
</p>

Emphasis vs Italics
Emphasis tags stress the text contained in them.
Italics represent off-set text and should be used for technical terms, titles, a thought or a phrase from another language.

Lists
Unordered List
<ul>
   <li>Tea</li>
   <li>Sugar</li>
   <li>Milk</li>
</ul>
"""
*tea
*sugar
*milk
"""
Ordered List
<ol>
   <li>Rocky</li>
   <li>Rocky II</li>
   <li>Rocky III</li>
</ol>
"""
1. Rocky
2. Rocky II
3. Rocky III
"""

Div tags --> used to group elements together, can be nested
<div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
</div>
or 
<div>
    <div>
        <p>this is a nested paragraph</p>
    </div>
</div>

Can be styled with CSS
<style>
    div {
        border: 1px solid black;
        padding: 2px;
    }
</style>
<div>
    <div>
        <p>this is a nested paragraph</p>
    </div>
</div>

Comments
<!-- This is a comment -->

Anchor tags
<a href="https://www.google.com">Google</a>

Images
<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" width="272" height="92">

Tables
<table>
    <tr> --> table row
        <th>First Name</th> --> table header
        <th>Last Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td> --> table data
        <td>Doe</td>
        <td>23</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>25</td>
    </tr>

    Forms
    <form action="/regist ration" method="Post"> --> 2 methods Get,Post
        <label for="username">Username:</label><br> 
        <input type="text" name="username">

        <label for="password">Password:</label><br> 
        <input type="password" />
        <input type="submit" />
    </form>

    -Checkbox
    <input type="checkbox" name="dog" value="Dog" />
    <label for="dog">I own a dog</label><br>
    <input type="checkbox" name="cat" value="Cat" />
    <label for="cat">I own a cat</label><br>
    
    -Radio button 
    <input type="radio" name="right" value="Right" />
    <label for="right">I am right-handed</label><br>
    <input type="radio" name="left" value="Left" />
    <label for="left">I am left-handed</label><br>
    
    -Number
    <input type="number" name="age" min="18" max="99" />
    
    -Email
    <input type="email" name="email" />
    
    -File
    <input type="file" name="file" />
    
    -Text Area
    <textarea name="multiline" rows="5">...</textarea>
    
    -Drop-down list
    <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>

    DOM --> Document Object Model
    -The DOM is a tree-like structure that represents the HTML document.
    -The DOM is used to manipulate the HTML document with a programming language like Javascript.
    - All the elements in the HTML file are represented as objects in the DOM.
    - Is Used to create modern interactive web sites, like appearing and disappearing elements, changing the content of elements, changing the style of elements, etc in real time.

    WAI --> Web Accessibility Initiative
    -Allows people with disabilities to perceive, understand, navigate, and interact with the web.
    -WAI-ARIA --> Web Accessibility Initiative - Accessible Rich Internet Applications