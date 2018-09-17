(function () {
    const app = angular.module('app');

    app.directive("mainSpinner", function () {
        return {
            restrict: "AEC",
            templateUrl: 'resources/pages/spinner.html'
        }
    })

    app.directive('ngFiles', ['$parse', function ($parse) {

        function fn_link(scope, element, attrs) {
            var onChange = $parse(attrs.ngFiles);
            element.on('change', function (event) {
                onChange(scope, {
                    $files: event.target.files
                });
            });
        };

        return {
            link: fn_link
        }
    }])

    app.directive("flexDropdownHead", ["$document", function ($document) {
        return {
            restrict: 'C',
            link: function (scope, elem, attr) {
                elem.bind('click', function () {
                    elem.toggleClass('nowShowDropdown');
                });
            }
        }
    }]);

    app.directive("navButton", ["$document", function ($document) {
        return {
            restrict: 'C',
            link: function (scope, elem, attr) {

                elem.bind("click", function () {
                    if (!elem.hasClass('active')) {
                        elem.addClass('active');
                    }

                    $document.bind("click", function () {
                        if (elem.hasClass('active')) {
                            elem.removeClass('active');
                        }
                    })
                    console.log("added");
                })
            }
        };
    }]);


    app.directive('progressfile', ["$document", function ($document) {
        console.log("enetered progress file");
        console.log("document", $document);
        return {
            restrict: 'C',
            link: function (scope, element, attr) {
                console.log("element", element);
                element.bind('click', function () {
                    console.log("clicked element");
                    if (!element.hasClass("progress")) {
                        element.addClass("progress");
                    }

                //    $document.bind('click', function () {
                //        if (element.hasClass("progress")) {
                //            element.removeClass("progress");
                //        }
                //     })

                    console.log("progress class added or removed as required!!");

                })
            }
        };

    }]);

    // app.directive("foundError", function(){
    //     return {
    //         restrict: "A",
    //         scope: {
    //             info: "=error"
    //         },
    //         template: "<label><em>{{info.r.data.Message}}</em></label>"
    //     }
    // });


}());