## Slider installation

To get started with the slider you need download ccs file and js file from the CustomSlider repository

## Using customSlider

To start working with the slider, first copy this code and paste it into your html file:

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <div class="custom_slider main_slider">
            <div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>
            <div><img src="./img/canwereallyk.jpg" alt="monkey1"></div>
            <div><img src="./img/1-monkey.jpg" alt="monkey1"></div>
            <div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>
        </div>
        <div class="custom_slider news_slider">
            <div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>
            <div><img src="./img/canwereallyk.jpg" alt="monkey1"></div>
            <div><img src="./img/1-monkey.jpg" alt="monkey1"></div>
        </div>
    
</body>
</html>```

## Connection customSlider

To connect this slider you need to copy css file link:
```<link rel="stylesheet" href="./css/customStyle.css">```
and paste it into header of your html file.
Example:
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/customStyle.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
</body>
</html>```


Then you need to connect the script file link.

```<script src="./js/customSlider.js"></script>
   <script src="./js/script.js"></script>```

For this you need to link to our script at the end of the <body>.
Example:
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/customStyle.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
 âàø êîä...
</body>
</html>```

Done!!

## Parameters

This slider has default settings.
But you can change the parameters:

Parameter|Type|Default|Assignment
---------|-------|----|----------
slideWidth|Number|300|Sets slide`s width
slideHeight|Number|auto|Sets slide`s height
maxSlides|Number|1|Number of items displayed in the slider
navs|boolean|true|Display buttons forward / backward
loop|boolean|true|Circle slide scrolling
autoplay|boolean|true|Automatic slide switch
timeout|Number|3000|Slide switch time. Valid when autoplay = true
dots|boolean|true|Display navigation “points”
margin|Number|10|Indent on the right of elements inside the slider (value in px)
onHover|boolean|true|Stop automatic slide scrolling when hovering over a slide

