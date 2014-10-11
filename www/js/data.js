var globalCatsData = [
{
    "id": "item_type_phone",
    "icon": "icon-phone",
    "name": "Мобильные",
    "children":[{
        "id": "item_type_ios",
        "icon": "icon-ios",
        "name": "Apple"
    },
    {
        "id": "item_type_android",
        "icon": "icon-android",
        "name": "Android"
    },
    {
        "id": "item_type_windows",
        "icon": "icon-windows",
        "name": "Windows"
    },
    {
        "id": "item_type_blackberry",
        "icon": "icon-blackberry",
        "name": "Blackberry"
    }]
},
{
    "id": "item_type_tablet",
    "icon": "icon-tablet",
    "name": "Планшеты",
    "children": []
},
{
    "id": "item_type_notebook",
    "icon": "icon-notebook",
    "name": "Ноутбуки",
    "children": []
},
{
    "id": "item_type_tv",
    "icon": "icon-tv",
    "name": "Телевизоры",
    "children": []
},
{
    "id": "item_type_camera",
    "icon": "icon-camera",
    "name": "Фотоаппараты",
    "children": []
},
{
    "id": "item_type_clothes",
    "icon": "icon-clothes",
    "name": "Одежда",
    "children": []
}
];

var globalItemsData = [
    {
        "img": "http://mdata.yandex.net/i?path=b0910230238_img_id6738100464582526458.jpg",
        "title": "Apple iPhone 5S 16Gb",
        "text": "GSM, LTE, смартфон, iOS 7, вес 112 г, ШхВхТ 58.6x123.8x7.6 мм, экран 4\", 640x1136, Bluetooth, Wi-Fi, GPS, ГЛОНАСС, фотокамера 8 МП, память 16 Гб, аккумулятор 1560 мАч",
        "cat": [0,0],
        "os": "ios",
        "id": "1"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0904224341_img_id14396482440485392.jpeg",
        "title": "Sony Xperia Z3 Compact",
        "text": "GSM, LTE-A, смартфон, Android 4.4, вес 129 г, ШхВхТ 64.9x127x8.6 мм, экран 4.6\", 720x1280, FM-радио, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 20.70 МП, память 16 Гб, слот microSD (TransFlash), аккумулятор 2600 мАч",
        "cat": [0,1],
        "os": "android",
        "id": "2"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0512090441_img_id4366155187183264326.jpeg",
        "img_big": "http://mdata.yandex.net/i?path=b0512090434_img_id572713123313899031.jpeg",
        "title": "Samsung UE48HU8500",
        "text": "ЖК-телевизор, LED, 48\", 3840x2160, 4K UHD, 1000 Гц, 3D, картинка в картинке, DVR, 2 TV-тюнера, мощность звука 60 Вт, HDMI x4, Ethernet, Wi-Fi, Bluetooth, Smart TV",
        "cat": [3],
        "id": "3"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0912194435_img_id2685468921689248210.jpeg",
        "title": "Apple iPhone 6 64Gb",
        "text": "GSM, LTE-A, смартфон, iOS 8, вес 129 г, ШхВхТ 67x138.1x6.9 мм, экран 4.7\", 750x1334, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 8 МП, память 64 Гб",
        "cat": [0,0],
        "os": "ios",
        "id": "4"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0912194303_img_id7819188231934173594.jpeg",
        "title": "Apple iPhone 6 16Gb",
        "text": "GSM, LTE-A, смартфон, iOS 8, вес 129 г, ШхВхТ 67x138.1x6.9 мм, экран 4.7\", 750x1334, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 8 МП, память 16 Гб",
        "cat": [0,0],
        "os": "ios",
        "id": "5"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0226173247_img_id4668470472780587307.jpeg",
        "img_big": "http://mdata.yandex.net/i?path=b0226173240_img_id1100182422088428254.jpeg",
        "title": "Samsung Galaxy S5 SM-G900F 16Gb",
        "text": "GSM, LTE-A, смартфон, Android 4.4, вес 145 г, ШхВхТ 72.5x142x8.1 мм, экран 5.1\", 1080x1920, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 16 МП, память 16 Гб, слот microSD (TransFlash), аккумулятор 2800 мАч",
        "cat": [0,1],
        "os": "android",
        "id": "6"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0315073717_img_id4129002154421034629.jpg",
        "title": "Samsung Galaxy S4 GT-I9500 16Gb",
        "text": "GSM, 3G, смартфон, Android 4.4, вес 130 г, ШхВхТ 69.8x136.6x7.9 мм, экран 5\", 1080x1920, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 13 МП, память 16 Гб, слот microSD (TransFlash), аккумулятор 2600 мАч",
        "cat": [0,1],
        "os": "android",
        "id": "7"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0910231305_img_id8113638867959677735.jpg",
        "title": "Apple iPhone 5S 32Gb",
        "text": "GSM, LTE, смартфон, iOS 7, вес 112 г, ШхВхТ 58.6x123.8x7.6 мм, экран 4\", 640x1136, Bluetooth, Wi-Fi, GPS, ГЛОНАСС, фотокамера 8 МП, память 32 Гб, аккумулятор 1560 мАч",
        "cat": [0,0],
        "os": "ios",
        "id": "8"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0115105237_img_id1276654684733213084.jpeg",
        "title": "Sony Xperia Z1 Compact",
        "text": "GSM, LTE, смартфон, Android 4.4, вес 137 г, ШхВхТ 64.9x127x9.5 мм, экран 4.3\", 720x1280, FM-радио, Bluetooth, NFC, Wi-Fi, GPS, ГЛОНАСС, фотокамера 20.70 МП, память 16 Гб, слот microSD (TransFlash), аккумулятор 2300 мАч",
        "cat": [0,1],
        "os": "android",
        "id": "9"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0115105237_img_id1276654684733213084.jpeg",
        "title": "Sony Xperia Z1 Compact",
        "text": "3G, Android 4.4, 4.30\", 720x1280, 16Гб, 137г, камера 20.70МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,0],
        "os": "ios",
        "id": "10"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0613150319_img_id7118053794648690912.jpeg",
        "img_big": "http://mdata.yandex.net/i?path=b0613150311_img_id5308957719092040926.jpeg",
        "title": "Samsung UE22H5610",
        "text": "ЖК-телевизор, LED, 22\", 1920x1080, 1080p Full HD, 100 Гц, картинка в картинке, DVR, мощность звука 20 Вт, HDMI x3, Ethernet, Wi-Fi, Smart TV",
        "cat": [3],
        "id": "11"
    }
];

