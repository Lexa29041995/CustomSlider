# Slider installation

To get started with the slider you need download ccs file and js file from the CustomSlider repository

## Using customSlider

To start working with the slider, first copy this code and paste it into your html file:

```<!DOCTYPE html>```</br>
```<html lang="en">```</br>
```<head>```</br>
    ```<meta charset="UTF-8">```</br>
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```</br>
    ```<title>Document</title>```</br>
```</head>```</br>
```<body>```</br>
        ```<div class="custom_slider main_slider">```</br>
            ```<div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>```</br>
            ```<div><img src="./img/canwereallyk.jpg" alt="monkey1"></div>```</br>
            ```<div><img src="./img/1-monkey.jpg" alt="monkey1"></div>```</br>
            ```<div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>```</br>
        ```</div>```</br>
        ```<div class="custom_slider news_slider">```</br>
            ```<div><img src="./img/animal-selfies-5.jpg" alt="monkey1"></div>```</br>
            ```<div><img src="./img/canwereallyk.jpg" alt="monkey1"></div>```</br>
            ```<div><img src="./img/1-monkey.jpg" alt="monkey1"></div>```</br>
        ```</div>```</br>
```</body>```</br>
```</html>```</br>

## Connection customSlider

To connect this slider you need to copy css file link:</br>
```<link rel="stylesheet" href="./css/customStyle.css">```</br>
and paste it into header of your html file.</br>
Example:</br>
```<!DOCTYPE html>```</br>
```<html lang="en">```</br>
```<head>```</br>
    ```<meta charset="UTF-8">```</br>
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```</br>
    ```<title>Document</title>```</br>
    ```<link rel="stylesheet" href="./css/customStyle.css">```</br>
    ```<link rel="stylesheet" href="./css/style.css">```</br>
```</head>```</br>
```<body>```</br>
```</body>```</br>
```</html>```</br>

Then you need to connect the script file link.</br>

```<script src="./js/customSlider.js"></script>```</br>
```<script src="./js/script.js"></script>```</br>

For this you need to link to our script at the end of the <body>.</br>
Example:</br>
```<!DOCTYPE html>```</br>
```<html lang="en">```</br>
```<head>```</br>
    ```<meta charset="UTF-8">```</br>
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```</br>
    ```<title>Document</title>```</br>
    ```<link rel="stylesheet" href="./css/customStyle.css">```</br>
    ```<link rel="stylesheet" href="./css/style.css">```</br>
```</head>```</br>
```<body>```
 ```your cod...```</br>
```</body>```</br>
```</html>```</br>

Done!!</br>

## Parameters</br>

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

