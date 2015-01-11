# Spite: Micro Sprite Library

This is the beginnings of an extremely simple spriting library. To user add an image to your html with a wrapper:

<div class="wrapper">
  <img class="animate-sprite-sheet" src="cube.png" alt="magic" height="720" width="600">
</div>

The wrapper must have over-flow: hidden; and be the width and height of exactly one frame of your sprite.

Then you can call spite( <img class>, <wrapper>, <milliseconds between frames>, <max number of frames in your animation> ) ;



