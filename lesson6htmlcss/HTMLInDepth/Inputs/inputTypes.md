Button
This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked. 
<input type="button" value="Click me" onclick="msg()" />

Keep in mind you can also define buttons with the <button> tag, with the added benefit of being able to place content like text or images inside the tag.

<button onclick="alert('Are you sure you want to continue?')"> 
    <img src="https://yourserver.com/button_img.jpg" 
        alt="Submit the form" height="64" width="64">
 </button> 

Checkbox
Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.

<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>

Radio
Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same "name" attribute.

<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label> 

Submit
Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s "action" attribute:

<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>

Text
Defines a basic single-line text field that a user can enter text into. 

<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname"> 

Password
Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.

<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd"> 

Date
Displays a control for entering a date with no time (year, month and day).

<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">

Datetime-local
Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.

<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">

Email
Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.

<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">

File
Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the "accept" attribute. Also, to enable multiple files to be selected, add the "multiple" attribute.

<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">

Hidden
Defines a control that is not displayed but whose value is still submitted to the server.

<input type="hidden" id="custId" name="custId" value="87">

Image
Defines an image as a graphical submit button. You should use the “src” attribute to point to the location of your image file.

<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">

Number
Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.

<input type="number" id="quantity" name="quantity" min="1" max="5">

Range
Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the “min” and “max” properties.

<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">

Reset
Displays a button that resets the contents of the form to their default values.

<input type="reset">

Search
Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.

<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">

Time
Displays a control for entering a time value in hours and minutes, with no time zone.

<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">

Tel
Defines a control for entering a telephone number. Browsers that do not support “tel” fall back to standard text input. You can optionally use the "pattern" field to perform validation.

<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">

Url
Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.

<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">

Week
Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

<label for="week">Select a week:</label>
<input type="week" id="week" name="week">

Month
Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">

Interactive Form Elements
Required
Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 

<input type="text" id="firstName" name="firstName" required> 

Maxlength 
Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit. 

<input type="text" id="description" name="description" maxlength="50"> 

Minlength 
Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified. 

<input type="password" id="password" name="password" minlength="8"> 

Min and max attributes 
Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates. 

<input type="number" id="quantity" name="quantity" min="1" max="10"> 

<input type="range" id="volume" name="volume" min="1" max="100"> 

Multiple 
Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 

<input type="file" id="gallery" name="gallery" multiple> 

Pattern 
Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > 

---------------------------------------------------------------------------------------------------------------------------------------------

HTML Form Elements
<input> 
It is used to create interactive controls, for example, buttons and various types of text fields and so on, to accept input or data from the user. The key attribute of this element is type. Some common values for the type include: button, checkbox, date, email, number, password, submit, text, and url. These values dictate the appearance of the element. For example, this code:

123456789101112
<form action="my_action_page"> 

  <label for="uname">Username:</label> 
  <br> 
  <input type="text" id="uname" name="username"> 
  <br> 
  <label for="pwd">Password:</label> 
  <br> 
  <input type="password" id="pwd" name="pwd"> 
  <br><br> 

Results in the following output:


Two input types, text and password, as it displays in the browser.

 Note how the type password hides the user input. 

<label>
Defines a label for an element. It has an attribute "for", the value of which should be equal to the id attribute of the element it is associated with. Note how in the example above, the <label> is associated with the <input> using its id value. 


<select>
Defines a drop-down list of options presented to the user. It has a couple of attributes: 

Form, the id of the form in which the drop-down appears 

Name specifies the name of the control 

Multiple Boolean attribute, when specified, indicates if a user can select multiple options out of the list 

Required indicates if the user is required to select an option before submitting a form 

Size mentions the number of visible options in a drop-down list 

The options in a drop-down list are defined using the <option> element inside <select>. Note the example in the <option> description below. 


<textarea>

Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include: 

cols defines the width of the text area, the default value is 20 

form the form element the text area is associated with 

maxlength when specified, limits the maximum number of characters that can be entered in the text area 

minlength the minimum number of characters that the user should enter 

readonly once set, the user cannot modify the contents 

rows defines the number of visible text lines for the text area 

The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters: 

123
<textarea name="response" rows="10" cols="30" maxlength=”200”> 

</textarea> 
<button>
Defines a clickable button. The onclick attribute defines the behavior when the button is clicked by the user. For example, in the code below, an alert message is shown to the user. 


12
<button type="button" onclick="alert('You just clicked!')">Click Me! 
</button> 
<fieldset> 

Used to group related input elements in a form. For instance, elements related to the user’s personal information and educational qualification can be grouped separately in two field sets. 

<legend> 

Defines a caption for the <fieldset> element. For example: 


123456789101112131415
<fieldset> 
  <legend>Personal Info</legend> 
  <label for="fname">First name:</label><br> 
  <input type="text" id="fname" name="fname" value="John"><br> 
  <label for="lname">Last name:</label><br> 
  <input type="text" id="lname" name="lname" value="Doe"><br> 
</fieldset> 

<fieldset> 
  <legend>Qualificaiton</legend> 

<datalist>


Specifies a list of pre-defined options for an input element. It differs from <select> since the user can still provide textual or numeric input other than the listed options. 
 

123456789101112
<form action="/my_action_page"> 
  <label for="flowers">Favourite flower:</label><br> 
  <input list="flowers" name="flowers"> 
  <datalist id="flowers"> 
    <option value="Rose"> 
    <option value="Lily"> 
    <option value="Tulip"> 
    <option value="Daffodil"> 
    <option value="Orchid"> 
  </datalist> 


Datalist input type with its drop-down list containing the options visible

<output> 

Represents the result of a calculation (typically the output of a script) or the outcome of the user action. 

<option> 

Defines an option for the drop-down list. The following code example demonstrates how a simple list can be defined, with the rendered view below the code block. 


1234567
<label for="course">Choose a course:</label><br> 
<select id="course" name="courselist"> 
  <option value="html">HTML Introduction</option> 
  <option value="css">Styling with CSS</option> 
  <option value="js">JavaScript</option> 
  <option value="react">React Basics</option> 
</select> 

Option input type as with its drop-down list visible

By default, the first item in the drop-down list is selected. To define a pre-selected option, add the selected attribute to the option. 

<optgroup> 

Defines a group of related options in a drop-down list. Its attribute label names the group. 