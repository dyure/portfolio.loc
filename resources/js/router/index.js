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
import adminUserProfile from '../components/admin/users/profile.vue'

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
            requiresAuth:true,
            title: 'Potrfolio/Admin'
        }
    },
    {
        path: '/admin/about',
        name: 'adminAbout',
        component: adminAboutIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/About'
        }
    },
    {
        path: '/admin/services',
        name: 'adminService',
        component: adminServiceIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Services'
        }
    },
    {
        path: '/admin/skills',
        name: 'adminSkill',
        component: adminSkillIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Skills'
        }
    },
    {
        path: '/admin/educations',
        name: 'adminEducation',
        component: adminEducationIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Educations'
        }
    },
    {
        path: '/admin/experiences',
        name: 'adminExperience',
        component: adminExperienceIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Experiences'
        }
    },
    {
        path: '/admin/projects',
        name: 'adminProject',
        component: adminProjectIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Projects'
        }
    },
    {
        path: '/admin/projects/new',
        name: 'adminProjectNew',
        component: adminProjectNew,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Projects/New'
        }
    },
    {
        path: '/admin/projects/edit/:id',
        name: 'adminProjectEdit',
        component: adminProjectEdit,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Projects/Edit/'
        },
        props: true
    },
    {
        path: '/admin/testimonials',
        name: 'adminTestimonial',
        component: adminTestimonialIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Testimonials'
        }
    },
    {
        path: '/admin/testimonials/new',
        name: 'adminTestimonialNew',
        component: adminTestimonialNew,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Testimonials/New'
        }
    },
    {
        path: '/admin/testimonials/edit/:id',
        name: 'adminTestimonialEdit',
        component: adminTestimonialEdit,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Testimonials/Edit/'
        },
        props: true
    },
    {
        path: '/admin/messages',
        name: 'adminMessage',
        component: adminMessageIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Messages'
        }
    },
    {
        path: '/admin/users',
        name: 'adminUser',
        component: adminUserIndex,
        meta: {
            requiresAuth:true,
            title: 'Potrfolio/Admin/Users'
        }
    },
    {
        path: '/admin/users/profile',
        name: 'adminUserProfile',
        component: adminUserProfile,
        meta: {
            requiresAuth:true,
            title: 'Portfolio/Admin/User Profile'
        }
    },


    //pages
    {
        path: '/',
        name: 'Home',
        component: homePageIndex,
        meta: {
            requiresAuth:false,
            title: 'Potrfolio'
        }
    },
    //login
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: {
            requiresAuth:false,
            title: 'Potrfolio/Login page'
        }
    },
    //notFound
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound,
        meta: {
            requiresAuth:false,
            title: 'Potrfolio/404 page'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to,from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')){
        return { name: 'Login' }
    }
    if (to.meta.requiresAuth == false && localStorage.getItem('token')){
        return { name: 'adminHome' }
    }
    document.title = to.meta.title
})

export default router
