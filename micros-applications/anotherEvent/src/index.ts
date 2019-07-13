import EventManager from "rabbitmq-event-manager";
function start() {
    const eventManager = new EventManager({
        url: 'amqp://localhost',
        application: 'micro-another-event',
    })
    eventManager.on('ANOTHER_EVENT_NAME', (payload: any) => {
        console.log(`MICRO APP micro-another-event`);
        console.log('payload :', payload);
    });


}
start();