let username = 'Lukos';
let maxID = 20;

let users = new Map();
users.set("Lukos", 1);
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
            author: 'Lukos',
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
            hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'my'],
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
        return Object.keys(photoPost).every((item) => {
            return objectValidator[item](photoPost[item])
        });
    }

    let objectValidator = {
        id: function (id) {
            return typeof (id) === "string" && id
        },
        description: function (description) {
            return typeof (description) === "string" && description
        },
        createdAt: function (createdAt) {
            return typeof (createdAt) === "object" && createdAt instanceof Date
        },
        author: function (author) {
            return typeof (author) === "string" && author
        },
        photoLink: function (photoLink) {
            return typeof (photoLink) === "string" && photoLink
        },
        hashTags: function (hashTags) {
            return typeof (hashTags) === "object" && isArrayValid(hashTags);
        },
        likes: function (likes) {
            return typeof (likes) === "object" && isArrayValid(likes);
        },
    };

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
        if (photoPosts.some((item) => {
                return item.id === photoPost.id;
            })) {
            console.log("invalid photoPost, same id");
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
                if (filterConfig[key] !== null) {
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
            }
            return true;
        }).sort(function (firstPost, secondPost) {
            return secondPost.createdAt.getTime() - firstPost.createdAt.getTime()
        }).slice(skip, skip + top);
    }

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

    const template = document.getElementById('post-template');
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
                    if (data[key].find((item) => {
                            return username === item
                        })) {
                        phElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.innerHTML = "favorite";
                    }
                    break;
                case"hashTags":
                    data[key].forEach((item) => {
                        let li = document.createElement('li');
                        li.textContent = "#" + item;
                        li.setAttribute("class", "dropdown-item text-color-white");
                        phElement.appendChild(li);

                    });
                    break;
                case "author":
                    phElement.textContent = data[key];
                    if (data[key] === username) {
                        let node = newNote.getElementById("button-for-mapping");
                        node.setAttribute("class", "dropdown")
                    }
                    break;
                default:
                    phElement.textContent = String(data[key]);
                    break;
            }

        });
        container.appendChild(newNote);
    }

    publicScope.addPhotoPostsFromArray = (data) => {
        data.forEach((item) => addItem(item));
    };

    publicScope.addPhotoPost = (data) => {
        if (a.validatePhotoPost(data) && a.addPhotoPost(data)) {
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
                            li.setAttribute("class", "dropdown-item text-color-white");
                            phElement.appendChild(li);

                        });
                        break;
                    case "author":
                        phElement.textContent = data[key];
                        if (data[key] === username) {
                            let node = newNote.getElementById("button-for-mapping");
                            node.setAttribute("class", "dropdown")
                        }
                        break;
                    default:
                        phElement.textContent = data[key];
                        break;
                }
            });
            let firstLi = container.getElementsByClassName("content");
            container.insertBefore(newNote, firstLi[0]);
            return true;
        }
        return false;
    };

    publicScope.removePhotoPost = (id) => {
        const node = document.getElementById(id);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        a.removePhotoPost(id);
    };

    publicScope.editPhotoPost = (id, data) => {
        let node = document.getElementById(id);
        let placeholders = node.querySelectorAll('[data-target]');
        if (a.editPhotoPost(id, data)) {
            [].forEach.call(placeholders, (node) => {
                let key = node.getAttribute('data-target');
                if (data[key] !== undefined)
                    switch (key) {
                        case "photoLink" :
                            node.setAttribute("src", data[key]);
                            break;

                        case "description" :
                            node.textContent = data[key];
                            break;

                        case "hashTags":
                            let tmp = node.getElementsByClassName("dropdown-item");
                            let arr = Array.from(tmp);
                            arr.forEach((item) => {
                                node.removeChild(item);
                            });
                            data[key].forEach((item) => {
                                let li = document.createElement('li');
                                li.textContent = "#" + item;
                                li.setAttribute("class", "dropdown-item text-color-white");
                                node.appendChild(li);

                            });
                    }
            })
        }

    };

})(window);

function removePhotoPostOnClick(that) {
    let id = that.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
    removePhotoPost(id);
}

function like(that) {
    if (username != null) {
        let contentFooter = that.parentElement.parentElement.parentElement;
        let id = contentFooter.parentElement.parentElement.getAttribute("id");
        if (that.innerHTML === "favorite_border") {
            that.innerHTML = "favorite";
            a.getPhotoPost(id).likes.push(username);
            contentFooter.children[1].firstElementChild.innerHTML = a.getPhotoPost(id).likes.length + " persons likes this";
        }
        else {
            that.innerHTML = "favorite_border";
            a.getPhotoPost(id).likes.pop(username);
            contentFooter.children[1].firstElementChild.innerHTML = a.getPhotoPost(id).likes.length + " persons likes this";
        }

    }
}

function setUser() {
    let node = document.getElementById("username");
    if (username != null) {
        node.textContent = username;
    }
    else {
        node.textContent = "";
    }
}

function loadMore() {
    let skip = document.getElementsByClassName("content").length;
    if (tempObj === undefined) {
        addPhotoPostsFromArray(a.getPhotoPosts(skip, 10))
    }
    else {
        addPhotoPostsFromArray(a.getPhotoPosts(skip, 10, tempObj))
    }
}

let tempObj;

function hideAllPosts() {
    let arr = document.getElementsByClassName("content");
    for (let i = arr.length - 1; i >= 0; i--) {
        const node = document.getElementById(arr[i].getAttribute("id"));
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        // [].forEach.call(arr, (phElement) =>
        // })
    }
}

