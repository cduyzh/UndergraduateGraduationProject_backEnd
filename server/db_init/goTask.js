const startTime = new Date().getTime() //得到开始时间
var db = connect('company') //链接数据库

// //开始循环(循环插入)
// for (let i = 0; i < 1000; i++) {
//     db.test.insert({ num: i });
// }多200ms左右

const carouselObj = {
    ad_name: '顶部轮播图',
    data: {
        count: 7,
        total: 7,
        data: [
            {
                status: 1,
                ad_copy: '[[type|slider]]',
                hidden_info: '[[type|banner;img_only|0;is_full|0;summary|;more_text|;more_url|;no_detail|1]]',
                ad_type: 101,
                ad_priority: 1,
                width: 0,
                track: '418_0-62305.355_0-69959',
                reference_id: '11452',
                ad_pic_url: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01V1KHze11Q/lb3QSrqV6N2qpI.jpg',
                ad_name: '弹指流年，拂歌尘散',
                height: 0,
                id: 1,
                size: 129580
            },
            {
                status: 1,
                ad_copy: '[[type|slider]]',
                hidden_info: '[[type|banner;img_only|0;is_full|0;summary|;more_text|;more_url|;no_detail|1]]',
                ad_type: 101,
                ad_priority: 2,
                width: 0,
                track: '418_0-62305.355_1-71278',
                reference_id: '11518',
                ad_pic_url: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01t3HFw4zGY/cRQkpvrTm5bJJB.jpg',
                ad_name: '仗剑走天涯：每个人心中都有一个武侠梦',
                height: 0,
                id: 2,
                size: 127881
            },
            {
                status: 1,
                ad_copy: '[[type|slider]]',
                hidden_info: '[[type|banner;img_only|0;is_full|0;summary|;more_text|;more_url|;no_detail|1]]',
                ad_type: 101,
                ad_priority: 1,
                width: 0,
                track: '418_0-62305.355_0-69959',
                reference_id: '11452',
                ad_pic_url: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01V1KHze11Q/lb3QSrqV6N2qpI.jpg',
                ad_name: '弹指流年，拂歌尘散',
                height: 0,
                id: 1,
                size: 129580
            },
            {
                status: 1,
                ad_copy: '[[type|slider]]',
                hidden_info: '[[type|banner;img_only|0;is_full|0;summary|;more_text|;more_url|;no_detail|1]]',
                ad_type: 101,
                ad_priority: 2,
                width: 0,
                track: '418_0-62305.355_1-71278',
                reference_id: '11518',
                ad_pic_url: 'http://image.read.duokan.com/mfsv2/download/fdsc3/p01t3HFw4zGY/cRQkpvrTm5bJJB.jpg',
                ad_name: '仗剑走天涯：每个人心中都有一个武侠梦',
                height: 0,
                id: 2,
                size: 127881
            }
        ]
    }
}
//声明一个对象

db.carouses.insert(carouselObj) //批量一次插入

