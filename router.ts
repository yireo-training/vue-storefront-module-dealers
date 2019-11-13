import DealerListing from './components/DealerListing.vue'
import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
    { name: 'dealers', path: '/dealers', component: DealerListing }
]

export default routes
