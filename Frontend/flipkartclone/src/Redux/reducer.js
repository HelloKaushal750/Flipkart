

const initialState = {
    showLogin: false
}


const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGINPAGE':{
            return {...state,showLogin:action.payload}
        }
        default:{
            return state
        }
    }
}

export default reducer;