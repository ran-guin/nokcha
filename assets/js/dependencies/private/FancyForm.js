angular.module('myApp')
.controller('FancyForm', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});

Dropdown (ui.bootstrap.dropdown)
Click me for a dropdown, yo!

append-to vs. append-to-body vs. inline example

Dropdown is a simple directive which will toggle a dropdown menu on click or programmatically.

This directive is composed by three parts:

    uib-dropdown which transforms a node into a dropdown.
    uib-dropdown-toggle which allows the dropdown to be toggled via click. This directive is optional.
    uib-dropdown-menu which transforms a node into the popup menu.

Each of these parts need to be used as attribute directives.
uib-dropdown settings

    auto-close (Default: always) - Controls the behavior of the menu when clicked.
        always - Automatically closes the dropdown when any of its elements is clicked.
        disabled - Disables the auto close. You can control it manually with is-open. It still gets closed if the toggle is clicked, esc is pressed or another dropdown is open. It also won't be closed on $locationchangeSuccess.
        outsideClick - Closes the dropdown automatically only when the user clicks any element outside the dropdown.

    dropdown-append-to $ (Default: null) - Appends the inner dropdown-menu to an arbitrary DOM element.

    dropdown-append-to-body B (Default: false) - Appends the inner dropdown-menu to the body element.

    is-open $ (Default: false) - Defines whether or not the dropdown-menu is open. The uib-dropdown-toggle will toggle this attribute on click.

    keyboard-nav: B (Default: false) - Enables navigation of dropdown list elements with the arrow keys.

    on-toggle(open) $ - An optional expression called when the dropdown menu is opened or closed.

uib-dropdown-menu settings

    template-url (Default: none) - You may specify a template for the dropdown menu. Check the demos for an example.

Additional settings uibDropdownConfig

    appendToOpenClass (Default: uib-dropdown-open) - Class to apply when the dropdown is open and appended to a different DOM element.

    openClass (Default: open) - Class to apply when the dropdown is open.

Known issues

For usage with ngTouch, it is recommended to use the programmatic is-open trigger with ng-click - this is due to ngTouch decorating ng-click to prevent propagation of the event.
