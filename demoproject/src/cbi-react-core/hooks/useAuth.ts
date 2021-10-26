import { useSelector } from "react-redux"

export const useAuth = () => useSelector<{ auth: { login: boolean } }>(store => store.auth)