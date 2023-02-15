<script setup>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    let form = reactive ({
        email: '',
        password: '',
    })

    let error = ref('')

    const login = async() => {
        await axios.post('/api/login', form)
        .then(response => {
            console.log(response)
            if (response.data.success) {
                localStorage.setItem('token', response.data.data.token)
                router.push('/admin/home')
            } else {
                error.value = response.data.message;
            }
        })
    }
</script>
<template>
    <div class="login">
        <div class="login__body">
            <p class="text-danger" v-if="error">{{ error }}</p>
            <form @submit.prevent="login">
                <input class="input_auth" type="email" placeholder="Enter your email" v-model="form.email" />
                <br>
                <input class="input_auth" type="password" placeholder="Enter your password" v-model="form.password" />
                <br>
                <input type="submit" value="Login" class="input_auth submit"/>
            </form>
        </div>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira sans', sans-serif;
        font-size: 16px;
    }
    .login {
        background: #6c5ce7;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
    }
    .login__body {
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;
        flex-wrap: wrap;
    }
    .input_auth {
        background: rgba(228, 232, 243, .8);
        border: none;
        color: rgba(80, 80, 80, 1);
        padding: 0 0 0 4rem;
        margin: 0 0 1em 0;
        width: 20em;
        height: 2.8em;
        outline: none;
        transition: background-color 0.4s;
    }
    .input_auth:hover,
    .input_auth:focus {
        background: rgba(255, 255, 255, .8);
    }
    .submit {
        color: rgba(35, 35, 35, .8);
        background: rgba(220, 220, 220, 1);
        padding: 0;
        margin: 2.5em 0 0 5em;
        width: 10em;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.4s;
    }
    .submit:hover,
    .submit:focus {
        background: #43467f;
        color: #ffffff;
    }
    .text-danger {
        color: red;
        font-size: 16px;
    }
</style>
