import { getEventManager } from "./eventManager";

export function initListeners() {
    const eventManager = getEventManager();
    eventManager.on('USER_HAS_REGISTERED', userRegisteredHandler);
    eventManager.on('ANOTHER_EVENT_NAME', anotherEventHandler);
}

function userRegisteredHandler(payload: any) {
    console.log(`Handler userRegisteredHandler`);
    console.log('payload :', payload);
}

function anotherEventHandler(payload: any) {
    console.log(`Handler anotherEventHandler`);
    console.log('payload :', payload);
}