let a = function () {

    let photoPosts = [

        {
            id: '1',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Максим',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'hi', 'testTag'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '2',
            description: 'ыло сделать такой сценарий максимально привлекательным для самих участников по сравнению с ал\n',
            createdAt: new Date(),
            author: 'Иванов Максим',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '3',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Олег',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '4',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов кирилл',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '5',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '6',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '7',
            description: 'TUT.BY для бизнеса - это площадки и современные сервисы для привлечения покупателей. ',
            createdAt: new Date(98),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '8',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '9',
            description: 'охватывает 2 миллиона 355 тысяч, или 46,42 % всех интернет-пользователей Беларуси.',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '10',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:10:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        },
        {
            id: '11',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '12',
            description: 'Можно долго спорить, чем была БНР\n',
            createdAt: new Date('2003-02-23T23:00:00'),
            author: 'Иванов Максим',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'testTag'],
            likes: ['sam smith', 'maxim bykov'],
        }, {
            id: '13',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Олег',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '14',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов кирилл',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '15',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '16',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '17',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '18',
            description: 'На другой стороне, в оппозиции, происходят не менее интересные процессы. Не соглашусь с уважаемы\n' +
            'Читать полностью:  https://news.tut.by/economics/583705.html\n',
            createdAt: new Date('2017-02-23T23:00:00'),
            author: 'Петров',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'testTag'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '19',
            description: '. Адвокатам белорусизации внутри власти будет проще объяснить тем своим коллегам, кому белорусизация до фонаря\n',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '20',
            description: ' Впереди еще годы, а может, и десятки лет взаимной нелюбви, протестов и разгонов с арестами. Но им всем может пригодиться навык говорить друг с другом на одном языке в важные для общей страны дни.',
            createdAt: new Date('2018-02-23T23:10:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        },

    ];

    function getPhotoPost(id) {
        if (typeof id !== "string") {
            console.log("illegal arguments");
            return false;
        }
        return photoPosts.find(function (item) {
            return item.id === id;
        });
    }

    function validatePhotoPost(photoPost) {
        if (typeof photoPost !== "object" ||
            typeof (photoPost.id) !== "string" ||
            typeof (photoPost.description) !== "string" ||
            (typeof (photoPost.createdAt) !== "object" && photoPost.createdAt instanceof Date) ||
            typeof (photoPost.author) !== "string" ||
            typeof (photoPost.photoLink) !== "string") {
            console.log("объект невалиден");
            return false;
        }
        if (typeof (photoPost.hashTags) !== "object") {
            console.log("объект невалиден");
            return false;
        }
        else {
            if (!isArrayValid(photoPost.hashTags)) {
                console.log("объект невалиден");
                return false;
            }
        }
        if (typeof (photoPost.likes) !== "object") {
            return false;
        } else {
            if (!isArrayValid(photoPost.likes)) {
                console.log("объект невалиден");
                return false;
            }
        }
        console.log("объект валиден");
        return true;
    }

    function isArrayValid(array) {
        return array.every(function (item) {
            return typeof item === "string";
        });
    }

    function addPhotoPost(photoPost) {
        if (typeof photoPost !== "object") {
            console.log("illegal arguments");
            return false;
        }
        if (!validatePhotoPost(photoPost)) {
            console.log("invalid photoPost");
            return false;
        }
        photoPosts.push(photoPost);
        console.log("successfully added");
        return true;
    }

    function editPhotoPost(id, photoPost) {
        if (typeof id !== "string" || typeof photoPost !== "object") {
            console.log("illegal arguments");
            return false;
        }
        let currentPhotoPost = getPhotoPost(id);
        const tmpId = currentPhotoPost.id;
        const tmpDate = currentPhotoPost.createdAt;
        const tmpAuthor = currentPhotoPost.author;
        const tmpLikes = currentPhotoPost.likes;
        if (validatePhotoPost(currentPhotoPost)) {

            let tmpObj =  Object.create(currentPhotoPost);
            Object.assign(tmpObj, photoPost);
            tmpObj.id = tmpId;
            tmpObj.createdAt = tmpDate;
            tmpObj.author = tmpAuthor;
            tmpObj.likes = tmpLikes;
            if (validatePhotoPost(tmpObj)) {
                Object.assign(currentPhotoPost, tmpObj);
                console.log("successfully edited");
                return true;
            }
        }
        console.log("something went wrong. Can't edit photoPost");

        return false;
    }

    function removePhotoPost(id) {
        if (typeof id !== "string"){
            console.log("illegal arguments");
            return false;}
        const index = photoPosts.findIndex(function (item) {
            return item.id === id;
        });
        if (index === -1) {
            console.log("couldn't found suitable post");
            return false;
        }
        photoPosts.splice(index, 1);
        console.log("successfully removed");
        return true;
    }

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        if (typeof skip === "object") {
            filterConfig = skip;
            skip = 0;
            top = 10;
        } else {
            if (typeof top === "object") {
                filterConfig = top;
                top = 10;
            }
        }
        return photoPosts.filter(function (item) {
            for (let key in filterConfig) {
                switch (key) {
                    case 'fromDate':
                        if (filterConfig[key].getTime() > item.createdAt.getTime())
                            return false;
                        break;
                    case 'toDate':
                        if (filterConfig[key].getTime() < item.createdAt.getTime())
                            return false;
                        break;
                    case 'hashTags':
                        if (!isHashTagsSuitable(filterConfig[key], item[key]))
                            return false;
                        break;

                    case 'author':
                        if (item[key] !== filterConfig[key])
                            return false;
                        break;
                    default:
                        break;
                }
            }
            return true;
        }).sort(function (firstPost, secondPost) {
            return secondPost.createdAt.getTime() - firstPost.createdAt.getTime()
        }).slice(skip, skip + top);
    }//might better slice at first and then sort?

    function isHashTagsSuitable(tags, currentTags) {
        return tags.every(function (firstItem) {
            return -1 !== currentTags.findIndex(function (secondItem) {
                return secondItem === firstItem;
            });
        });
    }

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost,
        photoPosts
    }
}();