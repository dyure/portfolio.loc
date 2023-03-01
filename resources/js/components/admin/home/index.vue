<script setup>
    import { useRouter } from 'vue-router'
    import Base from '../layouts/base.vue'
    import { onMounted, ref } from 'vue'

    let skills = ref([])
    let services = ref([])
    let educations = ref([])
    let experiences = ref([])
    let projects = ref([])
    let messages = ref([])
    let testimonials = ref([])
    let users = ref([])

    const router = useRouter()
    const logout = () => {
        localStorage.removeItem('token')
        router.push('/')
    }

    onMounted(async () => {
        getSkills()
        getServices()
        getEducations()
        getExperiences()
        getProjects()
        getMessages()
        getTestimonials()
        getUsers()
    })

    const getSkills = async () => {
        let response = await axios.get('/api/get_all_skill')
        skills.value = response.data.skills
    }

    const getServices = async () => {
        let response = await axios.get('/api/get_all_service')
        services.value = response.data.services
    }

    const getEducations = async () => {
        let response = await axios.get('/api/get_all_education')
        educations.value = response.data.educations
    }
    const getExperiences = async () => {
        let response = await axios.get('/api/get_all_experience')
        experiences.value = response.data.experiences
    }

    const getProjects = async () => {
        let response = await axios.get('/api/get_all_project')
        projects.value = response.data.projects
    }

    const getMessages = async () => {
        let response = await axios.get('/api/get_all_message')
        messages.value = response.data.messages
    }

    const getTestimonials = async () => {
        let response = await axios.get('/api/get_all_testimonial')
        testimonials.value = response.data.testimonials
    }

    const getUsers = async () => {
        let response = await axios.get('/api/get_all_user')
        users.value = response.data.users
    }

    const ourImage = (img) => {
        return '/img/upload/' + img
    }
</script>

<template>
    <Base />
        <!--==================== MAIN ====================-->
        <main class="main">
            <!-- Side Nav Dummy-->
            <div class="main__sideNav"></div>
            <!-- End Side Nav -->
            <!-- Main Content -->
            <div class="main__content">
                <!-- ==================-->
                <!-- Overview Page -->
                <section class="overview" id="overview">
                    <div class="overview_left">
                        <div class="overview_analyse">
                            <canvas id="chart" width="1228" height="614" style="display: block; box-sizing: border-box; height: 614px; width: 100%;"></canvas>
                        </div>
                        <div class="titlebar">
                            <div class="titlebar_item">
                                <h1>Skills</h1>
                            </div>
                            <div class="titlebar_item">

                            </div>
                        </div>
                        <div class="overview_skills" v-for="service in services" :key="service.id">
                            <div class="overview_skills-title">
                                <h3>{{ service.name }}</h3>
                            </div>
                            <div v-for="skill in skills" :key="skill.id">
                                <div class="skills_data" v-if="service.id == skill.service_id">
                                    <div class="skills_titles">
                                        <h3 class="skills_name">{{ skill.name }}</h3>
                                        <span class="skills_number">{{ skill.proficiency }}%</span>
                                    </div>
                                    <div class="skills_bar">
                                        <span class="skills_percentage skills_html" :style="{ 'width' : `${ skill.proficiency }%`}"></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="overview_right">
                        <div class="titlebar">
                            <div class="titlebar_item">
                                <h1>Overview Dashboard</h1>
                            </div>
                            <div class="titlebar_item">

                            </div>
                        </div>

                        <!-- TOP CARDS -->
                        <div class="overview_cards">
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Skills</p>
                                    <span>{{ skills.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/skills">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Educations</p>
                                    <span>{{ educations.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/educations">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Experience</p>
                                    <span>{{ experiences.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/experiences">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Services</p>
                                    <span>{{ services.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/services">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Projects</p>
                                    <span>{{ projects.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/projects">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Testimonials</p>
                                    <span>{{ testimonials.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/testimonials">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Messages</p>
                                    <span>{{ messages.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/messages">View Reports</a>
                                </div>
                            </div>
                            <div class="overview_cards-item">
                                <div class="overview_data">
                                    <p>Users</p>
                                    <span>{{ users.length }}</span>
                                </div>
                                <div class="overview_link">
                                    <span></span>
                                    <a href="/admin/users">View Reports</a>
                                </div>
                            </div>


                        </div>
                        <!-- MEDIUM CARDS -->
                        <div class="overview_table">
                            <div class="overview_table-title">
                                <div class="titlebar">
                                    <div class="titlebar_item">
                                        <h1>Latest Projects</h1>
                                    </div>
                                    <div class="titlebar_item">

                                    </div>
                                </div>
                                <div class="table">
                                    <div class="overview_table-header">
                                       <p>Image</p>
                                       <p>Product</p>
                                    </div>
                                    <div class="overview_table-items" v-for="project in projects" :key="project.id">
                                        <img :src="ourImage(project.photo)" style="height:50px;width:50px;" />
                                        <a>{{ project.title }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="overview_table-title">
                                <div class="titlebar">
                                    <div class="titlebar_item">
                                        <h1>Latest Testimonials</h1>
                                    </div>
                                    <div class="titlebar_item">

                                    </div>
                                </div>
                                <div class="table">
                                    <div class="overview_table-header">
                                       <p>Image</p>
                                       <p>Product</p>
                                    </div>
                                    <div class="overview_table-items" v-for="testimonial in testimonials" :key="testimonial.id">
                                        <img :src="ourImage(testimonial.photo)" style="height:50px;width:50px;" />
                                        <a>{{ testimonial.name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            <!--==================== ABOUT ====================-->


            <!--==================== SKILLS ====================-->
            <section class="skills section" id="skills">

            </section>

            <!--==================== QUALIFICATION ====================-->
            <section class="qualification section">

            </section>

            <!--==================== SERVICES ====================-->
            <section class="services section" id="services">

            </section>

            <!--==================== PORTFOLIO ====================-->
            <section class="portfolio section" id="portfolio">

            </section>

            <!--==================== PROJECT IN MIND ====================-->
            <section class="project section">

            </section>

            <!--==================== TESTIMONIAL ====================-->
            <section class="testimonial section">

            </section>

            <!--==================== CONTACT ME ====================-->
            <section class="contact section" id="contact">

            </section>
            </div>
        </main>

        <!--==================== FOOTER ====================-->
        <footer class="footer">

        </footer>
</template>
