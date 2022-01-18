export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit voluptas velit, perferendis doloribus fuga enim aspernatur! !',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Commodo eu esse officia duis cillum et magna laboris veniam. Culpa in cillum nostrud ullamco consequat duis aliquip sunt culpa tempor incididunt ea..',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Officia sint exercitation adipisicing amet elit. Sint sunt irure et exercitation. Nisi cillum deserunt sit dolore amet reprehenderit tempor mollit minim. ',
            picture: null,
        },
    ]
})