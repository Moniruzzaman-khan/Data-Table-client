import axios from "axios";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {SetALLProduct, SetTotal} from "../redux/state-slice/product-slice";
const BaseURL="https://silly-pike.cyclic.app/api/v1"



export function GetProductList(pageNo,perPage,searchKey){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/ProductList/"+pageNo+"/"+perPage+"/"+searchKey;
    axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetALLProduct(res.data['data']))
            store.dispatch(SetTotal(res.data['total']))

        }
        else{
            console.log("Something went wrong")
        }
    }).catch((e)=>{
        store.dispatch(HideLoader())
    });
}

