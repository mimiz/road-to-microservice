import EventManager from "nodejs-event-manager";
let manager: EventManager | null = null
export function initEventManager(): EventManager {
    manager = new EventManager({
        application: 'monolith',
    })
    return manager;
}

export function getEventManager(): EventManager {
    if (manager) {
        return manager;
    }
    throw new Error('EventManager have not been initialized')
}