const hotBookObj = {
    ad_name: '本周最火',
    data: {
        count: 6,
        total: 19,
        data: [
            {
                ad: 0,
                word_count: 5414619,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 4364,
                copyright: '',
                title: '驭房有术',
                new_tags: ['轻松', '法师', '感情', '玄学'],
                on_sale: true,
                comment_count: 2337,
                has_ad: 0,
                click: 64132347,
                latest_id: 2240,
                score: 7.99,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1523975005,
                finish: false,
                tags: ['风水秘术', '灵异', '灵异奇谈'],
                price: 5,
                chapter_count: 2241,
                authors: '铁锁',
                categories: [
                    {
                        category_id: 8000000,
                        label: '灵异'
                    },
                    {
                        category_id: 8000400,
                        label: '灵异奇谈'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01I66oHszK2/7CDwQEqR7CFkXT.jpg',
                summary: '进城闯荡的小阿姨衣锦还乡，张禹的老妈心动了，决定让儿子前去投奔。不曾想，所谓的豪宅就是一个三十平米的...',
                fiction_id: 1,
                outer_id: '5691370404281003',
                latest: '第2241章 落差'
            },
            {
                ad: 0,
                word_count: 2785944,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 4409,
                copyright: '',
                title: '婚后相爱：腹黑老公爆萌妻',
                on_sale: true,
                comment_count: 3425,
                has_ad: 0,
                click: 117362001,
                latest_id: 2631,
                score: 8.62,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1452947570,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2632,
                authors: '一笑倾晨',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01I1zQew1EB/MEp59LJ9HQEJ7f.jpg',
                summary: '“老公，我要……”“要什么？”“要……”话音未落，迟早早就猛然扑了过来。',
                fiction_id: 2,
                outer_id: '5595fd599871fe7fe3d83ea0',
                latest: '第2632章：全文完结'
            },
            {
                ad: 0,
                word_count: 9562613,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 4605,
                copyright: '',
                title: '超品相师',
                new_tags: ['玄学'],
                on_sale: true,
                comment_count: 3262,
                has_ad: 0,
                click: 47525428,
                latest_id: 3471,
                score: 8.37,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1516059713,
                finish: true,
                tags: ['热血都市', '都市情缘', '都市', '都市生活'],
                price: 5,
                chapter_count: 3465,
                authors: '九灯和善',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20100,
                        label: '都市情缘'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p017FYO0QmyQ/RWX9PUBWGHUWVJ.jpg',
                summary: '相师分九品，一品一重天风水有境界，明理，养气，修身，问道。二十一世纪的一位普通青年偶获诸葛亮生前...',
                fiction_id: 3,
                outer_id: '22390647000809802',
                latest: '结束语'
            },
            {
                ad: 0,
                word_count: 3063749,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1667,
                copyright: '',
                title: '绝命诱惑',
                on_sale: false,
                comment_count: 1290,
                has_ad: 0,
                click: 64372197,
                latest_id: 1067,
                score: 8.22,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1434361664,
                finish: true,
                tags: ['异术超能', '都市异能', '热血都市', '都市'],
                price: 5,
                chapter_count: 1068,
                authors: '心梦无痕',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20300,
                        label: '都市异能'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01glg5pchIi/JfGjhpqRREi1WE.jpg',
                summary: '白天，他是名牌大学的高材生；晚上，他是圣云美容院的金牌美体师。',
                fiction_id: 1,
                outer_id: '5379bf930ea49711bc2c6118',
                latest: '第二百零七章 重回人间'
            },
            {
                ad: 0,
                word_count: 8902525,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2795,
                copyright: '',
                title: '超级兵王在都市',
                new_tags: ['特种兵'],
                on_sale: true,
                comment_count: 2195,
                has_ad: 0,
                click: 53480223,
                latest_id: 3183,
                score: 7.19,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1503820120,
                finish: true,
                tags: ['李一飞', '许盈盈', '许姗姗', '热血都市', '都市情缘', '都市', '都市生活'],
                price: 5,
                chapter_count: 3106,
                authors: '明日复明日',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20100,
                        label: '都市情缘'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01S5IOT5e93/0WmOXSdeFEcc2W.jpg',
                summary: '我的老婆是双胞胎，姐姐是老婆，妹妹是小姨子，姐姐高端大气上档次，妹妹调皮伶俐特贴心；姐姐天天忙工作没...',
                fiction_id: 2,
                outer_id: '21970505000854202',
                latest: '写在结束'
            },
            {
                ad: 0,
                word_count: 1759253,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 186,
                copyright: '',
                title: '面具鲜妻【完】',
                on_sale: true,
                comment_count: 121,
                has_ad: 0,
                click: 63567692,
                latest_id: 796,
                score: 7.7,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [2],
                updated: 1502446308,
                finish: true,
                tags: ['夜妻', '婚后相处', '虐心', '蘑菇头', '总裁世家', '总裁豪门', '现代言情', '豪门世家'],
                price: 3,
                chapter_count: 797,
                authors: '陌骄阳',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01mecSVC7Wq/YmyVEv2DFJ7WW2.jpg',
                summary: '豪门暗斗，惊天换心，豪门媳妇，她步步维艰！儿子生病，他却守在他人的卧榻；结婚纪念，他领...',
                fiction_id: 3,
                outer_id: '567a670150e3a41b2e087b8a',
                latest: '第797章 萌娃小番外'
            }
        ]
    }
}
// //声明一个对象

db.hotbooks.insert(hotBookObj) //批量一次插入

const specialRecommentObj = {
    ad_name: '重磅推荐',
    data: {
        count: 30,
        total: 30,
        data: [
            {
                ad: 0,
                word_count: 5062093,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1166,
                copyright: '',
                title: '我的绝美女神老婆',
                on_sale: true,
                comment_count: 896,
                has_ad: 0,
                click: 41141403,
                latest_id: 2430,
                score: 7.33,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1484094810,
                finish: true,
                tags: ['都市情缘', '都市生活', '热血都市', '都市'],
                price: 5,
                chapter_count: 2431,
                authors: '一笔烟云',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20100,
                        label: '都市情缘'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01W18eqGFfh/LgKEIErAOki8Qm.jpg',
                summary: '身怀绝技的方少阳，带着对大都市的美好憧憬，本想投靠师娘，却当上了医院妇科的男医生，泡了个美女医生，误...',
                fiction_id: 1,
                outer_id: '22173856000216002',
                latest: '第2529章 结束也是开始（大结局）'
            },
            {
                ad: 0,
                word_count: 5158551,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 3580,
                copyright: '',
                title: '异能狂徒在校园',
                new_tags: ['热血', '凡人流', '轻松', '学生'],
                on_sale: true,
                comment_count: 2932,
                has_ad: 0,
                click: 36891930,
                latest_id: 2449,
                score: 7.99,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1513735545,
                finish: true,
                tags: ['唐瑶', '秦雨韵', '顾枫', '何艺', '热血都市', '都市异能', '都市', '异术超能'],
                price: 5,
                chapter_count: 2448,
                authors: '三寸烟火',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20300,
                        label: '都市异能'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p014X4p3eENJ/WoTZLC7ddAbXqi.jpg',
                summary: '每个成功男人的背后，都有一个漂亮的女人。顾枫成功吗？很成功！为什么？因为他背后有一群漂亮的女人！...',
                fiction_id: 2,
                outer_id: '22166660000920002',
                latest: '大结局（下）'
            },
            {
                ad: 0,
                word_count: 976384,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2892,
                copyright: '',
                title: '鬼吹灯（盗墓者的经历）',
                on_sale: true,
                comment_count: 1108,
                has_ad: 0,
                click: 34750231,
                latest_id: 241,
                score: 8.68,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1403266725,
                finish: true,
                tags: ['武侠仙侠', '盗墓', '传统武侠', '技术流'],
                price: 5,
                chapter_count: 238,
                authors: '本物天下霸唱',
                categories: [
                    {
                        category_id: 50000,
                        label: '灵异悬疑'
                    },
                    {
                        category_id: 50400,
                        label: '盗墓探险'
                    },
                    {
                        category_id: 8000000,
                        label: '灵异'
                    },
                    {
                        category_id: 8000300,
                        label: '悬疑探险'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01qPiaqhJyF/WbC80a9DXVUTEO.jpg',
                summary: '最经典的盗墓传奇，神秘诡异的“中国式”古墓探险！',
                fiction_id: 3,
                outer_id: '5379c0400ea49711bc2c6263',
                latest: '234 由眼而生由眼而亡'
            },
            {
                ad: 0,
                word_count: 2186811,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 978,
                copyright: '',
                title: '兵王之王',
                on_sale: true,
                comment_count: 705,
                has_ad: 0,
                click: 33545979,
                latest_id: 707,
                score: 8.32,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1434736455,
                finish: true,
                tags: ['军事', '武侠仙侠', '军旅生涯', '浪子异侠'],
                price: 5,
                chapter_count: 708,
                authors: '七品',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30600,
                        label: '浪子异侠'
                    },
                    {
                        category_id: 7000000,
                        label: '军事'
                    },
                    {
                        category_id: 7000300,
                        label: '军旅生涯'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01lKMf8SSPC/6UHseSLI4dXXGF.jpg',
                summary: '我为战斗而生，我是兵王之王。',
                fiction_id: 1,
                outer_id: '52cb6d3325ccbf4149d00057',
                latest: '第七百零三章 糖！糖！（大结局）'
            },
            {
                ad: 0,
                word_count: 11418015,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2783,
                copyright: '',
                title: '都市武圣',
                on_sale: true,
                comment_count: 2444,
                has_ad: 0,
                click: 32525760,
                latest_id: 4012,
                score: 8.26,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1523898179,
                finish: false,
                tags: ['特种兵', '热血', '热血都市', '江湖恩怨', '都市', '恩怨情仇'],
                price: 5,
                chapter_count: 4003,
                authors: '河帅',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20500,
                        label: '江湖恩怨'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000400,
                        label: '恩怨情仇'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01N7DxZK7SF/VkzO0qr4OQUGwy.jpg',
                summary: '古语有云：“一命二运三风水。”天生盘龙命格，承载卧虎风水的最强特种兵叶青，为了救回被拐走的唯一弟弟...',
                fiction_id: 2,
                outer_id: '22013985000446502',
                latest: '第四零一三章空间法阵'
            },
            {
                ad: 0,
                word_count: 13228038,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2280,
                copyright: '',
                title: '极品全能学生',
                new_tags: ['嚣张', '明星', '洪荒流', '鉴宝'],
                on_sale: true,
                comment_count: 1505,
                has_ad: 0,
                click: 33485749,
                latest_id: 6465,
                score: 8.1,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1523963990,
                finish: false,
                tags: ['都市情缘', '都市生活', '热血都市', '都市'],
                price: 5,
                chapter_count: 6465,
                authors: '花都大少',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20100,
                        label: '都市情缘'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01erewkrzRu/4UxJx5Ffbglv3z.jpg',
                summary: '一场车祸改变了我的屌丝人生。各种奇遇接连而来。考试满分，刮刮乐必中，篮球...',
                fiction_id: 3,
                outer_id: '22199359000099502',
                latest: '第6568章 圣级七品'
            },
            {
                ad: 0,
                word_count: 7783944,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2223,
                copyright: '',
                title: '校园修真高手',
                new_tags: ['学生', '练功流', '玄学', '爆笑'],
                on_sale: true,
                comment_count: 1724,
                has_ad: 0,
                click: 29116939,
                latest_id: 3793,
                score: 8.27,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1511115819,
                finish: true,
                tags: ['异术超能', '都市异能', '热血都市', '都市'],
                price: 5,
                chapter_count: 3790,
                authors: '木榆',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20300,
                        label: '都市异能'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01UV4BJkl42/czWZ3EONgKU2r3.jpg',
                summary: '一个差等生，一次偶然的意外。让他获得了修真第一功法，从此命运彻底的改变。',
                fiction_id: 1,
                outer_id: '22149706000917102',
                latest: '第3804章 轮回'
            },
            {
                ad: 0,
                word_count: 5632993,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 171,
                copyright: '',
                title: '桃运邪医',
                on_sale: true,
                comment_count: 111,
                has_ad: 0,
                click: 29248116,
                latest_id: 1836,
                score: 6.17,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1450962052,
                finish: true,
                tags: ['都市生活', '都市'],
                price: 5,
                chapter_count: 1837,
                authors: '九姑良',
                categories: [
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01CSPEpssbh/QX47PtVxe6mZZx.jpg',
                summary: '高手会医术，暧昧挡不住！女朋友劈腿后，偶得玄佛珠，他医术变得精妙绝伦，从此便左右逢源各色美人，为了...',
                fiction_id: 2,
                outer_id: '5604b1b550e3a44b3a357dab',
                latest: '第1848章 【大结局】'
            },
            {
                ad: 0,
                word_count: 7112672,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2712,
                copyright: '',
                title: '与千年女鬼同居的日子',
                new_tags: ['护短', '争霸流', '鬼怪', '学生'],
                on_sale: true,
                comment_count: 1414,
                has_ad: 0,
                click: 28488404,
                latest_id: 3413,
                score: 7.82,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1522065656,
                finish: true,
                tags: ['灵异鬼怪', '灵异', '灵异奇谈'],
                price: 5,
                chapter_count: 3412,
                authors: '卜非',
                categories: [
                    {
                        category_id: 8000000,
                        label: '灵异'
                    },
                    {
                        category_id: 8000400,
                        label: '灵异奇谈'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p016UvfGFQEL/S0L9slf1RtEio9.jpg',
                summary: '为了赚点零花钱代人扫墓，结果一只女鬼跟着回了家，额滴个神呀，从此诡异的事情接二连三的发生在了自己身边...',
                fiction_id: 3,
                outer_id: '22132203000058502',
                latest: '新书《都市修真妖孽》'
            },
            {
                ad: 0,
                word_count: 3432995,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 467,
                copyright: '',
                title: '邪少药王',
                on_sale: true,
                comment_count: 236,
                has_ad: 0,
                click: 26432658,
                latest_id: 858,
                score: 8.33,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1500003511,
                finish: true,
                tags: ['玄幻奇幻', '玄幻', '东方玄幻'],
                price: 5,
                chapter_count: 859,
                authors: '胜己',
                categories: [
                    {
                        category_id: 10000,
                        label: '玄幻奇幻'
                    },
                    {
                        category_id: 10100,
                        label: '东方玄幻'
                    },
                    {
                        category_id: 1000000,
                        label: '玄幻'
                    },
                    {
                        category_id: 1000100,
                        label: '东方玄幻'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01Bj6az4VDj/TBEwe6kdddSVBo.jpg',
                summary: '看纨绔邪少，如何统领家族做一家之主，走上巅峰，无可匹敌！',
                fiction_id: 1,
                outer_id: '52cb6cf825ccbf4149d0001e',
                latest: '新书的一些消息，以及几句闲聊'
            },
            {
                ad: 0,
                word_count: 5686431,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 760,
                copyright: '',
                title: '虚无神在都市',
                on_sale: false,
                comment_count: 529,
                has_ad: 0,
                click: 24907992,
                latest_id: 2045,
                score: 7.81,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [1],
                updated: 1465875336,
                finish: true,
                tags: ['热血', '虚无神', '都市异能', '爽文', '都市', '范华'],
                price: 3,
                chapter_count: 2046,
                authors: '血色红泪',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20300,
                        label: '都市异能'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01koUBhSm3G/aJGID4iDrCnAry.jpg',
                summary: '神仙投胎到地球的一户普通人家，任性的他选择用普通人的模式征服世界！',
                fiction_id: 2,
                outer_id: '52e0c8a30ea49753e84e672d',
                latest: '第2069章 后记'
            },
            {
                ad: 0,
                word_count: 1429815,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 240,
                copyright: '',
                title: '超级姐夫',
                on_sale: false,
                comment_count: 149,
                has_ad: 0,
                click: 25323805,
                latest_id: 628,
                score: 7.8,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1435599680,
                finish: true,
                tags: ['现代言情', '爱情婚姻', '都市言情', '都市'],
                price: 5,
                chapter_count: 629,
                authors: '酒天',
                categories: [
                    {
                        category_id: 100000,
                        label: '现代言情'
                    },
                    {
                        category_id: 100100,
                        label: '都市言情'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000200,
                        label: '爱情婚姻'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01685Z6AqDQ/qbgbHnvaYxJXMA.jpg',
                summary: '一个姐夫，众多小姨子！',
                fiction_id: 3,
                outer_id: '5582332950e3a473924c7fb8',
                latest: '629 人生如梦（求订阅，月票，打赏）'
            },
            {
                ad: 0,
                word_count: 2003052,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 245,
                copyright: '',
                title: '九阳绝脉',
                on_sale: false,
                comment_count: 176,
                has_ad: 0,
                click: 23748448,
                latest_id: 1051,
                score: 7.66,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [1],
                updated: 1465872879,
                finish: true,
                tags: ['凌落羽', '秦紫蝶', '九阳绝脉', '王巧儿', '仙侠', '古典仙侠', '武侠仙侠'],
                price: 3,
                chapter_count: 1052,
                authors: '酸豆角',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30100,
                        label: '古典仙侠'
                    },
                    {
                        category_id: 4000000,
                        label: '仙侠'
                    },
                    {
                        category_id: 4000100,
                        label: '古典仙侠'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01tWRTycRlt/lLErDyN3DQOrqR.jpg',
                summary: '生九阳绝脉者，乃逆天之人，必遭天妒，自有史以来，生九阳绝脉者从未有人活到过十八岁…… 修行者，夺天...',
                fiction_id: 1,
                outer_id: '544f859f0ea49706f28b8cc9',
                latest: '第1052章 吞噬诸天'
            },
            {
                ad: 0,
                word_count: 4040051,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 361,
                copyright: '',
                title: '都市极品人生',
                on_sale: false,
                comment_count: 266,
                has_ad: 0,
                click: 24434374,
                latest_id: 1805,
                score: 7.74,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [1],
                updated: 1451367056,
                finish: true,
                tags: ['豪门', '黑道', '诙谐', '江湖', '爱情婚姻', '都市情缘', '都市', '热血都市'],
                price: 3,
                chapter_count: 1806,
                authors: '逍遥门主',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20100,
                        label: '都市情缘'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000200,
                        label: '爱情婚姻'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01vTaycwu1L/bRsax0YgFQnrW9.jpg',
                summary: '一个打工的倒霉蛋，偶然得到了一枚神秘的血石。从此后，他的生活和命运发生了...',
                fiction_id: 2,
                outer_id: '544f85c20ea49706f28b8d05',
                latest: '第1806章 无声的祝福'
            },
            {
                ad: 0,
                word_count: 5345433,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1430,
                copyright: '',
                title: '他身上有条龙',
                new_tags: ['孤儿', '阳光', '变身'],
                on_sale: true,
                comment_count: 1044,
                has_ad: 0,
                click: 23224118,
                latest_id: 2590,
                score: 8.02,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1523905853,
                finish: false,
                tags: ['异术超能', '都市异能', '热血都市', '都市'],
                price: 5,
                chapter_count: 2591,
                authors: '黑夜与孤城',
                categories: [
                    {
                        category_id: 20000,
                        label: '热血都市'
                    },
                    {
                        category_id: 20300,
                        label: '都市异能'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p010fiq8iAoy/cdAE8rlqt39uw7.jpg',
                summary: '他因爱人背弃而投身军旅，凭着天生军人天赋，被一支神秘没有番号的部队选中经过三年的枪林弹雨，他...',
                fiction_id: 3,
                outer_id: '22175957000445002',
                latest: '第2588章 凤兀鹫'
            },
            {
                ad: 0,
                word_count: 1085492,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 316,
                copyright: '',
                title: '黑色家族的秘婚：魅宠7分77秒',
                on_sale: true,
                comment_count: 202,
                has_ad: 0,
                click: 38521965,
                latest_id: 996,
                score: 8.48,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1436158129,
                finish: true,
                tags: ['总裁世家', '现代言情', '总裁豪门', '豪门世家'],
                price: 5,
                chapter_count: 997,
                authors: '绛美人',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p0118GranY84/1SMaeeO7ORL2eI.jpg',
                summary: '时御寒：“床都上了，爱都做了，你竟然还想离婚？”宋清欢：“时御寒，我喜欢你，你是否喜欢我？”时御...',
                fiction_id: 1,
                outer_id: '5582353d50e3a4738f4c8795',
                latest: '番外：寒欢的幸福小生活5'
            },
            {
                ad: 0,
                word_count: 1414342,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1743,
                copyright: '',
                title: '总裁的美丽娇妻',
                on_sale: true,
                comment_count: 1222,
                has_ad: 0,
                click: 37332552,
                latest_id: 362,
                score: 8.51,
                allow_free_read: 1,
                rights_id: 20002,
                channel: [2],
                updated: 1441529920,
                finish: true,
                tags: ['总裁世家', '总裁豪门', '现代言情', '豪门世家'],
                price: 3,
                chapter_count: 363,
                authors: '肖若水',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '红袖',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01Wp3AS4hlg/jnoBAS50QrgwYb.jpg',
                summary: '一日，他突临医院，怀中抱着一个女人，而她竟能淡定的为小三做流产手术。',
                fiction_id: 2,
                outer_id: '53ce0c610ea4976681d47e95',
                latest: '第149章 全文结局'
            },
            {
                ad: 0,
                word_count: 2637575,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 554,
                copyright: '',
                title: '娇妻甜蜜蜜：总裁，有喜了',
                new_tags: ['宠文', '总裁', '腹黑', '宝宝', '豪门'],
                on_sale: true,
                comment_count: 365,
                has_ad: 0,
                click: 36794367,
                latest_id: 2587,
                score: 8.67,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1503695938,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2561,
                authors: '沫果',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01amVWRcirS/lIMPNaOiBkgx0a.jpg',
                summary: '订婚前夜，她被他夺了第一次，“我说过，你只能是我的！”订婚的当天，他对她的未婚夫说，“借你夫人一...',
                fiction_id: 3,
                outer_id: '4222465304080703',
                latest: '大结局'
            },
            {
                ad: 0,
                word_count: 1908722,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1103,
                copyright: '',
                title: '亿万老婆买一送一【大结局】',
                on_sale: true,
                comment_count: 713,
                has_ad: 0,
                click: 36242468,
                latest_id: 922,
                score: 9.09,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [2],
                updated: 1451359266,
                finish: true,
                tags: ['虐恋', '豪门', '疼痛', '情殇', '总裁世家', '总裁豪门', '豪门世家', '现代言情'],
                price: 3,
                chapter_count: 923,
                authors: '安知晓',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01FaBfWs8gX/S6hqWau46hFK5H.jpg',
                summary: '七年前，她潇洒地丢下100块，带着儿子落跑。七年后，她带着女性杀手的天才儿子回来，没想到...',
                fiction_id: 1,
                outer_id: '53bf8d160ea4971cfc9c7e5f',
                latest: '第923章'
            },
            {
                ad: 0,
                word_count: 982861,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 766,
                copyright: '',
                title: '天才宝宝，总统爹地伤不起',
                on_sale: false,
                comment_count: 527,
                has_ad: 0,
                click: 34889275,
                latest_id: 424,
                score: 8.95,
                allow_free_read: 1,
                rights_id: 20002,
                channel: [2],
                updated: 1407464185,
                finish: true,
                tags: ['总裁世家', '总裁豪门', '现代言情', '豪门世家'],
                price: 3,
                chapter_count: 425,
                authors: '云檀',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '红袖',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01amTtGVLFb/2sLm7dG5jbu0Cp.jpg',
                summary: '身为国家特种兵的她，十七岁的时候干了一件大事：她跟未来总统……最后偷偷摸摸的生了一个天...',
                fiction_id: 2,
                outer_id: '53ce0c540ea4976681d47e84',
                latest: '你是我心里的一首歌（44）【余音结局7000】'
            },
            {
                ad: 0,
                word_count: 4322608,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 3028,
                copyright: '',
                title: '史上第一宠婚：慕少的娇妻',
                new_tags: ['宠文', '总裁', '独宠', '隐婚'],
                on_sale: true,
                comment_count: 2616,
                has_ad: 0,
                click: 32825450,
                latest_id: 3645,
                score: 8.75,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1484563352,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2149,
                authors: '北川云上锦',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01cDPdIDeKk/O5zxc568FVlvrd.jpg',
                summary: '一场精心设计的豪门盛宴，未婚夫单膝下跪跟她的妹妹求婚，她被剥夺继承权，成为席家联姻的筹码，打包送入虎...',
                fiction_id: 3,
                outer_id: '22236034000697702',
                latest: '2151章 偕老（七）（全文完）'
            },
            {
                ad: 0,
                word_count: 1464957,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 301,
                copyright: '',
                title: 'Boss宠上瘾：娇妻，别闹！',
                new_tags: ['暧昧', '总裁', '傲娇', '宝宝', '豪门'],
                on_sale: true,
                comment_count: 174,
                has_ad: 0,
                click: 32379701,
                latest_id: 1434,
                score: 8.49,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1491067066,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1425,
                authors: '千桃',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p0186fSb4FEL/MLb16rt1yaxD2w.jpg',
                summary: '“疼……”疼痛出乎她意料。男人的声音沙哑暗沉：“第一次？”千桃这辈子做的最大胆的事，就是算计...',
                fiction_id: 1,
                outer_id: '3994608803931203',
                latest: '1435 一生一世一双人（395）【大结局】'
            },
            {
                ad: 0,
                word_count: 3317244,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 822,
                copyright: '',
                title: '神秘老公，深夜来',
                new_tags: ['暧昧', '总裁', '独宠', '契约', '日久生情'],
                on_sale: true,
                comment_count: 546,
                has_ad: 0,
                click: 46150030,
                latest_id: 3287,
                score: 8.57,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1507815637,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 3235,
                authors: '荧光紫',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01RFIPMB6Ny/MlL1BKF5rB3eUQ.jpg',
                summary: '他将她抵进船舱里，“你、你要干什么？”“干你！” “我不要，疼！”“乖，打完针就不疼了。”他欺身压...',
                fiction_id: 2,
                outer_id: '4610162504667503',
                latest: '第3287章 我们结婚了（大结局）'
            },
            {
                ad: 0,
                word_count: 914052,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2069,
                copyright: '',
                title: '高冷男神住隔壁：错吻55次',
                on_sale: true,
                comment_count: 1640,
                has_ad: 0,
                click: 30736333,
                latest_id: 935,
                score: 8.63,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1436090594,
                finish: true,
                tags: ['总裁世家', '现代言情', '总裁豪门', '豪门世家'],
                price: 5,
                chapter_count: 936,
                authors: '叶非夜',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01OXPzLUhK9/6HXx3iKhf4M7C4.jpg',
                summary: '结婚前的顾倾城，总想着怎样推到唐时。结婚后的顾倾城，却想着怎样让唐时放过她一晚。',
                fiction_id: 3,
                outer_id: '5582348d50e3a473904c853d',
                latest: '关于番外+521约吗？'
            },
            {
                ad: 0,
                word_count: 2068121,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 80,
                copyright: '',
                title: '亿万继承者：秘宠宝贝婚后爱',
                on_sale: true,
                comment_count: 53,
                has_ad: 0,
                click: 29192532,
                latest_id: 2013,
                score: 8.47,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1450812823,
                finish: true,
                tags: ['总裁世家', '现代言情', '总裁豪门', '豪门世家'],
                price: 5,
                chapter_count: 2014,
                authors: '君枫苑',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01bimnIou9f/ULj1eMzE61rmSl.jpg',
                summary: '“少爷，我对你绝无二心，为了你，我可以赴汤蹈火，奋不顾身，义无反顾……”欧凯抬起眼角，不紧不慢的扫了...',
                fiction_id: 1,
                outer_id: '5582348f50e3a473924c84f8',
                latest: '第2013章 大结局（5）'
            },
            {
                ad: 0,
                word_count: 2290685,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 3793,
                copyright: '',
                title: '许你万丈光芒好',
                new_tags: ['宠文', '总裁', '专情', '复仇', '影视名家'],
                on_sale: true,
                comment_count: 1915,
                has_ad: 0,
                click: 35826158,
                latest_id: 2167,
                score: 9.53,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1509056255,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2168,
                authors: '囧囧有妖',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01vslTvw9cM/Qk6fIoJD3dvMza.jpg',
                summary: '“你救了我，我让我爹地以身相许！”宁夕意外救了只小包子，结果被附赠了一只大包子。婚后，陆霆骁...',
                fiction_id: 2,
                outer_id: '4818982104534803',
                latest: '第2165章 我的小心心【番外】'
            },
            {
                ad: 0,
                word_count: 2604582,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 836,
                copyright: '',
                title: '一不小心潜了总裁',
                on_sale: true,
                comment_count: 652,
                has_ad: 0,
                click: 31026543,
                latest_id: 847,
                score: 8.44,
                allow_free_read: 1,
                rights_id: 20002,
                channel: [2],
                updated: 1441012682,
                finish: true,
                tags: ['总裁世家', '总裁豪门', '现代言情', '豪门世家'],
                price: 3,
                chapter_count: 848,
                authors: '聿天使',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '红袖',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01XqMmEClTJ/ZdwD9gwz0ilBRa.jpg',
                summary: '第一次见面，她对他说——我们结婚吧！他扫了她一眼问——我三十，你二十，我们合适吗？第二次见面，她',
                fiction_id: 3,
                outer_id: '52d74e5f0ea49726724f86da',
                latest: '就这样宠着你一辈子【完结】'
            },
            {
                ad: 0,
                word_count: 1091295,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1039,
                copyright: '',
                title: '大总裁，小娇妻！',
                new_tags: ['正剧', '总裁', '独宠', '重生', '豪门'],
                on_sale: true,
                comment_count: 514,
                has_ad: 0,
                click: 31787720,
                latest_id: 1079,
                score: 8.76,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1487052958,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1075,
                authors: '妃子一笑',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01CRgZLCO9a/Y8VsVrVkHuRyW0.jpg',
                summary: '“小东西，过来！”“不要！”老婆生气了怎么办？总裁大人财大气粗，每天狂示爱！今天送豪车，明天送豪宅',
                fiction_id: 1,
                outer_id: '5178708903358803',
                latest: '第1080章 会陪你走过一百岁（大结局）'
            },
            {
                ad: 0,
                word_count: 4253776,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2245,
                copyright: '',
                title: '闪婚厚爱：顶级老公有点酷',
                new_tags: ['宠文', '明星'],
                on_sale: true,
                comment_count: 1870,
                has_ad: 0,
                click: 31055540,
                latest_id: 2094,
                score: 8.75,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1523296382,
                finish: false,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2090,
                authors: '万豆薇',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01maTuZ87Ph/TT2rOGlysDHBRc.jpg',
                summary: '她惨遭未婚夫悔婚！一时情急竟嫁了个‘穷三代’的男人！殊不知自己嫁进了第一豪门！从此，叶慕人生来了...',
                fiction_id: 2,
                outer_id: '22236600000723102',
                latest: '送上门'
            },
            {
                ad: 0,
                word_count: 2013820,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1089,
                copyright: '',
                title: '总裁，我要离婚',
                on_sale: true,
                comment_count: 821,
                has_ad: 0,
                click: 27240347,
                latest_id: 611,
                score: 8.21,
                allow_free_read: 1,
                rights_id: 20002,
                channel: [2],
                updated: 1441014101,
                finish: true,
                tags: ['现言', '总裁豪门', '豪门总裁'],
                price: 3,
                chapter_count: 612,
                authors: '纳兰雪央',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '红袖',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01O1lZTYfM3/MuwHOi2kIR4AGL.jpg',
                summary: '一个意外的小生命让本是商场死对头的两人,不得不走进婚姻。盛世婚礼，他在当天飞往巴黎...',
                fiction_id: 3,
                outer_id: '53327b3b0ea4970cff5f215c',
                latest: '第057章：那颗他贪图的心'
            }
        ]
    }
}

db.specialrecomments.insert(specialRecommentObj) //批量一次插入

const womanLoveObj = {
    ad_name: '女生最爱',
    data: {
        count: 15,
        total: 17,
        data: [
            {
                ad: 0,
                word_count: 1527573,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 687,
                copyright: '',
                title: '攻妻不备：老公请你消停点',
                on_sale: true,
                comment_count: 517,
                has_ad: 0,
                click: 28172564,
                latest_id: 1486,
                score: 7.77,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1471632006,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1487,
                authors: '顾翩然',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01RDu70qzaC/t0vesPsVVUZsqP.jpg',
                summary: '第一次，被他夜袭闺房，她忍了。第二次，被他压倒在洗手台，她怒了。第三次，被他送的红玫瑰堆满了...',
                fiction_id: 1,
                outer_id: '571dd5a050e3a44f80cc0c4f',
                latest: '第1425章 我好恨他'
            },
            {
                ad: 0,
                word_count: 1574237,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 299,
                copyright: '',
                title: '嫡女重生：盛宠世子妃',
                on_sale: false,
                comment_count: 219,
                has_ad: 0,
                click: 24547670,
                latest_id: 734,
                score: 7.78,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1437043875,
                finish: true,
                tags: ['宫闱宅斗', '宫廷侯爵', '古代言情'],
                price: 5,
                chapter_count: 735,
                authors: '清清水色',
                categories: [
                    {
                        category_id: 110000,
                        label: '古代言情'
                    },
                    {
                        category_id: 110200,
                        label: '宫廷侯爵'
                    },
                    {
                        category_id: 17000000,
                        label: '古代言情'
                    },
                    {
                        category_id: 17000500,
                        label: '宫闱宅斗'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01ukU3JdURy/dWEP6wgSN64Io4.jpg',
                summary: '死后重生，护幼弟，抗继母，收服夫君，应付婆婆，修身齐家，封妻荫子，后宅逍遥，看谁敢与她叫板！',
                fiction_id: 2,
                outer_id: '5582346050e3a4738d4c82d2',
                latest: '番外之花好月圆（完）'
            },
            {
                ad: 0,
                word_count: 1505257,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 185,
                copyright: '',
                title: '总裁在上：新妻，不要闹',
                on_sale: true,
                comment_count: 125,
                has_ad: 0,
                click: 24669640,
                latest_id: 1408,
                score: 8.11,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1482227551,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1408,
                authors: '鱼酱二千',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01Dr7mqFDpX/ML3PEBg0kuJ4fd.jpg',
                summary: '（甜宠文）“偷了我的种，还想跑？活腻了！”他将她摁在墙壁上，壁咚。“现在，马上，立刻，离婚！我不干...',
                fiction_id: 3,
                outer_id: '4253446003744603',
                latest: '第1407章 大结局【新文《隐婚总裁霸道宠：薄少，求放过》】'
            },
            {
                ad: 0,
                word_count: 3208186,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1290,
                copyright: '',
                title: '绝世神医：腹黑大小姐',
                on_sale: true,
                comment_count: 778,
                has_ad: 0,
                click: 28029930,
                latest_id: 3122,
                score: 9.23,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1479927407,
                finish: true,
                tags: ['古代言情', '穿越奇情'],
                price: 5,
                chapter_count: 3123,
                authors: '夜北',
                categories: [
                    {
                        category_id: 17000000,
                        label: '古代言情'
                    },
                    {
                        category_id: 17000400,
                        label: '穿越奇情'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01WosuAphoe/eLUhnWl2dFiqPR.jpg',
                summary: '她是二十四世纪神医，一支银针，活死人，肉白骨。一夕穿越，成为王府人人喊打的大小姐。没有戒灵、骄横无能...',
                fiction_id: 1,
                outer_id: '568397a950e3a40e99c9b17a',
                latest: '第13章：曲终人未散-娃娃亲'
            },
            {
                ad: 0,
                word_count: 1671276,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 220,
                copyright: '',
                title: '毒妃狠嚣张：残王来过招',
                on_sale: true,
                comment_count: 115,
                has_ad: 0,
                click: 27410520,
                latest_id: 1618,
                score: 7.9,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1455682844,
                finish: true,
                tags: ['古代言情', '穿越奇情'],
                price: 5,
                chapter_count: 1619,
                authors: '傅九',
                categories: [
                    {
                        category_id: 17000000,
                        label: '古代言情'
                    },
                    {
                        category_id: 17000400,
                        label: '穿越奇情'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01csolpekva/lMvJPHSbY5svoo.jpg',
                summary: '“这位爷，在我浴桶里呆够了么？”他被追杀，她藏匿，贼寇已撤，他还赖着不走。凤九阙长眉一挑：“莫非...',
                fiction_id: 2,
                outer_id: '568397b250e3a40e95c9b188',
                latest: '第1599章：大结局：相约下一世！'
            },
            {
                ad: 0,
                word_count: 3727965,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 814,
                copyright: '',
                title: '隐婚老公：离婚请签字',
                new_tags: ['HE', '总裁', '萌系', '日久生情'],
                on_sale: true,
                comment_count: 684,
                has_ad: 0,
                click: 24482951,
                latest_id: 2556,
                score: 8.21,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1491556324,
                finish: true,
                tags: ['婚姻家庭', '现代言情', '婚恋情缘'],
                price: 5,
                chapter_count: 2452,
                authors: '却下层楼',
                categories: [
                    {
                        category_id: 100000,
                        label: '现代言情'
                    },
                    {
                        category_id: 100200,
                        label: '婚姻家庭'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000200,
                        label: '婚恋情缘'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01W4caNg61i/LbvpYzLcr2ssT5.jpg',
                summary: '他的白莲花回来，她果敢的提了离婚。分居后的某天，她被堵在狭窄的过道里，动弹不得。“慕晋之，放...',
                fiction_id: 3,
                outer_id: '22236579000722102',
                latest: '小剧场（3）求月票！'
            },
            {
                ad: 0,
                word_count: 1344759,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 125,
                copyright: '',
                title: '嗜血特种兵：纨绔战神妃',
                on_sale: true,
                comment_count: 84,
                has_ad: 0,
                click: 24489650,
                latest_id: 1328,
                score: 8.08,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1443547441,
                finish: true,
                tags: ['架空穿越', '穿越架空', '古代言情', '穿越奇情'],
                price: 5,
                chapter_count: 1329,
                authors: '凌薇雪倩',
                categories: [
                    {
                        category_id: 130000,
                        label: '穿越架空'
                    },
                    {
                        category_id: 130100,
                        label: '架空穿越'
                    },
                    {
                        category_id: 17000000,
                        label: '古代言情'
                    },
                    {
                        category_id: 17000400,
                        label: '穿越奇情'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01uNn15XctF/gRHSgJj3QQTduQ.jpg',
                summary: '冷血是她的代名词，腹黑是她的性格，伪装是她的拿手好戏，霸道是她的一贯作风。再睁眼，她成了北冥国将军...',
                fiction_id: 1,
                outer_id: '5582345950e3a473904c8460',
                latest: '1329北冥宸5'
            },
            {
                ad: 0,
                word_count: 733316,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 273,
                copyright: '',
                title: '羊入虎口：这个相公有点坏',
                on_sale: true,
                comment_count: 220,
                has_ad: 0,
                click: 24174547,
                latest_id: 447,
                score: 6.33,
                allow_free_read: 1,
                rights_id: 20002,
                channel: [2],
                updated: 1411384261,
                finish: true,
                tags: ['种田重生', '经商种田', '布衣种田', '古代言情'],
                price: 3,
                chapter_count: 448,
                authors: '高山舞者',
                categories: [
                    {
                        category_id: 110000,
                        label: '古代言情'
                    },
                    {
                        category_id: 110400,
                        label: '布衣种田'
                    },
                    {
                        category_id: 17000000,
                        label: '古代言情'
                    },
                    {
                        category_id: 17000600,
                        label: '经商种田'
                    }
                ],
                rights: '红袖',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01MFBBW4tHP/XOOPERh6FHIeDU.jpg',
                summary: '她代姐而嫁，未曾洞房即被下堂。隔天，全府上下传言她婚前失贞，她无力辩驳。那触目惊心的鲜血将他的理...',
                fiction_id: 2,
                outer_id: '52d74f0b0ea49726724f88b3',
                latest: '终极结局（完）'
            },
            {
                ad: 0,
                word_count: 1822114,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 590,
                copyright: '',
                title: '总裁大人，宠妻太嚣张！',
                new_tags: ['宠文', '总裁', '腹黑', '宝宝', '豪门'],
                on_sale: true,
                comment_count: 346,
                has_ad: 0,
                click: 23987266,
                latest_id: 1734,
                score: 8.86,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1497872620,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1714,
                authors: '封央',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01zxABepYKH/TwG8fuKExp4HMh.jpg',
                summary: '（绝宠文）母亲结婚当晚，她被继父的儿子给上了。青涩稚嫩的女儿身在他身下绽放，被他认真的观赏着，放...',
                fiction_id: 3,
                outer_id: '4421016004857003',
                latest: '第1732章 醋王，大结局'
            },
            {
                ad: 0,
                word_count: 2131739,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 320,
                copyright: '',
                title: '爵少的私宠：娇妻，太撩人',
                on_sale: true,
                comment_count: 226,
                has_ad: 0,
                click: 21091918,
                latest_id: 1071,
                score: 8.35,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1481185225,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1072,
                authors: '南色流年',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01vHNZhHBQE/6xSJHTkIFo9H4h.jpg',
                summary: '新婚夜，缱绻缠绵，醒来却发现身边躺着个冷酷无双的陌生男人，她落慌而逃。心爱之人为此对她冷漠疏离，...',
                fiction_id: 1,
                outer_id: '5718458b50e3a46f462a6104',
                latest: '慕晚最后番外（关于婚礼，关于孩子了）'
            },
            {
                ad: 0,
                word_count: 1101680,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1418,
                copyright: '',
                title: '那时喜欢你',
                new_tags: ['甜文', '总裁', '吃货', '契约', '青梅竹马'],
                on_sale: true,
                comment_count: 854,
                has_ad: 0,
                click: 22292708,
                latest_id: 1074,
                score: 9.32,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1486575676,
                finish: true,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1074,
                authors: '叶非夜',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01eZs8Jyaov/5OxoSzkLjSKzKF.jpg',
                summary: '一场意外，她和他睡在一起，两个月后她怀孕，他和她奉子成婚。“顾先生，我喜欢这家的菜。”这家的厨师...',
                fiction_id: 2,
                outer_id: '4963221703427703',
                latest: '第1074章 小剧场：坑娃小花生'
            },
            {
                ad: 0,
                word_count: 2956225,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1078,
                copyright: '',
                title: '1号新妻：老公，宠上瘾！',
                new_tags: ['治愈', '总裁', '独宠', '契约', '豪门'],
                on_sale: true,
                comment_count: 483,
                has_ad: 0,
                click: 31351002,
                latest_id: 2891,
                score: 8.88,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1523902517,
                finish: false,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 2892,
                authors: '妖妖仙儿',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01fNK5vOKvg/BlRcg8OLBFCHii.jpg',
                summary: '被继母逼迫，她走投无路，哀求他买下自己，条件是两年内产下他的骨肉……婚后，只要他出现，她随时准备',
                fiction_id: 3,
                outer_id: '6362064904811203',
                latest: '第两千四百九十二章 蓝宇和全世界，选一个４'
            },
            {
                ad: 0,
                word_count: 950640,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 792,
                copyright: '',
                title: '纯情帝少：早安，亿万萌妻',
                on_sale: true,
                comment_count: 610,
                has_ad: 0,
                click: 20396080,
                latest_id: 731,
                score: 8.64,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1449522776,
                finish: true,
                tags: ['总裁世家', '现代言情', '总裁豪门', '豪门世家'],
                price: 5,
                chapter_count: 732,
                authors: '灵小火',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01eBVhQPiWc/6VTv7FAnsxKfig.jpg',
                summary: '小可怜苏绵绵代姐相亲，结果一不小心相中了一个黑手党。“咩咩，我爸爸不是坏人，他只是做机械的研发工作...',
                fiction_id: 1,
                outer_id: '5582352350e3a473924c872b',
                latest: '白静的婚礼（3）'
            },
            {
                ad: 0,
                word_count: 4383165,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 549,
                copyright: '',
                title: '一胎二宝：亿万首席爱妻入骨',
                new_tags: ['甜文', '总裁', '腹黑', '宝宝', '豪门'],
                on_sale: true,
                comment_count: 310,
                has_ad: 0,
                click: 23350336,
                latest_id: 4313,
                score: 8.48,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1523902968,
                finish: false,
                tags: ['现代言情', '豪门世家'],
                price: 5,
                chapter_count: 4295,
                authors: '花容月下',
                categories: [
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下云起书院',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01B3ZTCG3vw/Ptoucs59LPWKj2.jpg',
                summary: '一张百万契约，她成为代孕妈咪。他是高高在上的帝国首席执行官，挥手翻云覆雨。而她却是身世卑微的...',
                fiction_id: 2,
                outer_id: '3558014202679003',
                latest: '彼境282'
            },
            {
                ad: 0,
                word_count: 4950876,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1065,
                copyright: '',
                title: '首席的独宠新娘',
                new_tags: ['甜文', '总裁', '专情', '腹黑', '日久生情', '别后重逢'],
                on_sale: true,
                comment_count: 766,
                has_ad: 0,
                click: 21365957,
                latest_id: 2825,
                score: 7.89,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [2],
                updated: 1523963277,
                finish: false,
                tags: ['总裁', '豪门', '宝宝', '凤易寒', '江心语', '总裁世家', '总裁豪门', '现代言情', '豪门世家'],
                price: 5,
                chapter_count: 1987,
                authors: '韩降雪',
                categories: [
                    {
                        category_id: 120000,
                        label: '总裁世家'
                    },
                    {
                        category_id: 120100,
                        label: '总裁豪门'
                    },
                    {
                        category_id: 18000000,
                        label: '现代言情'
                    },
                    {
                        category_id: 18000700,
                        label: '豪门世家'
                    }
                ],
                rights: '阅文集团旗下小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01ZD3fWtegs/2CPpcHeNjiEhVh.jpg',
                summary: '他是邪魅冷情的豪门总裁，是所有女人的梦中情*人，为了一笔生意，亲生父亲将她推入一个老男人的怀中，绝望...',
                fiction_id: 3,
                outer_id: '25397969000762101',
                latest: '郎才女貌，天生一对'
            }
        ]
    }
}

db.womanloves.insert(womanLoveObj) //批量一次插入

const manLoveObj = {
    ad_name: '男生最爱',
    data: {
        count: 15,
        total: 29,
        data: [
            {
                ad: 0,
                word_count: 5102766,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 482,
                copyright: '',
                title: '巅峰小农民',
                on_sale: true,
                comment_count: 299,
                has_ad: 0,
                click: 17332408,
                latest_id: 2475,
                score: 7.02,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1508956619,
                finish: true,
                tags: ['异术超能', '都市'],
                price: 5,
                chapter_count: 2468,
                authors: '鸿蒙树',
                categories: [
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p015w3tM01MQ/TXv2wli6okj2nX.jpg',
                summary: '获得远古传承，小农民从此走上阳光大道。当清纯村姑、美艳女总裁、风流老板娘、火辣女教师、妖媚迷人校...',
                fiction_id: 1,
                outer_id: '2843448100165702',
                latest: '第二千三百七十六章 永恒不灭（全书完）'
            },
            {
                ad: 0,
                word_count: 4000452,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 902,
                copyright: '',
                title: '我捉鬼的那些年',
                on_sale: true,
                comment_count: 694,
                has_ad: 0,
                click: 17178188,
                latest_id: 1939,
                score: 8.17,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1470385861,
                finish: true,
                tags: ['灵异悬疑', '灵异奇谈', '灵异神怪', '灵异'],
                price: 5,
                chapter_count: 1940,
                authors: '魏某人',
                categories: [
                    {
                        category_id: 50000,
                        label: '灵异悬疑'
                    },
                    {
                        category_id: 50300,
                        label: '灵异神怪'
                    },
                    {
                        category_id: 8000000,
                        label: '灵异'
                    },
                    {
                        category_id: 8000400,
                        label: '灵异奇谈'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01PWSycwvjd/zeDAuyxVAB21Ji.jpg',
                summary: '我出生没多久就遇到了五鬼抬轿，差点把小命送掉，读大学的时候又遇到鬼婴借腹，人生从此改变。不久之后...',
                fiction_id: 2,
                outer_id: '5582344350e3a473914c8278',
                latest: '第1941章：大结局，新书《阴阳鬼命》已发布'
            },
            {
                ad: 0,
                word_count: 3939810,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2027,
                copyright: '',
                title: '武动乾坤',
                on_sale: true,
                comment_count: 998,
                has_ad: 0,
                click: 17290251,
                latest_id: 1327,
                score: 8.71,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1403271204,
                finish: true,
                tags: ['爽文', '玄幻奇幻', '玄幻', '东方玄幻'],
                price: 5,
                chapter_count: 1328,
                authors: '天蚕土豆',
                categories: [
                    {
                        category_id: 10000,
                        label: '玄幻奇幻'
                    },
                    {
                        category_id: 10100,
                        label: '东方玄幻'
                    },
                    {
                        category_id: 1000000,
                        label: '玄幻'
                    },
                    {
                        category_id: 1000100,
                        label: '东方玄幻'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01iW94dzV6R/4zZpS5M6Zy8WO1.jpg',
                summary: '修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。武之极，破苍穹，动乾坤！新书求收藏，求推荐，...',
                fiction_id: 3,
                outer_id: '53a41b590ea497236d0d6b80',
                latest: '新书大主宰已发。'
            },
            {
                ad: 0,
                word_count: 2059623,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 311,
                copyright: '',
                title: '终极小农民',
                on_sale: false,
                comment_count: 220,
                has_ad: 0,
                click: 15545495,
                latest_id: 993,
                score: 7.09,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1495591898,
                finish: true,
                tags: ['都市生活', '都市'],
                price: 5,
                chapter_count: 994,
                authors: '天兵',
                categories: [
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01nZVrQIO95/vwhcqgC9jjdILC.jpg',
                summary: '赵小林一贫如洗，家里还有瘫痪在床的老娘，被人指着鼻子骂癞蛤蟆想吃天鹅肉。莫笑少年穷！一切因为一根金手...',
                fiction_id: 1,
                outer_id: '3795357004967703',
                latest: '第994章 大结局'
            },
            {
                ad: 0,
                word_count: 3601503,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 3771,
                copyright: '',
                title: '雪鹰领主',
                new_tags: ['勇猛'],
                on_sale: true,
                comment_count: 1496,
                has_ad: 0,
                click: 18308772,
                latest_id: 1425,
                score: 8.68,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1512551430,
                finish: true,
                tags: ['异世大陆', '玄幻', '异界大陆'],
                price: 5,
                chapter_count: 1397,
                authors: '我吃西红柿',
                categories: [
                    {
                        category_id: 1000000,
                        label: '玄幻'
                    },
                    {
                        category_id: 1000200,
                        label: '异界大陆'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01gODzG2w6L/sGjqPMIzYNfzTf.jpg',
                summary: '在夏族的安阳行省，有一个很小很不起眼的领地，叫——雪鹰领！故事，就从这里开始！**继《莽...',
                fiction_id: 2,
                outer_id: '22445673000912202',
                latest: '番茄新书《飞剑问道》第一章已经上传！'
            },
            {
                ad: 0,
                word_count: 5465055,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 700,
                copyright: '',
                title: '美女市长老婆',
                on_sale: true,
                comment_count: 388,
                has_ad: 0,
                click: 17488683,
                latest_id: 1768,
                score: 6.74,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1499840592,
                finish: true,
                tags: ['武侠仙侠', '现代言情', '浪子异侠', '都市生活'],
                price: 5,
                chapter_count: 1769,
                authors: '流浪',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30600,
                        label: '浪子异侠'
                    },
                    {
                        category_id: 18000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01kNI6gtVXE/ekFYPZSVYpoWvI.jpg',
                summary: '家里有个美女市长，又怎么样？照样给我暖被窝！外面的富豪千金有点傲娇？照样被我给征服！清纯校花喜欢...',
                fiction_id: 3,
                outer_id: '52cb6d6525ccbf4149d00087',
                latest: '第1769章 永远的传说（大结局）'
            },
            {
                ad: 0,
                word_count: 3276824,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 243,
                copyright: '',
                title: '狙击天才',
                on_sale: true,
                comment_count: 150,
                has_ad: 0,
                click: 16145637,
                latest_id: 1140,
                score: 8.01,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1461131483,
                finish: true,
                tags: ['军事', '武侠仙侠', '传统武侠', '战争幻想'],
                price: 5,
                chapter_count: 1141,
                authors: '野兵',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30500,
                        label: '传统武侠'
                    },
                    {
                        category_id: 7000000,
                        label: '军事'
                    },
                    {
                        category_id: 7000100,
                        label: '战争幻想'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01dbIPnKLn3/BqVUsS3xLP4DrQ.jpg',
                summary: '只凭一颗子弹将金钱、美女收入怀中，他被称之为----狙击天才。',
                fiction_id: 1,
                outer_id: '52cb6d0e25ccbf4149d00032',
                latest: '完本感言'
            },
            {
                ad: 0,
                word_count: 7695599,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 2426,
                copyright: '',
                title: '阴阳鬼医',
                new_tags: ['阳光', '感情'],
                on_sale: true,
                comment_count: 1873,
                has_ad: 0,
                click: 17450012,
                latest_id: 3759,
                score: 8,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1512550036,
                finish: true,
                tags: ['搞笑', '暧昧', '医生', '灵异悬疑', '灵异神怪', '灵异', '灵异奇谈'],
                price: 5,
                chapter_count: 3754,
                authors: '沙中灰',
                categories: [
                    {
                        category_id: 50000,
                        label: '灵异悬疑'
                    },
                    {
                        category_id: 50300,
                        label: '灵异神怪'
                    },
                    {
                        category_id: 8000000,
                        label: '灵异'
                    },
                    {
                        category_id: 8000400,
                        label: '灵异奇谈'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01ZKlWCcvHg/0knO9zNEMChTan.jpg',
                summary: '我叫欧宁，我是医生，身为一名医生，给活人看病不是本事，给死鬼看病才叫能耐。我有祖传的医馆，它叫阴阳...',
                fiction_id: 2,
                outer_id: '22132280000091002',
                latest: '梦醒时分（大结局）'
            },
            {
                ad: 0,
                word_count: 6115808,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1404,
                copyright: '',
                title: '逍遥派',
                new_tags: ['孤儿', '练功流', '热血'],
                on_sale: true,
                comment_count: 907,
                has_ad: 0,
                click: 19592093,
                latest_id: 2322,
                score: 7.49,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1523906274,
                finish: false,
                tags: ['武侠幻想', '武侠仙侠', '浪子异侠', '武侠', '新派武侠'],
                price: 5,
                chapter_count: 2323,
                authors: '白马出淤泥',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30600,
                        label: '浪子异侠'
                    },
                    {
                        category_id: 3000000,
                        label: '武侠'
                    },
                    {
                        category_id: 3000200,
                        label: '新派武侠'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01BPVtoYC5O/hGLGOTvIoUzPi0.jpg',
                summary: '金庸武侠中有不少的神秘高手，书中或提起名字，或不曾提起，总之他们要么留下了绝世秘笈，要么就名震武林。...',
                fiction_id: 3,
                outer_id: '22378834000680702',
                latest: '第2318章 漩涡移位'
            },
            {
                ad: 0,
                word_count: 4471754,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 320,
                copyright: '',
                title: '九道神龙诀',
                on_sale: false,
                comment_count: 218,
                has_ad: 0,
                click: 15836139,
                latest_id: 2094,
                score: 8.15,
                allow_free_read: 1,
                rights_id: 10020,
                channel: [1],
                updated: 1451375514,
                finish: true,
                tags: ['美女', '混沌', '修真', '张小风', '灵儿', '幻想修仙', '奇幻修真', '仙侠', '武侠仙侠'],
                price: 5,
                chapter_count: 2095,
                authors: '言鼎',
                categories: [
                    {
                        category_id: 30000,
                        label: '武侠仙侠'
                    },
                    {
                        category_id: 30200,
                        label: '奇幻修真'
                    },
                    {
                        category_id: 4000000,
                        label: '仙侠'
                    },
                    {
                        category_id: 4000200,
                        label: '幻想修仙'
                    }
                ],
                rights: '小说阅读网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01E9ZDmaQ5x/7LTqHR6eId4rlV.jpg',
                summary: '【编辑鉴定：大神品质保证！】【仙侠超级爽文】九道神龙诀乃是九界至高无上，最为精妙的神典。但千万年来，...',
                fiction_id: 1,
                outer_id: '53bf8d170ea4971cfc9c7e60',
                latest: '第2095章 完结'
            },
            {
                ad: 0,
                word_count: 7269104,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 1174,
                copyright: '',
                title: '三界独尊',
                on_sale: true,
                comment_count: 900,
                has_ad: 0,
                click: 16743694,
                latest_id: 2377,
                score: 8.21,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1455956620,
                finish: true,
                tags: ['玄幻奇幻', '玄幻', '东方玄幻'],
                price: 5,
                chapter_count: 2378,
                authors: '犁天',
                categories: [
                    {
                        category_id: 10000,
                        label: '玄幻奇幻'
                    },
                    {
                        category_id: 1000000,
                        label: '玄幻'
                    },
                    {
                        category_id: 1000100,
                        label: '东方玄幻'
                    },
                    {
                        category_id: 10100,
                        label: '东方玄幻'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01yWnV8IF19/yFuvJBFJx0fPdR.jpg',
                summary: '天帝之子江尘，转生在一个被人欺凌的诸侯少年身上，从此踏上一段轰杀各种天才的逆袭之路。在江尘面前，谁...',
                fiction_id: 2,
                outer_id: '5582347d50e3a473914c8372',
                latest: '第2373章 大世界的传说（终章）'
            },
            {
                ad: 0,
                word_count: 4842730,
                owner: 0,
                allow_discount: false,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 777,
                copyright: '',
                title: '极品医圣',
                on_sale: false,
                comment_count: 628,
                has_ad: 0,
                click: 15683688,
                latest_id: 1595,
                score: 8.03,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1434359997,
                finish: true,
                tags: ['爽文', '玄幻奇幻', '都市生活', '西方奇幻', '都市'],
                price: 5,
                chapter_count: 1596,
                authors: '蔡晋',
                categories: [
                    {
                        category_id: 10000,
                        label: '玄幻奇幻'
                    },
                    {
                        category_id: 10500,
                        label: '西方奇幻'
                    },
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下起点中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01wX8KOkRSd/ORnI5d43C3wcAl.jpg',
                summary: '他是站在医药界金字塔最顶尖的人物，能够从阎王爷或是死神的手中抢夺生命！',
                fiction_id: 3,
                outer_id: '5379bfe20ea49711bc2c61a7',
                latest: '新书《超级英雄》求支持！'
            },
            {
                ad: 0,
                word_count: 3759083,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 659,
                copyright: '',
                title: '绝品少年高手',
                new_tags: ['爆笑', '孤儿', '无敌文', '职场'],
                on_sale: true,
                comment_count: 467,
                has_ad: 0,
                click: 17609952,
                latest_id: 1802,
                score: 7.8,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1511277846,
                finish: true,
                tags: ['异术超能', '都市'],
                price: 5,
                chapter_count: 1802,
                authors: '胭脂熊',
                categories: [
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000300,
                        label: '异术超能'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01FCBGboLtT/UYnBUny0zEZpPF.jpg',
                summary: '山村少年夏飞，从小被几个脾气古怪高手收养，学了一身莫名其妙的本领，也被熏陶成世界观迥异于常人的怪...',
                fiction_id: 1,
                outer_id: '22130124000204602',
                latest: '第1980章 超脱（大结局）'
            },
            {
                ad: 0,
                word_count: 5170618,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 401,
                copyright: '',
                title: '至尊兵王',
                on_sale: true,
                comment_count: 245,
                has_ad: 0,
                click: 5890848,
                latest_id: 1649,
                score: 7.08,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1479203561,
                finish: true,
                tags: ['都市生活', '都市'],
                price: 5,
                chapter_count: 1649,
                authors: '8难',
                categories: [
                    {
                        category_id: 5000000,
                        label: '都市'
                    },
                    {
                        category_id: 5000100,
                        label: '都市生活'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01jVof3hB5j/aAaklxQ6CZaMnc.jpg',
                summary: '他是华夏隐龙的天之骄子、放荡不羁惜花护花的龙少，也是敌人心中的终极恶魔、辣手无情屠戮三千的“暴龙”，...',
                fiction_id: 2,
                outer_id: '5604b1b450e3a44b3c357daa',
                latest: '第一千六百七十五章 华夏战神（终）'
            },
            {
                ad: 0,
                word_count: 2028889,
                owner: 0,
                allow_discount: 0,
                ad_time: 0,
                ad_duration: 0,
                free_chapter: false,
                score_count: 418,
                copyright: '',
                title: '七界战仙',
                on_sale: true,
                comment_count: 326,
                has_ad: 0,
                click: 4334299,
                latest_id: 660,
                score: 7.52,
                allow_free_read: 1,
                rights_id: 10080,
                channel: [1],
                updated: 1464109225,
                finish: true,
                tags: ['玄幻', '东方玄幻'],
                price: 5,
                chapter_count: 661,
                authors: '弹指帅哥',
                categories: [
                    {
                        category_id: 1000000,
                        label: '玄幻'
                    },
                    {
                        category_id: 1000100,
                        label: '东方玄幻'
                    }
                ],
                rights: '阅文集团旗下创世中文网',
                level: 0,
                cover: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01BOaCOk0Q5/VqBO19iIZmgJki.jpg',
                summary: '王峰醒来后，发现自己穿越了，成为了神武门一个外门弟子，更悲剧的是，有个妹子要来休掉他，这是要让他成为...',
                fiction_id: 3,
                outer_id: '55962dd49871fe504c75cb50',
                latest: '第六百五十九章 此生再不归！【大结局】'
            }
        ]
    }
}

db.manloves.insert(manLoveObj) //批量一次插入

const runTime = new Date().getTime() - startTime //计算时间差
print('This run this is:' + runTime + 'ms') //打印出来
print('[demo]log  print success') //没有错误显示成功
