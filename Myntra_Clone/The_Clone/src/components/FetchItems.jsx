import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/ItemsSlice'
import { fetchStatusActions } from '../store/fetchStatusSlice'

function FetchItems() {

    const fetchStatus = useSelector((store)=>store.fetchStatus)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(fetchStatus.fetchingDone) return;

        dispatch(fetchStatusActions.markFetchingStarted());
        const controller = new AbortController();
        const signal = controller.signal;
        fetch("http://localhost:8080/items",{signal})
        .then((res)=> res.json())
        .then((item) => {
            dispatch(fetchStatusActions.markFetchDone())
            dispatch(fetchStatusActions.markFetchingFinished())
            dispatch(itemsActions.addInitialItems(item.items));
        })
        
        return () => {
            controller.abort();
        }

    },[fetchStatus])

  return (
   <></>
  )
}

export default FetchItems