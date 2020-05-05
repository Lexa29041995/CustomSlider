## Slider installation

To get started with the slider you need download **customStyle.ccs** and **customStyle.less** files from css folder and **script.js** file from js folder at the CustomSlider repository

## Using customSlider

To start working with the slider, firsly copy this code and paste it into your html file:

```<!DOCTYPE html>```</br>
```<html lang="en">```</br>
```<head>```</br>
    ```<meta charset="UTF-8">```</br>
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```</br>
    ```<title>Document</title>```</br>
```</head>```</br>
```<body>```</br>
```<div class="modal_wrapper">```</br>
       ```<div class="modal_wrapper_bg"></div>```</br>
        ```<div class="modal">```</br>
            ```<div class = 'exit_btn>x</div>```</br>
            ```<div class='large_img'></div>```</br>
        ```</div>```</br>
    ```</div>```</br>
        ```<div class="custom_slider main_slider">```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
            ```<div><img src="./img/city2.jpg" alt="city2"></div>```</br>
            ```<div><img src="./img/city3.jpg" alt="city3"></div>```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
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
```</head>```</br>
```<body>```</br>
```</body>```</br>
```</html>```</br>

Then you need to connect the script file link.</br>

```<script src="./js/customSlider.js"></script>```</br>
```<script src="./js/script.js"></script>```</br>

For this you need to link our script at the end of the ```<body></body>```.</br>
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
 ```your cod...```</br>
 ```<script src="./js/customSlider.js"></script>```</br>
```<script src="./js/script.js"></script>```</br>
```</body>```</br>
```</html>```</br>

Done!!</br>

## Additional information

If you want to use 2 or more sliders on your website or application, just copy the block with the class (custom_slider main_slider) in the html file,delete class (main_slider) and add another class to it. 
Example:</br>
```<!DOCTYPE html>```</br>
```<html lang="en">```</br>
```<head>```</br>
    ```<meta charset="UTF-8">```</br>
    ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```</br>
    ```<title>Document</title>```</br>
```</head>```</br>
```<body>```</br>
```<div class="modal_wrapper">```</br>
       ```<div class="modal_wrapper_bg"></div>```</br>
        ```<div class="modal">```</br>
            ```<div class = 'exit_btn>x</div>```</br>
            ```<div class='large_img'></div>```</br>
        ```</div>```</br>
    ```</div>```</br>
        ```<div class="custom_slider main_slider">```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
            ```<div><img src="./img/city2.jpg" alt="city2"></div>```</br>
            ```<div><img src="./img/city3.jpg" alt="city3"></div>```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
        ```</div>```</br>
        ```<div class="custom_slider news_slider">```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
            ```<div><img src="./img/city2.jpg" alt="city2"></div>```</br>
            ```<div><img src="./img/city3.jpg" alt="city3"></div>```</br>
            ```<div><img src="./img/city1.jpg" alt="city1"></div>```</br>
        ```</div>```</br>
```</body>```</br>
```</html>```</br>

To script.js file, the code will look like this:</br>
let mySlider = document.querySelector('.main_slider');</br>
```mySlider.customSlider({```</br>
    ```slideWidth: 550,```</br>
    ```maxSlides: 2,```</br>
    ```slidesHeight: 300,```</br>
    ```navs: true,```</br>
    ```loop: true,```</br>
    ```autoplay: true,```</br>
    ```timeout: 2000,```</br>
    ```dots: true,```</br>
    ```margin: 10,```</br>
    ```onHover: true,```</br>
```});```</br>

```let newsSlider = document.querySelector('.news_slider');```</br>
```newsSlider.customSlider({```</br>
   ```slideWidth: 450,```</br>
    ```maxSlides: 1,```</br>
    ```slidesHeight: 200,```</br>
    ```navs: true,```</br>
    ```loop: true,```</br>
    ```autoplay: true,```</br>
    ```timeout: 3000,```</br>
    ```dots: true,```</br>
    ```margin: 0,```</br>
    ```onHover: true,```</br>
```});```</br>


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
margin|Number|0|Indent on the right of elements inside the slider (value in px)
onHover|boolean|true|Stop automatic slide scrolling when hovering over a slide

