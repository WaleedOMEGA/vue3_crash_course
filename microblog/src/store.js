import {reactive} from 'vue'

class Store{
    constructor(){
        this.state=reactive({
posts:[{
    id:1,
    title:'my post',
    content:'this is a post'
}
]
        })
    }
}

export const store = new Store();