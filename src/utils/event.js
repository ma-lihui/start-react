export default class Event {
    constructor () {
        this.events = {}; //存储事件监听函数
        this.maxListeners = 0 //最大监听函数数量
    }

    setMaxListeners (maxNum) {
        this.maxListeners = maxNum
    }

    getMaxListeners () {
        return this.maxListeners
    }

    listeners (event) {
        return this.events[event]
    }

    addListener (type, listener) {
        if (this.events[type]) {
            if (this.maxListeners !== 0 && this.events[type].length > this.maxListeners) {
                return console.error(`该${type}事件类型的listteners超出限制，使用emitter.setMaxListeners() 来增加添加事件监听数量。`)
            }
            this.events[type].push(listener)
        } else {
            this.events[type] = [listener]
        }
    }

    once (type, listener) {
        //执行后立即销毁
        let wrapper = (...rest) => {
            listener.apply(this, rest);
            this.removeListener(type, wrapper)
        };
        this.addListener(type, wrapper)
    }

    removeListener (type, listener) {
        if (this.events[type]) {
            this.events[type] = this.events[type].filter(ev => ev !== listener)
        }
    }

    removeAllListener (type) {
        delete this.events[type]
    }

    emit (type, ...rest) {
        this.events[type] && this.events[type].forEach(listener => {
            listener.apply(this, rest)
        })
    }
}
Event.prototype.on = Event.prototype.addListener;