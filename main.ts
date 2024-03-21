basic.pause(1000)
basic.forever(function () {
    calliBot2.setRgbLed(C2RgbLed.All, 12, 0, 11)
    calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 44)
    calliBot2.warte(C2SensorWait.distanceCm, C2Check.equal, 1)
    calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
})
