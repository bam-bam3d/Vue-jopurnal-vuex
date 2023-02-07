
export default () => ({
    isLoading: true,
    entries: [
        {
        id: new Date().getTime(),
        date:new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consectetur.',
        picture:null,
        },
        {
            id: new Date().getTime() + 1000,
            date:new Date().toDateString(),
            text: 'dolor sit amet consectetur adipisicing elit. Perferendis praesentium suscipit ipsam laborum harum maxime, totam soluta expedita nobis officia labore ex culpa modi numquam omnis tempore iusto! Autem, consequuntur!',
            picture:null,
        },
            {
                id: new Date().getTime() + 2000,
                date:new Date().toDateString(),
                text: 'Lorem ipsum dolor sit amet.',
                picture:null,
            },
    ]
})

