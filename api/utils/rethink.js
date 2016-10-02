import thinky from 'thinky';
import config from '../../src/config';

const db = thinky(config.rethinkdb);

export const r = db.r;
export const type = db.type;

export default db;
