import { useReducer } from 'react'

export default function useCart() {

    const reducer = (cart,action)=>{
        
        switch(action.type)
        {
            case 'ADD': {
                    let newcart = [...cart,{Id:action.id,count:1}]
                    return newcart;
            }
            case 'DELETE':{
                    let newcart = cart.filter((item)=> item.Id !== action.id)
                    return newcart
                    
            }
            case 'INCREMENT':{
                    let newcart = cart.map((item)=>{
                        
                        if(item.Id !== action.id)
                            return item;

                        let newCount = item.count+1;
                        return {...item,count:newCount}
                        
                    })
                    return newcart
                    
            }
            case 'DECREMENT':{
                    let newcart = cart.map((item)=>{
                            
                        if(item.Id !== action.id)
                            return item;

                        let newCount = item.count>1 ? item.count-1 : 1;
                        return {...item,count:newCount}
                    })

                    return newcart
            }

            default: return cart

        }
    }

    const [cart,dispatcher] = useReducer(reducer,[])

    return [cart,dispatcher]

}
