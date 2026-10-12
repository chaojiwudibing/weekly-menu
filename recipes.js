const legacyRecipeNames = ["番茄土豆炖鸡", "香菇滑鸡", "胡萝卜炖鸡", "冬瓜焖鸡", "南瓜焖鸡", "土豆咖喱鸡", "洋葱炒鸡丁", "西葫芦鸡丁", "包菜炒鸡丝", "芹菜香干鸡丁", "土豆炖瘦肉", "萝卜炖瘦肉", "冬瓜肉末", "肉末烧豆腐", "香菇肉末豆腐", "胡萝卜炒肉丝", "包菜肉片", "菜花炒肉片", "芹菜香干肉丝", "茄子肉末", "南瓜肉末", "豌豆肉末", "四季豆焖肉", "土豆胡萝卜肉丁", "洋葱肉片", "番茄烧豆腐", "香菇烧豆腐", "白菜炖豆腐", "冬瓜烧豆腐", "南瓜炖豆腐", "家常烩豆腐", "芹菜炒香干", "包菜炒香干", "胡萝卜炒香干", "西葫芦烧豆腐", "番茄鹰嘴豆", "毛豆烧豆腐", "香菇烧土豆", "番茄炖土豆", "胡萝卜焖土豆", "清炖冬瓜", "蒜香南瓜", "白菜炖香菇", "番茄菜花", "素烧茄子", "醋溜包菜", "香菇炒胡萝卜", "豌豆玉米胡萝卜", "洋葱焖土豆", "西葫芦炒胡萝卜", "土豆烧鸡片", "胡萝卜烧鸡片", "冬瓜烧鸡片", "南瓜烧鸡片", "白萝卜烧鸡片", "鲜香菇烧鸡片", "杏鲍菇烧鸡片", "西葫芦烧鸡片", "菜花烧鸡片", "包菜烧鸡片", "洋葱烧鸡片", "青椒烧鸡片", "茄子烧鸡片", "莲藕烧鸡片", "莴笋烧鸡片", "大白菜烧鸡片", "西兰花烧鸡片", "金针菇烧鸡片", "番茄烧鸡片", "口蘑烧鸡片", "土豆烧肉片", "胡萝卜烧肉片", "冬瓜烧肉片", "南瓜烧肉片", "白萝卜烧肉片", "鲜香菇烧肉片", "杏鲍菇烧肉片", "西葫芦烧肉片", "菜花烧肉片", "包菜烧肉片", "洋葱烧肉片", "青椒烧肉片", "茄子烧肉片", "莲藕烧肉片", "莴笋烧肉片", "大白菜烧肉片", "西兰花烧肉片", "金针菇烧肉片", "番茄烧肉片", "口蘑烧肉片", "土豆烧豆腐", "胡萝卜烧豆腐", "南瓜烧豆腐", "白萝卜烧豆腐", "鲜香菇烧豆腐", "杏鲍菇烧豆腐", "菜花烧豆腐", "包菜烧豆腐", "洋葱烧豆腐", "青椒烧豆腐", "茄子烧豆腐", "莲藕烧豆腐", "莴笋烧豆腐", "大白菜烧豆腐", "西兰花烧豆腐", "金针菇烧豆腐", "口蘑烧豆腐", "土豆烧香干", "胡萝卜烧香干", "冬瓜烧香干", "南瓜烧香干", "白萝卜烧香干", "鲜香菇烧香干", "杏鲍菇烧香干", "西葫芦烧香干", "菜花烧香干", "包菜烧香干", "洋葱烧香干", "青椒烧香干", "茄子烧香干", "莲藕烧香干", "莴笋烧香干", "大白菜烧香干", "西兰花烧香干", "金针菇烧香干", "番茄烧香干", "口蘑烧香干", "土豆焖胡萝卜", "土豆焖冬瓜", "土豆焖南瓜", "土豆焖白萝卜", "土豆焖鲜香菇", "土豆焖杏鲍菇", "土豆焖西葫芦", "土豆焖菜花", "土豆焖包菜", "土豆焖洋葱", "土豆焖青椒", "土豆焖茄子", "土豆焖莲藕", "土豆焖莴笋", "土豆焖大白菜", "土豆焖西兰花", "土豆焖金针菇", "土豆焖番茄", "土豆焖口蘑", "胡萝卜焖冬瓜", "胡萝卜焖南瓜", "胡萝卜焖白萝卜", "胡萝卜焖鲜香菇", "胡萝卜焖杏鲍菇", "胡萝卜焖西葫芦", "胡萝卜焖菜花", "胡萝卜焖包菜", "胡萝卜焖洋葱", "胡萝卜焖青椒", "胡萝卜焖茄子", "胡萝卜焖莲藕", "胡萝卜焖莴笋", "胡萝卜焖大白菜", "胡萝卜焖西兰花", "胡萝卜焖金针菇", "胡萝卜焖番茄", "胡萝卜焖口蘑", "冬瓜焖南瓜", "冬瓜焖白萝卜", "冬瓜焖鲜香菇", "冬瓜焖杏鲍菇", "冬瓜焖菜花", "冬瓜焖包菜", "冬瓜焖洋葱", "冬瓜焖青椒", "冬瓜焖茄子", "冬瓜焖莲藕", "冬瓜焖莴笋", "冬瓜焖大白菜", "冬瓜焖西兰花", "冬瓜焖金针菇", "冬瓜焖口蘑", "南瓜焖白萝卜", "南瓜焖鲜香菇", "南瓜焖杏鲍菇", "南瓜焖菜花", "南瓜焖包菜", "南瓜焖洋葱", "南瓜焖青椒", "南瓜焖茄子", "南瓜焖莲藕", "南瓜焖莴笋", "南瓜焖大白菜", "南瓜焖西兰花", "南瓜焖金针菇", "南瓜焖口蘑", "白萝卜焖鲜香菇", "白萝卜焖杏鲍菇", "白萝卜焖西葫芦", "白萝卜焖菜花", "白萝卜焖包菜", "白萝卜焖洋葱", "白萝卜焖青椒"];
const recipes = [
  {
    "id": 0,
    "name": "红烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 9,
    "ingredients": "五花肉180g、姜5g、葱10g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "五花肉先煸出部分油脂，撇去多余油后加水炖至软糯。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103522380/",
    "video": {
      "url": "https://www.bilibili.com/video/BV14VvYBxE2x/",
      "title": "【简简厨房】本帮红烧肉",
      "platform": "哔哩哔哩",
      "embed": true,
      "published": "2025-12-30",
      "author": "简简厨房"
    }
  },
  {
    "id": 1,
    "name": "回锅肉",
    "category": "猪肉",
    "time": 25,
    "cost": 8,
    "ingredients": "五花肉150g、蒜苗150g、豆瓣酱8g、豆豉3g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉整块煮熟晾凉切薄片；先煸肉，再炒豆瓣豆豉，最后放蒜苗。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "蒜苗",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "豆豉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/39989/",
    "video": {
      "title": "回锅肉的家常做法，两分钟教你怎么做才更美味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1mp411d7fE/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 2,
    "name": "鱼香肉丝",
    "category": "猪肉",
    "time": 25,
    "cost": 10,
    "ingredients": "猪里脊150g、莴笋100g、泡发木耳50g、泡椒10g、姜3g、蒜5g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "里脊切细丝，用淀粉和少许生抽抓匀；配菜断生后回锅合炒。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "莴笋",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 5.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "泡椒",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100352761/",
    "video": {
      "title": "天津美食做法教程之鱼香肉丝篇_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1GUKhzkEaB/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 3,
    "name": "宫保肉丁",
    "category": "猪肉",
    "time": 25,
    "cost": 11,
    "ingredients": "猪里脊160g、熟花生米25g、大葱60g、干辣椒3g、花椒1g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉切小丁滑炒至熟，糖醋汁收浓后再下熟花生米。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "熟花生米",
        "grams": 25.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "大葱",
        "grams": 60.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "花椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/101856562/",
    "video": {
      "title": "分享一道莽哥版老贵阳味“宫保肉丁”_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV18341187h7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 4,
    "name": "糖醋里脊",
    "category": "猪肉",
    "time": 30,
    "cost": 10,
    "ingredients": "猪里脊180g、淀粉15g、番茄酱15g、食用油5g、生抽6g、米醋8g、白糖5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉切细条挂薄淀粉糊，用不粘锅煎熟代替大锅油炸，最后裹糖醋汁。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "薄肉条小火煎约8–10分钟，确认中心熟透；加入糖醋汁煮开收浓。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "淀粉",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "番茄酱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106907933/",
    "video": {
      "title": "〖大家呼唤已久的糖醋里脊 定量保姆级教程来了〗_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1RT4QzXEyD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 5,
    "name": "京酱肉丝",
    "category": "猪肉",
    "time": 25,
    "cost": 11,
    "ingredients": "猪里脊160g、甜面酱12g、豆腐皮100g、大葱50g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐皮焯熟，大葱切丝；肉丝炒熟后拌入甜面酱，搭配豆腐皮食用。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "甜面酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "豆腐皮",
        "grams": 100.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "大葱",
        "grams": 50.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107020158/",
    "video": {
      "title": "京酱肉丝，不滑油做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1cB4y1R7Bm/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 6,
    "name": "木须肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪里脊120g、鸡蛋100g、黄瓜100g、泡发木耳40g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋先炒至完全凝固盛出；肉片炒熟后加入木耳黄瓜，最后回锅鸡蛋。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 120.0,
        "group": "肉类"
      },
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "黄瓜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 4.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106043056/",
    "video": {
      "title": "天津版本传统木须肉做法，那叫一个地道！那叫一个美！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1im42137Fv/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 7,
    "name": "农家小炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉130g、五花肉40g、青椒160g、蒜6g、豆豉3g、食用油5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "先把青椒干煸至起皱盛出，再煸肉和豆豉，合炒至肉熟。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 130.0,
        "group": "肉类"
      },
      {
        "name": "五花肉",
        "grams": 40.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "豆豉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104118235/",
    "video": {
      "title": "农家小炒肉家常做法 香辣开胃 简单几步做出一道下饭菜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1UW411977j/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 8,
    "name": "盐煎肉",
    "category": "猪肉",
    "time": 25,
    "cost": 8,
    "ingredients": "五花肉150g、蒜苗150g、豆瓣酱6g、豆豉3g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "这道菜用生五花肉薄片直接煸炒，不预煮；炒熟后下豆瓣、豆豉和蒜苗。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "蒜苗",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "豆豉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100302840/",
    "video": {
      "title": "厨师长教你：“盐煎肉”的家常做法，味道独特，川人的最爱_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Fa4y1p7zZ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 9,
    "name": "蒜苔炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉150g、蒜苔180g、姜3g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蒜苔切段先焯2分钟，肉丝炒至熟后合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "蒜苔",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106168470/",
    "video": {
      "title": "我做的“蒜苔炒肉”很好吃！步骤清晰详细、做法易学接地气_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1WL4y1M7LF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 10,
    "name": "芹菜炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉150g、芹菜200g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芹菜去老筋切段，肉丝先炒散，再下芹菜炒至断生。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "芹菜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104691260/",
    "video": {
      "title": "芹菜炒肉先炒芹菜还是先炒肉？好多人搞不清楚，大厨教你正确做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1W34y1Z7oZ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 11,
    "name": "韭菜炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉150g、韭菜180g、姜3g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉丝先炒熟，再放韭菜段，炒至全部断生。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "韭菜",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-43258.html",
    "video": {
      "title": "韭菜炒肉这样做，韭菜鲜香入味，肉丝滑嫩多汁，下酒下饭都好吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1kM4y1P7cs",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 12,
    "name": "洋葱炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 10,
    "ingredients": "猪里脊150g、洋葱180g、青椒60g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉切薄片，洋葱青椒切块，先肉后菜炒熟。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106643642/",
    "video": {
      "title": "洋葱炒肉看似简单，想要做得好吃也有技巧，大厨教你详细做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1je411X7rt/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 13,
    "name": "莴笋炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉150g、莴笋200g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "莴笋去皮切薄片，肉炒熟后下莴笋，保持略脆但熟透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "莴笋",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107480547/",
    "video": {
      "title": "清淡家常菜之莴笋怎么做好吃 湖南口味的莴笋炒肉的做法好吃下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Qc411f7KA/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 14,
    "name": "茭白炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉150g、茭白200g、青椒50g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "茭白切细丝，肉丝炒散后加入配菜，少量水焖至熟透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "茭白",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103798972/",
    "video": {
      "title": "茭白炒肉的家常做法，大厨教你一个技巧，高笋脆爽入味肉片特别香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ex4y1p7sL/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 15,
    "name": "笋干烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 11,
    "ingredients": "五花肉160g、泡发笋干160g、姜5g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "笋干提前泡软并煮熟，再与煸香的五花肉一起炖。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "干笋",
        "grams": 40.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107400831/",
    "video": {
      "title": "〖美食台〗笋干烧肉，笋香肉酥鲜美无比！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Bs411h7wF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 16,
    "name": "梅干菜烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 8,
    "ingredients": "五花肉160g、梅干菜25g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "梅干菜提前泡洗沥干，和五花肉一起小火烧透；含盐梅干菜减酱油。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "梅干菜",
        "grams": 25.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106597853/",
    "video": {
      "title": "梅干菜烧肉｜软糯香嫩～肥而不腻｜保姆教程！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1wkxLzcE3S/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 17,
    "name": "土豆烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 9,
    "ingredients": "五花肉160g、土豆180g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉先炖35分钟，再加入土豆块炖20分钟至软熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107109463/",
    "video": {
      "title": "土豆烧肉的家常做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1dN411V7aS/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 18,
    "name": "萝卜烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 10,
    "ingredients": "五花肉160g、白萝卜220g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉先炖35分钟，萝卜后下再炖20分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106848829/",
    "video": {
      "title": "一个萝卜一块肉，教您做经典的萝卜烧肉，软烂入味肥而不腻，过瘾【萝卜烧肉】 - YouTube",
      "url": "https://www.youtube.com/watch?v=DQulhNQqqtE",
      "platform": "YouTube"
    }
  },
  {
    "id": 19,
    "name": "腐竹烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 8,
    "ingredients": "五花肉160g、干腐竹40g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "腐竹提前用冷水泡软，肉炖软后再放腐竹烧10分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "干腐竹",
        "grams": 40.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107365334/",
    "video": {
      "title": "〖当和〗腐竹烧肉，入口醇香，味道厚重_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1kV411k7Q3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 20,
    "name": "板栗烧肉",
    "category": "猪肉",
    "time": 70,
    "cost": 9,
    "ingredients": "五花肉160g、去壳板栗120g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "板栗去内皮；肉先炖30分钟，再放板栗炖20分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水至将将没过肉，小火加盖炖50–60分钟；配菜依上一步分时加入。水少时补热水，最后略收汁。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "去壳板栗",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106005092/",
    "video": {
      "title": "厨师长教您红烧肉焖板栗的家常做法，肥而不腻，软糯入味【红纱肉焖板栗】 - YouTube",
      "url": "https://www.youtube.com/watch?v=Ijv94edgDog",
      "platform": "YouTube"
    }
  },
  {
    "id": 21,
    "name": "红烧排骨",
    "category": "猪肉",
    "time": 65,
    "cost": 17,
    "ingredients": "猪排骨250g、姜5g、葱10g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨焯去血沫后洗净，再加调料和热水焖至贴骨处熟透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过排骨，小火炖45–55分钟至贴骨处熟透、肉软，再收汁。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/9730/",
    "video": {
      "title": "红烧排骨最好吃的做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1MoqUYSE3R/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 22,
    "name": "糖醋排骨",
    "category": "猪肉",
    "time": 65,
    "cost": 17,
    "ingredients": "猪排骨250g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g、米醋8g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨焯水后先炖熟，再用糖醋汁收浓，不省略炖煮。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "加热水刚没过排骨，小火炖45–55分钟至贴骨处熟透、肉软，再收汁。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104576709/",
    "video": {
      "title": "厨师长教你：“糖醋排骨”的传统做法，简单易学赶紧收藏_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ws41157vT/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 23,
    "name": "豆豉蒸排骨",
    "category": "猪肉",
    "time": 50,
    "cost": 17,
    "ingredients": "猪排骨250g、豆豉8g、蒜6g、姜4g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "排骨剁小段，拌匀豆豉蒜末和淀粉，浅盘平铺蒸熟。",
      "排骨剁成2–3厘米小段，浅盘单层铺开，上汽后蒸35–40分钟，贴骨处完全熟透。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "豆豉",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100408493/",
    "video": {
      "title": "厨师长教你：“香菇豆豉蒸排骨”的家常做法，味道非常棒_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV15s411778B/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 24,
    "name": "粉蒸排骨",
    "category": "猪肉",
    "time": 65,
    "cost": 17,
    "ingredients": "猪排骨220g、蒸肉米粉35g、土豆150g、姜4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "排骨拌少量水和米粉，铺在土豆块上蒸至肉酥；成品米粉含盐时减酱油。",
      "排骨单层铺盘，上汽后蒸50分钟至米粉、土豆及排骨全部熟透；中途注意锅内水量。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "蒸肉米粉",
        "grams": 35.0,
        "group": "谷物与粉面"
      },
      {
        "name": "土豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1075597/",
    "video": {
      "title": "〖火筵家常〗火哥教你传统川菜粉蒸排骨_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ks411T7m7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 25,
    "name": "土豆炖排骨",
    "category": "猪肉",
    "time": 65,
    "cost": 19,
    "ingredients": "猪排骨250g、土豆180g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨先炖35分钟，再加土豆炖20分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过排骨，小火炖45–55分钟至贴骨处熟透、肉软，再收汁。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/47573/",
    "video": {
      "title": "土豆炖排骨，饱饱的幸福感！！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Kv411q766/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 26,
    "name": "莲藕排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 18,
    "ingredients": "猪排骨220g、莲藕200g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "莲藕去皮切滚刀块，与焯水排骨一起炖至粉糯。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "莲藕",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106576486/",
    "video": {
      "title": "厨师长分享：\"莲藕排骨汤\"的家常做法，味道很赞火候足_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1aK411G7GH/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 27,
    "name": "冬瓜排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 17,
    "ingredients": "猪排骨220g、冬瓜250g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨先炖45分钟，再加冬瓜煮15分钟。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/35632/",
    "video": {
      "title": "春日美食：冬瓜排骨汤的做法，汤浓肉香，营养又好喝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1dx421k7dC/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 28,
    "name": "玉米排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 17,
    "ingredients": "猪排骨220g、玉米段180g、胡萝卜80g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "玉米切段，与焯水排骨同炖，胡萝卜后半程加入。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "玉米段",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/100386973/",
    "video": {
      "title": "寻找宝藏街头美食营养美味！玉米排骨汤的做法-1_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1NF4LeVEMN/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 29,
    "name": "山药排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 18,
    "ingredients": "猪排骨220g、山药180g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨先炖40分钟，再下山药块炖20分钟。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "山药",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107286414/",
    "video": {
      "title": "秋冬养生山药排骨汤家常做法，健脾养胃，汤鲜浓郁_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Kt4y1v7AA",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 30,
    "name": "海带排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 15,
    "ingredients": "猪排骨220g、泡发海带150g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "泡发海带洗净切段，与排骨同炖至软熟。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干海带",
        "grams": 18.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107080820/",
    "video": {
      "title": "海带排骨汤好喝有技巧，大厨教你方法，汤鲜排骨香，没有一点腥味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Uh411v7Ct/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 31,
    "name": "萝卜排骨汤",
    "category": "猪肉",
    "time": 75,
    "cost": 17,
    "ingredients": "猪排骨220g、白萝卜220g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "排骨先炖35分钟，再加萝卜炖25分钟。",
      "加600毫升热水，小火炖60分钟；配菜依上一步分时下锅，肉不够软则继续炖，最后少盐调味。"
    ],
    "items": [
      {
        "name": "猪排骨",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1001847/",
    "video": {
      "title": "炖白萝卜排骨汤时，切记不要焯水，教你一招，_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1c3411f7je/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 32,
    "name": "黄豆炖猪蹄",
    "category": "猪肉",
    "time": 135,
    "cost": 13,
    "ingredients": "猪蹄250g、干黄豆35g、姜5g、葱10g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "黄豆冷藏浸泡8小时；猪蹄焯洗后与黄豆一起炖软。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加水没过猪蹄，小火炖约2小时至软糯；浸泡黄豆所需时间另计。水少补热水，最后调味。"
    ],
    "items": [
      {
        "name": "猪蹄",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "干黄豆",
        "grams": 35.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107152358/",
    "video": {
      "title": "黄豆炖猪蹄正确家常做法，软烂入味不油腻，上桌后连汤都不剩,美食,菜谱,好看视频",
      "url": "https://haokan.baidu.com/v?pd=wisenatural&vid=7967550603049895370",
      "platform": "好看视频"
    }
  },
  {
    "id": 33,
    "name": "红烧猪蹄",
    "category": "猪肉",
    "time": 135,
    "cost": 14,
    "ingredients": "猪蹄280g、姜5g、葱10g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "猪蹄请商家斩小块，焯净血沫后小火烧至软烂。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加水没过猪蹄，小火炖约2小时至软糯；浸泡黄豆所需时间另计。水少补热水，最后调味。"
    ],
    "items": [
      {
        "name": "猪蹄",
        "grams": 280.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104834851/",
    "video": {
      "title": "厨师长教你：“红烧猪蹄”的家常做法，色泽红亮，软糯脱骨_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1RF411Y73S/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 34,
    "name": "花生炖猪蹄",
    "category": "猪肉",
    "time": 135,
    "cost": 13,
    "ingredients": "猪蹄250g、花生米35g、姜5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "花生洗净浸泡，和焯洗后的猪蹄一起炖至软糯。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加水没过猪蹄，小火炖约2小时至软糯；浸泡黄豆所需时间另计。水少补热水，最后调味。"
    ],
    "items": [
      {
        "name": "猪蹄",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "花生米",
        "grams": 35.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-605044.html",
    "video": {
      "title": "下奶的月子餐：花生炖猪蹄，汤汁奶白不发涩_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1N44y1473J/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 35,
    "name": "葱烧大排",
    "category": "猪肉",
    "time": 30,
    "cost": 10,
    "ingredients": "猪大排200g、葱40g、姜5g、淀粉5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "大排拍松裹薄淀粉，煎两面后放在葱段上加水焖透。",
      "肉片厚度不超过1厘米，煎两面后加80毫升水，加盖小火焖10–12分钟至肉中心熟透。"
    ],
    "items": [
      {
        "name": "猪大排",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "葱",
        "grams": 40.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107467178/",
    "video": {
      "title": "教程丨厨者王波·认真做菜 葱烧大排(葱烤大排) 葱香浓郁，酱汁裹满的下饭神菜！爱吃肉的小伙伴们抓紧做起来吧！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1z7ZLYfEuM/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 36,
    "name": "香煎猪排",
    "category": "猪肉",
    "time": 30,
    "cost": 10,
    "ingredients": "猪里脊200g、黑胡椒1g、蒜5g、生抽5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉切约1厘米厚拍松腌制，不粘锅两面煎，少量水加盖焖透。",
      "肉片厚度不超过1厘米，煎两面后加80毫升水，加盖小火焖10–12分钟至肉中心熟透。"
    ],
    "items": [
      {
        "name": "猪里脊",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "黑胡椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102266071/",
    "video": {
      "title": "香煎猪排配苹果做法，带骨里脊肉又嫩又多汁， 配上苹果的小诀窍一看就会_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1y6421M7oh/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 37,
    "name": "清蒸狮子头",
    "category": "猪肉",
    "time": 35,
    "cost": 10,
    "ingredients": "猪肉末180g、荸荠60g、鸡蛋25g、白菜100g、淀粉5g、姜3g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "荸荠切细丁拌肉末，做成直径约4厘米丸子放在白菜上蒸熟。",
      "浅盘蒸制：肉饼厚度不超过2厘米，肉丸不超过4厘米；上汽后蒸20–25分钟，中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "荸荠",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 25.0,
        "group": "蛋奶类"
      },
      {
        "name": "白菜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102179578/",
    "video": {
      "title": "〖美味的中华料理荤菜①〗一道周恩来总理在日本留学期间最爱吃的菜——清蒸狮子头。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1rr421J7hM/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 38,
    "name": "红烧狮子头",
    "category": "猪肉",
    "time": 40,
    "cost": 10,
    "ingredients": "猪肉末180g、荸荠60g、鸡蛋25g、白菜100g、淀粉5g、姜3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉末和荸荠做成丸子，少油煎定形后加水焖熟。",
      "煎定形后加150毫升水，小火加盖焖20–25分钟，肉馅中心达到74°C，再略收汁。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "荸荠",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 25.0,
        "group": "蛋奶类"
      },
      {
        "name": "白菜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106984785/",
    "video": {
      "title": "隋卞一做 |超好吃！淮扬名菜红烧狮子头正宗做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hp4y1T7dU/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 39,
    "name": "珍珠丸子",
    "category": "猪肉",
    "time": 50,
    "cost": 8,
    "ingredients": "猪肉末160g、糯米40g、荸荠50g、姜3g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "糯米冷藏浸泡4小时，沥干裹在3厘米肉丸外，上汽后蒸透。",
      "肉丸直径不超过3厘米，蒸锅上汽后蒸30–35分钟，糯米不夹生且肉馅中心74°C；泡米时间另计。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "糯米",
        "grams": 40.0,
        "group": "谷物与粉面"
      },
      {
        "name": "荸荠",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106996955/",
    "video": {
      "title": "糯米珍珠丸子好吃有诀窍，学会这个特色做法，出锅一口气吃了10个_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ib411w7Ka/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 40,
    "name": "冬瓜汆丸子",
    "category": "猪肉",
    "time": 30,
    "cost": 9,
    "ingredients": "猪肉末150g、冬瓜250g、姜4g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉末搅打上劲，挤小丸子下微沸水；丸子煮熟后加冬瓜至软。",
      "丸子直径约2厘米，在微沸汤中煮8–10分钟至中心熟透，再煮软配菜；用盐与少许生抽调味。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://hanwuji.xiachufang.com/recipe/259955/",
    "video": {
      "title": "怎么做冬瓜汆丸子滑嫩不散花？拌肉馅方法是秘诀，丸子汤鲜超解馋_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV15dzAY6ECY/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 41,
    "name": "香菇酿肉",
    "category": "猪肉",
    "time": 35,
    "cost": 10,
    "ingredients": "鲜香菇160g、猪肉末140g、姜3g、淀粉4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "香菇去蒂，将肉馅填入菌盖，浅盘上汽蒸至肉馅熟透。",
      "浅盘蒸制：肉饼厚度不超过2厘米，肉丸不超过4厘米；上汽后蒸20–25分钟，中心达到74°C。"
    ],
    "items": [
      {
        "name": "鲜香菇",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 140.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104040798/",
    "video": {
      "title": "用烤箱一键搞定美味的香菇酿肉！咬一口有三重味道！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1uE411e7uG/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 42,
    "name": "青椒酿肉",
    "category": "猪肉",
    "time": 40,
    "cost": 9,
    "ingredients": "青椒180g、猪肉末160g、姜3g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "青椒去籽填入肉馅，肉面先煎定形，再加水焖至中心熟透。",
      "煎定形后加150毫升水，小火加盖焖20–25分钟，肉馅中心达到74°C，再略收汁。"
    ],
    "items": [
      {
        "name": "青椒",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100443864/",
    "video": {
      "title": "青椒酿肉受欢迎的两种做法，酿炸椒盒金黄酥脆，酿焖青椒咸香下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1La4y1e7N6/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 43,
    "name": "苦瓜酿肉",
    "category": "猪肉",
    "time": 40,
    "cost": 9,
    "ingredients": "苦瓜200g、猪肉末160g、姜3g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "苦瓜切3厘米厚圈去瓤，填肉馅后两面煎定形，加水焖熟。",
      "煎定形后加150毫升水，小火加盖焖20–25分钟，肉馅中心达到74°C，再略收汁。"
    ],
    "items": [
      {
        "name": "苦瓜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106822699/",
    "video": {
      "title": "厨师长分享：“苦瓜酿肉”的家常做法，四伯连说好吃，先收藏了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Kt4y1y7MA/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 44,
    "name": "肉末蒸蛋",
    "category": "猪肉",
    "time": 25,
    "cost": 5,
    "ingredients": "鸡蛋100g、猪肉末80g、葱5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "肉末先炒熟；蛋液加1.5倍温水过滤，蒸凝固后铺熟肉末。",
      "蛋液加1.5倍温水，浅碗盖盘留缝；水开后中小火蒸12–18分钟至中心全凝固。含虾时虾肉也需全熟。"
    ],
    "items": [
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "猪肉末",
        "grams": 80.0,
        "group": "肉类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103677882/",
    "video": {
      "title": "王刚肉末蒸蛋_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qt411d7pp/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 45,
    "name": "咸蛋蒸肉饼",
    "category": "猪肉",
    "time": 35,
    "cost": 8,
    "ingredients": "猪肉末180g、咸鸭蛋50g、姜3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "生咸鸭蛋打入肉末搅匀，少量水调软摊薄；咸蛋本身咸，不另加盐。",
      "浅盘蒸制：肉饼厚度不超过2厘米，肉丸不超过4厘米；上汽后蒸20–25分钟，中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "咸鸭蛋",
        "grams": 50.0,
        "group": "蛋奶类"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/92267/",
    "video": {
      "title": "[Eng Sub]咸蛋蒸肉饼 Steamed pork mince with salted duck egg recipe - YouTube",
      "url": "https://www.youtube.com/watch?v=9gPXg5JirDY",
      "platform": "YouTube"
    }
  },
  {
    "id": 46,
    "name": "梅菜蒸肉饼",
    "category": "猪肉",
    "time": 35,
    "cost": 8,
    "ingredients": "猪肉末180g、梅干菜20g、姜3g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "梅干菜泡洗切碎，拌入肉末和少量水，浅盘摊薄蒸熟。",
      "浅盘蒸制：肉饼厚度不超过2厘米，肉丸不超过4厘米；上汽后蒸20–25分钟，中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪肉末",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "梅干菜",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107182937/",
    "video": {
      "title": "广东家家都会做的梅菜蒸肉饼，做法原来这么简单，滑嫩鲜香超下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Vbt5etEWX/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 47,
    "name": "萝卜干炒腊肉",
    "category": "猪肉",
    "time": 35,
    "cost": 6,
    "ingredients": "腊肉100g、萝卜干40g、青椒100g、蒜4g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "萝卜干泡洗，腊肉预煮后切薄片，煸炒后加入萝卜干炒透，少盐。",
      "腊肉先煮20分钟再切薄片，和配菜翻炒5–8分钟至熟；腊肉有咸味，不另加盐。"
    ],
    "items": [
      {
        "name": "腊肉",
        "grams": 100.0,
        "group": "肉类"
      },
      {
        "name": "萝卜干",
        "grams": 40.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106628520/",
    "video": {
      "title": "大厨教你经典湘菜“萝卜干炒腊肉”，简单易学，脆爽可口又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Fo4y1H7Yr/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 48,
    "name": "蒜苗炒腊肉",
    "category": "猪肉",
    "time": 35,
    "cost": 7,
    "ingredients": "腊肉120g、蒜苗180g、蒜3g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "腊肉先煮熟切片，煸出多余油，再加蒜苗炒至断生。",
      "腊肉先煮20分钟再切薄片，和配菜翻炒5–8分钟至熟；腊肉有咸味，不另加盐。"
    ],
    "items": [
      {
        "name": "腊肉",
        "grams": 120.0,
        "group": "肉类"
      },
      {
        "name": "蒜苗",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106257580/",
    "video": {
      "title": "蒜苗炒腊肉很多人第一步就做错了，大厨告诉你正确做法，腊肉不柴_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Lm4y1d7pB/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 49,
    "name": "酸菜炖白肉",
    "category": "猪肉",
    "time": 70,
    "cost": 9,
    "ingredients": "五花肉150g、东北酸菜200g、干粉条35g、姜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "五花肉先煮熟切片；酸菜冲洗，和肉片、泡软粉条一起炖透。",
      "五花肉整块煮约30分钟，切片后与酸菜和粉条再炖20分钟，粉条熟软即可。"
    ],
    "items": [
      {
        "name": "五花肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "东北酸菜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干粉条",
        "grams": 35.0,
        "group": "谷物与粉面"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103841969/",
    "video": {
      "title": "酸菜炖白肉，也叫猪肉炖粉条，东北菜 - YouTube",
      "url": "https://www.youtube.com/watch?v=BTyFYvZJquw",
      "platform": "YouTube"
    }
  },
  {
    "id": 50,
    "name": "红烧牛肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 21,
    "ingredients": "牛腩200g、姜6g、葱10g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛腩切3厘米块焯净，炖到筷子可轻松扎入再收汁。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1004782/",
    "video": {
      "title": "厨师长教你：“红烧牛肉”的家常做法，软烂入味，肉香四溢_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1eT411M7Hj/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 51,
    "name": "番茄炖牛腩",
    "category": "牛羊肉",
    "time": 100,
    "cost": 23,
    "ingredients": "牛腩200g、番茄220g、洋葱60g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄先炒出汁，牛腩炖软后再加入一半番茄保留酸香。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "番茄",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107208910/",
    "video": {
      "title": "番茄炖牛腩 | 家常做法只看这一篇就够了！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1L3pEeZEwU/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 52,
    "name": "土豆炖牛肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 22,
    "ingredients": "牛腩200g、土豆180g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉先炖60分钟，土豆后下炖20分钟，避免土豆碎烂。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107316102/",
    "video": {
      "title": "土豆炖牛肉的做法，牛肉软烂入味，土豆软糯，上桌连汤汁都不剩_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Pz4y1d7kR/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 53,
    "name": "萝卜炖牛腩",
    "category": "牛羊肉",
    "time": 100,
    "cost": 22,
    "ingredients": "牛腩200g、白萝卜220g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛腩先炖60分钟，再加萝卜炖25分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107682039/",
    "video": {
      "title": "萝卜炖牛腩怎么做好吃技巧分享，超简单的家常做法推荐,健康又美味，一学就会，好吃到爆_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV11341157gL/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 54,
    "name": "咖喱牛肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 21,
    "ingredients": "牛腩180g、土豆150g、胡萝卜80g、洋葱50g、咖喱粉4g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛腩先炖软，再加蔬菜和咖喱，小火搅动煮浓。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "咖喱粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106777910/",
    "video": {
      "title": "咖喱牛肉土豆的做法，淋到米饭上面，味道绝了！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1864TzpEen/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 55,
    "name": "杭椒牛柳",
    "category": "牛羊肉",
    "time": 25,
    "cost": 23,
    "ingredients": "牛里脊160g、杭椒160g、蒜5g、蚝油5g、食用油5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉逆纹切条腌制，杭椒先炒断生，再与熟牛柳合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛里脊",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "杭椒",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "蚝油",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107606232/",
    "video": {
      "title": "杭椒牛柳，牛肉滑嫩的方法在这里_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ak4y1m7eX/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 56,
    "name": "黑椒牛柳",
    "category": "牛羊肉",
    "time": 25,
    "cost": 25,
    "ingredients": "牛里脊170g、洋葱100g、彩椒100g、黑胡椒2g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛柳逆纹切细条，加淀粉抓匀；洋葱彩椒断生后与牛柳合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛里脊",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "彩椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黑胡椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106974651/",
    "video": {
      "title": "黑椒牛柳做法：用东菱绞肉机处理牛里脊，搭配黑椒酱炒制，嫩滑入味，15分钟出锅。家庭晚餐轻松搞定，家人夸手艺！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1dLArzPEmD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 57,
    "name": "蚝油牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 25,
    "ingredients": "牛里脊170g、西兰花160g、蚝油8g、姜3g、食用油5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西兰花先焯至熟，牛肉薄片炒熟后加入蚝油和配菜。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛里脊",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "西兰花",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蚝油",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/101890216/",
    "video": {
      "title": "上海妈妈教你“蚝油牛肉”家常做法，鲜嫩入味，下酒又下饭！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1wJ411D7vb/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 58,
    "name": "芹菜炒牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 19,
    "ingredients": "牛肉170g、芹菜200g、姜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉逆纹切薄片腌制，芹菜去老筋切段，分开炒熟再合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "芹菜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/28181/",
    "video": {
      "title": "地道云南菜系之『芹菜炒牛肉』_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1L8411q7DK/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 59,
    "name": "香菜炒牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 19,
    "ingredients": "牛肉170g、香菜60g、青椒80g、蒜5g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香菜切段，牛肉先炒熟，香菜最后加入炒至断生。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "香菜",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107282880/",
    "video": {
      "title": "香菜牛肉的做法，香菜炒牛肉这样做，每次都能吃下三碗米饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV13d4y1y7Be",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 60,
    "name": "小炒黄牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 19,
    "ingredients": "牛肉170g、小米椒20g、芹菜120g、姜5g、蒜5g、泡椒10g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉切薄片炒熟盛出，炒香椒姜蒜和芹菜后回锅牛肉。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "小米椒",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "芹菜",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "泡椒",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107039473/",
    "video": {
      "title": "家常菜小炒黄牛肉这样做法最嫩滑，牛肉不再腌_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ev411C7JV/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 61,
    "name": "洋葱炒牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 20,
    "ingredients": "牛肉170g、洋葱200g、青椒50g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "洋葱炒至微透明，回锅炒熟的牛肉，避免久炒变老。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104538725/",
    "video": {
      "title": "洋葱炒牛肉超详细教程，小白也可以做出嫩滑不柴的牛肉！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1CWCTBwEMg/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 62,
    "name": "杏鲍菇炒牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 20,
    "ingredients": "牛肉170g、杏鲍菇180g、青椒60g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "杏鲍菇先炒软再放牛肉薄片合炒至熟。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "杏鲍菇",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102191147/",
    "video": {
      "title": "大厨教你杏鲍菇炒牛肉家常做法，步骤详细，鲜嫩多汁，下酒下饭 - YouTube",
      "url": "https://www.youtube.com/watch?v=45gWmme72x4",
      "platform": "YouTube"
    }
  },
  {
    "id": 63,
    "name": "西兰花炒牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 20,
    "ingredients": "牛肉170g、西兰花220g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西兰花掰小朵焯熟，牛肉薄片滑炒熟后加入配菜。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "西兰花",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/45802/",
    "video": {
      "title": "巨简单下饭菜🥦鲜香嫩滑的西兰花炒牛肉🐮_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV11G411R7sE/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 64,
    "name": "沙茶牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 19,
    "ingredients": "牛肉170g、洋葱100g、芹菜80g、沙茶酱12g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "沙茶酱先用少量水调开，牛肉和配菜熟后加入拌匀。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 170.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "芹菜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "沙茶酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1000901/",
    "video": {
      "title": "鲜香热辣 超赞的沙茶风味〖沙茶牛肉煲〗_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1C94y177Wx/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 65,
    "name": "孜然牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 20,
    "ingredients": "牛肉180g、洋葱160g、孜然粉3g、辣椒粉1g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉切薄片或细条，洋葱炒软后合炒，孜然最后撒入。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "孜然粉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "辣椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106814029/",
    "video": {
      "title": "牛肉做法里孜然牛肉应该算的上下酒又下饭的_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1jKoaBZEuF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 66,
    "name": "葱爆牛肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 23,
    "ingredients": "牛肉180g、大葱160g、姜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉逆纹切薄片，热锅快速炒熟，大葱最后下锅炒透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "牛肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "大葱",
        "grams": 160.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102147172/",
    "video": {
      "title": "滑嫩不柴！双葱爆牛肉保姆级教程来啦！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1JZbbzMEpy/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 67,
    "name": "水煮牛肉",
    "category": "牛羊肉",
    "time": 30,
    "cost": 27,
    "ingredients": "牛里脊180g、豆芽150g、白菜100g、豆瓣酱8g、蒜5g、辣椒粉1g、花椒粉1g、食用油5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蔬菜煮熟垫底；牛肉薄片逐片下微沸汤煮熟，不用大碗红油覆盖。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "牛里脊",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "豆芽",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "白菜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "辣椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "花椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107612211/",
    "video": {
      "title": "四川水煮牛肉的家常做法，牛肉嫩滑入味有诀窍，香辣好吃又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ke411J7HK/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 68,
    "name": "酸汤肥牛",
    "category": "牛羊肉",
    "time": 30,
    "cost": 20,
    "ingredients": "肥牛卷180g、金针菇120g、莴笋100g、黄灯笼辣椒酱6g、米醋8g、姜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "金针菇煮熟，肥牛另锅焯至全熟去浮沫，再入酸汤煮开。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "肥牛卷",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "金针菇",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "莴笋",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黄灯笼辣椒酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107107265/",
    "video": {
      "title": "亲妈级酸汤肥牛教程，这还能失败算我输。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qZ421y7Eu",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 69,
    "name": "金针菇肥牛",
    "category": "牛羊肉",
    "time": 30,
    "cost": 20,
    "ingredients": "肥牛卷180g、金针菇180g、洋葱80g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "金针菇去根煮熟，肥牛卷摊开焯熟后与酱汁煮匀。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "肥牛卷",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "金针菇",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107130312/",
    "video": {
      "title": "〖Meal Kit 4 OL〗韩国小姐姐教你做饭，今天吃金针菇肥牛_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1jv411h7cE/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 70,
    "name": "番茄肥牛",
    "category": "牛羊肉",
    "time": 30,
    "cost": 21,
    "ingredients": "肥牛卷180g、番茄250g、金针菇100g、姜3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄炒软出汁，煮熟金针菇后加入焯熟肥牛。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "肥牛卷",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "番茄",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "金针菇",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103891602/",
    "video": {
      "title": "厨师长教你番茄肥牛炖土豆的家常做法，肉嫩汤浓，好吃又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1kr4y1w7D7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 71,
    "name": "土豆肥牛",
    "category": "牛羊肉",
    "time": 30,
    "cost": 20,
    "ingredients": "肥牛卷180g、土豆180g、洋葱80g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "土豆切薄片先焖软，再放焯熟肥牛卷煮透。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "肥牛卷",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106616303/",
    "video": {
      "title": "教程丨厨者王波·认真做菜 土豆肥牛饭 简单上手又下饭，这不得三碗饭起步！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1WRTMzPEYH/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 72,
    "name": "牛肉炖豆腐",
    "category": "牛羊肉",
    "time": 100,
    "cost": 20,
    "ingredients": "牛腩180g、北豆腐200g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛腩先炖软，北豆腐切块后放，继续炖10分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "北豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106415913/",
    "video": {
      "title": "番茄牛肉炖豆腐 | 绝妙CP、一锅端神仙下饭菜！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Cguz63EY8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 73,
    "name": "清炖牛肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 24,
    "ingredients": "牛腩220g、白萝卜150g、姜6g、葱10g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉焯净，小火慢炖至软熟；萝卜后半程加入。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107079443/",
    "video": {
      "title": "清炖牛肉最好吃的做法，汤鲜味美 软烂入味，真的太香了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV13QRDYkELR/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 74,
    "name": "萝卜牛肉丸汤",
    "category": "牛羊肉",
    "time": 30,
    "cost": 19,
    "ingredients": "牛肉末160g、白萝卜220g、姜4g、淀粉5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "牛肉末搅打上劲挤成小丸，微沸水煮熟后下萝卜丝。",
      "丸子直径约2厘米，在微沸汤中煮8–10分钟至中心熟透，再煮软配菜；用盐与少许生抽调味。"
    ],
    "items": [
      {
        "name": "牛肉末",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106970720/",
    "video": {
      "title": "简单易做 | 潮汕白萝卜牛肉丸汤 #潮汕牛肉丸 #牛肉丸 #美食 #下饭菜 #妈呀太香了 - 抖音",
      "url": "https://www.douyin.com/video/7675396378999574107",
      "platform": "抖音"
    }
  },
  {
    "id": 75,
    "name": "葱爆羊肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 26,
    "ingredients": "羊腿肉180g、大葱180g、姜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉逆纹切薄片，炒熟后加入葱段，不用厚肉块快炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "大葱",
        "grams": 180.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107012521/",
    "video": {
      "title": "葱爆羊肉，三叔盘出家常羊肉做法，在家吃出美味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1nX4y157Bs/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 76,
    "name": "孜然羊肉",
    "category": "牛羊肉",
    "time": 25,
    "cost": 22,
    "ingredients": "羊腿肉180g、洋葱150g、孜然粉3g、辣椒粉1g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉切薄片炒透，洋葱炒软后合炒，最后撒孜然。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "孜然粉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "辣椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107634439/",
    "video": {
      "title": "〖小白级教程〗零失误的孜然羊肉做法·！比羊肉串好吃100倍！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1wRsteTEG3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 77,
    "name": "红焖羊肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 27,
    "ingredients": "羊腿肉220g、胡萝卜150g、姜6g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉焯洗，小火焖至软熟后加入胡萝卜。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "胡萝卜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/35596/",
    "video": {
      "title": "#老冯教你做#之《红焖羊肉》_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1fK411P74a/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 78,
    "name": "萝卜炖羊肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 27,
    "ingredients": "羊腿肉220g、白萝卜220g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉先炖60分钟，再加入萝卜块炖20分钟。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107263429/",
    "video": {
      "title": "大厨教你“萝卜炖羊肉”的家常做法，汤浓肉香，不腥不膻，先收藏了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV11K4y1j71q/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 79,
    "name": "山药炖羊肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 28,
    "ingredients": "羊腿肉220g、山药180g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉先炖软，山药后下炖20分钟。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "山药",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/105945723/",
    "video": {
      "title": "山药炖羊肉，汤浓白不膻，肉酥而不烂。好吃有营养～#寻味 #寻味上海 - YouTube",
      "url": "https://www.youtube.com/watch?v=rvtxFHm6IeY",
      "platform": "YouTube"
    }
  },
  {
    "id": 80,
    "name": "清炖羊肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 29,
    "ingredients": "羊腿肉250g、葱15g、姜8g、白胡椒1g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉焯去浮沫，加热水慢炖至软熟，出锅前少盐调味。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "白胡椒",
        "grams": 1.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107457891/",
    "video": {
      "title": "隋卞一做 |好喝到汗毛都竖起来！家庭版清炖羊肉标准做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ap421Q7WW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 81,
    "name": "羊肉炖白菜",
    "category": "牛羊肉",
    "time": 100,
    "cost": 25,
    "ingredients": "羊腿肉200g、白菜250g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉先炖软，再加入白菜炖15分钟。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "白菜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/103500603/",
    "video": {
      "title": "羊肉炖白菜，羊肉最忌焯水，大厨教你正确做法，暖心暖胃又营养_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hN411L7iB/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 82,
    "name": "冬瓜羊肉丸子汤",
    "category": "牛羊肉",
    "time": 30,
    "cost": 21,
    "ingredients": "羊肉末160g、冬瓜250g、姜5g、淀粉5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉末搅匀挤小丸，水微沸时下锅煮透，再煮冬瓜。",
      "丸子直径约2厘米，在微沸汤中煮8–10分钟至中心熟透，再煮软配菜；用盐与少许生抽调味。"
    ],
    "items": [
      {
        "name": "羊肉末",
        "grams": 160.0,
        "group": "肉类"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104621310/",
    "video": {
      "title": "冬瓜羊肉丸子汤好喝有诀窍，教你饭店不外传秘诀，鲜嫩多汁还不膻 - YouTube",
      "url": "https://www.youtube.com/watch?v=lK0Cck5nHN4",
      "platform": "YouTube"
    }
  },
  {
    "id": 83,
    "name": "土豆炖羊肉",
    "category": "牛羊肉",
    "time": 100,
    "cost": 27,
    "ingredients": "羊腿肉220g、土豆180g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉焖软后下土豆，继续煮至土豆熟软。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107276114/",
    "video": {
      "title": "羊肉炖羊肉炖土豆，不焯水不炒糖色，最简单家常的做法，比饭店里还要好吃的味道_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Fq4y1D7Xa/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 84,
    "name": "羊肉炖豆腐",
    "category": "牛羊肉",
    "time": 100,
    "cost": 24,
    "ingredients": "羊腿肉200g、北豆腐200g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "羊肉先炖至软熟，再下豆腐煮15分钟。",
      "加700毫升水，小火炖80–90分钟至肉软；易熟配菜后放，最后少盐调味。"
    ],
    "items": [
      {
        "name": "羊腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "北豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104064199/",
    "video": {
      "title": "鹏厨分享：羊肉炖豆腐的制作方法，冬天炖一锅，天越冷吃着越舒服 - YouTube",
      "url": "https://www.youtube.com/watch?v=15Lc4K4nkcQ",
      "platform": "YouTube"
    }
  },
  {
    "id": 85,
    "name": "宫保鸡丁",
    "category": "鸡肉",
    "time": 25,
    "cost": 9,
    "ingredients": "鸡腿肉180g、熟花生米25g、大葱60g、干辣椒3g、花椒1g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡丁腌后炒透，糖醋汁裹匀，熟花生最后加入。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "熟花生米",
        "grams": 25.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "大葱",
        "grams": 60.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "花椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106060932/",
    "video": {
      "title": "〖宫保鸡丁〗这才是宫保鸡丁的正确做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1VW411n7Dm/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 86,
    "name": "黄焖鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 11,
    "ingredients": "鸡腿肉200g、鲜香菇100g、土豆150g、青椒60g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡肉与香菇土豆焖熟，青椒最后放，再煮3分钟。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "鲜香菇",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "土豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107092560/",
    "video": {
      "title": "黄焖鸡，不炒糖色的做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1SS4y1S7yC/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 87,
    "name": "三杯鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 9,
    "ingredients": "鸡腿肉220g、姜10g、蒜10g、九层塔5g、米酒30g、芝麻油5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "少量芝麻油炒香姜蒜，加鸡肉、生抽和米酒焖透，九层塔最后放。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "九层塔",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "米酒",
        "grams": 30.0,
        "group": "调味配料"
      },
      {
        "name": "芝麻油",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/13704/",
    "video": {
      "title": "厨师长教你：“三杯鸡”的家常做法，汁香味浓，鲜嫩爽滑_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1QR4y1p7Ac/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 88,
    "name": "可乐鸡翅",
    "category": "鸡肉",
    "time": 45,
    "cost": 16,
    "ingredients": "鸡翅中250g、可乐120g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡翅划口煎香，加可乐和生抽小火焖熟再收汁。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡翅中",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "可乐",
        "grams": 120.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104159249/",
    "video": {
      "title": "真正的可乐鸡翅做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Cm4y1q7zU/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 89,
    "name": "红烧鸡翅",
    "category": "鸡肉",
    "time": 45,
    "cost": 15,
    "ingredients": "鸡翅中250g、姜5g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡翅两面划口，煎至微黄后加水焖至中心熟透。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡翅中",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107733835/",
    "video": {
      "title": "这才是“红烧鸡翅”的正宗做法，大厨详细讲解，还没看完我就饿了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hP4y1V7ya/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 90,
    "name": "土豆炖鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 9,
    "ingredients": "鸡腿肉220g、土豆180g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡肉先煮10分钟，再加土豆炖20分钟至软熟。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100020776/",
    "video": {
      "title": "土豆炖鸡块的做法，鲜嫩多汁，做法简单便捷_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1zE411i7R1/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 91,
    "name": "香菇炖鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 12,
    "ingredients": "鸡腿肉220g、鲜香菇180g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香菇切厚片，与鸡肉一起小火炖熟。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "鲜香菇",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/260784/",
    "video": {
      "title": "香菇炖鸡，鸡肉还是家乡的好吃，加点莲子，红枣， 汤鲜肉美入味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1tr4y1h7Ce/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 92,
    "name": "板栗烧鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 9,
    "ingredients": "鸡腿肉220g、去壳板栗150g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "板栗去内皮，和鸡块一起焖至粉糯，鸡肉需熟透。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "去壳板栗",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100448798/",
    "video": {
      "title": "妈妈做了那么多次板栗烧鸡，这个做法最简单好吃了！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17W4y1J7B6/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 93,
    "name": "啤酒鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 11,
    "ingredients": "鸡腿肉230g、啤酒180g、青椒100g、姜5g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块炒香后加啤酒敞盖烧开，再小火焖熟，青椒后放。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "啤酒",
        "grams": 180.0,
        "group": "调味配料"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103032731/",
    "video": {
      "title": "跟着床哥学做菜之四，啤酒鸡_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ZT4y1h7wa/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 94,
    "name": "大盘鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 10,
    "ingredients": "鸡腿肉200g、土豆160g、青椒80g、洋葱60g、豆瓣酱6g、干辣椒2g、姜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块、土豆先焖熟，再放洋葱青椒；家庭少油版不另炸土豆。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 160.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107611786/",
    "video": {
      "title": "用小盘子盛还叫大盘鸡吗 尝试粉丝分享大盘鸡的做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/av52012955/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 95,
    "name": "咖喱鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 10,
    "ingredients": "鸡腿肉180g、土豆150g、胡萝卜80g、洋葱60g、咖喱粉4g、牛奶40g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块和蔬菜煮熟后加咖喱与牛奶，小火搅动收浓。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "咖喱粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "牛奶",
        "grams": 40.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100466597/",
    "video": {
      "title": "大厨教你做一道黄金咖喱鸡，色香味俱全，108道吃鸡做法第十期_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1tx41197VK/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 96,
    "name": "照烧鸡腿",
    "category": "鸡肉",
    "time": 45,
    "cost": 8,
    "ingredients": "鸡腿肉220g、姜4g、米酒15g、白糖4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "去骨鸡腿煎两面，加照烧汁和水加盖焖熟，切块前确认中心74°C。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "米酒",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104463865/",
    "video": {
      "title": "照烧鸡腿做法：鸡腿腌制后煎熟，加照烧汁小火收汁，鲜嫩入味，30分钟搞定美味晚餐。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1iGpJzxEy8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 97,
    "name": "蒜香鸡腿",
    "category": "鸡肉",
    "time": 45,
    "cost": 8,
    "ingredients": "鸡腿肉220g、蒜12g、黑胡椒1g、生抽6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡腿去骨摊平腌制，煎两面后加少量水焖透，避免蒜末先煎焦。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "黑胡椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106458948/",
    "video": {
      "title": "教你做很香嫩还多汁🍗｜西班牙蒜香鸡腿🍗_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1PG4y1x7ii/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 98,
    "name": "葱油焖鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 10,
    "ingredients": "鸡腿肉250g、葱50g、姜10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "厚底锅铺葱姜，鸡腿皮面朝下，加少量水加盖焖熟。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "葱",
        "grams": 50.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106927351/",
    "video": {
      "title": "葱油焖鸡，教程分享。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1SSpdexEkm/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 99,
    "name": "电饭煲盐焗鸡",
    "category": "鸡肉",
    "time": 55,
    "cost": 9,
    "ingredients": "鸡腿肉260g、盐焗鸡粉5g、姜10g、葱20g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡肉拌盐焗粉，锅底铺葱姜并按电饭煲要求加水，煮饭程序后测温熟透。",
      "使用正常煮饭程序约40分钟，按锅具要求加水，结束后确认鸡肉中心74°C；未熟就继续加热，不用保温代替煮熟。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 260.0,
        "group": "肉类"
      },
      {
        "name": "盐焗鸡粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 20.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107434656/",
    "video": {
      "title": "不加一滴水的电饭煲盐焗鸡，就这么简单！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1QQ4zeREcf/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 100,
    "name": "香菇滑鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 11,
    "ingredients": "鸡腿肉200g、鲜香菇150g、姜4g、淀粉5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鸡肉切小块拌淀粉和生抽，香菇垫底，浅盘平铺蒸熟。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "鲜香菇",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103944171/",
    "video": {
      "title": "“香菇滑鸡”的家常做法，嫩滑多汁有窍门，做法简单易上手_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12e411x7A3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 101,
    "name": "豉汁蒸鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 8,
    "ingredients": "鸡腿肉220g、豆豉8g、蒜6g、姜4g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "豆豉略冲洗剁碎，与鸡块抓匀后浅盘蒸熟。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "豆豉",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/100030885/",
    "video": {
      "title": "厨房小白也能搞定！豆豉酱蒸鸡腿，一腌一蒸满屋飘香~_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ej3JzYExs/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 102,
    "name": "虫草花蒸鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 9,
    "ingredients": "鸡腿肉220g、干虫草花10g、姜4g、红枣10g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。先备好蒸锅与浅盘，水开后再上锅。",
      "虫草花短时泡软，红枣去核，与小块鸡肉拌匀蒸透。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干虫草花",
        "grams": 10.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "红枣",
        "grams": 10.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/257887/",
    "video": {
      "title": "老广的味道，虫草花蒸鸡肉的做法，鸡肉鲜香嫩滑，老人小孩都爱吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1bJ411P7p6/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 103,
    "name": "金针云耳蒸鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 9,
    "ingredients": "鸡腿肉220g、干黄花菜12g、干木耳6g、姜4g、淀粉4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。先备好蒸锅与浅盘，水开后再上锅。",
      "干黄花菜泡发洗净后焯水，木耳短时泡发；与小块鸡肉拌匀蒸熟。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干黄花菜",
        "grams": 12.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 6.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107301251/",
    "video": {
      "title": "宝哥分享经典家庭菜式《金针云耳蒸鸡》-酒满饭宝-酒满饭宝-哔哩哔哩视频",
      "url": "https://www.bilibili.com/video/BV1MKe1z1EZZ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 104,
    "name": "红枣蒸鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 8,
    "ingredients": "鸡腿肉220g、红枣20g、姜4g、淀粉4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "红枣去核切条，与鸡块拌匀后浅盘蒸熟。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "红枣",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/102387574/",
    "video": {
      "title": "5月14日疫起来做饭：人协导师教你药材鸡和香菇红枣蒸鸡肉 - YouTube",
      "url": "https://www.youtube.com/watch?v=OVEijcod5Ig",
      "platform": "YouTube"
    }
  },
  {
    "id": 105,
    "name": "木耳蒸鸡",
    "category": "鸡肉",
    "time": 35,
    "cost": 8,
    "ingredients": "鸡腿肉220g、干木耳8g、姜4g、淀粉4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。先备好蒸锅与浅盘，水开后再上锅。",
      "木耳冷水短时泡发洗净，与鸡块拌匀蒸透，不隔夜浸泡。",
      "鸡块不超过3厘米，浅盘单层铺开，上汽后蒸25分钟至中心74°C；泡发干料时间另计。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干木耳",
        "grams": 8.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107435299/",
    "video": {
      "title": "靠吃73天瘦了28.2斤.轻盈度夏紧跟国家脚步 挑战从207斤瘦到120斤,带你看看跟着国家卫健委版减肥食谱吃有多简单，黑木耳蒸鸡_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1jcMFzwEZ1/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 106,
    "name": "山药炖鸡",
    "category": "鸡肉",
    "time": 60,
    "cost": 10,
    "ingredients": "鸡腿肉220g、山药180g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块先炖25分钟，再下山药炖20分钟。",
      "鸡肉焯洗后加600毫升水，小火炖45分钟；配菜依上一步下锅，鸡肉全熟后少盐调味。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "山药",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107331084/",
    "video": {
      "title": "山药炖鸡汤这样做味道绝了，汤浓味美营养健康，制作一点都不难！ - YouTube",
      "url": "https://www.youtube.com/watch?v=W4IjVvXN6eA",
      "platform": "YouTube"
    }
  },
  {
    "id": 107,
    "name": "冬瓜炖鸡",
    "category": "鸡肉",
    "time": 60,
    "cost": 10,
    "ingredients": "鸡腿肉220g、冬瓜250g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块先炖30分钟，冬瓜后下再煮15分钟。",
      "鸡肉焯洗后加600毫升水，小火炖45分钟；配菜依上一步下锅，鸡肉全熟后少盐调味。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/1059047/",
    "video": {
      "title": "冬瓜燜雞    冬瓜滷的入味~比煮湯更好吃 方便的一鍋料理 很適合帶便當喔 - YouTube",
      "url": "https://www.youtube.com/watch?v=pPMPIrQippY",
      "platform": "YouTube"
    }
  },
  {
    "id": 108,
    "name": "莲藕炖鸡",
    "category": "鸡肉",
    "time": 60,
    "cost": 10,
    "ingredients": "鸡腿肉220g、莲藕180g、姜5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "莲藕切块，和鸡肉一起炖至软熟。",
      "鸡肉焯洗后加600毫升水，小火炖45分钟；配菜依上一步下锅，鸡肉全熟后少盐调味。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "莲藕",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.sohu.com/a/498976835_121223552",
    "video": {
      "title": "莲藕老鸡汤的做法，莲藕炖鸡汤怎么做才好吃，厨师长分享煲汤技巧 - YouTube",
      "url": "https://www.youtube.com/watch?v=Oln2FfSvp7w",
      "platform": "YouTube"
    }
  },
  {
    "id": 109,
    "name": "椰子鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 15,
    "ingredients": "鸡腿肉220g、椰子水300g、椰肉50g、姜4g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "天然椰子水加适量清水煮开，下鸡块与椰肉炖至全熟，不做生熟混夹。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "椰子水",
        "grams": 300.0,
        "group": "调味配料"
      },
      {
        "name": "椰肉",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107394504/",
    "video": {
      "title": "椰子鸡的正确做法，一滴水也不放，椰香浓郁，汤汁鲜甜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1464y1M7We/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 110,
    "name": "清炖鸡汤",
    "category": "鸡肉",
    "time": 60,
    "cost": 9,
    "ingredients": "鸡腿肉260g、姜6g、葱10g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块焯洗后加清水慢炖，最后少盐调味。",
      "鸡肉焯洗后加600毫升水，小火炖45分钟；配菜依上一步下锅，鸡肉全熟后少盐调味。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 260.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103565944/",
    "video": {
      "title": "清炖鸡汤做法｜不腥不柴汤鲜味美_有了#北鼎爱上煲汤这个大炖盅真的超实用！#清炖鸡汤#今日伙食-7481886470760893754_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV18YsPzCErG/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 111,
    "name": "小鸡炖蘑菇",
    "category": "鸡肉",
    "time": 45,
    "cost": 12,
    "ingredients": "鸡腿肉220g、干榛蘑20g、干粉条35g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "只选购正规食用榛蘑，泡发洗净；鸡块与蘑菇炖熟后再加泡软粉条煮透。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干榛蘑",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干粉条",
        "grams": 35.0,
        "group": "谷物与粉面"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100375667/",
    "video": {
      "title": "厨师长教你：“小鸡炖蘑菇”的家常做法，汤鲜肉美味，先收藏起来_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1pg4y1z7Ti/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 112,
    "name": "芋头烧鸡",
    "category": "鸡肉",
    "time": 45,
    "cost": 9,
    "ingredients": "鸡腿肉220g、芋头180g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芋头去皮切小块，和鸡块一起焖透，芋头不生食。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "芋头",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/26479/",
    "video": {
      "title": "芋儿鸡怎么做好吃，千万别加火锅底料，完全盖住了鸡肉的香味，多加这两样酱料，鸡肉鲜嫩入味芋头软烂绵软#下饭菜 #下酒菜 #家常菜 #芋头 #芋头焖鸡 #芋儿烧鸡 #芋头烧鸡 #红烧鸡块 #芋儿鸡#红烧鸡 - YouTube",
      "url": "https://www.youtube.com/watch?v=U3p4fUfYKaM",
      "platform": "YouTube"
    }
  },
  {
    "id": 113,
    "name": "辣子鸡丁",
    "category": "鸡肉",
    "time": 25,
    "cost": 7,
    "ingredients": "鸡腿肉200g、干辣椒8g、花椒1g、姜5g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡肉切小丁，不粘锅少油煎至全熟，再低火炒香辣椒花椒合炒。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "干辣椒",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "花椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103725515/",
    "video": {
      "title": "〖美食X情感〗越吃越好吃的辣子鸡丁，做法超简单，强烈推荐_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1JK411Q7B6/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 114,
    "name": "青椒炒鸡丁",
    "category": "鸡肉",
    "time": 25,
    "cost": 7,
    "ingredients": "鸡胸肉180g、青椒180g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡丁腌制后炒至全熟，青椒后放炒透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "鸡胸肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106854480/",
    "video": {
      "title": "青椒炒鸡丁的家常做法，鸡肉滑嫩，香辣入味，开胃好吃又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hD421P7FW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 115,
    "name": "酱爆鸡丁",
    "category": "鸡肉",
    "time": 25,
    "cost": 8,
    "ingredients": "鸡腿肉180g、黄瓜150g、甜面酱12g、葱10g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡丁炒熟后加入甜面酱和黄瓜丁，翻炒均匀。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "黄瓜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "甜面酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104677780/",
    "video": {
      "title": "酱爆鸡丁的家常做法，挂汁均匀有技巧，下酒又下饭！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1xx42127gx/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 116,
    "name": "蚝油鸡翅",
    "category": "鸡肉",
    "time": 45,
    "cost": 15,
    "ingredients": "鸡翅中250g、蚝油10g、姜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡翅划口，先煎后用蚝油汁和水焖熟，不另加盐。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡翅中",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "蚝油",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104572461/",
    "video": {
      "title": "【蚝油鸡翅】鸡年最容易做的一道鸡 - YouTube",
      "url": "https://www.youtube.com/watch?v=5wzrFGScDKo",
      "platform": "YouTube"
    }
  },
  {
    "id": 117,
    "name": "黑椒鸡丁",
    "category": "鸡肉",
    "time": 25,
    "cost": 9,
    "ingredients": "鸡腿肉180g、洋葱120g、彩椒100g、黑胡椒2g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡肉切小块先焖炒全熟，再下洋葱彩椒和黑椒合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "洋葱",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "彩椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黑胡椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/102312150/",
    "video": {
      "title": "Chef's Recipe for Tender, Juicy Black Pepper Chicken Cubes - Perfect for Meals or Drinks 黑椒鸡丁 多汁嫩滑 - YouTube",
      "url": "https://www.youtube.com/watch?v=PgdEGBKAY6c",
      "platform": "YouTube"
    }
  },
  {
    "id": 118,
    "name": "鸡肉炖粉条",
    "category": "鸡肉",
    "time": 45,
    "cost": 10,
    "ingredients": "鸡腿肉220g、干粉条45g、白菜150g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "鸡块先炖熟，再加泡软粉条与白菜煮透，适当补水。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "干粉条",
        "grams": 45.0,
        "group": "谷物与粉面"
      },
      {
        "name": "白菜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107332551/",
    "video": {
      "title": "东北地道的鸡块炖粉条，学会这种做法，鸡肉软烂粉条更加鲜美入味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1pf4y1y7tJ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 119,
    "name": "重庆烧鸡公",
    "category": "鸡肉",
    "time": 45,
    "cost": 11,
    "ingredients": "鸡腿肉230g、芋头150g、芹菜80g、豆瓣酱8g、姜8g、蒜8g、花椒1g、干辣椒3g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡块炒香，和芋头加水焖熟，芹菜最后放；家庭少油版不油炸。",
      "加入约150–250毫升水或所列液体，小火加盖焖25–30分钟至鸡肉中心74°C；依上一步安排配菜，最后适度收汁。"
    ],
    "items": [
      {
        "name": "鸡腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "芋头",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "芹菜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "花椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/103155426/",
    "video": {
      "title": "正宗重庆烧鸡公视频 烧鸡公的做法大全视频_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hb411h7h7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 120,
    "name": "啤酒鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 15,
    "ingredients": "鸭腿肉250g、啤酒200g、青椒100g、姜8g、蒜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭块先焯水并煸去多余油，加啤酒烧开后慢炖，青椒最后放。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "啤酒",
        "grams": 200.0,
        "group": "调味配料"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106717090/",
    "video": {
      "title": "鲜香入味的啤酒鸭做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1PB4y1T7no/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 121,
    "name": "仔姜鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 13,
    "ingredients": "鸭腿肉230g、仔姜100g、青椒80g、豆瓣酱6g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉切小块先煸香，再与仔姜同焖至软熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "仔姜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106761211/",
    "video": {
      "title": "广西酸笋仔姜鸭的做法，酸辣开胃超下饭，汤汁拌饭也能多吃两碗_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1CK4y1A7ZU/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 122,
    "name": "魔芋烧鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 13,
    "ingredients": "鸭腿肉230g、魔芋豆腐180g、姜6g、豆瓣酱6g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "用加工熟制的魔芋豆腐，焯水后与鸭块一同烧透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "魔芋豆腐",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/105816579/",
    "video": {
      "title": "经典川菜“魔芋烧鸭”教程来了，鲜香入味，好吃不贵_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV18V411v7Af/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 123,
    "name": "酸萝卜老鸭汤",
    "category": "鸭兔",
    "time": 100,
    "cost": 13,
    "ingredients": "鸭腿肉250g、酸萝卜150g、姜6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "酸萝卜冲洗切块，鸭肉焯净后同炖，酸萝卜含盐，尝味后再调味。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "酸萝卜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/222583/",
    "video": {
      "title": "毛哥酸萝卜老鸭汤做法。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV13S4y1k7P3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 124,
    "name": "冬瓜老鸭汤",
    "category": "鸭兔",
    "time": 100,
    "cost": 14,
    "ingredients": "鸭腿肉250g、冬瓜250g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖50分钟，冬瓜最后加入炖15分钟。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106499250/",
    "video": {
      "title": "一锅煨出冬瓜老鸭汤，做法简单，鲜气十足 #冬瓜老鸭汤 #老鸭汤 - 抖音",
      "url": "https://www.douyin.com/video/7688210531500494121",
      "platform": "抖音"
    }
  },
  {
    "id": 125,
    "name": "海带老鸭汤",
    "category": "鸭兔",
    "time": 100,
    "cost": 12,
    "ingredients": "鸭腿肉250g、泡发海带150g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭块焯净，海带洗净切块，同炖至肉和海带熟软。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "干海带",
        "grams": 18.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106054776/",
    "video": {
      "title": "川渝地区的最爱，酸萝卜海带老鸭汤，开胃下饭比酒好喝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ph411D7Kj/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 126,
    "name": "山药老鸭汤",
    "category": "鸭兔",
    "time": 100,
    "cost": 15,
    "ingredients": "鸭腿肉250g、山药180g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖45分钟，再下山药炖20分钟。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "山药",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104430682/",
    "video": {
      "title": "#我的假期生活图鉴 淮山红萝卜老鸭汤，健脾温润好喝#真实生活分享计划 #老鸭汤 #儿童营养汤家常做法 - 抖音",
      "url": "https://www.douyin.com/video/7693153408219917801",
      "platform": "抖音"
    }
  },
  {
    "id": 127,
    "name": "香菇烧鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 16,
    "ingredients": "鸭腿肉230g、鲜香菇180g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖40分钟，再放香菇烧20分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "鲜香菇",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-187776.html",
    "video": {
      "title": "阿公买回一只鸭子，阿米做“香菇烧鸭”，色香味美巴适得板-美食米阿米-美食米阿米-哔哩哔哩视频",
      "url": "https://www.bilibili.com/video/BV1DC4y1X7GM/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 128,
    "name": "土豆烧鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 13,
    "ingredients": "鸭腿肉230g、土豆180g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖40分钟，再放土豆烧20分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-629325.html",
    "video": {
      "title": "休息后开工的第一天，工友大哥们都很想念高师傅做的菜呀😅今天做的土豆烧鸭腿味道很不错☺️_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1cx4izxEdS/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 129,
    "name": "芋头焖鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 13,
    "ingredients": "鸭腿肉230g、芋头180g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭块先煸香炖40分钟，再加芋头焖至软熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "芋头",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/100363460/",
    "video": {
      "title": "没想到芋头焖鸭会这么好吃，软嫩入味，满屋飘香，你也试试吧-美食一线陈仔-美食一线陈仔-哔哩哔哩视频",
      "url": "https://www.bilibili.com/video/BV1pP411b72k/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 130,
    "name": "笋干老鸭煲",
    "category": "鸭兔",
    "time": 100,
    "cost": 15,
    "ingredients": "鸭腿肉250g、泡发笋干150g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "笋干泡发后预煮熟，再与鸭块同炖至软烂。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "干笋",
        "grams": 37.5,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107631030/",
    "video": {
      "title": "张生记同款火腿笋干老鸭煲，家庭版做法真的不要太简单！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV13D4y1S72Z/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 131,
    "name": "萝卜老鸭汤",
    "category": "鸭兔",
    "time": 100,
    "cost": 14,
    "ingredients": "鸭腿肉250g、白萝卜220g、姜6g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖40分钟，再加萝卜炖25分钟。",
      "焯净后加700毫升水，小火炖80–90分钟至肉软，易熟配菜后下；老鸭需延长，不足水补热水。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-151891.html",
    "video": {
      "title": "厨师长教你：“老鸭萝卜汤”的家常做法，天气冷了很适合老人孩子_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ot411D7yG/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 132,
    "name": "酱鸭腿",
    "category": "鸭兔",
    "time": 80,
    "cost": 11,
    "ingredients": "鸭腿250g、黄豆酱12g、姜6g、八角1g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭腿划两刀，焯净后加酱料小火卤熟，中途翻面。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "黄豆酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107326826/",
    "video": {
      "title": "上海酱鸭腿的正确做法，好吃又好看，成本不到十块钱_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1v24y1y7QW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 133,
    "name": "红烧鸭腿",
    "category": "鸭兔",
    "time": 80,
    "cost": 11,
    "ingredients": "鸭腿250g、姜6g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭腿划口先煎出部分油脂，再加水焖至贴骨处熟透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106108141/",
    "video": {
      "title": "吃了几十年鸭腿，烧鸭腿是最好吃的一种做法，色泽红亮冷热皆宜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ca4y1E72G/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 134,
    "name": "毛豆烧鸭",
    "category": "鸭兔",
    "time": 80,
    "cost": 13,
    "ingredients": "鸭腿肉230g、毛豆150g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸭肉先炖40分钟，再放毛豆煮15–20分钟至豆粒熟透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "加热水刚没过鸭肉，小火加盖炖60–70分钟，鸭肉中心74°C且软熟，再收汁；老鸭需延长。"
    ],
    "items": [
      {
        "name": "鸭腿肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "毛豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://v6.duitang.com/blog/?id=581400288",
    "video": {
      "title": "食堂毛豆烧鸭开胃下饭，做法简单一学就会,美食,美食教学,好看视频",
      "url": "https://haokan.baidu.com/v?pd=wisenatural&vid=14498604881749235022",
      "platform": "好看视频"
    }
  },
  {
    "id": 135,
    "name": "子姜兔",
    "category": "鸭兔",
    "time": 55,
    "cost": 16,
    "ingredients": "兔肉220g、仔姜100g、青椒100g、豆瓣酱6g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "兔肉切小块，仔姜切丝；先炒兔肉，再加水和姜椒焖至熟透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "兔肉加热水炖35–40分钟至熟软，配菜按上一步分时加入，缺水补热水。"
    ],
    "items": [
      {
        "name": "兔肉",
        "grams": 220.0,
        "group": "肉类"
      },
      {
        "name": "仔姜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106989589/",
    "video": {
      "title": "鲜辣过瘾的仔姜兔，仔姜的鲜味，配上兔肉的嫩滑，辣到停不下来！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1NP41177B3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 136,
    "name": "红烧兔肉",
    "category": "鸭兔",
    "time": 55,
    "cost": 16,
    "ingredients": "兔肉250g、姜6g、葱10g、八角1g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "兔肉焯净后煸香，加热水小火烧熟，不用厚块短时间快炒。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "兔肉加热水炖35–40分钟至熟软，配菜按上一步分时加入，缺水补热水。"
    ],
    "items": [
      {
        "name": "兔肉",
        "grams": 250.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103456803/",
    "video": {
      "title": "朋友送来两只大肥兔，做个“红烧兔肉”，肉香味美，嘎嘎好吃-大蒙美食-大蒙美食-哔哩哔哩视频",
      "url": "https://www.bilibili.com/video/BV1wF95YUEKe/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 137,
    "name": "土豆炖兔肉",
    "category": "鸭兔",
    "time": 55,
    "cost": 17,
    "ingredients": "兔肉230g、土豆180g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "兔肉先炖20分钟，再下土豆炖20分钟至软熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "兔肉加热水炖35–40分钟至熟软，配菜按上一步分时加入，缺水补热水。"
    ],
    "items": [
      {
        "name": "兔肉",
        "grams": 230.0,
        "group": "肉类"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-348725.html",
    "video": {
      "title": "土豆烧兔子",
      "url": "https://www.bilibili.com/video/BV15Cr8YnEtk/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 138,
    "name": "青椒兔丁",
    "category": "鸭兔",
    "time": 25,
    "cost": 17,
    "ingredients": "去骨兔肉200g、青椒180g、姜5g、蒜5g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "兔肉切约1厘米小丁，先炒再加少量水焖透，最后放青椒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "去骨兔肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104646143/",
    "video": {
      "title": "兔兔这么可爱，怎么做才炒好吃？3个方法让兔肉没有腥味，大厨教你双椒兔丁酒店做法，兔肉干香麻辣过瘾 #双椒兔丁 #麻辣兔丁 #香辣兔丁 #鲜椒兔 #兔丁 #下饭菜 #美食教程 #家常菜 #美食 #下酒菜 - YouTube",
      "url": "https://www.youtube.com/watch?v=2sqWoe2iBZI",
      "platform": "YouTube"
    }
  },
  {
    "id": 139,
    "name": "小炒兔肉",
    "category": "鸭兔",
    "time": 25,
    "cost": 17,
    "ingredients": "去骨兔肉200g、青椒150g、洋葱80g、姜6g、蒜5g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "兔肉切小丁，先炒再加少量水焖透，最后下椒和洋葱合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "去骨兔肉",
        "grams": 200.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100451098/",
    "video": {
      "title": "厨师长教你自贡特色“小煎兔”，味道鲜辣，肉质细腻，下饭一绝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1F8411f7ce/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 140,
    "name": "清蒸鲈鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 13,
    "ingredients": "鲈鱼300g、姜8g、葱15g、蒸鱼豉油8g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "请商家去鳞内脏，冲净后厚处划刀；蒸熟倒去腥水，再淋豉油。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲈鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 8.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/105937748/",
    "video": {
      "title": "中餐厅林大厨清蒸鲈鱼的做法，家中也能做的很漂亮_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1FJ411T7Gt/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 141,
    "name": "红烧鲈鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 14,
    "ingredients": "鲈鱼300g、姜8g、葱10g、蒜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼处理干净擦干，两面煎定形后加调料汁焖熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲈鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107610850/",
    "video": {
      "title": "红烧鲈鱼大部分人不会做，厨师教你几招，视频详细分享，一看就会_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1e64y1v7RH/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 142,
    "name": "清蒸多宝鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 22,
    "ingredients": "多宝鱼300g、姜8g、葱15g、蒸鱼豉油8g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鱼去内脏鳃并洗净，厚处划刀，姜葱垫底蒸熟。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "多宝鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 8.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106017928/",
    "video": {
      "title": "广东大厨分享广东人最爱点的“清蒸多宝鱼”全教程欢迎收藏起来_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1JJ411w7qB/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 143,
    "name": "红烧带鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 19,
    "ingredients": "带鱼段250g、姜8g、葱10g、蒜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "带鱼去内脏黑膜擦干，煎定形再加水焖熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "带鱼段",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1005142/",
    "video": {
      "title": "教你在家做红烧带鱼、做法简单又好吃。@小彪美食_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Gx411E77w/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 144,
    "name": "糖醋带鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 19,
    "ingredients": "带鱼段250g、姜6g、葱10g、食用油5g、生抽6g、老抽2g、白糖3g、米醋8g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "带鱼先煎熟，再用糖醋汁略煮入味，注意挑刺。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "带鱼段",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1093569/",
    "video": {
      "title": "当你想吃“糖醋带鱼”就把这部视频翻出来学着做_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Kw411P773/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 145,
    "name": "干煎带鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 18,
    "ingredients": "带鱼段250g、姜6g、料酒8g、盐1g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "带鱼洗净擦干腌制，平底锅两面煎至全熟，中段厚肉要熟透。",
      "鱼块厚度不超过2厘米，两面各煎4–5分钟，再加少量水加盖焖2–3分钟，中心63°C；厚块延长。"
    ],
    "items": [
      {
        "name": "带鱼段",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "料酒",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102257996/",
    "video": {
      "title": "厨师长教你：“干煎带鱼”的家常做法，味道很赞，先收藏起来_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1m441177A8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 146,
    "name": "清蒸鳕鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 39,
    "ingredients": "鳕鱼块200g、姜6g、葱10g、蒸鱼豉油6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鳕鱼完全解冻擦干，切不超过2厘米厚，铺姜葱蒸熟。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鳕鱼块",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 6.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107041106/",
    "video": {
      "title": "清蒸鳕鱼时，切记不要放盐和料酒腌制，教你一招，鱼肉鲜嫩无腥味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1MJ4m1A7Nu/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 147,
    "name": "香煎鳕鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 39,
    "ingredients": "鳕鱼块200g、黑胡椒1g、柠檬20g、盐1g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼块完全解冻擦干，不粘锅两面煎，厚块加盖焖至中心熟透。",
      "鱼块厚度不超过2厘米，两面各煎4–5分钟，再加少量水加盖焖2–3分钟，中心63°C；厚块延长。"
    ],
    "items": [
      {
        "name": "鳕鱼块",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "黑胡椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "柠檬",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "盐",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102149915/",
    "video": {
      "title": "Bowen的厨房：在家给女朋友做法式香煎鳕鱼配白芦笋/刚刚学会的荷兰酱这就用上了/颜值高又美味一学就会！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1nZ4y1p7UN/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 148,
    "name": "红烧黄鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 20,
    "ingredients": "黄鱼300g、姜8g、葱10g、蒜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "黄鱼去内脏鳃洗净擦干，先煎定形后烧熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "黄鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102260038/",
    "video": {
      "title": "〖美食〗上海本帮菜-红烧黄鱼_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1CQ4y1z7Bd/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 149,
    "name": "清蒸黄鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 19,
    "ingredients": "黄鱼300g、姜8g、葱15g、蒸鱼豉油8g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鱼身厚处划刀，蒸后确认鱼肉轻松分片并挑刺。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "黄鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 8.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106497824/",
    "video": {
      "title": "清蒸黄鱼不要直接上锅蒸，记住这1步，鱼肉鲜嫩无腥味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV19K4y1U7ZV/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 150,
    "name": "雪菜黄鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 20,
    "ingredients": "黄鱼300g、雪菜70g、姜8g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "雪菜冲洗切碎炒香，加入煎过的黄鱼和水焖熟，少盐。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "黄鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "雪菜",
        "grams": 70.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103566323/",
    "video": {
      "title": "饭店厨师教做雪菜黄鱼，制作流程详细讲解，为过年准备一道拿手菜",
      "url": "https://www.bilibili.com/video/BV1Db411A7pL/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 151,
    "name": "红烧鲳鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 23,
    "ingredients": "鲳鱼300g、姜8g、蒜5g、葱10g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼去鳃内脏洗净划刀，两面煎过再焖熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲳鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107031933/",
    "video": {
      "title": "酒店大厨教你：“红烧鲳鱼”的做法，操作简单好吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1dK411H7fk/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 152,
    "name": "清蒸鲳鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 22,
    "ingredients": "鲳鱼300g、姜8g、葱15g、蒸鱼豉油8g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鲳鱼处理干净划刀，上汽后蒸至厚肉处熟透。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲳鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 8.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103521255/",
    "video": {
      "title": "店主分享：“清蒸鲳鱼”的家常做法，鱼肉鲜嫩无比，大家都爱吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hk4y117v3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 153,
    "name": "鲫鱼豆腐汤",
    "category": "鱼虾",
    "time": 40,
    "cost": 8,
    "ingredients": "鲫鱼250g、北豆腐180g、姜6g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鲫鱼擦干煎两面，再加热水和豆腐煮；食用时仔细挑刺。",
      "煎过的鱼加600毫升热水煮开后，中小火煮20–25分钟，鱼肉全熟、豆腐配菜煮透，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲫鱼",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "北豆腐",
        "grams": 180.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107527257/",
    "video": {
      "title": "鲫鱼豆腐汤的家常做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1EQ4y1M7Ad/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 154,
    "name": "萝卜丝鲫鱼汤",
    "category": "鱼虾",
    "time": 40,
    "cost": 9,
    "ingredients": "鲫鱼250g、白萝卜220g、姜6g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鲫鱼煎过加热水煮开，萝卜切丝后下煮软。",
      "煎过的鱼加600毫升热水煮开后，中小火煮20–25分钟，鱼肉全熟、豆腐配菜煮透，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲫鱼",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "白萝卜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104189046/",
    "video": {
      "title": "萝卜丝鲫鱼汤，汤浓色白味道鲜（Fish soup) - YouTube",
      "url": "https://www.youtube.com/watch?v=fDFGZDo8CZ0",
      "platform": "YouTube"
    }
  },
  {
    "id": 155,
    "name": "番茄鱼片",
    "category": "鱼虾",
    "time": 30,
    "cost": 16,
    "ingredients": "去刺草鱼肉200g、番茄250g、姜5g、淀粉5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄炒软出汁，鱼片抓淀粉后逐片下汤，煮至全熟。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "去刺草鱼肉",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "番茄",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/93207/",
    "video": {
      "title": "大厨教你番茄鱼片的家常做法，鱼片鲜香滑嫩，汤汁鲜美开胃又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1aa41157mW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 156,
    "name": "酸菜鱼",
    "category": "鱼虾",
    "time": 30,
    "cost": 16,
    "ingredients": "去刺草鱼肉220g、酸菜150g、姜6g、蒜5g、淀粉5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "酸菜冲洗炒香加水煮，鱼片最后逐片下锅煮熟，不额外浇大量热油。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "去刺草鱼肉",
        "grams": 220.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "酸菜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107024964/",
    "video": {
      "title": "厨师长教你：酸菜鱼的家常做法，学会先收藏_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1mZ4y1v7z3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 157,
    "name": "水煮鱼",
    "category": "鱼虾",
    "time": 30,
    "cost": 17,
    "ingredients": "去刺草鱼肉220g、豆芽150g、白菜100g、豆瓣酱8g、蒜5g、辣椒粉1g、花椒粉1g、食用油5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蔬菜煮熟垫底，鱼片下汤煮至不透明且中心63°C，少量油提香即可。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "先把配菜煮熟，再逐片放肉片或鱼片煮3–5分钟至全熟；薄鱼片中心63°C。肥牛需摊开焯熟，不叠团生烫。"
    ],
    "items": [
      {
        "name": "去刺草鱼肉",
        "grams": 220.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "豆芽",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "白菜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "辣椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "花椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106989942/",
    "video": {
      "title": "水煮鱼最家常做法，又滑又嫩！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qr4y1872R/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 158,
    "name": "剁椒鱼头",
    "category": "鱼虾",
    "time": 35,
    "cost": 12,
    "ingredients": "鱼头350g、剁椒25g、姜8g、蒜5g、葱10g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鱼头请商家剖开去鳃洗净，铺姜蒜剁椒蒸透，剁椒含盐不再加盐。",
      "鱼头剖开摊平，上汽后蒸20–25分钟，厚肉处达到63°C；未熟继续蒸。"
    ],
    "items": [
      {
        "name": "鱼头",
        "grams": 350.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "剁椒",
        "grams": 25.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/261072/",
    "video": {
      "title": "湘菜大厨分享剁椒鱼头的正宗做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1B4411a7Tm/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 159,
    "name": "鱼头豆腐汤",
    "category": "鱼虾",
    "time": 40,
    "cost": 13,
    "ingredients": "鱼头350g、北豆腐180g、姜8g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼头剖开去鳃洗净，两面煎过再加热水与豆腐炖透。",
      "煎过的鱼加600毫升热水煮开后，中小火煮20–25分钟，鱼肉全熟、豆腐配菜煮透，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鱼头",
        "grams": 350.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "北豆腐",
        "grams": 180.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103478616/",
    "video": {
      "title": "厨师长教你：“鱼头豆腐汤”的创新做法，老少皆宜，赶紧收藏_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Cs411N7RA/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 160,
    "name": "酱焖鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 9,
    "ingredients": "鲤鱼段280g、黄豆酱15g、姜8g、葱10g、蒜5g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼段洗净擦干煎定形，加黄豆酱和水焖熟，不另加盐。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲤鱼段",
        "grams": 280.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "黄豆酱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107537840/",
    "video": {
      "title": "无论什么鱼,按这种方法做出来的酱焖鱼,都能让你多吃一碗饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ZZ4y1i7XG/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 161,
    "name": "啤酒鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 14,
    "ingredients": "草鱼段280g、啤酒180g、番茄150g、青椒80g、姜6g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼段煎定形，加入啤酒和番茄焖熟，青椒最后放。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "草鱼段",
        "grams": 280.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "啤酒",
        "grams": 180.0,
        "group": "调味配料"
      },
      {
        "name": "番茄",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106873590/",
    "video": {
      "title": "这才是最正宗的阳朔啤酒鱼做法，传统师傅都是选的漓江大鲤鱼！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Xx411o7Kr/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 162,
    "name": "豆瓣鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 8,
    "ingredients": "鲤鱼段280g、豆瓣酱10g、姜6g、蒜5g、葱10g、食用油5g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼段先煎，豆瓣姜蒜另在锅边炒香，加水小火烧透。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲤鱼段",
        "grams": 280.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "豆瓣酱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/252712/",
    "video": {
      "title": "重庆师傅教你做川菜，豆瓣鱼原来就是这么做的，味道巴适惨了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1gE411y72i/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 163,
    "name": "家常烧鱼块",
    "category": "鱼虾",
    "time": 35,
    "cost": 10,
    "ingredients": "草鱼段280g、姜6g、蒜5g、葱10g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼块擦干后煎两面，加入调味汁和水焖至全熟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "草鱼段",
        "grams": 280.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-469431.html",
    "video": {
      "title": "厨师长教你红烧鱼块的家常做法，肉质鲜嫩，香辣入味下酒又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1FZ4y1B7cP/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 164,
    "name": "红烧草鱼",
    "category": "鱼虾",
    "time": 35,
    "cost": 10,
    "ingredients": "草鱼段280g、姜6g、蒜5g、葱10g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼块用姜腌片刻，擦干煎定形后烧熟，注意细刺。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "鱼煎定形后加150–200毫升水或所列啤酒，小火焖12–15分钟，中心63°C，盛出时仔细挑刺。"
    ],
    "items": [
      {
        "name": "草鱼段",
        "grams": 280.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100587847/",
    "video": {
      "title": "厨师长教你：“红烧草鱼”的正宗做法，先收藏起来_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1LW411P7zW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 165,
    "name": "清蒸武昌鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 12,
    "ingredients": "武昌鱼300g、姜8g、葱15g、蒸鱼豉油8g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "鱼请商家处理干净，厚处划刀，上汽后蒸熟。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "武昌鱼",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒸鱼豉油",
        "grams": 8.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104766058/",
    "video": {
      "title": "【家常菜 chinese food】一分钟学会清蒸武昌鱼的做法Steamed wuchang fish - YouTube",
      "url": "https://www.youtube.com/watch?v=3dCIIgCpcu0",
      "platform": "YouTube"
    }
  },
  {
    "id": 166,
    "name": "豉汁蒸鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 19,
    "ingredients": "鲈鱼肉220g、豆豉8g、蒜6g、姜5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "豆豉冲洗剁碎，与鱼肉姜蒜拌匀，浅盘蒸熟。",
      "鱼块不超过2厘米厚，上汽后蒸12–15分钟；整鱼较厚则延长至中心63°C、鱼肉可分片，仔细挑刺。"
    ],
    "items": [
      {
        "name": "鲈鱼肉",
        "grams": 220.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "豆豉",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1074758/",
    "video": {
      "title": "零失败！大厨只需8分钟，教你饭店招牌豉汁蒸鱼，新手也能做大厨_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1vgQVYNEQA/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 167,
    "name": "香煎三文鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 40,
    "ingredients": "三文鱼180g、柠檬20g、黑胡椒1g、盐1g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼擦干，两面煎至中心63°C，做带饭用途不保留生心。",
      "鱼块厚度不超过2厘米，两面各煎4–5分钟，再加少量水加盖焖2–3分钟，中心63°C；厚块延长。"
    ],
    "items": [
      {
        "name": "三文鱼",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "柠檬",
        "grams": 20.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黑胡椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/101770625/",
    "video": {
      "title": "晚餐：香煎三文鱼扒丨油醋汁荞麦面丨炖鸡汤_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1y44y1e7o3/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 168,
    "name": "照烧三文鱼",
    "category": "鱼虾",
    "time": 25,
    "cost": 41,
    "ingredients": "三文鱼180g、米酒15g、白糖4g、姜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼块先煎定形，加照烧汁和少量水焖至全熟。",
      "鱼块厚度不超过2厘米，两面各煎4–5分钟，再加少量水加盖焖2–3分钟，中心63°C；厚块延长。"
    ],
    "items": [
      {
        "name": "三文鱼",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "米酒",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104171635/",
    "video": {
      "title": "照烧三文鱼的做法美食教程分享推荐食谱家常菜饮品小吃地方特色_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV15o5azvEt6/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 169,
    "name": "三文鱼炖豆腐",
    "category": "鱼虾",
    "time": 40,
    "cost": 42,
    "ingredients": "三文鱼180g、北豆腐200g、姜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱼块略煎后加水和豆腐，小火煮至鱼肉全熟。",
      "煎过的鱼加600毫升热水煮开后，中小火煮20–25分钟，鱼肉全熟、豆腐配菜煮透，仔细挑刺。"
    ],
    "items": [
      {
        "name": "三文鱼",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "北豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1068112/",
    "video": {
      "title": "上班带饭第159天：三文鱼豆腐煲，开胃又下饭的家常做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12x4y117tC/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 170,
    "name": "油焖大虾",
    "category": "鱼虾",
    "time": 20,
    "cost": 19,
    "ingredients": "带壳虾250g、姜6g、葱10g、白糖3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "虾剪须挑虾线，少油煎红后加少量水焖透并收汁。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "带壳虾",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/101765312/",
    "video": {
      "title": "厨师长教你：“油焖大虾”的家常做法，味道好极了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1CW411c7kP/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 171,
    "name": "蒜蓉蒸虾",
    "category": "鱼虾",
    "time": 20,
    "cost": 19,
    "ingredients": "带壳虾250g、蒜15g、葱5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "虾开背去线，铺蒜蓉，浅盘上汽蒸至虾肉全熟。",
      "上汽后蒸8–10分钟，虾肉通体不透明，中心63°C；较大的虾适当延长。"
    ],
    "items": [
      {
        "name": "带壳虾",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "蒜",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6.0,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/1074033/",
    "video": {
      "title": "蒜蓉蒸虾改刀摆盘很关键，大厨详细教学，这样蒸出来味道鲜香入味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Dz411b7LD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 172,
    "name": "白灼虾",
    "category": "鱼虾",
    "time": 15,
    "cost": 19,
    "ingredients": "带壳虾250g、姜8g、葱10g、料酒10g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "水加姜葱烧开后放虾，煮到虾肉不透明再捞出；次日充分复热。",
      "水沸后煮虾3–5分钟至虾肉不透明且中心63°C；体型大的虾适当延长，熟虾装盘后不接触生虾器具。"
    ],
    "items": [
      {
        "name": "带壳虾",
        "grams": 250.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "料酒",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106101593/",
    "video": {
      "title": "白灼虾别再用热水煮啦，教你一招，嫩滑有弹性_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Kc411g7C1/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 173,
    "name": "番茄虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 26,
    "ingredients": "虾仁180g、番茄220g、姜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄先炒软出汁，放虾仁煮至不透明、全熟。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "番茄",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106806738/",
    "video": {
      "title": "番茄蒜香虾仁，鲜香浓郁，真的太好吃了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1x6G96ZELm/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 174,
    "name": "西兰花炒虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 26,
    "ingredients": "虾仁180g、西兰花220g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西兰花先焯熟，虾仁炒熟后与菜合炒。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "西兰花",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107347069/",
    "video": {
      "title": "虾仁豆腐煲-西兰花炒虾仁_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12X4y1e7HD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 175,
    "name": "黄瓜炒虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 26,
    "ingredients": "虾仁180g、黄瓜200g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "黄瓜切片，虾仁先炒至全熟，再放黄瓜炒断生。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "黄瓜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107074799/",
    "video": {
      "title": "黄瓜炒虾仁，降血糖防癌抗衰老！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1c54y1579z/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 176,
    "name": "芦笋炒虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 34,
    "ingredients": "虾仁180g、芦笋200g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芦笋去老根焯至熟，虾仁炒熟后合炒。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "芦笋",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104010472/",
    "video": {
      "title": "铸铁锅版芦笋炒虾仁_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1SZ4y1F79R/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 177,
    "name": "腰果虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 28,
    "ingredients": "虾仁180g、黄瓜150g、熟腰果25g、姜3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "虾仁炒透后加黄瓜丁，熟腰果最后放，炒匀即出锅。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "黄瓜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "熟腰果",
        "grams": 25.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104758038/",
    "video": {
      "title": "经典老菜腰果虾仁，大厨教你正确方法，鲜嫩爽滑，酥脆咸香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ii4y1T7q5/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 178,
    "name": "龙井虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 28,
    "ingredients": "虾仁200g、龙井茶叶2g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "茶叶用温水泡开，取少量茶汤；虾仁拌淀粉滑炒熟，再加茶汤和少量叶子。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "龙井茶叶",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104044565/",
    "video": {
      "title": "虾仁怎么炒鲜香更滑嫩？老厨教你一招搞定，吃传统名菜龙井虾仁_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1RL411Q7bK/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 179,
    "name": "虾仁蒸蛋",
    "category": "鱼虾",
    "time": 25,
    "cost": 15,
    "ingredients": "鸡蛋100g、虾仁100g、葱5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "蛋液加1.5倍温水，先蒸半凝固再摆虾仁，继续蒸至虾和蛋全熟。",
      "蛋液加1.5倍温水，浅碗盖盘留缝；水开后中小火蒸12–18分钟至中心全凝固。含虾时虾肉也需全熟。"
    ],
    "items": [
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "虾仁",
        "grams": 100.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107357684/",
    "video": {
      "title": "虾仁蒸蛋用冷水还是热水？蒸几分钟？教你正确做法，滑嫩爽口没有蜂窝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV15T411G7w7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 180,
    "name": "虾仁炒蛋",
    "category": "鱼虾",
    "time": 20,
    "cost": 16,
    "ingredients": "鸡蛋150g、虾仁100g、葱5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "虾仁先炒熟，再倒蛋液，翻炒至鸡蛋完全凝固。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "虾仁",
        "grams": 100.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107030013/",
    "video": {
      "title": "虾仁炒蛋，一道做法简单的家常菜，鲜香可口_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1dE411s74n/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 181,
    "name": "丝瓜炒虾仁",
    "category": "鱼虾",
    "time": 20,
    "cost": 26,
    "ingredients": "虾仁180g、丝瓜220g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "丝瓜去皮切块先炒软，再放虾仁炒焖至全熟；异常苦味丝瓜弃用。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 180.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "丝瓜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/22836/",
    "video": {
      "title": "丝瓜炒虾仁，广东人夏季爱吃这道菜，翠绿爽口，好开胃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1it41137tx/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 182,
    "name": "冬瓜虾仁汤",
    "category": "鱼虾",
    "time": 25,
    "cost": 23,
    "ingredients": "虾仁150g、冬瓜250g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "冬瓜先煮至透明软熟，再下虾仁煮透。",
      "配菜煮软后再下水产；虾仁煮3–5分钟至不透明，蛤蜊开壳后继续煮3–5分钟，丢弃不开壳的。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 150.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "冬瓜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107210186/",
    "video": {
      "title": "〖冬瓜虾仁汤〗已瘦17斤，越吃越瘦的减脂餐，日常减脂餐分享。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/av79898742/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 183,
    "name": "虾仁豆腐煲",
    "category": "鱼虾",
    "time": 25,
    "cost": 24,
    "ingredients": "虾仁150g、北豆腐200g、鲜香菇80g、姜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香菇先炒软，加豆腐和水煮5分钟，虾仁后下煮至不透明。",
      "配菜煮软后再下水产；虾仁煮3–5分钟至不透明，蛤蜊开壳后继续煮3–5分钟，丢弃不开壳的。"
    ],
    "items": [
      {
        "name": "虾仁",
        "grams": 150.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "北豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鲜香菇",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106114607/",
    "video": {
      "title": "虾仁豆腐煲-西兰花炒虾仁_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12X4y1e7HD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 184,
    "name": "葱姜炒蛤蜊",
    "category": "鱼虾",
    "time": 25,
    "cost": 9,
    "ingredients": "蛤蜊350g、姜10g、葱20g、料酒10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蛤蜊买已吐沙的，刷净；加盖煮开壳后继续煮3–5分钟，丢弃不开壳的。",
      "配菜煮软后再下水产；虾仁煮3–5分钟至不透明，蛤蜊开壳后继续煮3–5分钟，丢弃不开壳的。"
    ],
    "items": [
      {
        "name": "蛤蜊",
        "grams": 350.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 20.0,
        "group": "调味配料"
      },
      {
        "name": "料酒",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/100017127/",
    "video": {
      "title": "葱姜炒蛤蜊！Green Onion and Ginger Clams! - YouTube",
      "url": "https://www.youtube.com/watch?v=JwilQHpxPe0",
      "platform": "YouTube"
    }
  },
  {
    "id": 185,
    "name": "蛤蜊蒸蛋",
    "category": "鱼虾",
    "time": 25,
    "cost": 6,
    "ingredients": "蛤蜊200g、鸡蛋100g、姜5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "蛤蜊先煮开壳并继续煮3分钟，取肉去碎壳，铺入蛋液中蒸至全凝固。",
      "蛋液加1.5倍温水，浅碗盖盘留缝；水开后中小火蒸12–18分钟至中心全凝固。含虾时虾肉也需全熟。"
    ],
    "items": [
      {
        "name": "蛤蜊",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/263012/",
    "video": {
      "title": "蛤蜊蒸蛋｜滑嫩的日式蒸蛋比例，詹姆士今天教你做！ [詹姆士/姆士流]_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/av992017820",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 186,
    "name": "冬瓜蛤蜊汤",
    "category": "鱼虾",
    "time": 25,
    "cost": 9,
    "ingredients": "蛤蜊300g、冬瓜220g、姜6g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "冬瓜先煮软，蛤蜊放入煮开壳后再煮3–5分钟，弃不开壳者。",
      "配菜煮软后再下水产；虾仁煮3–5分钟至不透明，蛤蜊开壳后继续煮3–5分钟，丢弃不开壳的。"
    ],
    "items": [
      {
        "name": "蛤蜊",
        "grams": 300.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "冬瓜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104381907/",
    "video": {
      "title": "蛤蜊冬瓜汤，潮州人夏季爱喝这款汤，鲜甜爽口，超好喝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Zt41177ab/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 187,
    "name": "蒜苔炒鱿鱼",
    "category": "鱼虾",
    "time": 20,
    "cost": 17,
    "ingredients": "鱿鱼200g、蒜苔180g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱿鱼去内脏软骨切条，蒜苔先焯熟，再与鱿鱼炒透。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "鱿鱼",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "蒜苔",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiangha.com/caipu/83627558.html",
    "video": {
      "title": "消费：19｜上班带饭的第205天 本月伙食500预算还剩：121.4r今日菜谱：蒜苔炒鱿鱼+韭菜炒鸡蛋 ·食材：鸡蛋、蒜苔、鱿鱼_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17V411K7He/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 188,
    "name": "酱爆鱿鱼",
    "category": "鱼虾",
    "time": 20,
    "cost": 18,
    "ingredients": "鱿鱼220g、洋葱150g、甜面酱12g、姜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鱿鱼清理干净焯至卷起，洋葱炒软后与鱿鱼、甜面酱合炒至熟。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "鱿鱼",
        "grams": 220.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "洋葱",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "甜面酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/236341/",
    "video": {
      "title": "今天做一道孜然酱爆鱿鱼，酱香四溢，嫩滑弹牙，儿子吃了直呼过瘾_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1wE411c7F8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 189,
    "name": "芹菜炒鱿鱼",
    "category": "鱼虾",
    "time": 20,
    "cost": 17,
    "ingredients": "鱿鱼200g、芹菜180g、姜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芹菜焯至断生，鱿鱼条煮至不透明后合炒。",
      "配菜先熟，虾仁或鱿鱼再翻炒3–5分钟至通体不透明、中心63°C；带壳虾加盖焖5–8分钟。"
    ],
    "items": [
      {
        "name": "鱿鱼",
        "grams": 200.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "芹菜",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107013762/",
    "video": {
      "title": "芹菜炒鱿鱼🦑 celery stir fried squid - YouTube",
      "url": "https://www.youtube.com/watch?v=Am_e7VlkTdE",
      "platform": "YouTube"
    }
  },
  {
    "id": 190,
    "name": "麻婆豆腐",
    "category": "牛羊肉",
    "time": 30,
    "cost": 9,
    "ingredients": "北豆腐250g、牛肉末60g、豆瓣酱8g、豆豉3g、花椒粉1g、蒜4g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐先焯水；牛肉末炒透，再加豆瓣、豆腐和水煮入味，最后薄勾芡。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "牛肉末",
        "grams": 60.0,
        "group": "肉类"
      },
      {
        "name": "豆瓣酱",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "豆豉",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "花椒粉",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/261904/",
    "video": {
      "title": "〖麻婆豆腐保姆级教程〗包教包会！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17y411z7uD/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 191,
    "name": "家常豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 4,
    "ingredients": "北豆腐250g、青椒80g、胡萝卜60g、泡发木耳40g、豆瓣酱6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐切片少油煎定形，再与配菜和酱汁焖透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 4.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107439219/",
    "video": {
      "title": "家常豆腐：大厨教你这样做，比平时做的还简单，出锅特别香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1WJ411p7Q8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 192,
    "name": "红烧豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 4,
    "ingredients": "北豆腐300g、蒜5g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐切块焯水，加调味汁小火烧入味，少翻动以免碎。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 300.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100381510/",
    "video": {
      "title": "红烧豆腐的家常做法，香嫩入味，好吃下饭，比饭店做的还香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV19b4y1t73e/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 193,
    "name": "鱼香豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 5,
    "ingredients": "北豆腐250g、泡发木耳50g、胡萝卜80g、泡椒8g、蒜5g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐煎定形，配菜炒熟后下豆腐，糖醋汁小火收浓。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "干木耳",
        "grams": 5.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "泡椒",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104316357/",
    "video": {
      "title": "一块豆腐，两个步骤，在家也能做出美味的鱼香豆腐_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1wb411c727/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 194,
    "name": "肉末豆腐",
    "category": "猪肉",
    "time": 30,
    "cost": 6,
    "ingredients": "北豆腐250g、猪肉末80g、蒜4g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉末先炒至全熟，加水与豆腐小火煮入味。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "猪肉末",
        "grams": 80.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106799122/",
    "video": {
      "title": "美食〖肉末豆腐〗做法分享_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/av20545772",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 195,
    "name": "蟹黄豆腐",
    "category": "蛋类",
    "time": 30,
    "cost": 3,
    "ingredients": "北豆腐250g、熟咸蛋黄25g、葱5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "家庭版用熟咸蛋黄压碎炒散，加水与豆腐煮匀，不另加盐。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "熟咸蛋黄",
        "grams": 25.0,
        "group": "蛋奶类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107098365/",
    "video": {
      "title": "国宴大厨郑秀生：蟹黄豆腐_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ri4y1V7z7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 196,
    "name": "锅塌豆腐",
    "category": "蛋类",
    "time": 30,
    "cost": 4,
    "ingredients": "北豆腐250g、鸡蛋50g、淀粉10g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐片沾薄淀粉再裹蛋液，煎两面后加少量水与调料焖透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鸡蛋",
        "grams": 50.0,
        "group": "蛋奶类"
      },
      {
        "name": "淀粉",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103071047/",
    "video": {
      "title": "东北老式锅塌豆腐，2层豆腐1层肉馅，就学正宗做法，老配方老味道_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1CDuXzhEgt/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 197,
    "name": "白菜炖豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 5,
    "ingredients": "白菜250g、北豆腐200g、葱10g、姜3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "先炒白菜梗，加入豆腐与清水，菜叶后下炖至软熟。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "白菜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "北豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107628666/",
    "video": {
      "title": "天一冷就想吃这样的大锅菜白菜炖豆腐，做法简单，营养又好吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1RHCdBoE2V/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 198,
    "name": "番茄豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 5,
    "ingredients": "番茄220g、北豆腐250g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄先炒出汁，再下豆腐与少量水煮入味。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "番茄",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/117193/",
    "video": {
      "title": "潮汕人的家常菜，〖番茄豆腐煲〗汤鲜味美，开胃解腻，好好吃！#潮汕美食 #番茄的做法#豆腐的各种做法 #妈呀太香了 - 抖音",
      "url": "https://www.douyin.com/video/7671936404976510452",
      "platform": "抖音"
    }
  },
  {
    "id": 199,
    "name": "香菇烧豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 6,
    "ingredients": "鲜香菇150g、北豆腐250g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香菇炒软后下豆腐，小火烧透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "鲜香菇",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106684059/",
    "video": {
      "title": "香菇焖豆腐，这是豆腐最简单又好吃的做法，又香又滑嫩，营养好味，比肉更好吃！ - YouTube",
      "url": "https://www.youtube.com/watch?v=NbmJbMLx0wc",
      "platform": "YouTube"
    }
  },
  {
    "id": 200,
    "name": "白菜粉条炖豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 5,
    "ingredients": "白菜220g、北豆腐180g、干粉条40g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "粉条提前泡软，白菜梗先煮，再放豆腐粉条，菜叶最后加入。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "白菜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "北豆腐",
        "grams": 180.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "干粉条",
        "grams": 40.0,
        "group": "谷物与粉面"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104361547/",
    "video": {
      "title": "白菜粉条炖豆腐怎么做好吃？大厨教你诀窍，鲜香入味，好吃又暖胃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12a4y1R7pY/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 201,
    "name": "客家酿豆腐",
    "category": "猪肉",
    "time": 40,
    "cost": 8,
    "ingredients": "北豆腐250g、猪肉末120g、干香菇5g、姜3g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "香菇泡发切碎拌肉馅，豆腐挖小槽填馅，煎定形后加水焖至馅熟。",
      "煎定形后加150毫升水，小火加盖焖20–25分钟，肉馅中心达到74°C，再略收汁。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 250.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "猪肉末",
        "grams": 120.0,
        "group": "肉类"
      },
      {
        "name": "干香菇",
        "grams": 5.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/257648/",
    "video": {
      "title": "梅州客家酿豆腐的详细教程，嫩滑鲜香，一看就会，在家也可以做_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1hb4y1D7Jv/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 202,
    "name": "豆腐蒸蛋",
    "category": "蛋类",
    "time": 25,
    "cost": 4,
    "ingredients": "嫩豆腐200g、鸡蛋100g、葱5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "豆腐切块铺碗底，蛋液加温水过滤后倒入，蒸至全凝固。",
      "蛋液加1.5倍温水，浅碗盖盘留缝；水开后中小火蒸12–18分钟至中心全凝固。含虾时虾肉也需全熟。"
    ],
    "items": [
      {
        "name": "嫩豆腐",
        "grams": 200.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106820748/",
    "video": {
      "title": "#不可辜负的美食# 好吃不胖的虾仁金针菇豆腐蒸蛋的教程_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1iY4y1q7xP/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 203,
    "name": "虾皮豆腐汤",
    "category": "豆制品",
    "time": 20,
    "cost": 5,
    "ingredients": "北豆腐220g、虾皮10g、小白菜150g、姜3g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐先煮，虾皮冲洗和小白菜后下，煮至全熟，少盐。",
      "加500毫升水煮开，豆腐和蔬菜煮5–8分钟至熟；有蛋液时最后缓慢淋入并煮至全凝固。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 220.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "虾皮",
        "grams": 10.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "小白菜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/103929171/",
    "video": {
      "title": "这样做的虾皮紫菜豆腐汤，汤鲜味美，做法简单，营养又好喝 - YouTube",
      "url": "https://www.youtube.com/watch?v=shefGm_AD20",
      "platform": "YouTube"
    }
  },
  {
    "id": 204,
    "name": "鲍汁豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 6,
    "ingredients": "北豆腐280g、鲍鱼汁12g、鲜香菇100g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "使用成品鲍鱼汁调味，豆腐煎定形后与香菇同烧，不冒充真鲍鱼原料。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 280.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鲍鱼汁",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "鲜香菇",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106827143/",
    "video": {
      "title": "经典热销粤菜：鲍汁豆腐制作过程_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1K9CDBhEKE/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 205,
    "name": "葱烧豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 5,
    "ingredients": "北豆腐280g、大葱80g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "葱段煎出香味，豆腐煎定形后合烧。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 280.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "大葱",
        "grams": 80.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106724182/",
    "video": {
      "title": "厨师长教你：“葱烧豆腐”的正宗做法，先收藏了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1KW411N7Dw/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 206,
    "name": "香煎豆腐",
    "category": "豆制品",
    "time": 25,
    "cost": 4,
    "ingredients": "北豆腐300g、葱10g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆腐沥干切厚片，小火煎至两面金黄，再淋少量生抽。",
      "豆腐沥干，小火每面煎4–5分钟至金黄；再淋调味料和2汤匙水煮透。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 300.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/254804/",
    "video": {
      "title": "豆腐不要直接炒，小伙教你做香煎豆腐，外酥里嫩，香辣可口，真过瘾_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1YZ4y1x7p1/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 207,
    "name": "肉末烧日本豆腐",
    "category": "猪肉",
    "time": 30,
    "cost": 7,
    "ingredients": "日本豆腐240g、猪肉末80g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "日本豆腐连包装切开取出，少油煎定形，肉末炒熟后加水烧透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "日本豆腐",
        "grams": 240.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "猪肉末",
        "grams": 80.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104595342/",
    "video": {
      "title": "大厨分享肉末日本豆腐，品相好不破碎鲜香滑嫩，简单省事轻松搞定 - YouTube",
      "url": "https://www.youtube.com/watch?v=9DcqeesnlwA",
      "platform": "YouTube"
    }
  },
  {
    "id": 208,
    "name": "香菇日本豆腐",
    "category": "豆制品",
    "time": 30,
    "cost": 8,
    "ingredients": "日本豆腐240g、鲜香菇150g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "日本豆腐切厚段轻煎，香菇炒软后加入豆腐与酱汁轻推煮透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "日本豆腐",
        "grams": 240.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鲜香菇",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106190809/",
    "video": {
      "title": "美食台 | 花菇燜玉子豆腐，簡單又精致！ - YouTube",
      "url": "https://www.youtube.com/watch?v=zFvlWi5rNrc",
      "platform": "YouTube"
    }
  },
  {
    "id": 209,
    "name": "皮蛋豆腐汤",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "北豆腐220g、皮蛋55g、小白菜120g、姜3g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "皮蛋去壳切块，和豆腐煮开后加入小白菜，全部煮熟。",
      "加500毫升水煮开，豆腐和蔬菜煮5–8分钟至熟；有蛋液时最后缓慢淋入并煮至全凝固。"
    ],
    "items": [
      {
        "name": "北豆腐",
        "grams": 220.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "皮蛋",
        "grams": 55.0,
        "group": "蛋奶类"
      },
      {
        "name": "小白菜",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-15227.html",
    "video": {
      "title": "跟着学口感丝滑的“皮蛋豆腐汤”做法，懒人也能5分钟轻松学会！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qe411276w/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 210,
    "name": "芹菜炒香干",
    "category": "豆制品",
    "time": 25,
    "cost": 5,
    "ingredients": "芹菜200g、香干150g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芹菜去老筋，香干切条，先炒香干再放芹菜至熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "芹菜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "香干",
        "grams": 150.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106436093/",
    "video": {
      "title": "低脂低卡的家常小炒芹菜炒香干，营养又健康，做法很简单_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Pp4y1H7Ne/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 211,
    "name": "青椒炒香干",
    "category": "豆制品",
    "time": 25,
    "cost": 5,
    "ingredients": "青椒180g、香干150g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香干青椒切条，翻炒并加少量水焖至熟透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "青椒",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "香干",
        "grams": 150.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104764070/",
    "video": {
      "title": "青椒炒香干最新做法，少说三碗饭，简单又美味 - YouTube",
      "url": "https://www.youtube.com/watch?v=sF_Pli854o0",
      "platform": "YouTube"
    }
  },
  {
    "id": 212,
    "name": "蒜苗炒香干",
    "category": "豆制品",
    "time": 25,
    "cost": 5,
    "ingredients": "蒜苗180g、香干150g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蒜苗白色部分先下，香干炒热后再下蒜苗叶炒熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "蒜苗",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "香干",
        "grams": 150.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106651095/",
    "video": {
      "title": "蒜苗炒香干，简单美味8分钟出锅，豆干吃得比肉香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1gv411a7z9/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 213,
    "name": "韭菜炒香干",
    "category": "豆制品",
    "time": 25,
    "cost": 4,
    "ingredients": "韭菜180g、香干150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香干先炒热，韭菜后下炒至断生。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "韭菜",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "香干",
        "grams": 150.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/105877412/",
    "video": {
      "title": "厨师长教你：“韭菜炒香干”的做法，开胃下饭，家常快手菜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1MP4y1Y7gs/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 214,
    "name": "肉丝炒香干",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "猪瘦肉130g、香干150g、青椒80g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "肉丝炒至全熟，再加入香干与青椒炒透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "猪瘦肉",
        "grams": 130.0,
        "group": "肉类"
      },
      {
        "name": "香干",
        "grams": 150.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103677309/",
    "video": {
      "title": "来给我的55位粉丝分享家常菜第三集啦～ 肉丝炒香干，嫩嫩的肉丝配着软软的香干，裹满鲜浓汤汁😍 汤汁拌饭特别香，吃着超满🤩🤩 #真实生活分享计划 #家常菜 - 抖音",
      "url": "https://www.douyin.com/video/7680357520276559977",
      "platform": "抖音"
    }
  },
  {
    "id": 215,
    "name": "五香卤豆干",
    "category": "豆制品",
    "time": 40,
    "cost": 5,
    "ingredients": "白豆干280g、八角1g、桂皮1g、香叶1g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆干划浅刀，与香料酱汁小火卤煮后关火浸泡入味。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "豆干加水没过，放调料小火煮25分钟，再关火浸泡10分钟入味。"
    ],
    "items": [
      {
        "name": "白豆干",
        "grams": 280.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "八角",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "桂皮",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "香叶",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/268762/",
    "video": {
      "title": "五香卤豆干Spiced Braised Tofu - YouTube",
      "url": "https://www.youtube.com/watch?v=RFhweSVe610",
      "platform": "YouTube"
    }
  },
  {
    "id": 216,
    "name": "腐竹烧香菇",
    "category": "豆制品",
    "time": 30,
    "cost": 6,
    "ingredients": "干腐竹50g、鲜香菇150g、胡萝卜80g、蒜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "腐竹冷水泡软沥干，香菇炒软后加腐竹炖透。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "干腐竹",
        "grams": 50.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "鲜香菇",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102125564/",
    "video": {
      "title": "新鲜香菇和腐竹这样做太香啦，上桌就被夹光，太解馋了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1sT4y137p7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 217,
    "name": "腐竹炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 8,
    "ingredients": "干腐竹45g、猪瘦肉140g、青椒80g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "腐竹泡软焯熟；肉片炒熟后加入腐竹与青椒炒透。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "干腐竹",
        "grams": 45.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "猪瘦肉",
        "grams": 140.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106983570/",
    "video": {
      "title": "今天吃超级下饭的腐竹炒肉！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1tQBXYYEd4/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 218,
    "name": "木耳炒腐竹",
    "category": "豆制品",
    "time": 25,
    "cost": 3,
    "ingredients": "干腐竹50g、干木耳8g、青椒100g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "腐竹木耳分别短时泡发，先焯熟，再与青椒合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "干腐竹",
        "grams": 50.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "干木耳",
        "grams": 8.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106980846/",
    "video": {
      "title": "鲜香入味超下饭｜懒人版素三鲜 ｜ 香菇黑木耳炒腐竹 都是素菜也能做出饭店的风味？简单快速又好吃，老少皆宜，快收藏！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1y8411y7AJ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 219,
    "name": "腐竹焖牛腩",
    "category": "牛羊肉",
    "time": 100,
    "cost": 19,
    "ingredients": "牛腩180g、干腐竹45g、姜5g、食用油5g、生抽6g、老抽2g、白糖3g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "牛腩炖软后加入泡软的腐竹，再焖10分钟。用所列生抽、老抽、糖调味；含咸酱时减盐。",
      "肉先小火炖60–70分钟，再依上一步放配菜炖20分钟至软烂；不够软继续炖，缺水补热水。"
    ],
    "items": [
      {
        "name": "牛腩",
        "grams": 180.0,
        "group": "肉类"
      },
      {
        "name": "干腐竹",
        "grams": 45.0,
        "group": "豆制品与豆类"
      },
      {
        "name": "姜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104052277/",
    "video": {
      "title": "为家人做100道下饭菜！冬日必备菜品，腐竹焖牛腩！〖粤语食谱〗_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1xV4y137b8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 220,
    "name": "番茄炒蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "番茄250g、鸡蛋150g、葱5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋炒至凝固盛出；番茄炒出汁后回锅鸡蛋，炒匀。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "番茄",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1012917/",
    "video": {
      "url": "https://www.bilibili.com/video/BV1uY8vzkEmx/",
      "title": "番茄炒蛋 | 有锅就能做、黄金比例被我拿捏了！",
      "platform": "哔哩哔哩",
      "embed": true,
      "published": "2025-07-27",
      "author": "何时下厨"
    }
  },
  {
    "id": 221,
    "name": "韭菜炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "韭菜180g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "韭菜切段，先炒鸡蛋，再下韭菜至断生，蛋液需全部凝固。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "韭菜",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106614890/",
    "video": {
      "title": "韭菜炒鸡蛋想要鲜香脆嫩出汤少，只要用对两种调料，教你正确做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1su4m1P75j/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 222,
    "name": "青椒炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "青椒180g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "青椒先炒断生，再倒蛋液，翻炒至全凝固。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "青椒",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104619326/",
    "video": {
      "title": "厨师长教你：“青椒炒鸡蛋”的家常做法，味道非常赞_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1rs411n7kF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 223,
    "name": "洋葱炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "洋葱200g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "洋葱先炒软，再回锅炒熟的鸡蛋。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "洋葱",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106733530/",
    "video": {
      "title": "饭店里的洋葱炒鸡蛋怎么做？大厨教你一招，家常小炒，简单美味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ZM4y1f7LL/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 224,
    "name": "苦瓜炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "苦瓜200g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "苦瓜去瓤切薄片焯水，炒至断生后倒蛋液炒熟。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "苦瓜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106829685/",
    "video": {
      "title": "苦瓜炒鸡蛋，关键这一步，吃起来不苦，还清淡爽口_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17p411Z7eW/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 225,
    "name": "丝瓜炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "丝瓜220g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋先炒熟盛出，丝瓜去皮炒软后合炒；异常苦味丝瓜弃用。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "丝瓜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107619091/",
    "video": {
      "title": "丝瓜炒鸡蛋这种做法太好吃了，清淡不油腻，丝瓜颜色翠绿不发黑#美食製作 #美食教程 #家庭菜 #家常菜 - YouTube",
      "url": "https://www.youtube.com/watch?v=RzvrHvNJ-rE",
      "platform": "YouTube"
    }
  },
  {
    "id": 226,
    "name": "黄瓜炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "黄瓜200g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋炒熟盛出，再炒黄瓜片，回锅鸡蛋炒匀。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "黄瓜",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1014130/",
    "video": {
      "title": "黄瓜炒鸡蛋的家常做法，简单快手菜，想不到如此爽口_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ve4y1A7yT/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 227,
    "name": "木耳炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "干木耳10g、鸡蛋150g、青椒80g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "木耳短时泡发洗净焯熟，鸡蛋炒熟后与木耳青椒合炒。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "干木耳",
        "grams": 10.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106480902/",
    "video": {
      "title": "木耳炒鸡蛋这种做法火爆了，我家天天吃都不腻，味道好又下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1c81GBnEv1/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 228,
    "name": "秋葵炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "秋葵180g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "秋葵先整根焯水，再切片；与鸡蛋炒至全熟。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "秋葵",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107257778/",
    "video": {
      "title": "简单又美味的秋葵炒鸡蛋_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12P411H7r5/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 229,
    "name": "香椿炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 7,
    "ingredients": "香椿80g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "香椿沸水焯1分钟后沥干切碎，拌蛋液炒至全熟。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "香椿",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107094776/",
    "video": {
      "title": "香椿炒鸡蛋到底要不要焯水？教你正确做法，鲜香嫩滑，吃着放心_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1aT411q7Yc/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 230,
    "name": "黄花菜炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "干黄花菜25g、鸡蛋150g、葱5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "只用干黄花菜，泡发洗净焯熟后与鸡蛋合炒，不用未经处理的鲜黄花菜。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "干黄花菜",
        "grams": 25.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106982526/",
    "video": {
      "title": "一道用肉不换的美味，做法确如此简单，黄花菜炒鸡蛋。 - YouTube",
      "url": "https://www.youtube.com/watch?v=_QFgB_g-ajk",
      "platform": "YouTube"
    }
  },
  {
    "id": 231,
    "name": "鱼香鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 6,
    "ingredients": "鸡蛋150g、胡萝卜80g、泡发木耳50g、青椒80g、泡椒8g、蒜4g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋先炒熟，配菜炒熟后加鱼香汁，回锅鸡蛋裹匀。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "胡萝卜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 5.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "泡椒",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/20624/",
    "video": {
      "title": "〖大学生暑假指导〗鱼香鸡蛋（私教级）_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1GS421d7Ub/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 232,
    "name": "虎皮鸡蛋",
    "category": "蛋类",
    "time": 30,
    "cost": 4,
    "ingredients": "鸡蛋200g、姜4g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋煮熟去壳擦干，划浅刀后少油煎皱表皮，加调味汁焖透。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "鸡蛋",
        "grams": 200.0,
        "group": "蛋奶类"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104760938/",
    "video": {
      "title": "家常虎皮鸡蛋的做法，一煮二炸三炖，鸡蛋咸香入味，饭店很难吃到_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1yT4y1M7yb/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 233,
    "name": "韭黄炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 4,
    "ingredients": "韭黄180g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋炒凝固后加入韭黄段，翻炒至断生。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "韭黄",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102774772/",
    "video": {
      "title": "大厨教你韭黄炒鸡蛋的正确做法，鸡蛋鲜嫩，韭黄不出水_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1rC4y1s7mF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 234,
    "name": "西红柿鸡蛋汤",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "番茄250g、鸡蛋100g、葱5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄炒软加水煮开，缓慢淋入蛋液，待凝固后轻搅。",
      "加500毫升水煮开，豆腐和蔬菜煮5–8分钟至熟；有蛋液时最后缓慢淋入并煮至全凝固。"
    ],
    "items": [
      {
        "name": "番茄",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "葱",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102286229/",
    "video": {
      "title": "西红柿鸡蛋汤家常的做法！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1PQ4y1a7wN/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 235,
    "name": "地三鲜",
    "category": "蔬菜",
    "time": 25,
    "cost": 5,
    "ingredients": "土豆150g、茄子150g、青椒100g、蒜6g、淀粉4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "家庭少油版：土豆先蒸熟，茄子少油煎软，与青椒合炒后薄勾芡。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "土豆",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "茄子",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103497936/",
    "video": {
      "title": "厨师长教你一道北方菜：“地三鲜”的家常做法，味道很赞_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1iW411N7CY/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 236,
    "name": "鱼香茄子",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "茄子300g、泡椒10g、蒜6g、姜4g、食用油5g、生抽6g、米醋8g、白糖5g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "茄子先蒸至软，锅中炒香泡椒蒜姜，加入茄子和鱼香汁收浓。将所列糖、醋与30毫升水调汁，淀粉另用20毫升冷水调开，收汁时加入。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "茄子",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "泡椒",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/102887155/",
    "video": {
      "title": "厨师长教你：“少油型鱼香茄子”的做法，快收藏了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Hs411j7Tn/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 237,
    "name": "肉末茄子",
    "category": "猪肉",
    "time": 30,
    "cost": 7,
    "ingredients": "茄子280g、猪肉末80g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "茄子先蒸软；肉末炒熟后加茄子与少量水烧入味。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "茄子",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 80.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100000564/",
    "video": {
      "title": "肉末茄子的家常做法，茄子软糯滑口，咸鲜味美又非常下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ut4y1U7id/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 238,
    "name": "蒜蓉蒸茄子",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "茄子300g、蒜15g、生抽6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "茄子切长条铺盘，上汽蒸软，再铺熟蒜蓉与生抽。",
      "蒸锅上汽后中火蒸15–20分钟至食材全熟；南瓜、茄子切小块，蒜蓉先少油炒熟再铺上。"
    ],
    "items": [
      {
        "name": "茄子",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1074839/",
    "video": {
      "title": "分享一道蒜蓉蒸茄子，非常好吃的一道家常菜，做法简单味道棒,美食,美味食谱,好看视频",
      "url": "https://haokan.baidu.com/v?pd=wisenatural&vid=2287171917819962305",
      "platform": "好看视频"
    }
  },
  {
    "id": 239,
    "name": "酱烧茄子",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "茄子300g、黄豆酱12g、蒜6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "茄子先蒸软，蒜与酱炒香后加入茄子，略烧入味。",
      "按上一步煎炒处理后加100毫升水，小火煮8–10分钟入味；有肉末须先炒全熟。需要勾芡时淀粉用冷水调开再加入。"
    ],
    "items": [
      {
        "name": "茄子",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黄豆酱",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100282227/",
    "video": {
      "title": "酱烧茄子 天津人也叫它素烧茄子_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ey4y1v7c2/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 240,
    "name": "茄子炖土豆",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "茄子180g、土豆180g、青椒60g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "土豆先加水炖10分钟，再放茄子炖10分钟，青椒最后加入。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "茄子",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106976093/",
    "video": {
      "title": "东北茄子炖土豆_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1zu4y1Z7C5/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 241,
    "name": "虎皮青椒",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "青椒280g、蒜6g、米醋6g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "青椒去籽擦干，小火少油慢煎起皱，再加蒜和调味汁煮匀。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "青椒",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106452161/",
    "video": {
      "title": "你真会做虎皮青椒吗？川菜师傅教你2种虎皮青椒的做法，干货_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV19k4y1P7GK/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 242,
    "name": "酸辣土豆丝",
    "category": "蔬菜",
    "time": 25,
    "cost": 5,
    "ingredients": "土豆300g、青椒60g、干辣椒2g、米醋8g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "土豆切细丝清洗淀粉，热锅炒至熟而略脆，再加醋。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "土豆",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/37746/",
    "video": {
      "title": "我做的“酸辣土豆丝”很好吃！步骤清晰详细、做法易学接地气_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV16Z4y1r7MT/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 243,
    "name": "醋溜土豆丝",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "土豆300g、葱10g、米醋8g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "土豆丝冲洗沥干，炒至断生熟透后沿锅边加醋。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "土豆",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103895887/",
    "video": {
      "title": "当你想吃“醋溜土豆丝”就把这部视频翻出来_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1UhMMzkEqi/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 244,
    "name": "干锅土豆片",
    "category": "蔬菜",
    "time": 25,
    "cost": 5,
    "ingredients": "土豆280g、洋葱80g、青椒60g、豆瓣酱6g、蒜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "土豆薄片先焯至基本熟，再少油煎香，与洋葱青椒合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "土豆",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "洋葱",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/101790129/",
    "video": {
      "title": "酒店大厨教你：“干锅土豆片”的做法，操作简单，好吃又好做_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17741127RE/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 245,
    "name": "土豆炖豆角",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "土豆180g、四季豆220g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "豆角切段与土豆一起加水焖，至少沸腾煮15分钟至无生硬口感。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "土豆",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "四季豆",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/1060130/",
    "video": {
      "title": "东北菜土豆炖豆角跟老妈学的做法，简单不说真好吃，家的味道_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1TJ411i7E2/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 246,
    "name": "干煸四季豆",
    "category": "猪肉",
    "time": 25,
    "cost": 6,
    "ingredients": "四季豆300g、猪肉末50g、芽菜15g、蒜5g、干辣椒2g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "四季豆先煮至全熟再煸去水分，肉末芽菜炒香后合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "四季豆",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 50.0,
        "group": "肉类"
      },
      {
        "name": "芽菜",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107187813/",
    "video": {
      "title": "厨师长教你：“干煸四季豆”的正宗做法，先收藏了_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1nW411A7SY/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 247,
    "name": "肉末四季豆",
    "category": "猪肉",
    "time": 25,
    "cost": 7,
    "ingredients": "四季豆280g、猪肉末80g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "四季豆切小段先煮熟，肉末炒透后合炒，不以颜色变绿判断熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "四季豆",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪肉末",
        "grams": 80.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100346358/",
    "video": {
      "title": "榄菜肉末四季豆 | 可馋下厨房 | 配米饭真的一绝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV13K4y1a7na/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 248,
    "name": "橄榄菜四季豆",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "四季豆300g、橄榄菜20g、蒜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "四季豆先煮熟，再与橄榄菜蒜末合炒，橄榄菜含盐少加调味。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "四季豆",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "橄榄菜",
        "grams": 20.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106399195/",
    "video": {
      "title": "〖叶子的简单美食〗橄榄菜四季豆 -Eng Sub- Stir-fry French Beans with Olive Vege_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1H9HXePE8X/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 249,
    "name": "蒜蓉西兰花",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "西兰花300g、蒜12g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西兰花小朵先沸水焯3–4分钟，再与蒜末快炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "西兰花",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107651597/",
    "video": {
      "title": "蒜蓉西兰花，做法简单，味道鲜美，好吃又下饭！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1myRhY1EJF/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 250,
    "name": "清炒西兰花",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "西兰花300g、胡萝卜50g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西兰花与胡萝卜片焯至熟后少油翻炒，不另加蒜蓉。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "西兰花",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106642307/",
    "video": {
      "title": "最好的减脂菜清炒西兰花，简单清淡营养又美味！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1fKvaB3EhB/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 251,
    "name": "西兰花炒胡萝卜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "西兰花220g、胡萝卜150g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "胡萝卜切薄片与西兰花分别焯熟，再合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "西兰花",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 150.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/101759229/",
    "video": {
      "title": "西兰花炒胡萝卜，做法简单，小孩都爱吃又营养_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1jK4y1U7MA/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 252,
    "name": "清炒菜花",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "菜花300g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "菜花掰小朵，焯至基本熟后翻炒，加少量水焖透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "菜花",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107619049/",
    "video": {
      "title": "素炒菜花是我家常吃的一道菜，菜花直接炒清香好吃，营养不流失。_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Q341167vR/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 253,
    "name": "干锅花菜",
    "category": "猪肉",
    "time": 25,
    "cost": 6,
    "ingredients": "菜花280g、五花肉50g、青椒80g、豆瓣酱6g、蒜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "花菜先焯至基本熟，肉片煸熟后与花菜、青椒合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "菜花",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "五花肉",
        "grams": 50.0,
        "group": "肉类"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豆瓣酱",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104109240/",
    "video": {
      "title": "〖干锅花菜〗一招万能的蔬菜做法_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1kx411D7V8/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 254,
    "name": "番茄菜花",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "番茄200g、菜花250g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "番茄炒出汁，加焯过的菜花与少量水焖熟。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "番茄",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "菜花",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/44795/",
    "video": {
      "title": "国宴级别的番茄菜花，做法简单易学，开胃下饭，清脆爽口【食在小厨】 - YouTube",
      "url": "https://www.youtube.com/watch?v=1ohHNSzaxOo",
      "platform": "YouTube"
    }
  },
  {
    "id": 255,
    "name": "手撕包菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "包菜300g、蒜6g、干辣椒2g、米醋4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "包菜手撕沥干，先炒蒜辣椒，再下包菜炒至梗部熟透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "包菜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106696635/",
    "video": {
      "title": "大厨教你，手撕包菜的家常做法，爽脆可口好下饭_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV17f4y1k7T7/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 256,
    "name": "醋溜白菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "白菜350g、蒜5g、米醋8g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "白菜梗叶分开，先炒梗再放叶，炒熟后沿锅边加醋。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "白菜",
        "grams": 350.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104285721/",
    "video": {
      "title": "家常醋溜白菜做法、开胃酸爽、简单易学。@小彪美食_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV16x411b71x",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 257,
    "name": "白菜炖粉条",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "白菜300g、干粉条45g、葱10g、姜3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "粉条提前泡软，白菜梗先煮，粉条和菜叶后下，炖至全熟。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "白菜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干粉条",
        "grams": 45.0,
        "group": "谷物与粉面"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "姜",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106424757/",
    "video": {
      "title": "猪肉白菜炖粉条，老师傅教正宗做法，技巧真不少，学地道东北炖菜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1UD4y1c7Hu/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 258,
    "name": "上汤娃娃菜",
    "category": "猪肉",
    "time": 20,
    "cost": 6,
    "ingredients": "娃娃菜300g、皮蛋55g、火腿30g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "蒜炒香，加水与皮蛋火腿煮开，放娃娃菜煮至熟软。",
      "加500毫升水煮开，豆腐和蔬菜煮5–8分钟至熟；有蛋液时最后缓慢淋入并煮至全凝固。"
    ],
    "items": [
      {
        "name": "娃娃菜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "皮蛋",
        "grams": 55.0,
        "group": "蛋奶类"
      },
      {
        "name": "火腿",
        "grams": 30.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100436949/",
    "video": {
      "title": "上海妈妈教你“上汤娃娃菜”家常做法，鲜美入味，食材丰富！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1vE411k7k4/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 259,
    "name": "蒜蓉粉丝娃娃菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "娃娃菜250g、干粉丝35g、蒜15g、生抽8g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。先备好蒸锅与浅盘，水开后再上锅。",
      "粉丝温水泡软垫底，摆娃娃菜和熟蒜蓉，加少量水蒸透。",
      "蒸锅上汽后中火蒸15–20分钟至食材全熟；南瓜、茄子切小块，蒜蓉先少油炒熟再铺上。"
    ],
    "items": [
      {
        "name": "娃娃菜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干粉丝",
        "grams": 35.0,
        "group": "谷物与粉面"
      },
      {
        "name": "蒜",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107283446/",
    "video": {
      "title": "蒜蓉粉丝娃娃菜，包括蒜蓉做法，简单海鲜汁原理_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1KL411K7ee/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 260,
    "name": "香菇油菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "油菜250g、鲜香菇120g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "油菜焯熟沥干，香菇炒软加少量水焖透后合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "油菜",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鲜香菇",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106502264/",
    "video": {
      "title": "大亮分享“香菇油菜”做法，蒜香美味，清淡可口，喜欢收藏_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Vt4y1k7Zk/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 261,
    "name": "蚝油生菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "生菜300g、蒜8g、蚝油8g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "生菜沸水焯至断生，蒜和蚝油加少量水煮开淋上。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "生菜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蚝油",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/103807282/",
    "video": {
      "title": "厨师长教你：“蚝油生菜”的家常做法，爽脆鲜嫩，简单易做_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1bS4y1r7jR/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 262,
    "name": "蒜蓉空心菜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "空心菜300g、蒜12g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "空心菜择洗沥干，蒜末炒香后先下梗再下叶，全炒熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "空心菜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107129117/",
    "video": {
      "title": "厨师长教清炒、炝炒和蒜蓉空心菜的区别，不发黑不发黄，还不出水_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1HE411b7Wp/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 263,
    "name": "清炒莴笋",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "莴笋300g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "莴笋去皮切薄片，翻炒至熟透仍有脆感。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莴笋",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/105881858/",
    "video": {
      "title": "上海妈妈教你做清脆爽口的“清炒莴笋丝”，营养美味，制作简单！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qK411H7RL/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 264,
    "name": "莴笋炒木耳",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "莴笋250g、干木耳8g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "木耳短时泡发洗净焯熟，再与莴笋薄片合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莴笋",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 8.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/105969315/",
    "video": {
      "title": "纯素家常菜「莴笋炒木耳」清香爽口，简单美味_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1bVGizYEg9/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 265,
    "name": "荷塘小炒",
    "category": "蔬菜",
    "time": 25,
    "cost": 5,
    "ingredients": "莲藕120g、荷兰豆120g、胡萝卜60g、干木耳5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "莲藕胡萝卜切薄片，木耳泡发，与荷兰豆分别焯熟后合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莲藕",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "荷兰豆",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 5.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107098586/",
    "video": {
      "title": "〖荷塘小炒〗的做法，荷兰豆最好先焯水，直接炒不太好熟_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1sx411n7ao/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 266,
    "name": "清炒藕片",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "莲藕300g、葱10g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "藕切薄片用清水冲洗，先焯至熟，再清炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莲藕",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107377433/",
    "video": {
      "title": "地道清炒藕片的做法，清脆爽口不发黑，一盘没够吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ja4y1j7VQ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 267,
    "name": "酸辣藕丁",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "莲藕280g、青椒60g、干辣椒2g、米醋8g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "藕切小丁先煮熟沥干，再炒入椒蒜与醋。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莲藕",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "米醋",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104032592/",
    "video": {
      "title": "不到5元的酸辣藕丁，老公忍不住都要喝两杯，脆爽又入味！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1gY411z7wf/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 268,
    "name": "莲藕炒肉片",
    "category": "猪肉",
    "time": 25,
    "cost": 10,
    "ingredients": "莲藕200g、猪瘦肉150g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "莲藕薄片先焯熟，肉片炒熟后合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "莲藕",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107200992/",
    "video": {
      "title": "莲藕炒肉片这样做又简单即好吃 - YouTube",
      "url": "https://www.youtube.com/watch?v=uQbE-1zQuW0",
      "platform": "YouTube"
    }
  },
  {
    "id": 269,
    "name": "干煸藕丝",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "莲藕300g、芹菜60g、干辣椒3g、蒜5g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "藕切细条先焯熟沥干，少油煎至微黄，与芹菜椒蒜炒匀。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "莲藕",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "芹菜",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干辣椒",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107002424/",
    "video": {
      "title": "莲藕这样做，焦香酥脆，比吃薯条还过瘾，楚菜大厨教你做干煸藕丝！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1mt41127Xw/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 270,
    "name": "清炒山药",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "山药280g、胡萝卜50g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "山药去皮切薄片先焯熟，和胡萝卜片少油炒匀。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "山药",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 50.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104706924/",
    "video": {
      "title": "清炒山药的做法 - YouTube",
      "url": "https://www.youtube.com/watch?v=IZ7m72dksOs",
      "platform": "YouTube"
    }
  },
  {
    "id": 271,
    "name": "木耳炒山药",
    "category": "蔬菜",
    "time": 25,
    "cost": 6,
    "ingredients": "山药250g、干木耳8g、胡萝卜60g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "木耳短时泡发，山药和胡萝卜切片，分别焯熟后合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "山药",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 8.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "胡萝卜",
        "grams": 60.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107581595/",
    "video": {
      "title": "春季要多吃木耳炒山药，脆嫩爽口，清淡解腻又营养，全家人都爱吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1WF411t7Wp/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 272,
    "name": "山药炒肉片",
    "category": "猪肉",
    "time": 25,
    "cost": 11,
    "ingredients": "山药200g、猪瘦肉150g、蒜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "山药薄片先焯熟，肉片炒至全熟后合炒。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "山药",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106812372/",
    "video": {
      "title": "【美食强】“山药炒肉片”的家常做法、肉片嫩、山药脆爽不发黑、靠谱又实用 - YouTube",
      "url": "https://www.youtube.com/watch?v=DZ2DpsryNuk",
      "platform": "YouTube"
    }
  },
  {
    "id": 273,
    "name": "蒜蓉南瓜",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "南瓜300g、蒜12g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "南瓜去籽切小块，蒜炒香后加南瓜与少量水焖至熟软。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "南瓜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-7553.html",
    "video": {
      "title": "水焖蒜蓉南瓜这样做，比水煮更有味，比爆炒的更香，#美食家常菜 #南瓜的新吃法# - 抖音",
      "url": "https://www.douyin.com/video/7685020957710361855",
      "platform": "抖音"
    }
  },
  {
    "id": 274,
    "name": "咸蛋黄焗南瓜",
    "category": "蛋类",
    "time": 25,
    "cost": 4,
    "ingredients": "南瓜300g、熟咸蛋黄25g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "南瓜先蒸熟沥水，咸蛋黄少油炒散，加入南瓜轻翻裹匀，不再加盐。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "南瓜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "熟咸蛋黄",
        "grams": 25.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106882632/",
    "video": {
      "title": "咸蛋黄焗南瓜，简单易做不用油炸，味道还很不错_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1qA411v7Xb/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 275,
    "name": "清蒸南瓜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "南瓜350g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "南瓜去籽切小块，上汽后蒸至筷子能轻松扎透。",
      "蒸锅上汽后中火蒸15–20分钟至食材全熟；南瓜、茄子切小块，蒜蓉先少油炒熟再铺上。"
    ],
    "items": [
      {
        "name": "南瓜",
        "grams": 350,
        "group": "蔬菜与菌菇"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100409753/",
    "video": {
      "title": "清蒸南瓜 - YouTube",
      "url": "https://www.youtube.com/watch?v=OC8KFxBABwI",
      "platform": "YouTube"
    }
  },
  {
    "id": 276,
    "name": "红烧冬瓜",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "冬瓜350g、蒜5g、葱10g、老抽2g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "冬瓜去皮瓤切块，煎出浅色后加水和调味汁焖软。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "冬瓜",
        "grams": 350.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "老抽",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/23410/",
    "video": {
      "title": "红烧冬瓜的家常做法，鲜香入味，一周吃8次都不腻，比吃肉还香_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1bS4y1k7bk",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 277,
    "name": "蚝油冬瓜",
    "category": "蔬菜",
    "time": 30,
    "cost": 5,
    "ingredients": "冬瓜350g、蚝油10g、蒜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "冬瓜炒后加少量水焖软，蚝油最后加入收匀。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "冬瓜",
        "grams": 350.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蚝油",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-538324.html",
    "video": {
      "title": "【彬彬有院】食•263家常海米蚝油冬瓜方 - YouTube",
      "url": "https://www.youtube.com/watch?v=k7PLChLcj3w",
      "platform": "YouTube"
    }
  },
  {
    "id": 278,
    "name": "冬瓜海带汤",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "冬瓜300g、泡发海带120g、姜4g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "海带先煮15分钟，冬瓜后下煮至透明软熟。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "冬瓜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干海带",
        "grams": 14.4,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/106166070/",
    "video": {
      "title": "冬瓜海带汤，立夏的第一碗养生靓汤，真的好好喝_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV19s4y1u73p/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 279,
    "name": "虾皮冬瓜汤",
    "category": "蔬菜",
    "time": 20,
    "cost": 5,
    "ingredients": "冬瓜300g、虾皮12g、姜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "虾皮冲洗，冬瓜薄片与姜先煮软，加入虾皮再煮开。",
      "加500毫升水煮开，豆腐和蔬菜煮5–8分钟至熟；有蛋液时最后缓慢淋入并煮至全凝固。"
    ],
    "items": [
      {
        "name": "冬瓜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "虾皮",
        "grams": 12.0,
        "group": "鱼虾海鲜"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/103938849/",
    "video": {
      "title": "为什么广东人做虾皮冬瓜汤那么好喝？原来有技巧，汤鲜味美营养又好喝#冬瓜 #美食教程 - YouTube",
      "url": "https://www.youtube.com/watch?v=NNOhCpjfTSc",
      "platform": "YouTube"
    }
  },
  {
    "id": 280,
    "name": "蚝油杏鲍菇",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "杏鲍菇300g、蚝油10g、蒜5g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "杏鲍菇切片煎至出水变软，再加蚝油与少量水煮透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "杏鲍菇",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蚝油",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107008569/",
    "video": {
      "title": "厨师长教您蚝油杏鲍菇的做法，步骤详细，口感嫩滑劲道，比肉还香 - YouTube",
      "url": "https://www.youtube.com/watch?v=2rh7mg82YbY",
      "platform": "YouTube"
    }
  },
  {
    "id": 281,
    "name": "手撕杏鲍菇",
    "category": "蔬菜",
    "time": 25,
    "cost": 5,
    "ingredients": "杏鲍菇300g、青椒80g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "杏鲍菇撕细条，炒至水分减少后加青椒，全部炒熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "杏鲍菇",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "青椒",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100021799/",
    "video": {
      "title": "减脂期馋烧烤，这个手撕杏鲍菇做法，好吃没负担！#杏鲍菇的神仙吃法 #减脂人的一日三餐 #快手早餐 #简餐_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1gfCsBwEhM/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 282,
    "name": "香煎杏鲍菇",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "杏鲍菇300g、黑胡椒1g、生抽6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "杏鲍菇切厚片划浅刀，少油慢煎两面，加少量水焖熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "杏鲍菇",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "黑胡椒",
        "grams": 1.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107127858/",
    "video": {
      "title": "香煎杏鲍菇，简单家常料理，5分钟轻松上桌！_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1FV41137ZQ/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 283,
    "name": "素炒口蘑",
    "category": "蔬菜",
    "time": 25,
    "cost": 10,
    "ingredients": "口蘑300g、蒜5g、葱10g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "口蘑洗净切片，炒至出水后继续煮至完全熟透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "口蘑",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/107591368/",
    "video": {
      "title": "素炒鲜口蘑 How to make Sauteed Mushroom 迷迭香 Chinese Food Recipes - YouTube",
      "url": "https://www.youtube.com/watch?v=Cro0D26wO-k",
      "platform": "YouTube"
    }
  },
  {
    "id": 284,
    "name": "蒜蓉金针菇",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "金针菇250g、蒜15g、生抽8g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。先备好蒸锅与浅盘，水开后再上锅。",
      "金针菇去根洗净拆散，铺熟蒜蓉，上汽后蒸至全熟。",
      "蒸锅上汽后中火蒸15–20分钟至食材全熟；南瓜、茄子切小块，蒜蓉先少油炒熟再铺上。"
    ],
    "items": [
      {
        "name": "金针菇",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 15.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/104654341/",
    "video": {
      "title": "大厨教你蒜蓉金针菇做法3分钟就学会鲜香滑嫩开胃又下饭 - YouTube",
      "url": "https://www.youtube.com/watch?v=9n05Or6f-oM",
      "platform": "YouTube"
    }
  },
  {
    "id": 285,
    "name": "油焖笋",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "熟笋片300g、葱10g、白糖3g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "使用焯熟春笋，少油炒香后加水和酱油焖入味。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "熟笋片",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "白糖",
        "grams": 3.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/101719137/",
    "video": {
      "title": "油焖笋可能是春天不能少的时鲜~爽脆好吃，做法特别简单记得收藏_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1ir4y1i734",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 286,
    "name": "雪菜炒冬笋",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "熟笋片250g、雪菜80g、蒜4g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "雪菜冲洗切碎，熟笋片切丝，炒香后少量水焖透，少盐。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "熟笋片",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "雪菜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-160121.html",
    "video": {
      "title": "20140218 天天饮食 雪菜炒冬笋 - YouTube",
      "url": "https://www.youtube.com/watch?v=kvrMOwxoYek",
      "platform": "YouTube"
    }
  },
  {
    "id": 287,
    "name": "茭白炒毛豆",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "茭白220g、毛豆120g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "毛豆先沸水煮8–10分钟至熟，再与茭白丝炒透。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "茭白",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "毛豆",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104688806/",
    "video": {
      "title": "茭白炒毛豆 Water Bamboo with Edamame - YouTube",
      "url": "https://www.youtube.com/watch?v=yCSYp8WF_rM",
      "platform": "YouTube"
    }
  },
  {
    "id": 288,
    "name": "雪菜炒毛豆",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "毛豆220g、雪菜80g、蒜4g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "毛豆先煮熟，雪菜冲洗炒香后合炒，不另多加盐。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "毛豆",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "雪菜",
        "grams": 80.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/33997/",
    "video": {
      "title": "上海经典开胃小菜雪菜炒毛豆，咸鲜开胃，超级下饭，天天吃不腻 - YouTube",
      "url": "https://www.youtube.com/watch?v=05DJk58hWZ0",
      "platform": "YouTube"
    }
  },
  {
    "id": 289,
    "name": "清炒西葫芦",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "西葫芦300g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "西葫芦切片，蒜炒香后翻炒至熟；异常苦味瓜弃用。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "西葫芦",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106942275/",
    "video": {
      "title": "【清炒西葫芦】清爽好吃的西葫芦 做法超简单~[Stir-fried zucchini] Fresh and delicious zucchini practice is super simple - YouTube",
      "url": "https://www.youtube.com/watch?v=sOX16AcgcYw",
      "platform": "YouTube"
    }
  },
  {
    "id": 290,
    "name": "西葫芦炒鸡蛋",
    "category": "蛋类",
    "time": 20,
    "cost": 5,
    "ingredients": "西葫芦220g、鸡蛋150g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "鸡蛋先炒熟盛出，西葫芦炒熟后回锅鸡蛋。",
      "鸡蛋炒至全凝固无流动蛋液，蔬菜也需断生；肉虾等配料先炒全熟，再与鸡蛋合炒。"
    ],
    "items": [
      {
        "name": "西葫芦",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 150.0,
        "group": "蛋奶类"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/106140793/",
    "video": {
      "title": "饭店的西葫芦炒鸡蛋为什么好吃，大厨教你新吃法，年夜饭家常菜_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1sz4y1S7Lu/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 291,
    "name": "清炒丝瓜",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "丝瓜320g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "丝瓜去皮切块，少油炒后加一点水焖软；异常苦味丝瓜弃用。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "丝瓜",
        "grams": 320.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107297857/",
    "video": {
      "title": "这才是清炒丝瓜最简单、最好看、最香滑的做法，没有之一。 - YouTube",
      "url": "https://www.youtube.com/watch?v=zcpz_i7K-mM",
      "platform": "YouTube"
    }
  },
  {
    "id": 292,
    "name": "丝瓜炒木耳",
    "category": "蔬菜",
    "time": 30,
    "cost": 4,
    "ingredients": "丝瓜260g、干木耳8g、蒜5g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "木耳短时泡发并焯熟，丝瓜炒软后合炒；不用隔夜泡发木耳。",
      "加150–300毫升水，小火焖15–20分钟至全部熟软；汤菜加500毫升水。豆角至少保持沸腾15分钟至无生硬口感。"
    ],
    "items": [
      {
        "name": "丝瓜",
        "grams": 260.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干木耳",
        "grams": 8.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://home.meishichina.com/recipe-230183.html",
    "video": {
      "title": "夏季時令菜木耳炒絲瓜，絲瓜翠綠不發黑，搭配木耳，清脆不油膩 👉歡迎訂閱【老東北美食】 （2022） - YouTube",
      "url": "https://www.youtube.com/watch?v=1WvSDYyns3w",
      "platform": "YouTube"
    }
  },
  {
    "id": 293,
    "name": "苦瓜炒肉",
    "category": "猪肉",
    "time": 25,
    "cost": 9,
    "ingredients": "苦瓜220g、猪瘦肉150g、姜4g、食用油5g、生抽6g、淀粉4g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "苦瓜去瓤切薄片焯水，肉片先炒熟，再回锅苦瓜。肉片用所列淀粉和一汤匙水抓匀；少量生抽腌制，剩余留作调味。",
      "肉切薄片或小丁，按上一步分次炒；猪肉、兔肉与鸡肉最后加30毫升水焖3–5分钟至全熟。禽肉中心达到74°C。"
    ],
    "items": [
      {
        "name": "苦瓜",
        "grams": 220.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "猪瘦肉",
        "grams": 150.0,
        "group": "肉类"
      },
      {
        "name": "姜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      },
      {
        "name": "淀粉",
        "grams": 4,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107327859/",
    "video": {
      "url": "https://www.bilibili.com/video/BV1bLZAYkEcQ/",
      "title": "教你苦瓜炒肉的家常做法，苦瓜不苦且回甘，肉片嫩滑不柴，超好吃",
      "platform": "哔哩哔哩",
      "embed": true,
      "published": "2025-03-29",
      "author": "天天相见厨房阿鹏"
    }
  },
  {
    "id": 294,
    "name": "干煸苦瓜",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "苦瓜300g、蒜8g、干辣椒2g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "苦瓜去瓤切片，先焯熟沥干，再少油煸去水分炒香。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "苦瓜",
        "grams": 300.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 8.0,
        "group": "调味配料"
      },
      {
        "name": "干辣椒",
        "grams": 2.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/105847632/",
    "video": {
      "title": "这道四川经典的干煸苦瓜可以说是最好吃、最下饭的苦瓜做法之一。 - YouTube",
      "url": "https://www.youtube.com/watch?v=t4sl29IYnGs",
      "platform": "YouTube"
    }
  },
  {
    "id": 295,
    "name": "蒜蓉秋葵",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "秋葵280g、蒜12g、生抽6g、食用油5g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "秋葵整根沸水焯熟后切段，用熟蒜蓉与生抽拌匀。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "秋葵",
        "grams": 280.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 12.0,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/100552162/",
    "video": {
      "title": "廚師長教你蒜蓉秋葵的家常做法，步驟詳細，蒜香濃郁下酒又下飯【留意美食】 - YouTube",
      "url": "https://www.youtube.com/watch?v=o_lFoP66Ih0",
      "platform": "YouTube"
    }
  },
  {
    "id": 296,
    "name": "芦笋炒口蘑",
    "category": "蔬菜",
    "time": 25,
    "cost": 16,
    "ingredients": "芦笋200g、口蘑180g、蒜4g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "芦笋去老根焯熟，口蘑炒软后合炒。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "芦笋",
        "grams": 200.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "口蘑",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "蒜",
        "grams": 4.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104573750/",
    "video": {
      "title": "《芦笋炒蘑菇|Fried Asparagus & Mushrooms》 不用太多工序，快速料理即能上菜。淸脆爽口的绿芦笋利用蘑菇提味，简单食材变化出好滋味，美味无负担，并且有西餐的风味！ - YouTube",
      "url": "https://www.youtube.com/watch?v=kLw_GJT7PrM",
      "platform": "YouTube"
    }
  },
  {
    "id": 297,
    "name": "素炒三丁",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "胡萝卜120g、玉米粒120g、豌豆120g、食用油5g、盐1g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。",
      "胡萝卜切丁，与豌豆先煮熟，再和玉米粒合炒至熟。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "胡萝卜",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "玉米粒",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "豌豆",
        "grams": 120.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "盐",
        "grams": 1,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/1041668/",
    "video": {
      "title": "我認爲就是素炒三丁最好吃的做法，簡單家常，香脆可口，營養美味，適合全家人吃#like #家常菜 #cooking - YouTube",
      "url": "https://www.youtube.com/watch?v=q6MJ0goKNOg",
      "platform": "YouTube"
    }
  },
  {
    "id": 298,
    "name": "炒合菜",
    "category": "蛋类",
    "time": 25,
    "cost": 5,
    "ingredients": "豆芽180g、韭菜100g、鸡蛋100g、干粉丝30g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "粉丝泡软，鸡蛋炒熟，豆芽炒至全熟后加入粉丝、韭菜与鸡蛋。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "豆芽",
        "grams": 180.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "韭菜",
        "grams": 100.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "鸡蛋",
        "grams": 100.0,
        "group": "蛋奶类"
      },
      {
        "name": "干粉丝",
        "grams": 30.0,
        "group": "谷物与粉面"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://www.xiachufang.com/recipe/107077748/",
    "video": {
      "title": "经典家常菜“炒合菜”做法易学、步骤详细、讲解清晰_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV1Ev4y1A78Z/",
      "platform": "哔哩哔哩"
    }
  },
  {
    "id": 299,
    "name": "豆芽炒粉条",
    "category": "蔬菜",
    "time": 25,
    "cost": 4,
    "ingredients": "豆芽250g、干粉条45g、蒜5g、葱10g、食用油5g、生抽6g",
    "steps": [
      "按一人份称量食材；生熟砧板分开，蔬菜洗净，肉类按下一步切配。干货按包装要求泡发，泡发耗时另计；木耳不用隔夜浸泡。",
      "粉条泡软煮熟，豆芽先炒至全熟，再加入粉条翻匀。",
      "先把上一步需预煮或蒸熟的食材处理熟，再少油翻炒4–6分钟，按所列调料调味；豆角必须全熟，不用生脆口感。"
    ],
    "items": [
      {
        "name": "豆芽",
        "grams": 250.0,
        "group": "蔬菜与菌菇"
      },
      {
        "name": "干粉条",
        "grams": 45.0,
        "group": "谷物与粉面"
      },
      {
        "name": "蒜",
        "grams": 5.0,
        "group": "调味配料"
      },
      {
        "name": "葱",
        "grams": 10.0,
        "group": "调味配料"
      },
      {
        "name": "食用油",
        "grams": 5,
        "group": "调味配料"
      },
      {
        "name": "生抽",
        "grams": 6,
        "group": "调味配料"
      }
    ],
    "source": "https://m.xiachufang.com/recipe/104534964/",
    "video": {
      "title": "家常菜豆芽炒粉条做法，2步技巧教你，比饭店好吃_哔哩哔哩_bilibili",
      "url": "https://www.bilibili.com/video/BV12v411y7m5/",
      "platform": "哔哩哔哩"
    }
  }
];
