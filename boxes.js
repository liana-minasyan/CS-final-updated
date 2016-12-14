function Breaks(x,y) {
 
  this.x = x;
  this.y = y;
  
  this.length = 70;
  
  this.height = 30;
  
  this.createBreaks = function () {
	rect(this.x,this.y,this.length,this.height);
  }
}