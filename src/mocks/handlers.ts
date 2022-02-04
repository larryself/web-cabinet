import { rest, RestRequest } from 'msw';
import { res } from './res';
import { db } from './db';

type UserBody = {
  operatorName: string;
  logo: string;
};
export const handlers = [
  rest.get('https://my.backend/operators', (req, _, ctx) => res(ctx.status(200), ctx.json(db.operators.getAll()))),
  rest.get('https://my.backend/operators/:name', (req, _, ctx) => {
    const { name } = req.params;
    const operator = db.operators.findFirst({ where: { name: { equals: name } } });
    if (!operator) {
      return res(ctx.status(403));
    }
    return res(ctx.status(200), ctx.json(operator));
  }),
  rest.post('https://my.backend/pay', (req, _, ctx) => {
    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      return res(ctx.status(503));
    }
    return res(ctx.status(200));
  }),
  rest.post('https://my.backend/operators', (req: RestRequest<UserBody>, _, ctx) => {
    const { operatorName, logo } = req.body;
    const findOperator = db.operators.findFirst({ where: { name: { equals: operatorName } } });
    if (!findOperator) {
      db.operators.create({
        id: operatorName,
        name: operatorName,
        logo,
      });
      return res(ctx.status(200));
    }
    return res(ctx.status(403));
  }),
];
