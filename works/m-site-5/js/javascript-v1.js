// JavaScript
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
/* global angular */

var angularAnime = angular.module('angularAnime', ['ngAnimate']);

angularAnime.controller('myCtrl', function ($scope) {
	
   	$scope.names = ["Delete this Name"];
	$scope.countries = ["Delete this Country"];
    $scope.age = "00";

    $scope.days = [{
        id: 01,
        date: 01
    }, {
        id: 02,
        date: 02
    }, {
        id: 03,
        date: 03
    }, { 
        id: 04,
        date: 04
    }, {
        id: 05,
        date: 05
    }, {
        id: 06,
        date: 06
    }, {
        id: 07,
        date: 07
    }, {
        id: 08,
        date: 08
    }, { 
        id: 09,
        date: 09
    }, {
        id: 10,
        date: 10
    }, {
        id: 11,
        date: 11
    }, {
        id: 12,
        date: 12
    }, {
        id: 13,
        date: 13
    }, { 
        id: 14,
        date: 14
    }, {
        id: 15,
        date: 15
    }, {
        id: 16,
        date: 16
    }, {
        id: 17,
        date: 17
    }, {
        id: 18,
        date: 18
    }, { 
        id: 19,
        date: 19
    }, {
        id: 20,
        date: 20
    }, {
        id: 21,
        date: 21
    }, {
        id: 22,
        date: 22
    }, {
        id: 23,
        date: 23
    }, { 
        id: 24,
        date: 24
    }, {
        id: 25,
        date: 25
    }, {
        id: 26,
        date: 26
    }, {
        id: 27,
        date: 27
    }, {
        id: 28,
        date: 28
    }, { 
        id: 29,
        date: 29
    }, {
        id: 30,
        date: 30
    }, {
        id: 31,
        date: 31
    }];

    $scope.months = [{
        id: 1,
        date: 1
    }, {
        id: 2,
        date: 2
    }, {
        id: 3,
        date: 3
    }, {
        id: 4,
        date: 4
    }, {
        id: 5,
        date: 5
    }, {
        id: 6,
        date: 6
    }, {
        id: 7,
        date: 7
    }, {
        id: 8,
        date: 8
    }, {
        id: 9,
        date: 9
    }, {
        id: 10,
        date: 10
    }, {
        id: 11,
        date: 11
    }, {
        id: 12,
        date: 12
    }];

    $scope.years = [{
        id: 1,
        date: 1900
    }, {
        id: 2,
        date: 1901
    }, {
        id: 3,
        date: 1902
    }, {
        id: 4,
        date: 1903
    }, {
        id: 5,
        date: 1904
    }, {
        id: 6,
        date: 1905
    }, {
        id: 7,
        date: 1906
    }, {
        id: 8,
        date: 1907
    }, {
        id: 9,
        date: 1908
    }, {
        id: 10,
        date: 1909
    }, {
        id: 11,
        date: 1910
    }, {
        id: 12,
        date: 1911
    }, {
        id: 13,
        date: 1912
    }, {
        id: 14,
        date: 1913
    }, {
        id: 15,
        date: 1914
    }, {
        id: 16,
        date: 1915
    }, {
        id: 17,
        date: 1916
    }, {
        id: 18,
        date: 1917
    }, {
        id: 19,
        date: 1918
    }, {
        id: 20,
        date: 1919
    }, {
        id: 21,
        date: 1920
    }, {
        id: 22,
        date: 1921
    }, {
        id: 23,
        date: 1922
    }, {
        id: 24,
        date: 1923
    }, {
        id: 25,
        date: 1924
    }, {
        id: 26,
        date: 1925
    }, {
        id: 27,
        date: 1926
    }, {
        id: 28,
        date: 1927
    }, {
        id: 29,
        date: 1928
    }, {
        id: 30,
        date: 1929
    }, {
        id: 31,
        date: 1930
    }, {
        id: 32,
        date: 1931
    }, {
        id: 33,
        date: 1932
    }, {
        id: 34,
        date: 1933
    }, {
        id: 35,
        date: 1934
    }, {
        id: 36,
        date: 1935
    }, {
        id: 37,
        date: 1936
    }, {
        id: 38,
        date: 1937
    }, {
        id: 39,
        date: 1938
    }, {
        id: 40,
        date: 1939
    }, {
        id: 41,
        date: 1940
    }, {
        id:	42,
        date: 1941
    }, {

        id:	43,
        date: 1942
    }, {
        id:	44,
        date: 1943
    }, {
        id:	45,
        date: 1944
    }, {
        id:	46,
        date: 1945
    }, {
        id:	47,
        date: 1946
    }, {
        id:	48,
        date: 1947
    }, {
        id:	49,
        date: 1948
    }, {
        id: 50,
        date: 1949
    }, {
        id: 51,
        date: 1950
    }, {
        id: 52,
        date: 1951
    }, {
        id: 53,
        date: 1952
    }, {
        id: 54,
        date: 1953
    }, {
        id: 55,
        date: 1954
    }, {
        id: 56,
        date: 1955
    }, {
        id: 57,
        date: 1956
    }, {
        id: 58,
        date: 1957
    }, {
        id: 59,
        date: 1958
    }, {
        id: 60,
        date: 1959
    }, {
        id: 61,
        date: 1960
    }, {
        id: 62,
        date: 1961
    }, {
        id: 63,
        date: 1962
    }, {
        id: 64,
        date: 1963
    }, {
        id: 65,
        date: 1964
    }, {
        id: 66,
        date: 1965
    }, {
        id: 67,
        date: 1966
    }, {
        id: 68,
        date: 1967
    }, {
        id: 69,
        date: 1968
    }, {
        id: 70,
        date: 1969
    }, {
        id: 71,
        date: 1970
    }, {
        id: 72,
        date: 1971
    }, {
        id: 73,
        date: 1972
    }, {
        id: 74,
        date: 1973
    }, {
        id: 75,
        date: 1974
    }, {
        id: 76,
        date: 1975
    }, {
        id: 77,
        date: 1976
    }, {
        id: 78,
        date: 1977
    }, {
        id: 79,
        date: 1978
    }, {
        id: 80,
        date: 1979
    }, {
        id: 81,
        date: 1980
    }, {
        id:	82,
        date: 1981
    }, {
        id:	83,
        date: 1982
    }, {
        id:	84,
        date: 1983
    }, {
        id:	85,
        date: 1984
    }, {
        id:	86,
        date: 1985
    }, {
        id:	87,
        date: 1986
    }, {
        id:	88,
        date: 1987
    }, {
        id:	89,
        date: 1988
    }, {
        id: 90,
        date: 1989
    }, {
        id: 91,
        date: 1990
    }, {
        id: 92,
        date: 1991
    }, {
        id: 93,
        date: 1992
    }, {
        id: 94,
        date: 1993
    }, {
        id: 95,
        date: 1994
    }, {
        id: 96,
        date: 1995
    }, {
        id: 97,
        date: 1996
    }, {
        id: 98,
        date: 1997
    }, {
        id: 99,
        date: 1998
    }, {
        id: 100,
        date: 1999
    }, {
        id: 101,
        date: 2000
    }, {
        id: 102,
        date: 2001
    }, {
        id: 103,
        date: 2002
    }, {
        id: 104,
        date: 2003
    }, {
        id: 105,
        date: 2004
    }, {
        id: 106,
        date: 2005
    }, {
        id: 107,
        date: 2006
    }, {
        id: 108,
        date: 2007
    }, {
        id: 109,
        date: 2008
    }, {
        id: 110,
        date: 2009
    }, {
        id: 111,
        date: 2010
    }, {
        id: 112,
        date: 2011
    }, {
        id: 113,
        date: 2012
    }, {
        id: 114,
        date: 2013
    }, {
        id: 115,
        date: 2014
    }, {
        id: 116,
        date: 2015
    }, {
        id: 117,
        date: 2016
    }, {
        id: 118,
        date: 2017
    }, {
        id: 119,
        date: 2018
    }, {
        id: 120,
        date: 2019
    }, {
        id: 121,
        date: 2020
    }];

    $scope.dateDiff = function (birthMonth, birthDay, birthYear) {
        var todayDate = new Date(),
            todayYear = todayDate.getFullYear(),
            todayMonth = todayDate.getMonth(),
            todayDay = todayDate.getDate(),
            age = todayYear - birthYear.date;

        if (todayMonth < birthMonth.date - 1) {
            age--;
        }

        if (birthMonth.date - 1 === todayMonth && todayDay < birthDay.date) {
            age--;
        }

        return $scope.age = age;
    };
	
	// Names
    $scope.addItem = function() {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.names.indexOf($scope.addMe) == -1) {
            $scope.names.push($scope.addMe);
			$scope.errortext = "Welcome to my Angular JS!!";
        } else {
            $scope.errortext = "Your Name was added!!";
        }
    }
    $scope.removeItem = function(x) {
        $scope.errortext = "";    
        $scope.names.splice(x, 1);
    }
	
	// Countries
    $scope.addCount = function() {
        $scope.errorCount = "";
        if (!$scope.addCount) {return;}        
        if ($scope.countries.indexOf($scope.addTest) == -1) {
            $scope.countries.push($scope.addTest);
			$scope.errorCount = "This is my basic step-by-step!!";
        } else {
            $scope.errorCount = "Your Country was added!!";
        }
    }
    $scope.removeCount = function(x) {
        $scope.errorCount = "";    
        $scope.countries.splice(x, 1);
    }

});

$(document).ready(function(){	
	// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
	$('.navigation').removeClass('show');
	
    $("#nav-drop_down ul li a").click(function() {
        $('.navigation').removeClass('show');
    });
});

function myButton() {
	document.getElementById("nav-drop_down").classList.toggle("show");
}