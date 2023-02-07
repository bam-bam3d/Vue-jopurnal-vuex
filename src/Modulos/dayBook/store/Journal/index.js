

import state from './state'
import * as Actions from './Actions'
import * as Mutations from './Mutations'
import * as Getters from './Getters'

const journalModule = {
    namespaced: true,
    Getters,
    Mutations,
    Actions,
    state
}

export default journalModule