# Spite: Micro Sprite Library

This is the beginnings of an extremely simple spriting library. To use, add an image to your html with a wrapper:

```html
<div class="wrapper">
  <img class="animate-sprite-sheet" src="cube.png" alt="magic" height="720" width="600">
</div>
```

The wrapper must have overflow: hidden; and be the width and height of exactly one frame of your sprite.

Then you can call 
#spite( img class, wrapper class, milliseconds between frames, max number of frames in your animation ) ;



