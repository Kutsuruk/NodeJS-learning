const EventEmitter = require('events')
const { emit, eventNames } = require('process')

/* const emitter = new EventEmitter()

emitter.on('anything', (data) => {
    console.log('On anything:', data)
})

setTimeout(() => {
    emitter.emit('anything', {id: 1, name: 'Amdin', isAdmin: true, isUser: false})
}, 2000)

setTimeout(() => {
    emitter.emit('anything', {id: 2, name: 'User', isAdmin: false, isUser: true})
}, 5000) */


class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe....]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching....]')
        this.emit(eventName, data)
    }
}

const disp = new Dispatcher()

disp.subscribe('aa', (data) => {
    console.log('On aa:', data)
})

disp.dispatch('aa', {aa: 42})

