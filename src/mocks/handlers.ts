import { rest } from 'msw';
import { res } from './res';

const operators = [
  { id: 1, name: 'mts', logo: '/img/mts.svg' },
  { id: 2, name: 'beeline', logo: '/img/beeline.svg' },
  { id: 3, name: 'megafon', logo: '/img/megafon.svg' },
];

export const handlers = [
  rest.get('https://my.backend/operators', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(operators));
  }),
  rest.get('https://my.backend/operators/:name', (req, res, ctx) => {
    const { name } = req.params;
    const operator = operators.find((operator) => operator.name === name);
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
];
