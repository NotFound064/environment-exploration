
simTemp = input.temperature()
LIMIT = 30
PINO_LED = DigitalPin.P1  

def atualizar():
    basic.show_number(simTemp)

    if simTemp > LIMIT:
        pins.digital_write_pin(PINO_LED, 1)
    else:
        pins.digital_write_pin(PINO_LED, 0)

atualizar()

def on_button_pressed_a():
    global simTemp
    simTemp += 1
    atualizar()

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global simTemp
    simTemp -= 1
    atualizar()

input.on_button_pressed(Button.B, on_button_pressed_b)
