import pkg from 'json-server';

const { create, router: _router, defaults } = pkg;

const server = create();
const router = _router('./src/data/dbtupasflix.json');
const middlewares = defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
