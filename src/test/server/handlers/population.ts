import { populationDataMixed } from './../../../assets/dummyData/index';
import { rest } from 'msw';
import { populationData } from '@/assets/dummyData';

import { GET_POPULATION_API_PATH } from '@/config';

export const populationHandler = [
  rest.get(`${GET_POPULATION_API_PATH}`, (req, res, ctx) => {
    const cityCode = req.url.searchParams.get('cityCode');
    const prefCode = req.url.searchParams.get('prefCode');
    const addArea = req.url.searchParams.get('addArea');

    try {
      // reqのparamsに必須の値がない場合は400
      if (!cityCode && !prefCode) {
        return res(ctx.status(400));
      }
      // reqのparamsの値によって別の値を返す想定
      if (cityCode === '-' && prefCode === '1' && addArea) {
        return res(
          ctx.status(200),
          ctx.json({
            message: null,
            result: populationDataMixed,
          })
        );
      } else if (cityCode === '-' && prefCode === '1') {
        return res(
          ctx.status(200),
          ctx.json({
            message: null,
            result: populationData,
          })
        );
      } else {
        return res(ctx.status(400));
      }
    } catch (error) {
      return res(ctx.status(400));
    }
  }),
];
