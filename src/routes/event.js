import {
    Router
} from 'express';
import {
    createEvent,
    getAllEvents,
    getEventById,
    getEventsByUserId,
    getEventsNearMe,
    searchBytitle
} from '../controller/event.js';
import {
    authGuard
} from '../middleware/index.js';

const eventRouter = Router();

eventRouter.post('', authGuard, createEvent);
eventRouter.get('', getAllEvents);
eventRouter.get('/users', authGuard, getEventsByUserId);
eventRouter.get('/locations', getEventsNearMe);
eventRouter.get('/search', searchBytitle);
eventRouter.get('/:eventId', getEventById);

export {
    eventRouter
};