export default {
    async registerCoach(context, data) {
        const coachId = context.rootGetters.userId
        const dataForm = {
            id: context.rootGetters.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas,
        }

        const respond = await fetch(`https://vue-http-demo-ccafc-default-rtdb.firebaseio.com/coachs/${coachId}.json`, {
            method: 'PUT',
            body: JSON.stringify(dataForm)
        })

        if (!respond) {
            // error
        }

        context.commit('registerCoach', { ...dataForm, id: coachId })
    },

    async loadCoaches(context) {
        const response = await fetch(`https://vue-http-demo-ccafc-default-rtdb.firebaseio.com/coachs.json`)
        const responsData = await response.json();
        if (!response) {
            //
        }
        const coaches = []
        for (const key in responsData) {
            const coach = {
                id: key,
                firstName: responsData[key].firstName,
                lastName: responsData[key].lastName,
                description: responsData[key].description,
                hourlyRate: responsData[key].hourlyRate,
                areas: responsData[key].areas,

            }
            coaches.push(coach)

        }
        console.log(coaches)

        context.commit('setCoaches', coaches)
    }
}