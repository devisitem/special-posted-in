// https://router.vuejs.org/api/interfaces/routeroptions.html
import {useRouteStore} from "@/store/RouteStore";

export default {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('@/pages/index.vue')
        },
        {
            name: 'post',
            path: '/docs/:pathMatch(.*)*',
            component: () => import('@/pages/docs/PostView.vue')
        },
        {
            name: 'tag',
            path: '/tags/:tag/:page(\\d+)',
            component: () => import('@/components/layout/content/TagList.vue')
        },
        {
            name: 'tags',
            path: '/tags',
            component: () => import('@/components/layout/content/TagList.vue')
        }
    ],
    scrollBehavior: (to, from, savedPosition) => {
        const routeStore  = useRouteStore();
        routeStore.route(to.path);

        if (to.hash && to.path.match(/\/docs.+?/)) {
            const id = to.hash.replace('#', '');
            const element = document.getElementById(id);
            /* header height: 60, offset: 100 */
            const toBeTop = element.offsetTop - 160

            return {
                top: toBeTop,
                left: 0,
                behavior: 'smooth'
            }
        }
        return {
            behavior: 'smooth',
            top: 0,
            left: 0
        }
    }
}
