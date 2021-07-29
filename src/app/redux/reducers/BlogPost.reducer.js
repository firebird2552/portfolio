import { initial } from 'lodash'
import { Reducer } from 'redux'

const InitialState = {
    BlogPosts: [
        {
            id: "post1",
            title: "Rando Blog Post 1",
            article:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque voluptatem? Aperiam similique modi veritatis reprehenderit pariatur rerum quae repudiandae excepturi animi dolorum cumque ex eaque magnam, adipisci illum eos praesentium ipsa maxime impedit? Reiciendis quasi architecto quibusdam iure eius quos est perspiciatis! Quam officia eius sint amet magni nam illum eaque dignissimos reprehenderit ad suscipit voluptate, perferendis laudantium praesentium obcaecati repellendus illo minus ipsum? Pariatur, facilis. Saepe odio reiciendis, minus veritatis sequi in quibusdam, aliquam veniam magni nemo quod, iure debitis perferendis. Itaque asperiores neque vel placeat pariatur esse ad nostrum officia blanditiis iure quia recusandae maiores ipsam dicta distinctio incidunt, velit nobis impedit soluta consequuntur magnam molestiae. Minima consequuntur non sint aspernatur eveniet tempora quo laborum vitae error officia, voluptate mollitia ab voluptatum veritatis beatae nam omnis nihil corporis esse odit reprehenderit aperiam at modi! Omnis voluptate eos amet quod cum optio, asperiores atque excepturi, inventore totam facilis, porro eius quam exercitationem pariatur impedit repellendus numquam perferendis tenetur vero culpa quidem qui. Autem nulla quis eveniet et eos odit, quod atque aliquam cupiditate fuga. Magnam odit dolor, ipsa libero, necessitatibus cum impedit odio explicabo pariatur maxime illo sequi tenetur distinctio corporis hic suscipit molestias obcaecati at laudantium. Laborum.",
            author: "Fordorth",
            date: "07/19/2021",
            likes: 245,
            comments: [{
                id: "comment 1",
                author: "Bob",
                date: "04/12/2015",
                comment: "Man this is an old project... lol"
            },
            {
                id: "comment 2",
                author: "Brenda",
                date: "01/13/2021",
                comment: "OMG! A Battle Cruiser"
            },
            {
                id: "comment 3",
                author: "Maru",
                date: "07/28/2021",
                comment: "My 4 year old sister beat Vibe!"
            },]
        },
        {
            id: "post2",
            title: "Rando Blog Post 2",
            article:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                'img:{"url":"https://via.placeholder.com/150","width":"150px","height":"150px","side":"left"} ' +
                " Totam, eaque voluptatem? Aperiam similique modi veritatis reprehenderit pariatur rerum quae repudiandae excepturi animi dolorum cumque ex eaque " +
                'img:{"url":"https://via.placeholder.com/200","width":"150px","height":"150px","side":"right"} ' +
                "magnam, adipisci illum eos praesentium ipsa maxime impedit? Reiciendis quasi architecto quibusdam iure eius quos est perspiciatis! Quam officia eius sint amet magni nam illum eaque dignissimos reprehenderit ad suscipit voluptate, perferendis laudantium praesentium obcaecati repellendus illo minus ipsum? Pariatur, facilis. Saepe odio reiciendis, minus veritatis sequi in quibusdam, aliquam veniam magni nemo quod, iure debitis perferendis. Itaque asperiores neque vel placeat pariatur esse ad nostrum officia blanditiis iure quia recusandae maiores ipsam dicta distinctio incidunt, velit nobis impedit soluta consequuntur magnam molestiae. Minima consequuntur non sint aspernatur eveniet tempora quo laborum vitae error officia, voluptate mollitia ab voluptatum veritatis beatae nam omnis nihil corporis esse odit reprehenderit aperiam at modi! Omnis voluptate eos amet quod cum optio, asperiores atque excepturi, inventore totam facilis, porro eius quam exercitationem pariatur impedit repellendus numquam perferendis tenetur vero culpa quidem qui. Autem nulla quis eveniet et eos odit, quod atque aliquam cupiditate fuga. Magnam odit dolor, ipsa libero, necessitatibus cum impedit odio explicabo pariatur maxime illo sequi tenetur distinctio corporis hic suscipit molestias obcaecati at laudantium. Laborum.",
            author: "Fordorth",
            date: "07/19/2021",
            likes: 245,
        },
        {
            id: "post3",
            title: "Rando Blog Post 3",
            article:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque voluptatem? Aperiam similique modi veritatis reprehenderit pariatur rerum quae repudiandae excepturi animi dolorum cumque ex eaque magnam, adipisci illum eos praesentium ipsa maxime impedit? Reiciendis quasi architecto quibusdam iure eius quos est perspiciatis! Quam officia eius sint amet magni nam illum eaque dignissimos reprehenderit ad suscipit voluptate, perferendis laudantium praesentium obcaecati repellendus illo minus ipsum? Pariatur, facilis. Saepe odio reiciendis, minus veritatis sequi in quibusdam, aliquam veniam magni nemo quod, iure debitis perferendis. Itaque asperiores neque vel placeat pariatur esse ad nostrum officia blanditiis iure quia recusandae maiores ipsam dicta distinctio incidunt, velit nobis impedit soluta consequuntur magnam molestiae. Minima consequuntur non sint aspernatur eveniet tempora quo laborum vitae error officia, voluptate mollitia ab voluptatum veritatis beatae nam omnis nihil corporis esse odit reprehenderit aperiam at modi! Omnis voluptate eos amet quod cum optio, asperiores atque excepturi, inventore totam facilis, porro eius quam exercitationem pariatur impedit repellendus numquam perferendis tenetur vero culpa quidem qui. Autem nulla quis eveniet et eos odit, quod atque aliquam cupiditate fuga. Magnam odit dolor, ipsa libero, necessitatibus cum impedit odio explicabo pariatur maxime illo sequi tenetur distinctio corporis hic suscipit molestias obcaecati at laudantium. Laborum.",
            author: "Fordorth",
            date: "07/19/2021",
            likes: 245,
        },
    ]
}

export const BlogPosts = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}