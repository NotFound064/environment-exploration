let simTemp = input.temperature()
let LIMIT = 30
let PINO_LED = DigitalPin.P1
function atualizar() {
    basic.showNumber(simTemp)
    if (simTemp > LIMIT) {
        pins.digitalWritePin(PINO_LED, 1)
    } else {
        pins.digitalWritePin(PINO_LED, 0)
    }
    
}

atualizar()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    simTemp += 1
    atualizar()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    simTemp -= 1
    atualizar()
})
