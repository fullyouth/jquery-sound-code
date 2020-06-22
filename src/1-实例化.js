// usage
$('.content').addClass()

$('.ccontent').each(function(index, item) {

})

$.each()
$.map()
$.toArray()
$.extend()

// 
function JQuery(selector) {
  this.selector = selector
}

JQuery.prototype.addClass = function () {

}

JQuery.prototype.each = function () {
  
}
JQuery.each = function() {

}

JQuery.extend = function() {
  
}

// 1. 不需要new
function $(selector) {
  return new JQuery(selector)
}

// 但是不能 $.each调用，所以需要保持统一
function JQuery(selector) {
  return new JQuery(selector) // 循环了
}

function JQuery(selector) {
  return new JQuery.prototype.init(selector) // 循环了
}
JQuery.prototype.init = function (selector) {
  this.selector = selector
}



