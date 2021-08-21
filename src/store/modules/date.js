const state = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
}

const getters = {
    getDayOfWeek(state) {
        return state.days[(new Date()).getDay()];
    },
    getMonthOfYear(state) {
        return state.months[(new Date()).getMonth()];
    },
    getDateOfMonth() {
        const date = (new Date()).getDate();
        if (date === 1 || date === 21 || date === 31) {
            return date + 'st';
        }
        if (date === 2 || date === 22) {
            return date + 'nd';
        }
        if (date === 3 || date === 23) {
            return date + 'rd';
        }
        return date + 'th';
    },
}

const mutations = {}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions,
}