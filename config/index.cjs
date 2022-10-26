/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx68e6cf61fe6d5059',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2e867e362fb0f4555c315443becc821c',

  // PROVINCE: '浙江',
  // CITY: '宁波',

  USERS: [
    {
      // 想要发送的人的名字
      name: '琳琳',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohr5j6DcC0yEtW0bAv3pcZmWoeeI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FQEgcglkkG6eyfMFI_EEt637bLVkArvFQBEmr5GPD6o',
      province: '浙江',
      city: '宁波',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '4-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '琳琳', year: '1999', date: '03-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-26' },
      ],
    },
    {
      name: '小威威',
      id: 'ohr5j6DcBJbwlKWqy6-ALCjDj8sY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '_8whwXdscZhFGfo7TuxEBod9oa0yPfJTOM4nSl7KLkc',
      province: '上海',
      city: '上海',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-7',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小威威', year: '1999', date: '01-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
      ],
    },
  ],



  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BtkOmMw_Lrlqh63MnaxtyZpKIuoRy6lCXO5W9TkkBMc',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohr5j6DcC0yEtW0bAv3pcZmWoeeI',
    }
  ],

}

module.exports = USER_CONFIG

