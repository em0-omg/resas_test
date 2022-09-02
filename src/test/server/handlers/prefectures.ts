import { rest } from 'msw';

import { GET_PREFECTURES_API_PATH } from '@/config';

export const prefecturesHandlers = [
  rest.get(`${GET_PREFECTURES_API_PATH}`, (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          result: [
            {
              prefCode: 1,
              prefName: '北海道',
            },
            {
              prefCode: 2,
              prefName: '青森',
            },
          ],
        })
      );
    } catch (error) {
      return res(ctx.status(400));
    }
  }),
];
