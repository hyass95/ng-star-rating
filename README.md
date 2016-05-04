# ng-star-rating
AngularJS directive to display a rate with stars

## Requirements
######[AngularJs](https://angularjs.org/)
######[Font Awesome](https://fortawesome.github.io/Font-Awesome/)

## Installation
Pretty simple with [Composer](http://packagist.org), add:

```cmd
    composer install hyass95/ng-star-rating
```
## Configuration
Add dependency to your module

```javascript
	angular.module("your-app-name", ['ps.starRating']);
```
Include the font awesome css
<link rel="stylesheet" href="path-to-font-awesome.css">

```html
<script src="bower_components/ng-star-rating/star-rating.js"></script>
```

Include the directive in your page

```html
<script src="bower_components/ng-star-rating/star-rating.js"></script>
```
## Utilisation
Once the dependency has been had to your module, you can use the directive.

```html
<ng-star-rating grade="the-rate" height="the-height-of-the-stars" color="the-color-of-the-stars"></ng-star-rating>
```
- "grade" has to be between 1 and 5
- "height" has to be between 1 and 5
- "color" can be color's name or hexadecimal code

#### Simple example

```html
	<ng-star-rating grade="3.4" height="2" color="red"></ng-star-rating>
```

 
