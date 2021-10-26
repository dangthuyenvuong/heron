import { authSaga } from "./auth";
import { createRootSaga } from "cbi-react-core";

export const saga = createRootSaga([
    authSaga
])