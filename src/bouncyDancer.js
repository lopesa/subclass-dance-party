var MakeBouncyDancer = function(top, left, timeBetweenSteps) {

  this.stepTime = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.removeClass('dancer');
  this.$node.addClass('bouncyDancer');
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = blinkyDancer.step;
  // this.oldStep = this.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  //return blinkyDancer;
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

 
MakeBouncyDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);

  this.$node.animate({
    'top': '+=100',
  }, 200);

  this.$node.animate({
    'top': '-=100',
  }, 75);
};

MakeBouncyDancer.prototype.lineUp = function() {
  
  this.$node.stop(true, true);
  this.$node.css('top', '80%');

};