<script setup>
    import { Chart } from 'chart.js/auto'
    import { onMounted } from 'vue'

    let labels = []
    let proficiency = []

    const getLabels = () => {
        return axios.get('/api/get_all_skill')
        .then(data => {
            const skillsArray = data['data']
            const labels = skillsArray.skills.map(d => d.name)
            return labels
        })
    }

    const getProficiency = () => {
        return axios.get('/api/get_all_skill')
        .then(data => {
            const skillsArray = data['data']
            const proficiency = skillsArray.skills.map(d => d.proficiency)
            return proficiency
        })
    }

    onMounted(() => {
        getLabels()
        .then(data => {
            for (let i in data) {
                labels.push(data[i])
            }
            console.log('labels', labels)
        })

        getProficiency()
        .then(data => {
            for (let i in data) {
                proficiency.push(data[i])
            }
            console.log('proficiency', proficiency)
        })

        setTimeout(() => {
            new Chart(
                document.getElementById('myChart'),
                {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Skills',
                                data: proficiency,
                                backgroundColor: 'red',
                                borderColor: 'red'
                            }
                        ]
                    },
                    options: {}
                }
            )
        }, 100)
    })

</script>

<template>
    <canvas id="myChart"></canvas>
</template>

