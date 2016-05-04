/**
 * Created by Hyacinthe on 28/04/2016.
 */

angular.module('ps.starRating', [])
    .directive('ngStarRating', function () {
        return {
            scope : {
                grade : "@grade",
                height : "@height",
                color : "@color"
            },
            restrict : 'E',
            template : '' +
            '<span ng-repeat="i in full_stars"><i class="full fa fa-star {{height}}"></i></span>'+
            '<span ng-show="half_star"><i class="half fa fa-star-half-full {{height}}"></i></span>'+
            '<span ng-repeat="i in empty_stars"><i class="empty fa fa-star-o {{height}}"></i></span>',
            /**
             *
             * @param scope
             * @param element
             * @param attrs
             *
             * set the scope with the number of full stars, the number of empty stars and if there is or not an half star
             */
            link : function (scope, element, attrs) {
                scope.$watch("grade", function (newValue, oldValue) {
                    //number of full stars
                    var full_stars_number = parseInt(newValue);
                    //change number of full stars into array for the ng-repeat
                    var full_stars = [];
                    for(var i = 0; i < full_stars_number; i++){
                        full_stars[i] = i;
                    }

                    //the half star (boolean)
                    var residual = scope.grade - full_stars_number;
                    residual = parseInt(residual * 10);
                    var half_star = residual >= 5;

                    //number of empty stars
                    var temp = half_star ? 1 : 0;
                    var empty_stars_number = 5 - full_stars_number - temp;
                    //change number of empty stars into array for the ng-repeat
                    var empty_stars = [];
                    for(var i = 0; i < empty_stars_number; i++){
                        empty_stars[i] = i;
                    }

                    //set the color of the stars
                    element.css('color', scope.color);

                    //set the scope
                    scope.full_stars = full_stars;
                    scope.half_star = half_star;
                    scope.empty_stars = empty_stars;
                    scope.height = "fa-" + scope.height  + "x";
                });
            }
        };
    });
