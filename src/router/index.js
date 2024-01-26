import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import PageNotFoundComponent from '../components/PageNotFoundComponent.vue'
import InsightsView from '../views/InsightsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/insights',
      name: 'insights',
      component: InsightsView,
    },
    // {
    //   path: '/insights/:id',
    //   name: 'insights-detail',
    //   component: InsightsDetailView,
    // },
    {
      path: '/:pathMatch(.*)',
      component: PageNotFoundComponent
    },
  ],
  scrollBehavior () {
    // always scroll to top
    return {top: 0, behavior: 'smooth'}
  }
})

export default router
