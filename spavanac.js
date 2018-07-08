const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Clock {
    constructor(h,m){
        this.hours = h
        this.minutes = m
    }
    setBack(){
        this.minutes -= 45
        if(this.minutes < 0){
            this.minutes = 60 - Math.abs(this.minutes)
            this.hours--
            if(this.hours < 0){
                this.hours = 23
            }
        }
    }
    print(){
        console.log(`${this.hours} ${this.minutes}`)
    }
}

rl.on('line', input => {
    let str = input.split(' ')
    let clock = new Clock(parseInt(str[0],10), parseInt(str[1],10))
    clock.setBack()
    clock.print()
    rl.close()
})