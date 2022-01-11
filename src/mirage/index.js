import { createServer, Factory, Model , Response} from 'miragejs';
export function startMirage() {
    return createServer({
        models: {
            operator: Model,
        },
        factories: {
            operator: Factory.extend({
                name(i){
                    const operatorsList = ['mts', 'beeline', 'megafon'];
                    return operatorsList[i % operatorsList.length]
                },
                logo(i){
                    const operatorsList = ['mts', 'beeline', 'megafon'];
                    return `img/${operatorsList[i % operatorsList.length]}.svg`
                }
            }),
        },
        seeds(server) {
            server.createList('operator', 6);
        },
        routes() {
            this.namespace = 'api';
            this.get('/operators', (schema) => {
                const { operators } = schema;
                return operators.all();
            });
            this.post('/pay',()=>{
                const random = Math.floor(Math.random()*10)
                if(random % 2 === 0){
                    return new Response(200)
                }
                return new Response(500, {errors: ['The database went on vacation']});
            })
        },
    });
}
