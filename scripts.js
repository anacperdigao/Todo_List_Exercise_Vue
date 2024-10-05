const TodoList = {
    data (){
        return {
            itensList: [],
            newItem: { 
                text: "", 
                status: false 
            },
        }
    },
    
    methods: {
        
        addNewItem () {
            if (this.newItem.text.length >= 3) {
                this.itensList.push(this.newItem)
                this.newItem = {
                    text: "",
                    status: false
                }
            }

            localStorage.setItem("itensList", JSON.stringify(this.itensList))
        },
        
        cleanAll () {
            this.itensList = []
            localStorage.setItem("itensList", JSON.stringify([]))
        },
    },

        created() {
            this.itensList = localStorage.getItem("itensList") ? JSON.parse(localStorage.getItem("itensList")) : this.itensList
        },

        updated() {
            localStorage.setItem("itensList", JSON.stringify(this.itensList))
        }

}

Vue.createApp(TodoList).mount('#app')