import { rest } from 'msw';
import { prefecturesData } from '@/assets/dummyData';

import { GET_PREFECTURES_API_PATH } from '@/config';

export const prefecturesHandlers = [
  rest.get(`${GET_PREFECTURES_API_PATH}`, (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          result: prefecturesData,
        })
      );
    } catch (error) {
      return res(ctx.status(400));
    }
  }),
];
