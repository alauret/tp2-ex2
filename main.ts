input.onButtonPressed(Button.A, function () {
    led.unplot(pos_x, 4)
    pos_x = Math.max(0, pos_x - 1)
    led.plot(pos_x, 4)
    if (pos_x >= 4) {
        direction = -1
    } else if (pos_x <= 0) {
        direction = 1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_x, 4)
    pos_x = Math.min(4, pos_x + 1)
    led.plot(pos_x, 4)
    if (pos_x >= 4) {
        direction = -1
    } else if (pos_x <= 0) {
        direction = 1
    }
})
let direction = 0
let pos_x = 0
let pos_y = 0
led.plot(randint(0, 10), 0)
pos_x = 2
led.plot(pos_x, 4)
let direction_y = 0
basic.forever(function () {
    basic.pause(100)
    led.unplot(pos_y, 0)
    pos_y += direction_y
    led.plot(pos_y, pos_y)
    if (pos_y >= 4) {
        pos_y = 0
    } else if (pos_y <= 0) {
        pos_y = pos_y + 1
    }
    basic.pause(500)
})
