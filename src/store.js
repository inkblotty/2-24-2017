let store = {
    user: {
        id: 44327,
        name: 'Katie Foster',
        role: 'user',
        recipes: [
            {
                name: 'Loaded Guacamole Tacos',
                id: '001',
                img: 'http://images.soupaddict.com/loaded-guacamole-vegetarian-tacos-3-062214.jpg',
                ingredients: [
                    'fresh avocados',
                    'black beans',
                    'jalapenos',
                    'tomatoes or tomatillos',
                    'corn or small flour tortillas',
                    'corn',
                    'lime',
                    'cilantro'
                ],
                source: 'http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/',
                categories: ['mexican', 'dinner', 'gluten-free']
            },
            {
                name: 'Green Curry',
                id: '002',
                ingredients: [
                    'coconut milk',
                    'carrots',
                    'onions',
                    'garlic',
                    'green curry paste',
                    'asparagus',
                    'cilantro'
                ],
                img: 'http://cookieandkate.com/images/2015/03/thai-green-curry-recipe-0.jpg',
                source: 'http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/',
                categories: ['asian', 'curry', 'dinner', 'vegan']
            },
            {
                name: 'Raspberry Chocolate Tart',
                id: '003',
                ingredients: [
                    'raspberry preserves',
                    'cocoa powder',
                    'fresh raspberries',
                    'coconut milk',
                    'almond flour'
                ],
                img: 'http://www.bakerita.com/wp-content/uploads/2015/06/No-Bake-Raspberry-Chocolate-Truffle-Tart-Paleo-11.jpg',
                source: 'http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/',
                categories: ['dessert', 'gluten-free', 'vegan']
            },
            {
                name: 'Grilled Zucchini Hummus Wrap',
                id: '755',
                ingredients: [
                    'zucchini',
                    'olive oil',
                    'tomato',
                    'red onion',
                    'kale',
                    'white cheddar or chipotle cheese',
                    'tortillas',
                    'hummus'
                ],
                img: 'https://i0.wp.com/www.maebells.com/wp-content/uploads/2014/06/DSC00351.jpg?zoom=2&resize=717%2C557',
                source: 'http://www.maebells.stfi.re/grilled-zucchini-hummus-wrap/?sf=golybdw#aa',
                categories: ['sandwich']
            },
            {
                name: 'Peanut Butter and Jelly Sandwich',
                id: '204',
                ingredients: [
                    'peanut butter',
                    'jam or jelly',
                    'bread',
                ],
                img: 'http://s3.amazonaws.com/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/217/91/137514414_XS.jpg',
                source: '',
                categories: ['sandwich', 'vegan']
            },
            {
                name: 'Chicken Bacon and Avocado Sandwich',
                id: '924',
                ingredients: [
                    'strips of chicken breast',
                    'cooked bacon',
                    'provolone cheese',
                    'lettuce leaves',
                    'slices of tomato',
                    'thinly sliced red onion',
                    'avocado',
                    'fresh bread'
                ],
                img: 'http://natashaskitchen.com/wp-content/uploads/2015/06/Chicken-Bacon-Avocado-Sandwich-2.jpg',
                source: 'http://natashaskitchen.com/2015/06/09/chicken-bacon-avocado-sandwich/',
                categories: ['sandwich']
            }
        ],
    },
    search: {
        keyword: 'sandwich',
        results: [
            {
                name: 'Peanut Butter and Jelly Sandwich',
                id: '204',
                ingredients: [
                    'peanut butter',
                    'jam or jelly',
                    'bread',
                ],
                img: 'http://s3.amazonaws.com/cme_public_images/www_livestrong_com/photos.demandstudios.com/getty/article/217/91/137514414_XS.jpg',
                source: ''
            },
            {
                name: 'Chicken Bacon and Avocado Sandwich',
                id: '924',
                ingredients: [
                    'strips of chicken breast',
                    'cooked bacon',
                    'provolone cheese',
                    'lettuce leaves',
                    'slices of tomato',
                    'thinly sliced red onion',
                    'avocado',
                    'fresh bread'
                ],
                img: 'http://natashaskitchen.com/wp-content/uploads/2015/06/Chicken-Bacon-Avocado-Sandwich-2.jpg',
                source: 'http://natashaskitchen.com/2015/06/09/chicken-bacon-avocado-sandwich/'
            },
            {
                name: 'Grilled Zucchini Hummus Wrap',
                id: '755',
                ingredients: [
                    'zucchini',
                    'olive oil',
                    'tomato',
                    'red onion',
                    'kale',
                    'white cheddar or chipotle cheese',
                    'tortillas',
                    'hummus'
                ],
                img: 'https://i0.wp.com/www.maebells.com/wp-content/uploads/2014/06/DSC00351.jpg?zoom=2&resize=717%2C557',
                source: 'http://www.maebells.stfi.re/grilled-zucchini-hummus-wrap/?sf=golybdw#aa'
            }
        ]
    }
}

export default store;
