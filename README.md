# why?animate

Simple JS animations. If you can use a graphing calculator, you can use why?animate.

(incomplete, currently only supports moving things around)

Examples:

```js
// blue square moving anti-clockwise in a circle
new Particle()
  .rectangle()
  .color("blue")
  .Y((t) => Math.sin(t))
  .X((t) => Math.cos(t))
  .position()
  .show()
  .start()

// white square still at center of screen
new Particle()
  .rectangle()
  .color("white")
  .Y((t) => 0)
  .X((t) => 0)
  .position()
  .show()
  .start()

// blue square still at bottom left corner (of the largest square that can be fit on screen)
new Particle()
  .rectangle()
  .color("blue")
  .Y((t) => -1)
  .X((t) => -1)
  .position()
  .show()
  .start()
```
