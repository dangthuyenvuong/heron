import { notificationSaga } from './notification';
import { settingSaga } from './setting';
import { authSaga } from "./auth";
import { createRootSaga } from "cbi-react-core";

const rootSaga = createRootSaga([
	notificationSaga,
	settingSaga,
	authSaga
])

export default rootSaga