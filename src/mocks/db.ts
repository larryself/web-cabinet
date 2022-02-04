import { factory, primaryKey } from '@mswjs/data';
import { FactoryAPI } from '@mswjs/data/lib/glossary';

type Operators = {
  operators: {
    id: string;
    name: string;
    logo: string;
  };
};
export const mocksOperators = [
  { id: '1', name: 'mts', logo: '/img/mts.svg' },
  { id: '2', name: 'beeline', logo: '/img/beeline.svg' },
  { id: '3', name: 'megafon', logo: '/img/megafon.svg' },
];
export const db: FactoryAPI<Operators> = factory({
  operators: {
    id: primaryKey(String),
    name: String,
    logo: String,
  },
});

mocksOperators.forEach((operator) => db.operators.create(operator));
