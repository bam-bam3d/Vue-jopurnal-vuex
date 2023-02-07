import {createStore} from 'vuex'

import journalModule from '../Modulos/dayBook/store/Journal'

const store = createStore({
   modules:{
    journal: journalModule
   } 
})

export default store