const initialState = {
    projects: [
        {
            title: "meow",
            imageURLs: [
                "https://www.placecage.com/200/300",
                "https://www.placecage.com/g/200/300",
                "https://www.placecage.com/c/200/300",
            ],
            client: "Disney",
            startDate: "01/01/1985",
            endDate: "03/01/1985",
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora, illum voluptatem amet veniam nisi rem at maiores sit in dolore itaque natus laborum officiis nostrum eligendi, ad dicta a?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia corrupti numquam quam quisquam veniam vitae consequuntur iusto cum ea ipsum vel explicabo, rem aliquam hic qui facere nesciunt illum nihil nobis cumque et rerum ad! Officiis, odio neque cumque blanditiis molestias ipsam cum minus alias impedit dolore vel illo provident pariatur tempore quidem enim temporibus quod incidunt veniam officia nesciunt. Numquam iste placeat officiis perferendis earum, soluta necessitatibus, magni adipisci sequi magnam autem veniam qui sed alias natus unde veritatis eos totam! Harum suscipit tempore illum nam, quia sequi unde repudiandae vero cupiditate voluptates ipsam repellat minima accusantium, aliquam aperiam vitae cumque aut accusamus amet molestias quas quaerat. Tenetur porro corrupti libero doloribus debitis harum totam quasi dignissimos itaque. Sint, quod in. Esse distinctio fuga possimus, maiores quibusdam quis numquam optio nihil facere vel quaerat temporibus dolores velit aliquid blanditiis doloremque porro? Corrupti repudiandae sit vel fugiat possimus sapiente iste autem iusto, placeat ducimus ipsa nam quidem odit eum. Quis voluptate eligendi nulla, illum similique libero eum ex tenetur repellendus at quo. Quae beatae nemo, et, rerum possimus asperiores excepturi ipsam exercitationem cupiditate deleniti officiis odio animi placeat? Soluta dicta molestiae ut adipisci mollitia voluptatem eius alias in deleniti?"
        },
        {
            title: "another meow",
            imageURLs: [
                "https://www.placecage.com/200/300",
                "https://www.placecage.com/g/200/300",
                "https://www.placecage.com/c/200/300",
            ],
            client: "Disney",
            startDate: "01/01/1985",
            endDate: "03/01/1985",
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora, illum voluptatem amet veniam nisi rem at maiores sit in dolore itaque natus laborum officiis nostrum eligendi, ad dicta a?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia corrupti numquam quam quisquam veniam vitae consequuntur iusto cum ea ipsum vel explicabo, rem aliquam hic qui facere nesciunt illum nihil nobis cumque et rerum ad! Officiis, odio neque cumque blanditiis molestias ipsam cum minus alias impedit dolore vel illo provident pariatur tempore quidem enim temporibus quod incidunt veniam officia nesciunt. Numquam iste placeat officiis perferendis earum, soluta necessitatibus, magni adipisci sequi magnam autem veniam qui sed alias natus unde veritatis eos totam! Harum suscipit tempore illum nam, quia sequi unde repudiandae vero cupiditate voluptates ipsam repellat minima accusantium, aliquam aperiam vitae cumque aut accusamus amet molestias quas quaerat. Tenetur porro corrupti libero doloribus debitis harum totam quasi dignissimos itaque. Sint, quod in. Esse distinctio fuga possimus, maiores quibusdam quis numquam optio nihil facere vel quaerat temporibus dolores velit aliquid blanditiis doloremque porro? Corrupti repudiandae sit vel fugiat possimus sapiente iste autem iusto, placeat ducimus ipsa nam quidem odit eum. Quis voluptate eligendi nulla, illum similique libero eum ex tenetur repellendus at quo. Quae beatae nemo, et, rerum possimus asperiores excepturi ipsam exercitationem cupiditate deleniti officiis odio animi placeat? Soluta dicta molestiae ut adipisci mollitia voluptatem eius alias in deleniti?"
        },
    ]
}

export const Projects = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}