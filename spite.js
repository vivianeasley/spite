
function spite( spriteSheetClass, viewHoleClass, animationSpeed, maxFrameNumber ) {

  var fSprites ;
  var fViewHole ;

  init ( ) ;

  return;

  function init ( ) {
    fSprites  = document.querySelector(spriteSheetClass);
    fViewHole = document.querySelector(viewHoleClass);

    beginAnimationProcess ( startAnimation );

  }

  function beginAnimationProcess ( callback ) {
    var viewHoleHeight = fViewHole.clientHeight;
    var viewHoleWidth = fViewHole.clientWidth;

    var imageHeight = fSprites.clientHeight;
    var imageWidth = fSprites.clientWidth;

    var framesWide = Math.round(imageWidth/viewHoleWidth);
    var framesTall = Math.round(imageHeight/viewHoleHeight);

    if ( maxFrameNumber !== undefined ) {
      var totalFrames = maxFrameNumber;
    } else {
      var totalFrames = framesWide*framesTall;
    }

    callback( viewHoleHeight, viewHoleWidth, framesWide, framesTall, totalFrames );

  }


  function startAnimation ( viewHoleHeight, viewHoleWidth, framesWide, framesTall, totalFrames ) {

    function animate(timestamp) {

      var frameNumber = (Math.floor(timestamp/animationSpeed))%(totalFrames);

      var rightShift = frameNumber%framesWide;
      var downShift  = Math.floor(frameNumber/framesWide)%framesTall;

      var moveSide   = rightShift*viewHoleWidth;
      var moveUpDown = downShift*viewHoleHeight;

      fSprites.style.transform = "translate( -" + moveSide + "px, -" + moveUpDown + "px)";

      requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);
  }

}

