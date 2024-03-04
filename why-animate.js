class Particle {
  e = document.createElement("div")
  x = (t) => t
  y = (t) => t
  #t0 = 0
  style = this.e.style
  run = false
  r = 10

  #anim(t) {
    if (this.#t0 === 0) this.#t0 = t
    this.style.transform = `translateX(${this.x(t / 1000) * 48 / this.r}vmin) translateY(${0 - this.y(t / 1000) * 48 / this.r}vmin)`
    if (this.run) requestAnimationFrame((t) => this.#anim(t))
  }

  rectangle(width = 10, height = 10) {
    this.style.width = (typeof width === "number") ? width + "px" : width
    this.style.height = (typeof height === "number") ? height + "px" : height
    return this
  }

  color(color) {
    this.style.backgroundColor = color
    return this
  }

  position(x = 0, y = 0) {
    this.style.position = "absolute"
    this.style.left = `calc(50vw + ${x}vmin)`
    this.style.bottom = `calc(50vh + ${y}vmin)`
    return this
  }

  show(container = "") {
    if (container) typeof container === "string" ? document.querySelector(container).append(this.e) : container.append(this.e)
    else {
      const c = document.createElement("div")
      c.id = "#particle-animation-container-" + Math.random()
      c.style.width = "100vw"
      c.style.height = "100vh"
      c.style.margin = "0"
      c.style.padding = "0"
      c.style.position = "absolute"
      c.style.top = "0"
      c.style.left = "0"
      c.style.overflowX = "hidden"
      c.style.overflowY = "hidden"
      c.append(this.e)
      document.body.append(c)
    }
    return this
  }

  start() {
    this.run = true
    requestAnimationFrame((t) => this.#anim(t))
  }

  stop() {
    this.run = false
  }

  X(f) {
    this.x = f
    return this
  }

  Y(f) {
    this.y = f
    return this
  }
}

// new Particle()
//   .rectangle()
//   .color("white")
//   .Y((t) => 0)
//   .X((t) => 0)
//   .position()
//   .show()
//   .start()

// new Particle()
//   .rectangle()
//   .color("blue")
//   .Y((t) => -1)
//   .X((t) => -1)
//   .position()
//   .show()
//   .start()


[1, 2, 3, 4].forEach(e =>
  new Particle()
    .rectangle()
    .color("blue")
    .Y((t) => e * Math.sin(0.8 * e * t - 0.2 * e))
    .X((t) => e * Math.cos(0.8 * e * t - 0.2 * e))
    .position()
    .show()
    .start()
)

new Particle()
  .rectangle()
  .color("lightgreen")
  .Y((t) => 6 * Math.sin(t))
  .X((t) => 6 * Math.cos(t))
  .position()
  .show()
  .start()


new Particle()
  .rectangle()
  .color("lightgreen")
  .Y((t) => 0 - 6 * Math.sin(Math.PI - t))
  .X((t) => 0 - 6 * Math.cos(t))
  .position()
  .show()
  .start()

new Particle()
  .rectangle()
  .color("yellow")
  .Y((t) => 6 * Math.sin(t - Math.PI / 2))
  .X((t) => 6 * Math.cos(t - Math.PI / 2))
  .position()
  .show()
  .start()

new Particle()
  .rectangle()
  .color("yellow")
  .Y((t) => 6 * Math.sin(t + Math.PI / 2))
  .X((t) => 6 * Math.cos(t + Math.PI / 2))
  .position()
  .show()
  .start()

new Particle()
  .rectangle()
  .color("red")
  .Y((t) => 0)
  .X((t) => 0)
  .position()
  .show()
  .start()
