import { useAppDispatch } from "./store"
import { clearCurrentRoads } from "./store/roads"
import { clearCurrentSettlements } from "./store/settlements"
import { clearCurrentWorld } from "./store/worlds"

export const ClearAll = () => {
    const dispatch = useAppDispatch()
    dispatch(clearCurrentRoads())
    dispatch(clearCurrentSettlements())
    dispatch(clearCurrentWorld())
}
