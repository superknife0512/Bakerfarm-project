
new Vue({
    el: "#app",
    data: {
        dishes:[
            {
                img: '1',
                title: 'dish 1',
                caption: 'Top desserts',
            },
            {
                img: '2',
                title: 'dish 2',
                caption: 'Awesome entré',
            },
            {
                img: '3',
                title: 'dish 3',
                caption: 'Best appetize',
            },
        ],
        isActive:false,
        navActive: false,
    },
    created(){
        setTimeout(()=>{
            this.isActive=true
        }, 1000);
        
    }
})