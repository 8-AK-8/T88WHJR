var canvas = new fabric.Canvas('canvas');

player_x = 200;
player_y = 200;
block_width = 10;
block_height = 10;

var block_object = ""
var player_object = ""

function uploadplayer() {
  fabric.Image.fromURL("player.png", function (img) {
    player_object = img
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(140)
    player_object.set({
      top: player_x,
      left: player_y
    });
    canvas.add(player_object)
  });
}

function uploadblock(block_img) {
  fabric.Image.fromURL(block_img, function (img) {
    block_object = img
    block_object.scaleToWidth(block_width)
    block_object.scaleToHeight(block_height)
    block_object.set({
      top: player_x,
      left: player_y
    });
    canvas.add(block_object)
  });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
  console.log("keydown")
  keyPress = e.keyCode;

  if (keyPress == "38") {
    up()
  }
  if (keyPress == "40") {
    down()
  }
  if (keyPress == "37") {
    left()
  }
  if (keyPress == "39") {
    right()
  }
  if (keyPress == "67") {
    uploadblock("cloud.jpg")
  }
  if (keyPress == "68") {
    uploadblock("dark_green.png")
  }
  if (keyPress == "71") {
    uploadblock("ground.png")
  }
  if (keyPress == "76") {
    uploadblock("light_green.png")
  }
  if (keyPress == "82") {
    uploadblock("roof.jpg")
  }
  if (keyPress == "84") {
    uploadblock("trunk.jpg")
  }
  if (keyPress == "85") {
    uploadblock("unique.png")
  }
  if (keyPress == "87") {
    uploadblock("wall.jpg")
  }
  if (keyPress == "89") {
    uploadblock("yellow_wall.png")
  }
}

function up(){
  if(player_y>0){
  player_y= player_y-block_height
  canvas.remove(player_object)
 uploadplayer()
  }
  }
function down(){
  if(player_y<=500){
    player_y= player_y+block_height
    canvas.remove(player_object)
   uploadplayer()
    }
}

function left(){
  if(player_x>0){
    player_x = player_x- block_width
    canvas.remove(player_object)
   uploadplayer()
    }
}

function right(){
  if(player_x<=850){
    player_x= player_x+block_width
    canvas.remove(player_object)
   uploadplayer()
    }
}
