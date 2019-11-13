import { createModule } from '@vue-storefront/core/lib/module'
import { module as vuexModule } from './store'
import { afterRegistration } from './hooks/afterRegistration'
import moduleRoutes from './router'

const KEY = 'dealers'

export const Dealers = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module: vuexModule }] },
  router: { routes: moduleRoutes },
  afterRegistration
})
