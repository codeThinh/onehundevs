function Stopwatch() {
    let time, start, end = 0;
    let isStarted = false;
    this.start = function() {
        if ( isStarted ) {
            throw new Error("Stopwatch is already started")
        } else {
            isStarted = true;
            start = new Date();
        }
    }
    this.stop = function() {
        if ( isStarted ) {
            isStarted = false;
            end = new Date();
            let seconds = ( end.getTime() - start.getTime() ) / 1000;
            time += seconds;
        } else {
            throw new Error("Stopwatch is not started");
        }
    }
    this.duration = function() {
        console.log(time);
        return time;
    }
    this.reset = function() {
        this.time = 0;
        isStarted = false;
        start = 0;
        end = 0;
    }
}

const sw = new Stopwatch()