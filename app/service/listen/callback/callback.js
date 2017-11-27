const Rx = require('rx');

/*
全局事件中心
*/

const callback = function(){
    const listener = new Rx.BehaviorSubject(false);
    const listener$ = listener.asObservable();
    const push = function(message){
        listener.onNext(message);
    }
    return {listener$:listener$,push:push};
}
module.exports = callback();