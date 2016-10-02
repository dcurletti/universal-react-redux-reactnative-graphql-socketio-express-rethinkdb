import Rethink, {r, type} from '../utils/rethink';

export default Rethink.createModel("users", {
  id: type.string(),
  name: type.string().default('so sick'),
  createdAt: type.date().default(r.now())
});
