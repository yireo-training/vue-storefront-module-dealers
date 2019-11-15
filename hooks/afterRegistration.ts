export function afterRegistration ({ Vue, store }) {
    store.subscribe((mutation, state) => {
      const type = mutation.type
  
      if (type.endsWith('setDealers')) {
        //Vue.prototype.$db.setItem('dealers', state.dealers).catch((reason) => {
        //  console.error(reason)
        //})
      }
    })
  }
  