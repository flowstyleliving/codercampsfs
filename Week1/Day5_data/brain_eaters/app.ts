let marioImg = new Image();
marioImg.src = "mario.png";

function sprite(options) {
  let that = {};

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  return that;

  that.render = function () {

    // Draw the animation
    that.context.drawImage(
       that.image,
       0,
       0,
       that.width,
       that.height,
       0,
       0,
       that.width,
       that.height);
  };

}

let marioCanvas = $('#marioAnimation');
marioCanvas.width = 100;
marioCanvas.height = 100;

let mario = sprite({
  context: canvas.Context("2d"),
  width: 100,
  height: 100,
  image: marioImg
});

context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

img	Source image object	Sprite sheet
sx	Source x	Frame index times frame width
sy	Source y	0
sw	Source width	Frame width
sh	Source height	Frame height
dx	Destination x	0
dy	Destination y	0
dw	Destination width	Frame width
dh	Destination height	Frame height

mario.render();

init : function(){
  console.log("START");
  let z = this;
  z.mario = new mario();
  
  $.getJSON("objects.json", function(json){
    //console.log("OBJECTS",json);
    $.each(json, function(k,v){
      //console.log(v);
      let x,
      ig = v.ignore ? true : false;
      switch(v.type){
        case "brick": 	x = new brick('objects.png', v.sx, v.sy, v.sw, v.sh, v.dx, v.dy, v.dw, v.dh, ig); break;
        case "questionmark":
          let r = v.reward ? v.reward : "coin";
          x = new questionmark('objects.png', v.sx, v.sy, v.sw, v.sh, v.dx, v.dy, v.dw, v.dh, ig, r);
        break;
        default : x = new gameObject('objects.png', v.sx, v.sy, v.sw, v.sh, v.dx, v.dy, v.dw, v.dh, ig); break;
      }

      if(x)z.objects.push(x);
    });
  });