function filterPhotos(that) {
    let fromDate = null;
    let toDate = null;
    let author = null;
    let hashTags = null;
    if (that.parentElement.firstElementChild.firstElementChild.value) {
        fromDate = new Date(that.parentElement.firstElementChild.firstElementChild.value);
    }

    if (that.parentElement.children[1].firstElementChild.value) {
        toDate = new Date(that.parentElement.children[1].firstElementChild.value);
    }

    if (that.parentElement.children[2].firstElementChild.value) {
        author = that.parentElement.children[2].firstElementChild.value;
    }

    if (that.parentElement.children[3].firstElementChild.value) {
        hashTags = that.parentElement.children[3].firstElementChild.value.split(' ');
    }
    let obj = {fromDate, toDate, hashTags, author};
    // if (tempObj === obj&& tempObj) {
    //     let skip = document.getElementsByClassName("content").length;
    //     addPhotoPostsFromArray(a.getPhotoPosts(skip, 10, obj));
    // } else {
    if (tempObj !== undefined || JSON.stringify(obj) !== JSON.stringify(tempObj)) {
        hideAllPosts();
        addPhotoPostsFromArray(a.getPhotoPosts(0, 10, obj));
    }
    //}
    tempObj = obj;
}

function showMainPage() {
    document.getElementById("mainPage").setAttribute("class", "visible");
    document.getElementById("loginPage").setAttribute("class", "invisible");
    document.getElementById("errorPage").setAttribute("class", "invisible");
    document.getElementById("addPage").setAttribute("class", "invisible");
    document.getElementById("editPage").setAttribute("class", "invisible");

}

function showLoginPage() {
    document.getElementById("mainPage").setAttribute("class", "invisible");
    document.getElementById("loginPage").setAttribute("class", "column-flex-box visible");
    document.getElementById("errorPage").setAttribute("class", "invisible");
    document.getElementById("addPage").setAttribute("class", "invisible");
    document.getElementById("editPage").setAttribute("class", "invisible");

}

function showErrorPage() {
    document.getElementById("mainPage").setAttribute("class", "invisible");
    document.getElementById("loginPage").setAttribute("class", "invisible");
    document.getElementById("errorPage").setAttribute("class", "column-flex-box visible");
    document.getElementById("addPage").setAttribute("class", "invisible");
    document.getElementById("editPage").setAttribute("class", "invisible");

}

function showAddPage() {
    if (username !== null) {
        document.getElementById("mainPage").setAttribute("class", "invisible");
        document.getElementById("loginPage").setAttribute("class", "invisible");
        document.getElementById("errorPage").setAttribute("class", "invisible");
        document.getElementById("addPage").setAttribute("class", "column-flex-box visible");
        document.getElementById("editPage").setAttribute("class", "invisible");
    } else {
        alert("Please Log In at first");
    }

}

function showEditPage(that) {
    document.getElementById("mainPage").setAttribute("class", "invisible");
    document.getElementById("loginPage").setAttribute("class", "invisible");
    document.getElementById("errorPage").setAttribute("class", "invisible");
    document.getElementById("addPage").setAttribute("class", "invisible");
    document.getElementById("editPage").setAttribute("class", "column-flex-box visible");

    let id = that.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id").toString();
    document.getElementById("idHolder").innerText = id;
    document.getElementById("editPostDescription").value = a.getPhotoPost(id).description;// document.getElementById(id).children[2].children[1].firstElementChild.value;
    document.getElementById("editPostTags").value = a.getPhotoPost(id).hashTags.toString();// document.getElementById(id).children[2].children[0].firstElementChild.value;
}

function getPost(that) {
    let photoLink = document.getElementById("newPostImagePath").value;
    document.getElementById("newPostImagePath").value = "";
    let description = document.getElementById("newPostDescription").value;
    document.getElementById("newPostDescription").value = "";
    let hashTags = document.getElementById("newPostTags").value.split(/[, ]+/);
    document.getElementById("newPostTags").value = "";

    let author = username;
    let id = (maxID + 1).toString();
    maxID++;

    let obj = {
        createdAt: new Date(),
        likes: [],
        hashTags,
        description,
        photoLink,
        author,
        id
    }

    if (addPhotoPost(obj)) {
        showMainPage();
    } else {
        showErrorPage();
    }


}

function editPost(that) {

    let description = document.getElementById("editPostDescription").value;
    let hashTags = document.getElementById("editPostTags").value.split(/[, ]+/);
    let id = document.getElementById("idHolder").innerText;

    let obj = {description, hashTags};

    editPhotoPost(id, obj);
    showMainPage();
}

function logIn() {
    let user = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    if (users.has(user) && users.get(user) === password) {
        username = user;
    } else {
        username = null;
    }
    setUser();
    hideAllPosts();
    addPhotoPostsFromArray(a.getPhotoPosts(0, 10));

}

function regAndLogIn() {
    let user = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    if (!users.has(user) && user !== "" && password !== "") {
        users.set(user, password);
        username = user;
        setUser();
        hideAllPosts();
        addPhotoPostsFromArray(a.getPhotoPosts(0, 10));

    } else {
        showErrorPage();
    }

}

function logOut() {
    username = null;
    setUser();
    hideAllPosts();
    addPhotoPostsFromArray(a.getPhotoPosts(0, 10));

    showMainPage();
}

setUser();

addPhotoPostsFromArray(a.getPhotoPosts(0, 10));

addPhotoPost({
    id: '44',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date(),
    author: 'Lukos',
    photoLink: 'gory_nebo_otrazhenie_trava_84468_1920x1080.jpg',
    hashTags: ['sport', 'weather', 'gold', 'olympicGold', 'hi', 'testTag'],
    likes: ['sam smith', 'maxim bykov', 'someone famous'],

});

removePhotoPost("2");

editPhotoPost("44", {description: "djlfsldfjlkjsdfljklksdflkkjldsfkjl", hashTags: ["skdjf", "second tag"]});
