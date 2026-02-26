serial.redirectToUSB()
let simTemp = input.temperature()
let LIMIT = 30
let PINO_LED = DigitalPin.P2
function update() {
    basic.showNumber(simTemp)
    if (simTemp > LIMIT) {
        pins.digitalWritePin(PINO_LED, 1)
    } else {
        pins.digitalWritePin(PINO_LED, 0)
    }
    
}

update()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    simTemp += 1
    update()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    simTemp -= 1
    update()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    simTemp = input.temperature()
    update()
})
