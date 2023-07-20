//RGB Color
p{
    color: rgb(255,0,0);
}
//RGBA Color
p{
    color rgba(255,0,0,128); -->128 being alpha channel - opacity - transparancy
}
//HSL
p{
    color: hsl(0,%100,%50); -->hue saturation luminosity
}
//Hex value
0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
p{
    color: #FF0000; --> red (255,0,0)
}
// Font and size
p{
    font-family:"Courier New",monospace;
    font-size: 12px;
}
//Text transform
uppercase,lowercase,capitalize,none
p{
    text-transform: uppercase;
}
//Decoration

p{
    text-decoration underline;
}

p{
    text-decoration: underline red solid 5px;
}

p{
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: solid;
    text-decoration-thickness: 5px;
}

Alignment Basics

Text alignment
p{
    text-align: center;
}
left,right,center,justify

HTML Element Alignment
HTML element center alignment
{
    <div class="parent">
        <div class="child">
        </div>
    </div>
    .parent{
        border:4px solid red;
    }
    .child{
        width: 50%;
        padding: 20px;
        border: 4px solid green;
        margin: auto;
    }
}--> applicable when working with block-level elements.
{
    <div class="parent">
        <img src="photo.png" class="child">
    </div>
    .child{
        display: block;
        width: 50%;
        margin: auto;
    }
    or
    .child {
        display: block;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }-->if top or bottom magins will be added later.
}--> for inline elements

HTML Element Left / Right Alignment
<div class="parent">
  <img src="photo.png" class="child"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu odio eget leo auctor porta sit amet sit amet justo. Donec fermentum quam in diam volutpat, at lacinia diam placerat. Aenean quis feugiat sem. Suspendisse a dui massa. Phasellus scelerisque, mi vestibulum iaculis tristique, orci tellus gravida nisi, in pellentesque elit massa ut lorem. Sed elementum ornare nunc vel cursus. Duis sed enim in nulla efficitur convallis sed eget dolor. Curabitur scelerisque eros erat, in vulputate dolor consequat vel. Praesent ac sapien condimentum, ultricies libero at, auctor orci. Curabitur ut augue ac massa convallis faucibus sed in magna. Phasellus scelerisque auctor est a auctor. Nam laoreet sem sapien, porta imperdiet urna laoreet eu. Morbi dolor turpis, congue id bibendum eget, viverra et risus. Quisque vitae erat id tortor ullamcorper maximus.
</div>
.child {
  float: right;
} --> image will be positioned to the right.