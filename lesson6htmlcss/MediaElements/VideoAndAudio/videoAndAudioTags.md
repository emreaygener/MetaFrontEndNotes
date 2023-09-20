<video> width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
control tag allows you to add controls to the video player
video/ogg added if the browser does not support mp4
```
<audio> controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>

<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
figure and figcaption tags allow you to add a caption to an image and important for SEO and accessibility
```

iFrames--not recommended--not secure because allows the other site to run scripts on your site. but you can limit the behaviour as following--always trust the website you are embedding
```
allow attribute -- camera and microphone are not allowed
```
<iframe src="https://www.example.com" allow="camera 'none'; microphone 'none';"></iframe>
```
sandbox attribute -- allows you to specify what the iframe can do--if used with an empty value, all restrictions are applied
```
<iframe src="https://www.example.com" sandbox=""></iframe>
```
if you want to allow a specific feature, you can specify it as follows
```
<iframe src="https://www.example.com" sandbox="allow-downloads"></iframe>
```
iFrame sandbox cheat sheet
The <iframe> is the inline frame element that embeds an HTML page into another page.  

Apart from the global attributes, which can be a part of the iframe, major element-specific attributes are listed below. 

allow 
It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example: 

allow="fullscreen” the fullscreen mode can be activated 

allow=“geolocation” lets you access the user’s location 

To specify more than one feature, a semicolon-separator should be used between features. For example, the following would allow using the camera and the microphone: 

<iframe src="https://example.com/…" allow="camera; microphone"> </iframe> 

name 
The name for the <iframe>. For example: 

<iframe name = "My Frame" width="400" height="300"></iframe>  

height 
It specifies the height of the frame. The default value is 150, in terms of CSS pixels. 
width 

width
Specifies the width of the frame, in terms of CSS pixels. The default value is 300 pixels.

referrerpolicy 
A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are: 

no-referrer The referrer header will not be sent. 

origin The referrer will be limited to the origin of the referring page 

strict-origin The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

sandbox 
To enforce greater security, a sandbox applies extra restrictions to the content in the <iframe>. To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below: 

allow-downloads Allows the user to download an item 

allow-forms Allows the user to submit forms 

allow-modals The resource can open modal windows 

allow-orientation-lock Lets the resource lock the screen orientation 

allow-popups Allows popups to open 

allow-presentation Allows a presentation session to start 

allow-scripts Lets the resource run scripts without creating popup windows 


Note that when the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list. For example, the following would allow form submission and scripts while keeping other restrictions active: 
21
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"> 
</iframe> 

src 
The URL of the page to embed in the <iframe>. Using the value about:blank would embed an empty page. 

srcdoc
Let's you specify the inline HTML to embed in the <iframe>. When defined, this attribute would override the src attribute.  

For instance, the following code will display "My inline html" in the frame, instead of loading my_iframe_src.html. 
12
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>" > 
</iframe> 

loading
This attribute let's you specify if the iframe should be loaded immediately when the web page loads (eager) or loaded when iframe is displayed in the browser (lazy). This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded.
21
<iframe src="my_iframe_src.html" loading="lazy" > 
</iframe> 

title
This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.
12
<iframe src="history.html" title="An embedded document about the history of my family" > 
</iframe> 
