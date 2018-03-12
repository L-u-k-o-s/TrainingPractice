var username = 'Lukos';
let a = function () {

    let photoPosts = [

        {
            id: '1',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Максим',
            photoLink: 'gory_nebo_otrazhenie_trava_84468_1920x1080.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'hi', 'testTag'],
            likes: ['sam smith', 'maxim bykov', 'someone famous'],

        }, {
            id: '2',
            description: 'ыло сделать такой сценарий максимально привлекательным для самих участников по сравнению с ал\n',
            createdAt: new Date(),
            author: 'Иванов Максим',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov', 'someone famous'],

        }, {
            id: '3',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Олег',
            photoLink: 'kosmos_nebo_spiral_galaktika_99967_1920x1080.jpg',
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
            photoLink: 'park-priroda-osen-4.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '6',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'park-priroda-osen-4.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '7',
            description: 'TUT.BY для бизнеса - это площадки и современные сервисы для привлечения покупателей. ',
            createdAt: new Date(98),
            author: 'Иванов Иван',
            photoLink: 'gory_nebo_otrazhenie_trava_84468_1920x1080.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '8',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'rumyniya_kympulung_derevo_trava_nebo_svet_107135_1920x1080.jpg',
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
            photoLink: 'les-derevia-doroga-3.jpg',
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
            photoLink: 'rumyniya_kympulung_derevo_trava_nebo_svet_107135_1920x1080.jpg',
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
            photoLink: 'mokh_derevya_les_113541_1920x1080.jpg',
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
            photoLink: 'mokh_derevya_les_113541_1920x1080.jpg',
            hashTags: ['sport', 'weather', 'gold', 'olympicGold'],
            likes: ['sam smith', 'maxim bykov'],

        }, {
            id: '18',
            description: 'На другой стороне, в оппозиции, происходят не менее интересные процессы. Не соглашусь с уважаемы\n',
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

// Object.keys(photoPost).every(function (item) {
//     return objectValidator[item](item)
// });
//         for (let key in photoPost) {
//             console.log(key);
//             if (objectValidator[key](photoPost[key])) {
//                 return false;
//             }
//         }
//         return true;


    }

    // let objectValidator = {
    //     id: function (id) {
    //         return typeof (id) !== "string" || !id
    //     },
    //     description: function (description) {
    //         return typeof (description) !== "string" || !description
    //     },
    //     createdAt: function (createdAt) {
    //         return typeof (createdAt) !== "object" && createdAt instanceof Date
    //     },
    //     author: function (author) {
    //         return typeof (author) !== "string" || !author
    //     },
    //     photoLink: function (photoLink) {
    //         return typeof (photoLink) !== "string" || !photoLink
    //     },
    //     hashTags: function (hashTags) {
    //         if (typeof (hashTags) !== "object") {
    //             return true;
    //         }
    //         else {
    //             if (!isArrayValid(hashTags)) {
    //                 console.log("объект невалиден");
    //                 return true;
    //             }
    //             return false;
    //         }
    //
    //     },
    //     likes: function (likes) {
    //         if (typeof (likes) !== "object") {
    //             return true;
    //         } else {
    //             if (!isArrayValid(likes)) {
    //                 console.log("объект невалиден");
    //                 return true;
    //             }
    //             return false;
    //         }
    //     },
    // };


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

        let tmpObj = Object.create(currentPhotoPost);
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

        console.log("something went wrong. Can't edit photoPost");

        return false;
    }

    function removePhotoPost(id) {
        if (typeof id !== "string") {
            console.log("illegal arguments");
            return false;
        }
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


(function (publicScope) {
    'use strict';

    const template = document.getElementById('post-template1');
    const container = document.getElementById('posts');

    function formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm + '.' + date.getFullYear();
    }


    function addItem(data) {

        let newNote = document.importNode(template.content, true);

        let placeholders = newNote.querySelectorAll('[data-target]');
        [].forEach.call(placeholders, (phElement) => {
            let key = phElement.getAttribute('data-target');
            switch (key) {
                case "createdAt":
                    phElement.textContent = formatDate(data[key]);
                    break;
                case "photoLink":
                    phElement.setAttribute("src", data[key]);
                    break;
                case"id":
                    phElement.setAttribute("id", data[key]);
                    break;
                case"likes":
                    phElement.textContent = data[key].length + " persons likes this";
                    break;
                case"hashTags":
                    data[key].forEach((item) => {
                        let li = document.createElement('li');
                        li.textContent = "#" + item;
                        li.setAttribute("class", "dropdown-item");
                        phElement.appendChild(li);

                    });
                    break;
                default:
                    phElement.textContent = String(data[key]);
                    break;
            }

        });
        container.appendChild(newNote);
    }


    publicScope.onAddItem = (data) => {
        data.forEach((item) => addItem(item));
    };

    onAddItem(a.getPhotoPosts(0, 10));
})(window);


function removePhotoPost(id) {
    const node = document.getElementById(id);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    a.removePhotoPost(id);
}

function editPhotoPost(id, data) {
    let node = document.getElementById(id);
    let placeholders = node.querySelectorAll('[data-target]');
    if (a.editPhotoPost(id, data)) {
        [].forEach.call(placeholders, (node) => {
            let key = node.getAttribute('data-target');
            if (data[key] !== undefined)
                switch (key) {
                    case "photoLink":
                        node.setAttribute("src", data[key]);
                        break;
                    case "description":
                        node.textContent = String(data[key]);
                        break;
                }
        })
    }

}

function setUser() {
    let node = document.getElementById("username");
    node.textContent = username;
}

setUser();

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}