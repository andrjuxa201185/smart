class Point {
    constructor () {
      this.positionX = 50;
      this.positionY = 50;
      this.speedY = 1;
      this.speedX = 1;
      this.color = "#fc6f4e";
      this.size = 4;
      this.numberLine = 0;
      this.mouseX = undefined;
      this.mouseY = undefined;
    }

    setMouseCoord(e){
      if (e){
        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY;
      }
    }

    setParam(widthCanvas = 1200, heightCanvas = 600){
      this.numberLine = 0;
      this.size = 2 + Math.random() * 7;
      this.speedX = -0.5 + Math.random() * 1;
      this.speedY = -0.5 + Math.random() * 1;
      this.positionX = this.mouseX || Math.random() * widthCanvas;
      this.positionY = this.mouseY || Math.random() * heightCanvas;
      this.mouseX = undefined;
      this.mouseY = undefined;
    }

    drowPoint(ctx){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.positionX, this.positionY, this.size, 0, 6);
      ctx.fill();
    }

    drowLine(ctx, x, y){
      if ((this.positionX == x) && (this.positionY == y)) return;
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1;
      ctx.moveTo(this.positionX, this.positionY);
      ctx.lineTo(x , y);
      ctx.stroke();
    }

    move(){
      this.positionY += this.speedY;  
      this.positionX += this.speedX;   
    }

    checkPosition(elem){
      let width = elem.width;
      let height = elem.height;
      if(this.positionX >= width + (width / 100)  || this.positionX < -(width / 100) ) {
        this.setParam(width, height);
      } 
      if(this.positionY >= height + height / 100 || this.positionY < -(height / 100) ) {
        this.setParam(width, height);
      }     
    }
  }

