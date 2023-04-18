class BulletSystem {

  constructor(){
    this.bullets = [];
    this.velocity = new createVector(0, -15);
    this.diam = 10;
    this.lastShot = +new Date();
  }

  run(){
      this.move();
      this.draw();
      this.edges();
  }

  fire(x, y){
    if (+new Date() - this.lastShot < 300) { return; }
    this.lastShot = +new Date();
    this.bullets.push(createVector(x,y));
  }

  //draws all bullets
  draw(){
    fill(255);
    for (var i=0; i<this.bullets.length; i++){
      ellipse(this.bullets[i].x, this.bullets[i].y, this.diam, this.diam);
    }
  }

  //updates the location of all bullets
  move(){
    for (var i=0; i<this.bullets.length; i++){
      this.bullets[i].y += this.velocity.y;
    }
  }

  //check if bullets leave the screen and remove them from the array
  edges(){
      // Looping over the bullets array
      for(var i=0; i<this.bullets.length; i++){
        // For each bullet check if it has left the screen. 
        if(this.bullets[i].y <= 0){
          // Remove the specific bullet from the array.
          this.bullets.splice(i, 1);
        }     
      }
  }
}
