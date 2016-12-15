function Breaks(x,y,z) {
 
  this.x = x;
  this.y = y;
  
  this.length = z;
  
  this.height = 30;
  
  this.createBreaks = function () {
	rect(this.x,this.y,this.length,this.height);
  }
} 
