import { prefecturesHandlers } from './prefectures';
import { populationHandler } from './population';

export const handlers = [...prefecturesHandlers, ...populationHandler];
