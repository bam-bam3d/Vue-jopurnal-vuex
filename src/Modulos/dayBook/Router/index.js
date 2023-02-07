export default{
    
    
    name: 'DayBook',
    component: () => import('@/Modulos/dayBook/Layouts/dayBooksLayout.vue'),

    children:[
        {
    
            path: '',
            name: 'no-entry',
            component: () => import('@/Modulos/dayBook/views/noEntrySelected.vue'),
    
        },
        {
    
            path: ':id',
            name: 'entry',
            component: () => import('@/Modulos/dayBook/views/EntryView.vue'),
    
        }
    ]
}