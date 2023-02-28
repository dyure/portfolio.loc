import { createRouter, createWebHistory } from "vue-router";

//admin
import homeAdminIndex from '../components/admin/home/index.vue'
import adminAboutIndex from '../components/admin/about/index.vue'
import adminServiceIndex from '../components/admin/services/index.vue'
import adminSkillIndex from '../components/admin/skills/index.vue'
import adminEducationIndex from '../components/admin/educations/index.vue'
import adminExperienceIndex from '../components/admin/experiences/index.vue'
import adminProjectIndex from '../components/admin/projects/index.vue'
import adminProjectNew from '../components/admin/projects/new.vue'
import adminProjectEdit from '../components/admin/projects/edit.vue'
import adminTestimonialIndex from '../components/admin/testimonials/index.vue'
import adminTestimonialNew from '../components/admin/testimonials/new.vue'
import adminTestimonialEdit from '../components/admin/testimonials/edit.vue'
import adminMessageIndex from '../components/admin/messages/index.vue'
import adminUserIndex from '../components/admin/users/index.vue'

//pages
import homePageIndex from '../components/pages/home/index.vue'

//login
import login from '../components/auth/login.vue'
import notFound from '../components/notFound.vue'

const routes = [
    //admin
    {
        path: '/admin/home',
        name: 'adminHome',
        component: homeAdminIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/about',
        name: 'adminAbout',
        component: adminAboutIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/services',
        name: 'adminService',
        component: adminServiceIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/skills',
        name: 'adminSkill',
        component: adminSkillIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/educations',
        name: 'adminEducation',
        component: adminEducationIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/experiences',
        name: 'adminExperience',
        component: adminExperienceIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/projects',
        name: 'adminProject',
        component: adminProjectIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/projects/new',
        name: 'adminProjectNew',
        component: adminProjectNew,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/projects/edit/:id',
        name: 'adminProjectEdit',
        component: adminProjectEdit,
        meta: {
            requiresAuth:true
        },
        props: true
    },
    {
        path: '/admin/testimonials',
        name: 'adminTestimonial',
        component: adminTestimonialIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/testimonials/new',
        name: 'adminTestimonialNew',
        component: adminTestimonialNew,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/testimonials/edit/:id',
        name: 'adminTestimonialEdit',
        component: adminTestimonialEdit,
        meta: {
            requiresAuth:true
        },
        props: true
    },
    {
        path: '/admin/messages',
        name: 'adminMessage',
        component: adminMessageIndex,
        meta: {
            requiresAuth:true
        }
    },
    {
        path: '/admin/users',
        name: 'adminUser',
        component: adminUserIndex,
        meta: {
            requiresAuth:true
        }
    },


    //pages
    {
        path: '/',
        name: 'Home',
        component: homePageIndex,
        meta: {
            requiresAuth:false
        }
    },
    //login
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: {
            requiresAuth:false
        }
    },
    //notFound
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta: {
            requiresAuth:false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to,from) =>{
    if (to.meta.requiresAuth && !localStorage.getItem('token')){
        return { name: 'Login' }
    }
    if (to.meta.requiresAuth == false && localStorage.getItem('token')){
        return { name: 'adminHome' }
    }
})

export default router
