// import Quandl from '../utils/Quandl';
import superagent from 'superagent';


export default function loadSymbol(req, params) {
  return new Promise((resolve, reject) => {
    const request = superagent.get('https://www.quandl.com/api/v3/datasets.json');
    const queryParams = {database_code: 'WIKI', query: req.query.query, auth_token: 'psu11gxsvvLrhdVeaz99'};
    request.query(queryParams);
    request.end((err, req2) => {
      err ? reject(req2.body || err) : resolve(req2.body)
    });
  });
}
