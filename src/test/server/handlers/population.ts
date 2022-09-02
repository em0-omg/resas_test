import { rest } from 'msw';

import { GET_POPULATION_API_PATH } from '@/config';

export const populationHandler = [
  // TODO: reqのparamsに値がない場合は400
  // TODO: reqのparamsの値によって決まったres
  rest.get(`${GET_POPULATION_API_PATH}`, (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          message: null,
          result: {
            boundaryYear: 1995,
            data: [
              {
                label: '総人口',
                data: [
                  {
                    year: 1995,
                    value: 10000,
                  },
                  {
                    year: 2000,
                    value: 15000,
                  },
                  {
                    year: 2005,
                    value: 20000,
                  },
                ],
              },
              {
                label: '年少人口',
                data: [
                  {
                    year: 1995,
                    value: 10000,
                  },
                  {
                    year: 2000,
                    value: 15000,
                  },
                  {
                    year: 2005,
                    value: 20000,
                  },
                ],
              },
              {
                label: '生産年齢人口',
                data: [
                  {
                    year: 1995,
                    value: 10000,
                  },
                  {
                    year: 2000,
                    value: 15000,
                  },
                  {
                    year: 2005,
                    value: 20000,
                  },
                ],
              },
              {
                label: '老年人口',
                data: [
                  {
                    year: 1995,
                    value: 10000,
                  },
                  {
                    year: 2000,
                    value: 15000,
                  },
                  {
                    year: 2005,
                    value: 20000,
                  },
                ],
              },
            ],
          },
        })
      );
    } catch (error) {
      return res(ctx.status(400));
    }
  }),
];
