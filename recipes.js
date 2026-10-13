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
      "url": "https://www.bilibili.com/video/BV161aCzWEUW/",
      "title": "事无巨细家常版本的外婆红烧肉，就是为了让你们在家做出来！",
      "author": "安秋金",
      "published": "2025-09-04",
      "duration": 216,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV161aCzWEUW"
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
      "url": "https://www.bilibili.com/video/BV1SyGrz2EtK/",
      "title": "米饭杀手来了！零失败回锅肉！",
      "author": "特厨做饭_",
      "published": "2025-04-30",
      "duration": 194,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SyGrz2EtK"
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
      "url": "https://www.bilibili.com/video/BV1xr4y6MEuG/",
      "title": "拿捏下饭真门道，怎么调汁怎么炒？新鱼香肉丝~",
      "author": "安秋金",
      "published": "2026-08-29",
      "duration": 229,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1xr4y6MEuG"
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
      "url": "https://www.bilibili.com/video/BV1yDE96kE31/",
      "title": "今天做的的宫爆肉丁，香辣过瘾肉丁又嫩又滑，好入味好好吃呀！#宫爆肉丁 #宫爆 #下饭菜 #家常菜",
      "author": "A惠姐家常菜",
      "published": "2026-06-10",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1yDE96kE31"
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
      "url": "https://www.bilibili.com/video/BV1VsxMzbEeH/",
      "title": "厨房小白也能搞定的糖醋里脊！这配方谁做谁成功！",
      "author": "特厨做饭_",
      "published": "2025-10-06",
      "duration": 229,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1VsxMzbEeH"
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
      "url": "https://www.bilibili.com/video/BV12ZiTBWEdi/",
      "title": "京酱肉丝超详细教程！酱香浓郁无敌好吃！",
      "author": "袁锐-萌新的圆",
      "published": "2025-12-31",
      "duration": 216,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV12ZiTBWEdi"
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
      "url": "https://www.bilibili.com/video/BV1E8pTzxE3T/",
      "title": "不敢多做！这木须肉太费米饭了！",
      "author": "特厨做饭_",
      "published": "2025-09-15",
      "duration": 131,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1E8pTzxE3T"
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
      "url": "https://www.bilibili.com/video/BV1RKAZzVE69/",
      "title": "农家小炒肉香辣够味，肉片焦香，青椒爽脆，下饭神器！",
      "author": "厨师长老阳01",
      "published": "2026-03-03",
      "duration": 100,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1RKAZzVE69"
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
      "url": "https://www.bilibili.com/video/BV1VGJP6JEBs/",
      "title": "下饭菜的天花板，盐煎肉保姆级教程",
      "author": "猴哥爱做江湖菜",
      "published": "2026-06-14",
      "duration": 123,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1VGJP6JEBs"
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
      "url": "https://www.bilibili.com/video/BV139u7zkENn/",
      "title": "蒜苔炒肉",
      "author": "袁锐-萌新的圆",
      "published": "2025-07-13",
      "duration": 244,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV139u7zkENn"
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
      "url": "https://www.bilibili.com/video/BV19F41zPE2q/",
      "title": "简单易学的芹菜炒肉丝，肉丝滑嫩入味，芹菜脆爽。",
      "author": "王哥盐帮菜",
      "published": "2025-10-13",
      "duration": 97,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV19F41zPE2q"
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
      "url": "https://www.bilibili.com/video/BV1ehkEYXEBf/",
      "title": "一道清爽脆口的家常菜做法-花生芽韭菜炒肉，按我这样做，花生芽脆爽不发软",
      "author": "钧哥食堂",
      "published": "2024-12-17",
      "duration": 134,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ehkEYXEBf"
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
      "url": "https://www.bilibili.com/video/BV1zY7WzfEvL/",
      "title": "当你想吃“青椒洋葱炒肉丝”就把这视频翻出来",
      "author": "美食强",
      "published": "2025-05-30",
      "duration": 195,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1zY7WzfEvL"
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
      "url": "https://www.bilibili.com/video/BV1ce9dYiEfS/",
      "title": "哪有男人不会做饭啊！（莴笋炒肉）",
      "author": "小酒吃点啥-",
      "published": "2025-03-05",
      "duration": 113,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ce9dYiEfS"
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
      "url": "https://www.bilibili.com/video/BV1d2Tjz6Eew/",
      "title": "茭白炒肉丝，是先炒茭白还是炒肉丝，肉丝怎么腌制才鲜嫩不柴入味 #茭白炒肉丝 #茭白炒肉 #腌肉丝 #茭白的家常做法 #美食教程",
      "author": "大厨阿斗",
      "published": "2025-06-04",
      "duration": 181,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1d2Tjz6Eew"
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
      "url": "https://www.bilibili.com/video/BV1vioWBNEMY/",
      "title": "笋干烧肉",
      "author": "懒燕厨房",
      "published": "2026-04-22",
      "duration": 130,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1vioWBNEMY"
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
      "url": "https://www.bilibili.com/video/BV1wkxLzcE3S/",
      "title": "梅干菜烧肉｜软糯香嫩～肥而不腻｜保姆教程！",
      "author": "任芸丽",
      "published": "2025-10-06",
      "duration": 209,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wkxLzcE3S"
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
      "url": "https://www.bilibili.com/video/BV1rteizzEEX/",
      "title": "它就是最强下饭菜！家常土豆烧肉超详细版教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-08-23",
      "duration": 292,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1rteizzEEX"
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
      "url": "https://www.bilibili.com/video/BV1SrUsB3E3N/",
      "title": "当你想吃“萝卜烧肉”就把这部视频翻出来",
      "author": "美食强",
      "published": "2025-11-22",
      "duration": 132,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SrUsB3E3N"
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
      "url": "https://www.bilibili.com/video/BV193DLBZEeG/",
      "title": "瘦肉不柴，肥肉不腻——腐竹烧肉",
      "author": "锅铲居士",
      "published": "2026-04-08",
      "duration": 292,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV193DLBZEeG"
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
      "url": "https://www.bilibili.com/video/BV1qTkCBdEyN/",
      "title": "花20多在家给小杨做板栗红烧肉！",
      "author": "张大厨和甜小厨",
      "published": "2025-11-11",
      "duration": 84,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1qTkCBdEyN"
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
      "url": "https://www.bilibili.com/video/BV1sAybY6Ea2/",
      "title": "【红烧排骨】从炒糖色开始，手把手包教包会！",
      "author": "村驴",
      "published": "2024-10-20",
      "duration": 209,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1sAybY6Ea2"
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
      "url": "https://www.bilibili.com/video/BV1Kf6FB5EuS/",
      "title": "年夜饭糖醋排骨超详细教程！做法简单巨好吃",
      "author": "袁锐-萌新的圆",
      "published": "2026-01-29",
      "duration": 296,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Kf6FB5EuS"
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
      "url": "https://www.bilibili.com/video/BV18uaH6bEJq/",
      "title": "豆豉蒸排骨",
      "author": "学无止境LF",
      "published": "2026-09-29",
      "duration": 65,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18uaH6bEJq"
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
      "url": "https://www.bilibili.com/video/BV1X74dzaE1w/",
      "title": "粉蒸排骨这样做软糯入味，鲜嫩不柴，做法还特别简单#粉蒸排骨",
      "author": "大叔小厨房",
      "published": "2025-08-05",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1X74dzaE1w"
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
      "url": "https://www.bilibili.com/video/BV1uqwtzUEo8/",
      "title": "土豆炖排骨家常做法，不用炒糖色",
      "author": "随便起的名cy",
      "published": "2026-03-14",
      "duration": 109,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1uqwtzUEo8"
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
      "url": "https://www.bilibili.com/video/BV1gdpu6KEcd/",
      "title": "湖北莲藕排骨汤，鲜嫩入味，暖心暖胃",
      "author": "老解的舅舅是厨子",
      "published": "2026-10-11",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1gdpu6KEcd"
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
      "url": "https://www.bilibili.com/video/BV1Rod6YHEkc/",
      "title": "一碗会呼吸的冬瓜排骨汤",
      "author": "大馋丫头的饲养员",
      "published": "2025-04-13",
      "duration": 75,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Rod6YHEkc"
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
      "url": "https://www.bilibili.com/video/BV1BRqZBHEWD/",
      "title": "排骨汤的秘诀！怎么做到汤汁浓白不腻？玉米排骨汤超详细教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-12-19",
      "duration": 145,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1BRqZBHEWD"
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
      "url": "https://www.bilibili.com/video/BV1xRpTzuEAT/",
      "title": "做法简单的玉米山药排骨汤，汤汁浓郁，排骨软烂入味，营养丰富又美味。",
      "author": "二婶儿教做菜",
      "published": "2025-09-15",
      "duration": 96,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1xRpTzuEAT"
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
      "url": "https://www.bilibili.com/video/BV13sGdzoEAV/",
      "title": "夏天喝的最多的海带排骨汤！清甜好喝又简单",
      "author": "是个小布丁",
      "published": "2025-05-03",
      "duration": 114,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13sGdzoEAV"
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
      "url": "https://www.bilibili.com/video/BV1rL6BYmEWT/",
      "title": "外婆的味道超治愈｜还原记忆中的萝卜排骨汤 ｜Jrake｜",
      "author": "Hey-Jrake",
      "published": "2025-01-02",
      "duration": 170,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1rL6BYmEWT"
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
      "url": "https://www.bilibili.com/video/BV1Ea2bYqEh6/",
      "title": "自制黄磊同款的黄豆炖猪蹄，2斤黄酒熬出来原来这么好吃",
      "author": "馋大鑫",
      "published": "2024-10-13",
      "duration": 504,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Ea2bYqEh6"
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
      "url": "https://www.bilibili.com/video/BV1GPqmB2ETq/",
      "title": "红烧猪蹄保姆级教程，软糯Q弹，不臭不腥！",
      "author": "董小厨家常菜",
      "published": "2025-12-21",
      "duration": 87,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1GPqmB2ETq"
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
      "url": "https://www.bilibili.com/video/BV1tCY96EEe2/",
      "title": "花生炖猪蹄，猪蹄软糯入味长，花生绵柔满口香",
      "author": "柳柳暖餐",
      "published": "2026-09-12",
      "duration": 138,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1tCY96EEe2"
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
      "url": "https://www.bilibili.com/video/BV18mR1BJEBc/",
      "title": "当你想做“葱烧大排”就把这部视频翻出来",
      "author": "美食强",
      "published": "2026-05-05",
      "duration": 172,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18mR1BJEBc"
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
      "url": "https://www.bilibili.com/video/BV1L6jKzMEdM/",
      "title": "不需要太多复杂的调料，也不需要花太多的时间，看一眼就能学会的香煎猪排，比外面卖的还好吃#香煎猪排",
      "author": "韩小厨爱美食",
      "published": "2025-05-25",
      "duration": 194,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1L6jKzMEdM"
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
      "url": "https://www.bilibili.com/video/BV18qXiBEEvW/",
      "title": "都喜欢吃的清蒸狮子头，做法教程分享给大家",
      "author": "河北方菜",
      "published": "2026-03-31",
      "duration": 47,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18qXiBEEvW"
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
      "url": "https://www.bilibili.com/video/BV1K3wYeaEew/",
      "title": "一口软糯多汁！年夜饭必做红烧狮子头，超详细教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-01-21",
      "duration": 164,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1K3wYeaEew"
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
      "url": "https://www.bilibili.com/video/BV1UAc5z6ES3/",
      "title": "珍珠丸子",
      "author": "夏叔有好货",
      "published": "2026-02-13",
      "duration": 60,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1UAc5z6ES3"
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
      "url": "https://www.bilibili.com/video/BV15dzAY6ECY/",
      "title": "怎么做冬瓜汆丸子滑嫩不散花？拌肉馅方法是秘诀，丸子汤鲜超解馋",
      "author": "老东北美食",
      "published": "2024-11-26",
      "duration": 264,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15dzAY6ECY"
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
      "url": "https://www.bilibili.com/video/BV1LLS1BCEHo/",
      "title": "一口一个的香菇酿肉，鲜嫩爆汁满口留香",
      "author": "波子减肥食单",
      "published": "2025-12-01",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1LLS1BCEHo"
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
      "url": "https://www.bilibili.com/video/BV15hhVztEDK/",
      "title": "青椒酿肉的家常做法，肉嫩多汁口感丰富，简单又下饭！",
      "author": "干饭研究员煮夫食光机",
      "published": "2025-08-04",
      "duration": 76,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15hhVztEDK"
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
      "url": "https://www.bilibili.com/video/BV18aRqBtEhj/",
      "title": "自制美食｜一口沦陷的下饭神器 苦瓜酿肉🌼",
      "author": "小鹿多吃点",
      "published": "2026-05-04",
      "duration": 64,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18aRqBtEhj"
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
      "url": "https://www.bilibili.com/video/BV1tPY5zXEeN/",
      "title": "当你想吃“肉末蒸蛋”就把这部视频翻出来",
      "author": "美食强",
      "published": "2025-09-07",
      "duration": 133,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1tPY5zXEeN"
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
      "url": "https://www.bilibili.com/video/BV1k3Lh6cEw9/",
      "title": "我做的【咸蛋蒸肉饼】一想家就会想起的味道｜老广家常菜【yannie_yuen】",
      "author": "yannie_yuen",
      "published": "2026-05-22",
      "duration": 118,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1k3Lh6cEw9"
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
      "url": "https://www.bilibili.com/video/BV1mTGnzHErv/",
      "title": "梅菜蒸肉饼，在家怎么做出饭店的味道一个视频教会你",
      "author": "大麦食记",
      "published": "2025-07-08",
      "duration": 74,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mTGnzHErv"
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
      "url": "https://www.bilibili.com/video/BV1Bk2dYyE5k/",
      "title": "萝卜干炒腊肉是我们湖南的一道经典湘菜",
      "author": "厨师长老阳01",
      "published": "2024-10-15",
      "duration": 71,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Bk2dYyE5k"
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
      "url": "https://www.bilibili.com/video/BV1VhBNYrEi3/",
      "title": "腊肉到底是生炒还是熟炒？蒸出来炒还是煮出来炒？整块蒸煮还是切片蒸煮？这道川味#蒜苗炒腊肉 告诉大家。",
      "author": "倔强的南溪",
      "published": "2024-12-16",
      "duration": 126,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1VhBNYrEi3"
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
      "url": "https://www.bilibili.com/video/BV1hQFBeQEaH/",
      "title": "过年了来一道纯纯的东北炖菜酸菜炖白肉，浓香酸爽的东北味",
      "author": "老隐记",
      "published": "2025-02-02",
      "duration": 359,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1hQFBeQEaH"
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
      "url": "https://www.bilibili.com/video/BV13p4yzhESH/",
      "title": "红烧牛肉超详细教程！新手也能轻松学会",
      "author": "袁锐-萌新的圆",
      "published": "2025-10-13",
      "duration": 255,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13p4yzhESH"
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
      "url": "https://www.bilibili.com/video/BV14Npc6MEi8/",
      "title": "番茄炖牛腩正确做法，肉嫩不柴汤汁超下饭！",
      "author": "小当家烹饪日记",
      "published": "2026-10-06",
      "duration": 133,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV14Npc6MEi8"
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
      "url": "https://www.bilibili.com/video/BV1kYEE6MEv2/",
      "title": "土豆炖牛肉！调料不多，操作简单！好吃！！！下饭！！！",
      "author": "丽丽教做菜-",
      "published": "2026-06-09",
      "duration": 112,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1kYEE6MEv2"
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
      "url": "https://www.bilibili.com/video/BV1v2UeYJE3b/",
      "title": "当你想吃\"萝卜炖牛腩\"就把这部视频翻出来学着做！",
      "author": "美食强",
      "published": "2024-11-16",
      "duration": 187,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1v2UeYJE3b"
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
      "url": "https://www.bilibili.com/video/BV1v8zkBgEMG/",
      "title": "这盘咖喱牛肉，越吃越掉秤！(赚币换名字中）",
      "author": "又减肥的徐老师",
      "published": "2026-01-24",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1v8zkBgEMG"
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
      "url": "https://www.bilibili.com/video/BV1JEYh6TExW/",
      "title": "杭椒牛柳，牛肉嫩滑不柴",
      "author": "纽澜地黑牛",
      "published": "2026-09-10",
      "duration": 93,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1JEYh6TExW"
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
      "url": "https://www.bilibili.com/video/BV1BdM76TESn/",
      "title": "黑椒牛柳",
      "author": "随便小厨房",
      "published": "2026-07-09",
      "duration": 214,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1BdM76TESn"
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
      "url": "https://www.bilibili.com/video/BV156nJzJEUa/",
      "title": "如何做出鲜美滑嫩的肉类小炒？以蚝油牛肉为例",
      "author": "杨光_建厨师",
      "published": "2025-09-27",
      "duration": 250,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV156nJzJEUa"
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
      "url": "https://www.bilibili.com/video/BV1GD9HYoEEo/",
      "title": "云南传统菜：芹菜炒牛肉",
      "author": "滇味纪云南家常菜",
      "published": "2025-03-04",
      "duration": 202,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1GD9HYoEEo"
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
      "url": "https://www.bilibili.com/video/BV1mxEezME63/",
      "title": "厨师长教你：“香菜炒牛肉”的家常做法，香辣入味，拌饭拌面绝了",
      "author": "美食作家王刚R",
      "published": "2025-05-14",
      "duration": 189,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mxEezME63"
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
      "url": "https://www.bilibili.com/video/BV13Yao6fEjS/",
      "title": "小炒黄牛肉超详细教程！做法简单巨好吃",
      "author": "袁锐-萌新的圆",
      "published": "2026-10-05",
      "duration": 264,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13Yao6fEjS"
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
      "url": "https://www.bilibili.com/video/BV1CWCTBwEMg/",
      "title": "洋葱炒牛肉超详细教程，小白也可以做出嫩滑不柴的牛肉！",
      "author": "袁锐-萌新的圆",
      "published": "2025-11-14",
      "duration": 245,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1CWCTBwEMg"
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
      "url": "https://www.bilibili.com/video/BV1N5eRzwErf/",
      "title": "杏鲍菇炒牛肉教程",
      "author": "厨师长老阳01",
      "published": "2025-08-25",
      "duration": 101,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1N5eRzwErf"
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
      "url": "https://www.bilibili.com/video/BV18TMt6DE4f/",
      "title": "西兰花炒牛肉粒，肉质弹牙蔬菜清甜超下饭",
      "author": "大麦食记",
      "published": "2026-07-07",
      "duration": 92,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18TMt6DE4f"
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
      "url": "https://www.bilibili.com/video/BV1Uqi9BWECV/",
      "title": "沙茶牛肉煲不止是简单，味道更是一绝超级下饭！",
      "author": "冯小厨的菜谱",
      "published": "2026-01-08",
      "duration": 265,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Uqi9BWECV"
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
      "url": "https://www.bilibili.com/video/BV1V8znYHEV5/",
      "title": "当你想吃“孜然牛肉”就把这部视频翻出来学着做！",
      "author": "美食强",
      "published": "2024-11-30",
      "duration": 154,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1V8znYHEV5"
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
      "url": "https://www.bilibili.com/video/BV1JZbbzMEpy/",
      "title": "滑嫩不柴！双葱爆牛肉保姆级教程来啦！",
      "author": "特厨做饭_",
      "published": "2025-08-13",
      "duration": 231,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1JZbbzMEpy"
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
      "url": "https://www.bilibili.com/video/BV1w3YvzBEdm/",
      "title": "当你想做\"水煮牛肉\"就把这部视频翻出来",
      "author": "美食强",
      "published": "2025-08-16",
      "duration": 199,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1w3YvzBEdm"
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
      "url": "https://www.bilibili.com/video/BV19qe3zxEmv/",
      "title": "好吃到没人可以拒绝，酸汤肥牛保姆级教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-08-20",
      "duration": 223,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV19qe3zxEmv"
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
      "url": "https://www.bilibili.com/video/BV1MvkiBWETa/",
      "title": "别错过这个金针菇肥牛～秘制酱汁配方大公开！超级简单，巨香巨过瘾～",
      "author": "孩儿他姥姥a",
      "published": "2025-11-12",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1MvkiBWETa"
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
      "url": "https://www.bilibili.com/video/BV1PCHLzREzT/",
      "title": "20分钟搞定的超绝番茄肥牛土豆！好吃到起飞",
      "author": "袁锐-萌新的圆",
      "published": "2025-10-06",
      "duration": 153,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PCHLzREzT"
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
      "url": "https://www.bilibili.com/video/BV1qVXaBEEn6/",
      "title": "土豆肥牛煲",
      "author": "夏叔厨房",
      "published": "2026-03-30",
      "duration": 132,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1qVXaBEEn6"
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
      "url": "https://www.bilibili.com/video/BV1Cguz63EY8/",
      "title": "番茄牛肉炖豆腐 | 绝妙CP、一锅端神仙下饭菜！",
      "author": "何时下厨",
      "published": "2026-08-11",
      "duration": 89,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Cguz63EY8"
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
      "url": "https://www.bilibili.com/video/BV13QRDYkELR/",
      "title": "清炖牛肉最好吃的做法，汤鲜味美 软烂入味，真的太香了",
      "author": "董小厨家常菜",
      "published": "2025-04-05",
      "duration": 176,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13QRDYkELR"
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
      "url": "https://www.bilibili.com/video/BV1PjKV6hEbh/",
      "title": "【好好吃饭系列】牛肉丸萝卜汤",
      "author": "扑棱滴筱妖",
      "published": "2026-07-16",
      "duration": 107,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PjKV6hEbh"
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
      "url": "https://www.bilibili.com/video/BV1cuFszWEaz/",
      "title": "当你想做“葱爆羊肉”就把这部视频翻出来",
      "author": "美食强",
      "published": "2026-02-07",
      "duration": 161,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1cuFszWEaz"
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
      "url": "https://www.bilibili.com/video/BV1XEaz6LEgA/",
      "title": "孜然羊肉保姆级教学",
      "author": "侯大厨不炒菜",
      "published": "2026-10-01",
      "duration": 98,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1XEaz6LEgA"
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
      "url": "https://www.bilibili.com/video/BV1T3rLBxEBG/",
      "title": "红焖羊肉超详细教程！做法巨简单无敌好吃！",
      "author": "袁锐-萌新的圆",
      "published": "2026-01-13",
      "duration": 195,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1T3rLBxEBG"
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
      "url": "https://www.bilibili.com/video/BV1GeUUYRESi/",
      "title": "立冬进补美食—萝卜炖羊肉的做法",
      "author": "伏峻立FJL",
      "published": "2024-11-21",
      "duration": 100,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1GeUUYRESi"
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
      "url": "https://www.bilibili.com/video/BV18bCRY9EVe/",
      "title": "山药炖羊肉",
      "author": "温县垆土铁棍山药哥",
      "published": "2024-10-19",
      "duration": 80,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18bCRY9EVe"
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
      "url": "https://www.bilibili.com/video/BV1nyHC6mEFP/",
      "title": "清炖羊肉",
      "author": "特厨鲍智德",
      "published": "2026-10-07",
      "duration": 213,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1nyHC6mEFP"
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
      "url": "https://www.bilibili.com/video/BV1HTuqz1ETC/",
      "title": "徐州的羊肉炖白菜，太香了吧！",
      "author": "九亿少女爱做饭",
      "published": "2025-07-14",
      "duration": 102,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1HTuqz1ETC"
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
      "url": "https://www.bilibili.com/video/BV1dJ8yzGE5H/",
      "title": "三伏天多吃冬瓜羊肉丸子汤，美容养颜，排毒排湿！",
      "author": "歌儿的小饭桌",
      "published": "2025-07-31",
      "duration": 79,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1dJ8yzGE5H"
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
      "url": "https://www.bilibili.com/video/BV1c79cBuEJA/",
      "title": "谁能拒绝一锅软烂入味的羊肉炖土豆！",
      "author": "苏苏爱做饭_",
      "published": "2026-04-02",
      "duration": 47,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1c79cBuEJA"
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
      "status": "pending",
      "embed": false,
      "metadataVerified": false
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
      "url": "https://www.bilibili.com/video/BV1KQvhBQEFK/",
      "title": "宫保鸡丁老式做法！",
      "author": "董小厨家常菜",
      "published": "2025-12-30",
      "duration": 81,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1KQvhBQEFK"
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
      "url": "https://www.bilibili.com/video/BV1m3XnY6EwX/",
      "title": "一次颠勺，三天受益！每天都可以吃到新鲜的带饭黄焖鸡！",
      "author": "安秋金",
      "published": "2025-03-23",
      "duration": 236,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1m3XnY6EwX"
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
      "url": "https://www.bilibili.com/video/BV12Wh9zsE71/",
      "title": "香喷喷的台式三杯鸡，做法简单味道好极了！",
      "author": "冯小厨的菜谱",
      "published": "2025-08-29",
      "duration": 257,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV12Wh9zsE71"
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
      "url": "https://www.bilibili.com/video/BV1z3F1zkExH/",
      "title": "年夜饭可乐鸡翅超详细教程！做法简单巨好吃",
      "author": "袁锐-萌新的圆",
      "published": "2026-02-13",
      "duration": 197,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1z3F1zkExH"
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
      "url": "https://www.bilibili.com/video/BV1supxzQEB4/",
      "title": "好吃到舔盘！红烧鸡翅超详细保姆级教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-09-17",
      "duration": 205,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1supxzQEB4"
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
      "url": "https://www.bilibili.com/video/BV1r3VazGEzF/",
      "title": "【新土豆炖鸡】咕噜咕噜的一大锅炖菜，搭配凉拌皮蛋豆腐很不错",
      "author": "夏妈厨房Bili",
      "published": "2025-05-07",
      "duration": 141,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1r3VazGEzF"
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
      "url": "https://www.bilibili.com/video/BV1SgQDYfEu3/",
      "title": "香菇炖鸡腿，鲜香美味口感软嫩，老人孩子都爱吃",
      "author": "水中月的美食日记",
      "published": "2025-03-15",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SgQDYfEu3"
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
      "url": "https://www.bilibili.com/video/BV1iAyaYTE1h/",
      "title": "吃板栗的季节怎能少了\"板栗烧鸡\"做法实用接地气",
      "author": "美食强",
      "published": "2024-10-20",
      "duration": 199,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1iAyaYTE1h"
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
      "url": "https://www.bilibili.com/video/BV1jAfhBZEiM/",
      "title": "啤酒鸡腿",
      "author": "海边的森哥",
      "published": "2026-02-25",
      "duration": 369,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1jAfhBZEiM"
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
      "url": "https://www.bilibili.com/video/BV1eHH163Ed3/",
      "title": "今天用几个鸡腿做的大盘鸡，做法简单，土豆软糯，鸡肉鲜香入味，拌米饭，拉条子都美的很！",
      "author": "灶台拾光",
      "published": "2026-10-07",
      "duration": 92,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1eHH163Ed3"
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
      "url": "https://www.bilibili.com/video/BV1Du8ezuEKK/",
      "title": "懒人必备｜随心配❗️治愈系咖喱鸡",
      "author": "憨式厨房",
      "published": "2025-07-27",
      "duration": 77,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Du8ezuEKK"
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
      "url": "https://www.bilibili.com/video/BV1R3pf6JErs/",
      "title": "这个照烧鸡腿饭太好吃了米饭裹着酱汁巨下饭",
      "author": "四孩宝妈辅食日记",
      "published": "2026-10-13",
      "duration": 80,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1R3pf6JErs"
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
      "url": "https://www.bilibili.com/video/BV1RBNX6REU2/",
      "title": "减脂期的解馋神器！无油蒜香鸡腿！",
      "author": "火焰魔法师gogo",
      "published": "2026-07-15",
      "duration": 74,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1RBNX6REU2"
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
      "url": "https://www.bilibili.com/video/BV1h8EK6QEid/",
      "title": "以后鸡腿买回来，你就试试这个广东人最爱吃的葱油焖鸡，做法简单又好吃#葱油焖鸡",
      "author": "韩小厨爱美食",
      "published": "2026-06-08",
      "duration": 82,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1h8EK6QEid"
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
      "url": "https://www.bilibili.com/video/BV1KAjz6aELx/",
      "title": "不开火！巨香巨简单！｜懒人电饭煲盐焗鸡",
      "author": "八戎吃什么",
      "published": "2026-06-19",
      "duration": 85,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1KAjz6aELx"
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
      "url": "https://www.bilibili.com/video/BV1nLeq64EGv/",
      "title": "香菇滑鸡超详细教程！做法简单巨好吃！",
      "author": "袁锐-萌新的圆",
      "published": "2026-09-20",
      "duration": 288,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1nLeq64EGv"
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
      "url": "https://www.bilibili.com/video/BV1QFt46NEeb/",
      "title": "大家注意看，鸡腿买回来不要红烧炖汤了，你就像我这样做一道豉汁蒸鸡，鲜香嫩滑，我家三个儿子超爱吃#豉汁蒸鸡",
      "author": "韩小厨爱美食",
      "published": "2026-08-31",
      "duration": 76,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1QFt46NEeb"
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
      "url": "https://www.bilibili.com/video/BV1AmXwBCEXq/",
      "title": "【不吵不炸无油烟 鲜嫩多汁 虫草花蒸鸡翅】",
      "author": "村驴",
      "published": "2026-03-24",
      "duration": 179,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1AmXwBCEXq"
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
      "url": "https://www.bilibili.com/video/BV1vf5n6WEbB/",
      "title": "老广经典家常菜金针云耳蒸鸡你们有多久没在家里蒸过啦？",
      "author": "湾仔厨房_",
      "published": "2026-05-11",
      "duration": 138,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1vf5n6WEbB"
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
      "url": "https://www.bilibili.com/video/BV1w5U5Y6E5P/",
      "title": "#陈皮花旗参红枣蒸鸡#陈皮花旗参红枣枸杞蒸鸡#蒸鸡",
      "author": "宋包子泱泱",
      "published": "2024-11-14",
      "duration": 108,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1w5U5Y6E5P"
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
      "url": "https://www.bilibili.com/video/BV1L7TozXEAR/",
      "title": "[老鸟Kitchen] 家常蒸菜：虫草花木耳蒸鸡",
      "author": "老鸟Kitchen",
      "published": "2025-06-09",
      "duration": 77,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1L7TozXEAR"
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
      "url": "https://www.bilibili.com/video/BV18oHx61EGg/",
      "title": "山药炖鸡",
      "author": "看看锅里有啥好吃的",
      "published": "2026-10-05",
      "duration": 164,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18oHx61EGg"
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
      "url": "https://www.bilibili.com/video/BV1AVxAzaEo4/",
      "title": "因为冬瓜炖鸡太好吃了 特意录个视频",
      "author": "恰如梦幻泡影",
      "published": "2025-10-26",
      "duration": 170,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1AVxAzaEo4"
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
      "url": "https://www.bilibili.com/video/BV1eB94YgEFq/",
      "title": "莲藕炖鸡",
      "author": "哈破是个小透明",
      "published": "2025-03-05",
      "duration": 72,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1eB94YgEFq"
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
      "url": "https://www.bilibili.com/video/BV1FP5n6wEff/",
      "title": "不用去海南，在家就能吃到正宗的椰子鸡！鸡肉滑嫩，汤汁鲜甜！【椰子鸡】",
      "author": "甜甜_食记",
      "published": "2026-05-10",
      "duration": 72,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1FP5n6wEff"
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
      "url": "https://www.bilibili.com/video/BV1srHPz4E1v/",
      "title": "清炖鸡汤的做法",
      "author": "莉扬妈妈",
      "published": "2025-10-02",
      "duration": 101,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1srHPz4E1v"
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
      "url": "https://www.bilibili.com/video/BV13qBLBoECH/",
      "title": "小鸡炖蘑菇",
      "author": "夏叔厨房",
      "published": "2025-12-24",
      "duration": 86,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13qBLBoECH"
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
      "url": "https://www.bilibili.com/video/BV1A24Uz8EhA/",
      "title": "芋头烧鸡是一道家常菜，芋头软糯鸡肉鲜嫩，尤其是汤汁泡饭是一绝",
      "author": "老杨做菜",
      "published": "2025-10-14",
      "duration": 68,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1A24Uz8EhA"
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
      "url": "https://www.bilibili.com/video/BV1W4d3YnEYy/",
      "title": "天津家常辣子鸡丁做法！巨下饭！",
      "author": "摇滚大厨",
      "published": "2025-04-10",
      "duration": 143,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1W4d3YnEYy"
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
      "url": "https://www.bilibili.com/video/BV16FvrBTEBC/",
      "title": "潍坊人认证！这道青椒爆鸡丁才是米饭杀手天花板！鸡丁这样爆炒出来外香里嫩，青椒脆爽解腻，一口下去咸香入味",
      "author": "郑能量好鲁菜",
      "published": "2025-12-28",
      "duration": 168,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV16FvrBTEBC"
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
      "url": "https://www.bilibili.com/video/BV1YBHh6PEcd/",
      "title": "酱爆鸡丁",
      "author": "夏叔有好货",
      "published": "2026-10-03",
      "duration": 162,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1YBHh6PEcd"
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
      "url": "https://www.bilibili.com/video/BV1Th3p66EZZ/",
      "title": "厨房小白也能一次成功的焦糖蚝油鸡翅，甜而不腻超下饭 #焦糖蚝油鸡翅 #鸡翅做法",
      "author": "妹姐家常菜",
      "published": "2026-07-30",
      "duration": 81,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Th3p66EZZ"
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
      "url": "https://www.bilibili.com/video/BV1ixWRz4E8V/",
      "title": "黑椒鸡丁",
      "author": "蔡哥美食",
      "published": "2025-10-21",
      "duration": 101,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ixWRz4E8V"
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
      "url": "https://www.bilibili.com/video/BV13YpY6uEjn/",
      "title": "家常菜鸡肉炖粉条",
      "author": "h孙鹤",
      "published": "2026-10-10",
      "duration": 205,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13YpY6uEjn"
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
      "url": "https://www.bilibili.com/video/BV1bs9UYbEXV/",
      "title": "来重庆一定要吃这道超级过瘾的重庆烧鸡公，芋儿耙糯，鸡肉紧致香糯",
      "author": "猴哥爱做江湖菜",
      "published": "2025-03-08",
      "duration": 115,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1bs9UYbEXV"
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
      "url": "https://www.bilibili.com/video/BV1EShc62EYx/",
      "title": "【媲美饭店的啤酒鸭保姆级教程‼️ 】",
      "author": "村驴",
      "published": "2026-08-27",
      "duration": 252,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1EShc62EYx"
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
      "url": "https://www.bilibili.com/video/BV1DcGnzxEHi/",
      "title": "夏天必吃，四川特色姜爆鸭，这样做仔姜鸭真好吃",
      "author": "周幺姑家常菜",
      "published": "2025-07-08",
      "duration": 165,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1DcGnzxEHi"
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
      "url": "https://www.bilibili.com/video/BV1wPiKBrEAu/",
      "title": "带着我的魔芋烧鸭陪大家跨年啦！感谢大家一直以来的支持和喜欢，爱你们！",
      "author": "杰西不妙厨房s",
      "published": "2025-12-31",
      "duration": 184,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wPiKBrEAu"
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
      "url": "https://www.bilibili.com/video/BV1AusLzfEC4/",
      "title": "酸萝卜老鸭汤是真的香呀，酸爽入味不油腻，天冷来上一碗，暖暖和和",
      "author": "鱼鱼开饭啦",
      "published": "2025-10-24",
      "duration": 84,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1AusLzfEC4"
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
      "url": "https://www.bilibili.com/video/BV1bMuVzoEc8/",
      "title": "三伏天必喝！冬瓜老鸭汤这样做，清热祛湿又滋补，一碗胜过补药！",
      "author": "阿城家常菜",
      "published": "2025-07-11",
      "duration": 83,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1bMuVzoEc8"
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
      "url": "https://www.bilibili.com/video/BV1TqujzvEYb/",
      "title": "海带老鸭汤太好喝了",
      "author": "是个小布丁",
      "published": "2025-07-12",
      "duration": 118,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TqujzvEYb"
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
      "url": "https://www.bilibili.com/video/BV1eDzkYjEPt/",
      "title": "莱因小品-山药老鸭汤",
      "author": "莱因乱弹琴锵锵锵",
      "published": "2024-12-03",
      "duration": 259,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1eDzkYjEPt"
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
      "url": "https://www.bilibili.com/video/BV1PXX8YeEKb/",
      "title": "一把香菇，半只鸭子，做个软烂入味的香菇焖鸭，巨香！",
      "author": "机器猫吃什么",
      "published": "2025-03-24",
      "duration": 125,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PXX8YeEKb"
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
      "url": "https://www.bilibili.com/video/BV1vwN36uE2T/",
      "title": "土豆烧鸭出锅！朋友们来整起！",
      "author": "灶火旁的阿牛",
      "published": "2026-07-13",
      "duration": 77,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1vwN36uE2T"
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
      "url": "https://www.bilibili.com/video/BV1QfgDz3Ei1/",
      "title": "家常芋头烧鸭，酱香浓郁汤汁能拌饭，鸭肉去腥有技巧！",
      "author": "大师的菜",
      "published": "2025-07-01",
      "duration": 226,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1QfgDz3Ei1"
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
      "url": "https://www.bilibili.com/video/BV1RdGJzfE8C/",
      "title": "Y20250708笋干老鸭煲1080",
      "author": "简罡的私房美食",
      "published": "2025-07-08",
      "duration": 80,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1RdGJzfE8C"
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
      "url": "https://www.bilibili.com/video/BV114D5YEEGJ/",
      "title": "萝卜老鸭汤，一口鲜醇暖心田~",
      "author": "小林在学做菜",
      "published": "2024-11-06",
      "duration": 59,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV114D5YEEGJ"
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
      "url": "https://www.bilibili.com/video/BV1P3KWeLEu1/",
      "title": "上海本帮菜-酱鸭腿",
      "author": "一缈阳光-六月",
      "published": "2025-02-13",
      "duration": 120,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1P3KWeLEu1"
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
      "url": "https://www.bilibili.com/video/BV1V7qYB6Ee7/",
      "title": "红烧鸭腿",
      "author": "gowish",
      "published": "2025-12-16",
      "duration": 92,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1V7qYB6Ee7"
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
      "url": "https://www.bilibili.com/video/BV194ckzZEq3/",
      "title": "好吃的家常菜“毛豆烧鸭腿”，做法简单，全家人都爱吃",
      "author": "家宴美食厨房",
      "published": "2026-03-12",
      "duration": 99,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV194ckzZEq3"
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
      "url": "https://www.bilibili.com/video/BV1d6qDYMEQq/",
      "title": "仔姜兔 | 身边的重庆朋友极力推荐的江湖菜！",
      "author": "何时下厨",
      "published": "2024-12-11",
      "duration": 87,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1d6qDYMEQq"
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
      "url": "https://www.bilibili.com/video/BV1s8aA6wEVr/",
      "title": "干香的红烧兔肉太香了，酱香浓郁很入味，下酒又下饭",
      "author": "旺仔汉堡堡",
      "published": "2026-09-24",
      "duration": 65,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1s8aA6wEVr"
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
      "url": "https://www.bilibili.com/video/BV15Cr8YnEtk/",
      "title": "土豆烧兔子",
      "author": "刀哥炒兔",
      "published": "2025-01-13",
      "duration": 100,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15Cr8YnEtk"
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
      "url": "https://www.bilibili.com/video/BV1QPayzgEG2/",
      "title": "重庆江湖菜-尖椒兔",
      "author": "二刀会做菜",
      "published": "2025-09-04",
      "duration": 66,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1QPayzgEG2"
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
      "status": "pending",
      "embed": false,
      "metadataVerified": false
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
      "url": "https://www.bilibili.com/video/BV1ju9mBcE8n/",
      "title": "很多人在家做清蒸鲈鱼，第一步就做错了，今天你就像我这样做，又鲜又嫩，真的特别好吃，做法也非常简单#清蒸鲈鱼",
      "author": "韩小厨爱美食",
      "published": "2026-04-29",
      "duration": 65,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ju9mBcE8n"
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
      "url": "https://www.bilibili.com/video/BV139cvemEqn/",
      "title": "红烧鲈鱼，不用油炸煎鱼不粘锅不破皮，肉质鲜嫩入味不腥不柴，超好吃",
      "author": "董小厨家常菜",
      "published": "2025-01-15",
      "duration": 269,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV139cvemEqn"
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
      "url": "https://www.bilibili.com/video/BV1NFz4B1Ex1/",
      "title": "年夜饭必备！3分钟速通「清蒸多宝鱼」：",
      "author": "任芸丽",
      "published": "2026-01-25",
      "duration": 172,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1NFz4B1Ex1"
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
      "url": "https://www.bilibili.com/video/BV1dGhd68Eos/",
      "title": "红烧带鱼想要软嫩不碎，鲜而不腥细节都在这个视频里了#美食 #热门",
      "author": "刘小欠教做菜7",
      "published": "2026-09-26",
      "duration": 90,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1dGhd68Eos"
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
      "url": "https://www.bilibili.com/video/BV1iuub6AE8M/",
      "title": "外脆里嫩，糖醋带鱼，全家人的最爱",
      "author": "爱做美食的洋咩咩",
      "published": "2026-08-07",
      "duration": 103,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1iuub6AE8M"
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
      "url": "https://www.bilibili.com/video/BV1inYJ6KEES/",
      "title": "干煎带鱼",
      "author": "眼镜蛇1876",
      "published": "2026-09-08",
      "duration": 208,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1inYJ6KEES"
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
      "url": "https://www.bilibili.com/video/BV1Woj1zfEEa/",
      "title": "清蒸鳕鱼做法",
      "author": "美食制作大师",
      "published": "2025-05-26",
      "duration": 54,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Woj1zfEEa"
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
      "url": "https://www.bilibili.com/video/BV181ND6GEDA/",
      "title": "香煎鳕鱼扒，外香里嫩鲜到骨子里",
      "author": "二楼有食神",
      "published": "2026-07-14",
      "duration": 217,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV181ND6GEDA"
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
      "url": "https://www.bilibili.com/video/BV1MNpx6LEbJ/",
      "title": "红烧黄鱼",
      "author": "小梦爱吃饭呀",
      "published": "2026-10-09",
      "duration": 67,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1MNpx6LEbJ"
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
      "url": "https://www.bilibili.com/video/BV1ajgA6sEPj/",
      "title": "谁懂啊！这清蒸黄花鱼也太好吃了吧！🐟",
      "author": "kiwi厨房日记",
      "published": "2026-08-14",
      "duration": 94,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ajgA6sEPj"
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
      "url": "https://www.bilibili.com/video/BV1KNLWzwEpY/",
      "title": "经典搭配之《雪菜黄鱼》",
      "author": "观澜听雨1",
      "published": "2025-04-26",
      "duration": 81,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1KNLWzwEpY"
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
      "url": "https://www.bilibili.com/video/BV1YoH86wE3K/",
      "title": "红烧鲳鱼保姆级教程",
      "author": "大庆是个厨",
      "published": "2026-10-03",
      "duration": 184,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1YoH86wE3K"
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
      "url": "https://www.bilibili.com/video/BV1LqMTzSEBN/",
      "title": "清蒸鲳鱼真的是一道不会失败的菜，做法简单又鲜美，还不用怕吃到刺！",
      "author": "糖油混合物9",
      "published": "2025-06-13",
      "duration": 109,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1LqMTzSEBN"
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
      "url": "https://www.bilibili.com/video/BV1TpSjBjE52/",
      "title": "鲫鱼豆腐汤超详细教程，如何做出奶白浓郁的鱼汤",
      "author": "袁锐-萌新的圆",
      "published": "2025-11-28",
      "duration": 186,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TpSjBjE52"
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
      "url": "https://www.bilibili.com/video/BV1DU61BmEzU/",
      "title": "萝卜丝鲫鱼汤",
      "author": "夏叔有好货",
      "published": "2026-01-31",
      "duration": 95,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1DU61BmEzU"
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
      "url": "https://www.bilibili.com/video/BV15ywzePE5n/",
      "title": "番茄鱼片 | 请大数据推荐给喜欢喝汤的人",
      "author": "何时下厨",
      "published": "2025-01-19",
      "duration": 92,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15ywzePE5n"
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
      "url": "https://www.bilibili.com/video/BV1kt5NzzEBy/",
      "title": "全网最详细的金汤酸菜鱼保姆级教程！",
      "author": "董小厨家常菜",
      "published": "2025-05-08",
      "duration": 232,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1kt5NzzEBy"
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
      "url": "https://www.bilibili.com/video/BV1nNcTe2Ege/",
      "title": "水煮鱼片｜保姆级教程，麻辣鲜香、滑嫩入味！",
      "author": "何时下厨",
      "published": "2025-01-12",
      "duration": 89,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1nNcTe2Ege"
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
      "url": "https://www.bilibili.com/video/BV1FmHR6LETk/",
      "title": "第十六期 剁椒鱼头",
      "author": "菜小厨-菜鸟的菜",
      "published": "2026-10-09",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1FmHR6LETk"
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
      "url": "https://www.bilibili.com/video/BV1Nf5GzaEMa/",
      "title": "高压锅4分钟版本的鱼头炖豆腐，鲜嫩又入味，汤汁浓郁奶白，吃完鱼头再来两碗鱼汤，太满足啦，简单方便又好吃！一定要试试#家常菜 #高压锅鱼头 #鱼头 #鱼头豆腐汤",
      "author": "月月在做饭",
      "published": "2025-05-09",
      "duration": 82,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Nf5GzaEMa"
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
      "url": "https://www.bilibili.com/video/BV1Ym1ZBvE1z/",
      "title": "酱焖鱼的家常做法，酱香浓郁，非常下饭，太好吃了",
      "author": "二婶儿教做菜",
      "published": "2025-11-06",
      "duration": 168,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Ym1ZBvE1z"
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
      "url": "https://www.bilibili.com/video/BV159UAB9EHW/",
      "title": "红鲤鱼与绿鲤鱼，不如整个啤酒鱼",
      "author": "杰西不妙厨房s",
      "published": "2025-11-23",
      "duration": 157,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV159UAB9EHW"
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
      "url": "https://www.bilibili.com/video/BV1Z9NyzQEVu/",
      "title": "豆瓣鱼，四川人喜欢做的一道传统家常菜，鱼肉嫩滑，略带酸甜咸鲜微辣",
      "author": "煮之夫",
      "published": "2025-06-21",
      "duration": 229,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Z9NyzQEVu"
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
      "url": "https://www.bilibili.com/video/BV1hREaz6EBC/",
      "title": "进阶版的家常烧鱼块做法 按照这个法烧出来的鱼肉不仅味道好吃，鱼肉口感更好#家常烧鱼块 #每天分享做菜 #食材新鲜才是硬道理 #真材实料好味道 #来吃鱼",
      "author": "皮蛋湘村记",
      "published": "2025-05-17",
      "duration": 112,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1hREaz6EBC"
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
      "url": "https://www.bilibili.com/video/BV1WMhX6iEDG/",
      "title": "红烧草鱼",
      "author": "黄大维美食",
      "published": "2026-09-26",
      "duration": 219,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1WMhX6iEDG"
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
      "url": "https://www.bilibili.com/video/BV1yytT6YEtX/",
      "title": "一席楚宴重头戏，清蒸武昌鱼，大火汽蒸锁住江鱼本鲜",
      "author": "红厨红菜V",
      "published": "2026-09-01",
      "duration": 98,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1yytT6YEtX"
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
      "url": "https://www.bilibili.com/video/BV1A89HY3EU1/",
      "title": "豉汁蒸鱼腩",
      "author": "江淑琴美食记",
      "published": "2025-03-05",
      "duration": 110,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1A89HY3EU1"
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
      "url": "https://www.bilibili.com/video/BV1ZzQ8YJEKg/",
      "title": "10分钟搞定，早餐吃香煎三文鱼超满足！",
      "author": "胡哥不糊",
      "published": "2025-03-16",
      "duration": 95,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ZzQ8YJEKg"
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
      "url": "https://www.bilibili.com/video/BV1HY5EzCEsZ/",
      "title": "照烧三文鱼，10分钟打造餐厅级美味！",
      "author": "沈老板带你吃",
      "published": "2025-04-18",
      "duration": 80,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1HY5EzCEsZ"
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
      "url": "https://www.bilibili.com/video/BV1Wjuoz3Eti/",
      "title": "自制美食｜一口沦陷的下饭神器 三文鱼豆腐煲🍣",
      "author": "小鹿多吃点",
      "published": "2025-07-19",
      "duration": 67,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Wjuoz3Eti"
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
      "url": "https://www.bilibili.com/video/BV1g3G1zdEKB/",
      "title": "不放番茄酱你是不是做不好油焖大虾啦？最简单的食材，教你做出极限大虾美味！",
      "author": "林述巍JACKLIN",
      "published": "2025-05-01",
      "duration": 139,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1g3G1zdEKB"
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
      "url": "https://www.bilibili.com/video/BV1nEh16yEZP/",
      "title": "“蒸”是一场无声的布局——蒜蓉蒸虾",
      "author": "王叔开小灶",
      "published": "2026-09-25",
      "duration": 184,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1nEh16yEZP"
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
      "url": "https://www.bilibili.com/video/BV16sdrYAE1y/",
      "title": "白灼虾，不要直接下锅煮，分享一下酒店做法，虾肉鲜嫩Q弹不腥不柴",
      "author": "董小厨家常菜",
      "published": "2025-04-13",
      "duration": 102,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV16sdrYAE1y"
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
      "url": "https://www.bilibili.com/video/BV11kGvz9Egg/",
      "title": "天津人爱吃虾，家常做法番茄虾仁，番茄酱汁酸甜开胃，假期安排上",
      "author": "英哥小日子",
      "published": "2025-05-02",
      "duration": 104,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV11kGvz9Egg"
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
      "url": "https://www.bilibili.com/video/BV1grdfBREtF/",
      "title": "简单低脂家常菜，西兰花炒虾仁，清淡营养又美味#西兰花炒虾仁#减脂餐#大人孩子都爱吃",
      "author": "冰糖桔子呀",
      "published": "2026-04-19",
      "duration": 64,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1grdfBREtF"
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
      "url": "https://www.bilibili.com/video/BV13oXQY3EYi/",
      "title": "星级酒店黄瓜炒虾仁做法，虾仁口感滑嫩，颜色白如雪，这味道绝了",
      "author": "大尧美食推荐官",
      "published": "2025-03-01",
      "duration": 120,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13oXQY3EYi"
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
      "url": "https://www.bilibili.com/video/BV1NZMTzKEFS/",
      "title": "这样做的\"芦笋炒虾仁\"绝了、色香味俱全",
      "author": "美食强",
      "published": "2025-06-16",
      "duration": 185,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1NZMTzKEFS"
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
      "url": "https://www.bilibili.com/video/BV1SNkYBjEhH/",
      "title": "腰果虾仁",
      "author": "夏叔有好货",
      "published": "2026-01-19",
      "duration": 93,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SNkYBjEhH"
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
      "url": "https://www.bilibili.com/video/BV1Lp6vBdEjr/",
      "title": "把皇帝御膳、国宴大菜改到普通百姓家庭餐桌的“龙井虾仁”没有河虾、没有好茶一样能做好吃！年夜饭第四十一道它来了……",
      "author": "段小段美食教程",
      "published": "2026-01-30",
      "duration": 220,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Lp6vBdEjr"
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
      "url": "https://www.bilibili.com/video/BV1wxSZBxEih/",
      "title": "duangduang的虾仁蒸蛋",
      "author": "鸭梨食堂",
      "published": "2026-04-06",
      "duration": 103,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wxSZBxEih"
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
      "url": "https://www.bilibili.com/video/BV1wtngzqEK9/",
      "title": "今日减脂菜单——黄瓜虾仁炒鸡蛋，对于中国胃来说，减脂期我也要吃家常菜，这菜特别清爽，真的可以常做。。",
      "author": "给谷先生的减脂餐",
      "published": "2025-09-26",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wtngzqEK9"
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
      "url": "https://www.bilibili.com/video/BV1Pp4C6aEEq/",
      "title": "丝瓜炒虾仁",
      "author": "小圈鱼666",
      "published": "2026-08-29",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Pp4C6aEEq"
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
      "url": "https://www.bilibili.com/video/BV12QoeYsEDs/",
      "title": "简单又好吃的家常菜冬瓜虾仁汤",
      "author": "爱生活的书玉",
      "published": "2025-03-26",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV12QoeYsEDs"
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
      "url": "https://www.bilibili.com/video/BV1qxXDYkEqe/",
      "title": "🔥鲜掉眉毛的虾仁豆腐煲！Q弹虾仁+嫩滑豆腐💦汤汁拌饭绝了🍚",
      "author": "小珠酱美食",
      "published": "2025-03-01",
      "duration": 112,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1qxXDYkEqe"
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
      "url": "https://www.bilibili.com/video/BV1puFSz8EEN/",
      "title": "姜葱炒花甲王够锅气，新春开镬，大吉大利又好味",
      "author": "大麦食记",
      "published": "2026-02-10",
      "duration": 77,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1puFSz8EEN"
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
      "url": "https://www.bilibili.com/video/BV1TZXHBBEK4/",
      "title": "蛤蜊蒸蛋！从小吃到大都不会腻的下饭菜！",
      "author": "冯小厨的菜谱",
      "published": "2026-03-26",
      "duration": 159,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TZXHBBEK4"
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
      "url": "https://www.bilibili.com/video/BV1pLuRzPEQj/",
      "title": "鲜掉眉毛！冬瓜蛤蜊汤10分钟搞定，清爽祛湿三伏必备！",
      "author": "阿城家常菜",
      "published": "2025-07-19",
      "duration": 74,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1pLuRzPEQj"
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
      "url": "https://www.bilibili.com/video/BV1KjLE6uEyt/",
      "title": "当你想吃“蒜苔炒鱿鱼”就把这部视频翻出来",
      "author": "美食强",
      "published": "2026-05-17",
      "duration": 132,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1KjLE6uEyt"
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
      "url": "https://www.bilibili.com/video/BV1HmrkYKEew/",
      "title": "XO酱爆鱿鱼",
      "author": "晴天饲养员",
      "published": "2025-01-13",
      "duration": 96,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1HmrkYKEew"
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
      "url": "https://www.bilibili.com/video/BV1RwAoeUErQ/",
      "title": "芹菜炒鱿鱼，嫩嫩的，弹弹的，鲜香又清爽",
      "author": "奇妞小私厨",
      "published": "2025-02-21",
      "duration": 79,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1RwAoeUErQ"
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
      "url": "https://www.bilibili.com/video/BV1md3NzzEnF/",
      "title": "【麻婆豆腐保姆级教程】",
      "author": "村驴",
      "published": "2025-06-30",
      "duration": 209,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1md3NzzEnF"
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
      "url": "https://www.bilibili.com/video/BV1EyABeMEb3/",
      "title": "【把豆腐做的比肉香 家常豆腐】",
      "author": "村驴",
      "published": "2025-02-19",
      "duration": 223,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1EyABeMEb3"
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
      "url": "https://www.bilibili.com/video/BV1wKKz6PEZR/",
      "title": "【家常菜教程】家常红烧豆腐｜豆腐不容易碎、入味的实用技巧",
      "author": "阿超爱美食",
      "published": "2026-07-19",
      "duration": 90,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wKKz6PEZR"
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
      "url": "https://www.bilibili.com/video/BV1k8iCBEEnH/",
      "title": "鱼香豆腐",
      "author": "夏叔有好货",
      "published": "2026-01-07",
      "duration": 83,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1k8iCBEEnH"
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
      "url": "https://www.bilibili.com/video/BV1Cj2vBHEY7/",
      "title": "最强下饭菜！肉末豆腐超详细教程，真的巨好吃",
      "author": "袁锐-萌新的圆",
      "published": "2025-12-04",
      "duration": 182,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Cj2vBHEY7"
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
      "url": "https://www.bilibili.com/video/BV1BbjR6fEos/",
      "title": "蟹黄豆腐家常做法",
      "author": "大碗干饭的仙女",
      "published": "2026-06-24",
      "duration": 68,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1BbjR6fEos"
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
      "url": "https://www.bilibili.com/video/BV1SBeU6gEqt/",
      "title": "老天津卫传统锅塌豆腐，塌而不烂，这一口是老一辈的味道",
      "author": "老解的舅舅是厨子",
      "published": "2026-09-19",
      "duration": 96,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SBeU6gEqt"
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
      "url": "https://www.bilibili.com/video/BV1jLUzBxEwM/",
      "title": "白菜炖豆腐，粉皮黏糯入味，太下饭了❗️",
      "author": "是米粒MiNi",
      "published": "2025-11-27",
      "duration": 66,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1jLUzBxEwM"
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
      "url": "https://www.bilibili.com/video/BV1ZzpR6CEfJ/",
      "title": "今天吃什么:番茄炖豆腐～",
      "author": "清静安食",
      "published": "2026-10-12",
      "duration": 70,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ZzpR6CEfJ"
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
      "url": "https://www.bilibili.com/video/BV1fF3D6vETx/",
      "title": "家常菜|葱烧香菇豆腐煲！鲜香十足，捞饭一绝！",
      "author": "平凡的菜PF",
      "published": "2026-08-02",
      "duration": 66,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1fF3D6vETx"
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
      "url": "https://www.bilibili.com/video/BV1J6WyzTEtA/",
      "title": "家常菜的魅力，白菜粉条炖豆腐，简单又下饭！",
      "author": "食研记",
      "published": "2025-10-17",
      "duration": 62,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1J6WyzTEtA"
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
      "url": "https://www.bilibili.com/video/BV1ZxJDzKEFP/",
      "title": "豆腐的神仙吃法！肉馅鲜嫩豆腐滑，客家酿豆腐！",
      "author": "特厨做饭_",
      "published": "2025-09-24",
      "duration": 235,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ZxJDzKEFP"
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
      "url": "https://www.bilibili.com/video/BV16ih9zjECQ/",
      "title": "豆腐蒸蛋",
      "author": "夏叔厨房",
      "published": "2025-08-30",
      "duration": 76,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV16ih9zjECQ"
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
      "url": "https://www.bilibili.com/video/BV18NSvB6Eo4/",
      "title": "央妈推荐的紫菜虾皮豆腐汤，简单又营养",
      "author": "nanana1231",
      "published": "2025-11-30",
      "duration": 75,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV18NSvB6Eo4"
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
      "url": "https://www.bilibili.com/video/BV1Vt8AzdEXa/",
      "title": "鲍汁豆腐的做法",
      "author": "崽崽做菜",
      "published": "2025-07-24",
      "duration": 67,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Vt8AzdEXa"
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
      "url": "https://www.bilibili.com/video/BV1uPTMzMEWr/",
      "title": "葱烧豆腐",
      "author": "袁锐-萌新的圆",
      "published": "2025-06-06",
      "duration": 229,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1uPTMzMEWr"
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
      "url": "https://www.bilibili.com/video/BV1qDtzzfERt/",
      "title": "阿姨教你做香煎豆腐，教你怎么煎嫩豆腐",
      "author": "荣妈家书",
      "published": "2025-08-07",
      "duration": 94,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1qDtzzfERt"
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
      "url": "https://www.bilibili.com/video/BV1o7oqYLETo/",
      "title": "肉末日本豆腐，豆腐滑嫩，浓郁的肉末汤汁拌米饭真的绝了！",
      "author": "三颗小板栗的晚餐",
      "published": "2025-03-26",
      "duration": 43,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1o7oqYLETo"
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
      "status": "pending",
      "embed": false,
      "metadataVerified": false
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
      "url": "https://www.bilibili.com/video/BV1DCq2YSEfX/",
      "title": "皮蛋豆腐汤你一定要试试，做法简单，味道鲜美，营养又好喝",
      "author": "洋弟爱美食",
      "published": "2024-12-11",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1DCq2YSEfX"
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
      "url": "https://www.bilibili.com/video/BV1x2pd6ZENB/",
      "title": "怎么做芹菜炒香干？",
      "author": "周炯亮",
      "published": "2026-10-12",
      "duration": 78,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1x2pd6ZENB"
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
      "url": "https://www.bilibili.com/video/BV1oUaj6xEQ7/",
      "title": "青椒炒香干",
      "author": "跟着伯通吃好饭",
      "published": "2026-09-30",
      "duration": 179,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1oUaj6xEQ7"
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
      "url": "https://www.bilibili.com/video/BV1WoF6ziEAN/",
      "title": "家常菜第337期，蒜苗炒香干是一道简单快手的家常菜，蒜苗的清香搭配香干的豆香，口感鲜嫩又下饭。",
      "author": "过早荆州",
      "published": "2026-02-06",
      "duration": 38,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1WoF6ziEAN"
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
      "url": "https://www.bilibili.com/video/BV1mMcUzNEcr/",
      "title": "韭菜炒香干",
      "author": "王厨的小店",
      "published": "2026-03-13",
      "duration": 110,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mMcUzNEcr"
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
      "url": "https://www.bilibili.com/video/BV1rZXKBpEvi/",
      "title": "以前吃木桶饭最爱点的香干肉丝，加点榨菜丝更好吃了！原来叫炒三丝！这道菜就得配着米饭吃，香香咸咸鲜鲜的，超级好吃！#炒三丝",
      "author": "小鱼美食11",
      "published": "2026-03-27",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1rZXKBpEvi"
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
      "url": "https://www.bilibili.com/video/BV1S5jbzWE1K/",
      "title": "五香卤豆干",
      "author": "小乔的美好食光",
      "published": "2025-05-24",
      "duration": 95,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1S5jbzWE1K"
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
      "url": "https://www.bilibili.com/video/BV1KXhw6eE1r/",
      "title": "【腐竹】香菇焖腐竹",
      "author": "按时吃饭呢",
      "published": "2026-08-27",
      "duration": 60,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1KXhw6eE1r"
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
      "url": "https://www.bilibili.com/video/BV1JvpR67E2h/",
      "title": "重生之我靠腐竹炒肉拿捏闽圈大小姐",
      "author": "鱼贝贝美食频道",
      "published": "2026-10-12",
      "duration": 76,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1JvpR67E2h"
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
      "url": "https://www.bilibili.com/video/BV1H6N8edE7e/",
      "title": "一盘拼凑出来的青椒木耳炒腐竹，做法简单又好吃，还挺下饭的",
      "author": "可乐小丸子呀",
      "published": "2025-02-07",
      "duration": 79,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1H6N8edE7e"
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
      "url": "https://www.bilibili.com/video/BV1Lxe8z2ESA/",
      "title": "给同事带饭第3天，我吃啥她就吃啥，一顿收10元贵吗？今天吃豆角腐竹焖牛腩",
      "author": "小吴的打工便当",
      "published": "2025-08-22",
      "duration": 95,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": true,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Lxe8z2ESA"
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
      "url": "https://www.bilibili.com/video/BV1xvELzJEvh/",
      "title": "【拉丝番茄炒蛋】丝状的鸡蛋裹满浓郁茄汁",
      "author": "村驴",
      "published": "2025-05-12",
      "duration": 161,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1xvELzJEvh"
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
      "url": "https://www.bilibili.com/video/BV1uWGJzXE8a/",
      "title": "经典家常菜“韭菜炒鸡蛋”就这样做，味道绝了！",
      "author": "美食强",
      "published": "2025-07-08",
      "duration": 140,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1uWGJzXE8a"
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
      "url": "https://www.bilibili.com/video/BV1EGpM62EeR/",
      "title": "第一视角展现最好吃青椒炒蛋做法",
      "author": "十六年湘菜厨师陈伢子",
      "published": "2026-10-07",
      "duration": 90,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1EGpM62EeR"
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
      "url": "https://www.bilibili.com/video/BV1NpB1YgE4x/",
      "title": "洋葱炒鸡蛋，下饭神器",
      "author": "没吃过冻梨呀",
      "published": "2024-11-23",
      "duration": 63,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1NpB1YgE4x"
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
      "url": "https://www.bilibili.com/video/BV1LT7DzaEdM/",
      "title": "家常版的苦瓜炒鸡蛋鲜美清爽，做法简单",
      "author": "惠姐爱做饭",
      "published": "2025-06-02",
      "duration": 67,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1LT7DzaEdM"
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
      "url": "https://www.bilibili.com/video/BV1vrGu6JEeC/",
      "title": "丝瓜炒鸡蛋，夏天吃清淡爽口，软嫩鲜甜，做法还巨简单。",
      "author": "爷俩儿好菜",
      "published": "2026-08-01",
      "duration": 75,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1vrGu6JEeC"
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
      "url": "https://www.bilibili.com/video/BV1XVDsB7EwB/",
      "title": "黄瓜炒蛋别直接下锅，多加一步，黄瓜脆嫩，鸡蛋鲜香！",
      "author": "雷的美食",
      "published": "2026-04-10",
      "duration": 115,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1XVDsB7EwB"
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
      "url": "https://www.bilibili.com/video/BV1tr6KY6EHJ/",
      "title": "很难想象这道“大葱木耳炒鸡蛋”会这么好吃！",
      "author": "美食强",
      "published": "2024-12-02",
      "duration": 149,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1tr6KY6EHJ"
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
      "url": "https://www.bilibili.com/video/BV1G3po6rE1N/",
      "title": "来上这么一份秋葵炒鸡蛋，小朋友们都超级爱吃的呢，跟着我这样做起来，简单好上手",
      "author": "木易女尼1",
      "published": "2026-10-12",
      "duration": 114,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1G3po6rE1N"
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
      "url": "https://www.bilibili.com/video/BV1Rd9LBBEQY/",
      "title": "香椿炒鸡蛋",
      "author": "夏叔有好货",
      "published": "2026-04-01",
      "duration": 93,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Rd9LBBEQY"
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
      "url": "https://www.bilibili.com/video/BV1kGHQzQE6f/",
      "title": "家庭小厨房：黄花菜炒鸡蛋",
      "author": "茹菓说1114",
      "published": "2025-09-10",
      "duration": 56,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1kGHQzQE6f"
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
      "url": "https://www.bilibili.com/video/BV1UXCJYnEfB/",
      "title": "【10分钟搞定 下饭神菜鱼香鸡蛋】",
      "author": "村驴",
      "published": "2024-12-27",
      "duration": 139,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1UXCJYnEfB"
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
      "url": "https://www.bilibili.com/video/BV1Anep6oEaL/",
      "title": "虎皮鸡蛋这样做，香糯入味超下饭",
      "author": "独立美食博主",
      "published": "2026-09-15",
      "duration": 46,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Anep6oEaL"
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
      "url": "https://www.bilibili.com/video/BV153oaBsEf3/",
      "title": "韭黄炒鸡蛋成功关键在于鸡蛋要嫩，韭黄要脆！",
      "author": "callia爱吃鬼",
      "published": "2026-04-23",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV153oaBsEf3"
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
      "url": "https://www.bilibili.com/video/BV1bvKt6yECE/",
      "title": "【不一样的西红柿鸡蛋汤‼️酸辣清爽又很简单‼️】",
      "author": "村驴",
      "published": "2026-07-21",
      "duration": 191,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1bvKt6yECE"
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
      "url": "https://www.bilibili.com/video/BV13J7j65EjG/",
      "title": "无敌下饭王地三鲜，绝对是素菜里的天花板！我妈这做法简单还少油，您一定要试试！",
      "author": "孩儿他姥姥a",
      "published": "2026-06-28",
      "duration": 71,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV13J7j65EjG"
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
      "url": "https://www.bilibili.com/video/BV1aegF6jEcq/",
      "title": "【酸甜微辣软软糯糯的鱼香茄子‼️免油炸‼️】",
      "author": "村驴",
      "published": "2026-08-14",
      "duration": 218,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1aegF6jEcq"
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
      "url": "https://www.bilibili.com/video/BV1XCmyYMExC/",
      "title": "【不用油炸不用蒸】3克油4分钟搞定软烂茄子！肉末茄子省油版来了！",
      "author": "村驴",
      "published": "2024-11-11",
      "duration": 162,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1XCmyYMExC"
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
      "url": "https://www.bilibili.com/video/BV1mugkzkEdk/",
      "title": "今天吃「蒜蓉蒸茄子」蒜香入味，香气飞起！",
      "author": "森炉饭堂",
      "published": "2025-07-09",
      "duration": 86,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mugkzkEdk"
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
      "url": "https://www.bilibili.com/video/BV1r5eEzsEhJ/",
      "title": "甜酱烧茄子教程、有手就会",
      "author": "梦老九小号",
      "published": "2025-08-24",
      "duration": 62,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1r5eEzsEhJ"
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
      "url": "https://www.bilibili.com/video/BV1R2t96mEJB/",
      "title": "土豆炖茄子，炖出了家的味道，这菜别的毛病没有，就是嘎嘎费米饭！",
      "author": "爷俩儿好菜",
      "published": "2026-09-03",
      "duration": 80,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1R2t96mEJB"
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
      "url": "https://www.bilibili.com/video/BV1zkYsziEXu/",
      "title": "好吃到没人可以拒绝，虎皮青椒保姆级教程",
      "author": "袁锐-萌新的圆",
      "published": "2025-08-18",
      "duration": 210,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1zkYsziEXu"
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
      "url": "https://www.bilibili.com/video/BV1AHk1YyEH5/",
      "title": "【绝味酸辣土豆丝】超过大多数饭店的味道",
      "author": "村驴",
      "published": "2024-12-20",
      "duration": 155,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1AHk1YyEH5"
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
      "url": "https://www.bilibili.com/video/BV1UhMMzkEqi/",
      "title": "当你想吃“醋溜土豆丝”就把这部视频翻出来",
      "author": "美食强",
      "published": "2025-06-13",
      "duration": 180,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1UhMMzkEqi"
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
      "url": "https://www.bilibili.com/video/BV1vC6oBDEuF/",
      "title": "吃一口就沦陷的干锅土豆片！香香辣辣的也太好吃了！",
      "author": "甜娜酱的每一餐",
      "published": "2026-01-11",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1vC6oBDEuF"
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
      "url": "https://www.bilibili.com/video/BV1oZLgz7EmH/",
      "title": "土豆炖豆角",
      "author": "南瓜胡萝卜丝",
      "published": "2025-04-24",
      "duration": 63,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1oZLgz7EmH"
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
      "url": "https://www.bilibili.com/video/BV1TBGg63ESB/",
      "title": "干煸四季豆保姆级教学",
      "author": "侯大厨不炒菜",
      "published": "2026-08-01",
      "duration": 78,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TBGg63ESB"
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
      "url": "https://www.bilibili.com/video/BV1pcaE6TEVP/",
      "title": "【家常菜】肉末四季豆｜万能下饭菜，拌饭绝了！",
      "author": "屋哩食记",
      "published": "2026-09-29",
      "duration": 66,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1pcaE6TEVP"
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
      "url": "https://www.bilibili.com/video/BV1FAxLzoEmY/",
      "title": "超级下饭且健康的美食，橄榄菜四季豆～",
      "author": "小杨de厨房",
      "published": "2025-10-06",
      "duration": 47,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1FAxLzoEmY"
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
      "url": "https://www.bilibili.com/video/BV1gTScB3Ewv/",
      "title": "蒜蓉西兰花这样做才好吃",
      "author": "小厨大亮",
      "published": "2025-11-29",
      "duration": 85,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1gTScB3Ewv"
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
      "url": "https://www.bilibili.com/video/BV1uWgA6DE7f/",
      "title": "今日美食：清炒西兰花",
      "author": "我是安富贵儿呀",
      "published": "2026-08-14",
      "duration": 68,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1uWgA6DE7f"
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
      "url": "https://www.bilibili.com/video/BV16BMR65Ev4/",
      "title": "打工人带饭第44天‖今天是西兰花炒胡萝卜",
      "author": "扁扁扁减肥记录",
      "published": "2026-08-03",
      "duration": 33,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV16BMR65Ev4"
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
      "url": "https://www.bilibili.com/video/BV1mf6qYbEtc/",
      "title": "清炒花菜，花菜这样做营养全保留，简单还好吃。",
      "author": "高家少爷的小厨房",
      "published": "2025-01-02",
      "duration": 66,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mf6qYbEtc"
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
      "url": "https://www.bilibili.com/video/BV1V5HD6HEPH/",
      "title": "跟老师傅学的干锅花菜，不过油版本",
      "author": "毕竟王员外",
      "published": "2026-10-08",
      "duration": 142,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1V5HD6HEPH"
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
      "url": "https://www.bilibili.com/video/BV1q6nyzxE9L/",
      "title": "中秋节做一道国宴番茄花菜，颜色好看，酸甜浓郁，老人小孩都喜欢。",
      "author": "爷俩儿好菜",
      "published": "2025-09-30",
      "duration": 74,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1q6nyzxE9L"
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
      "url": "https://www.bilibili.com/video/BV1mAGjzBEaZ/",
      "title": "【2分钟爆炒出饭店味！手撕包菜】",
      "author": "村驴",
      "published": "2025-07-08",
      "duration": 134,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mAGjzBEaZ"
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
      "url": "https://www.bilibili.com/video/BV1SPqHYgE52/",
      "title": "【醋溜白菜 精准比例拿捏】",
      "author": "村驴",
      "published": "2024-12-08",
      "duration": 86,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SPqHYgE52"
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
      "url": "https://www.bilibili.com/video/BV1681pYDEUC/",
      "title": "【家常味就是幸福味】猪肉白菜炖粉条！",
      "author": "村驴",
      "published": "2024-10-26",
      "duration": 121,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1681pYDEUC"
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
      "url": "https://www.bilibili.com/video/BV15bRMYtEwC/",
      "title": "用皮蛋和咸鸭蛋就能做出巨好喝的上汤娃娃菜，汤鲜味美有营养",
      "author": "董小厨家常菜",
      "published": "2025-03-10",
      "duration": 68,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15bRMYtEwC"
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
      "url": "https://www.bilibili.com/video/BV1PBkeBCEB5/",
      "title": "年夜饭做一道“蒜蓉粉丝娃娃菜”全家竖起大拇指",
      "author": "美食强",
      "published": "2026-01-21",
      "duration": 153,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PBkeBCEB5"
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
      "url": "https://www.bilibili.com/video/BV1wD6LYxESd/",
      "title": "“香菇油菜”年夜饭做一道全家都会给你竖起大拇指",
      "author": "美食强",
      "published": "2024-12-31",
      "duration": 191,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1wD6LYxESd"
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
      "url": "https://www.bilibili.com/video/BV1tyHQ6SECU/",
      "title": "蚝油生菜",
      "author": "黎叔教做菜",
      "published": "2026-10-08",
      "duration": 61,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1tyHQ6SECU"
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
      "url": "https://www.bilibili.com/video/BV1zBYa6GETt/",
      "title": "第一视角展现蒜蓉空心菜加水炒炒法",
      "author": "十六年湘菜厨师陈伢子",
      "published": "2026-09-13",
      "duration": 60,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1zBYa6GETt"
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
      "url": "https://www.bilibili.com/video/BV1i7hq65ExC/",
      "title": "不超10元搞定一餐（1）｜今日花费2.8元，清炒莴笋！",
      "author": "胡扯日记",
      "published": "2026-09-21",
      "duration": 62,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1i7hq65ExC"
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
      "url": "https://www.bilibili.com/video/BV1GxeG6CENt/",
      "title": "简单清爽纯素家常菜「莴笋炒木耳」",
      "author": "素食小老弟",
      "published": "2026-09-17",
      "duration": 67,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1GxeG6CENt"
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
      "url": "https://www.bilibili.com/video/BV1SE1xBNEqp/",
      "title": "颜值与味道并存的一道菜，荷塘小炒，特别清脆爽口，口感丰富，做法又超级简单，一定要试试呀，大小朋友都爱吃#家常菜 #荷塘小炒 #",
      "author": "月月在做饭",
      "published": "2025-11-05",
      "duration": 71,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1SE1xBNEqp"
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
      "url": "https://www.bilibili.com/video/BV1tVHd6tEug/",
      "title": "三小只今天做清炒藕片",
      "author": "HTB天际",
      "published": "2026-10-09",
      "duration": 76,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1tVHd6tEug"
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
      "url": "https://www.bilibili.com/video/BV1HTLyznEsx/",
      "title": "没胃口的时候就做这个酸辣藕丁，酸辣脆爽，简单好吃又下饭",
      "author": "洋弟爱美食",
      "published": "2025-04-28",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1HTLyznEsx"
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
      "url": "https://www.bilibili.com/video/BV1ih2ZBgETJ/",
      "title": "莲藕炒肉片",
      "author": "行云流水的天地",
      "published": "2025-12-07",
      "duration": 262,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ih2ZBgETJ"
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
      "url": "https://www.bilibili.com/video/BV1iwCpBaEfa/",
      "title": "湖北特色菜之干煸藕丝。",
      "author": "小黄和小小王",
      "published": "2025-11-13",
      "duration": 89,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1iwCpBaEfa"
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
      "url": "https://www.bilibili.com/video/BV1gVXPYKEBN/",
      "title": "清炒山药片",
      "author": "老妈家常菜-湖北",
      "published": "2025-03-20",
      "duration": 79,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1gVXPYKEBN"
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
      "url": "https://www.bilibili.com/video/BV1oZF1zgEWQ/",
      "title": "山药炒木耳别乱做！记住这1招，脆嫩不发黑超下饭",
      "author": "鲁大钱",
      "published": "2026-02-10",
      "duration": 116,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1oZF1zgEWQ"
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
      "url": "https://www.bilibili.com/video/BV1PZTYzMEWy/",
      "title": "这道\"山药木耳炒肉\"一上桌、今天又是两碗饭",
      "author": "美食强",
      "published": "2025-06-09",
      "duration": 219,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PZTYzMEWy"
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
      "url": "https://www.bilibili.com/video/BV1N9QwB1ErY/",
      "title": "简单做又好吃的蒜香南瓜煲！！",
      "author": "文文一文",
      "published": "2026-04-10",
      "duration": 35,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1N9QwB1ErY"
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
      "url": "https://www.bilibili.com/video/BV1TdgK6xE33/",
      "title": "空气炸锅❗️咸蛋黄焗南瓜🔥怎么能这么好吃",
      "author": "冰哥下厨了",
      "published": "2026-08-14",
      "duration": 92,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TdgK6xE33"
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
      "url": "https://www.bilibili.com/video/BV17BM3zvEyK/",
      "title": "清蒸南瓜，软糯香甜增肌减脂，我们家孩子特别爱吃",
      "author": "水中月的美食日记",
      "published": "2025-06-10",
      "duration": 75,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV17BM3zvEyK"
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
      "url": "https://www.bilibili.com/video/BV15yMCzDE2h/",
      "title": "【几块钱在家做出饭店味的红烧冬瓜】",
      "author": "村驴",
      "published": "2025-06-14",
      "duration": 106,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV15yMCzDE2h"
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
      "url": "https://www.bilibili.com/video/BV1H8QKBmEWK/",
      "title": "跟着豆包学做饭之蚝油蒜末冬瓜",
      "author": "小白小新学做饭",
      "published": "2026-04-11",
      "duration": 146,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1H8QKBmEWK"
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
      "url": "https://www.bilibili.com/video/BV1kwk2YjEbA/",
      "title": "吃腻了山珍海味？试试这道清爽到爆的冬瓜海带汤",
      "author": "齐善素食",
      "published": "2024-12-21",
      "duration": 237,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1kwk2YjEbA"
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
      "url": "https://www.bilibili.com/video/BV1h2hV6TEhV/",
      "title": "简单快速菜：虾皮冬瓜汤",
      "author": "黄脸婆555",
      "published": "2026-08-25",
      "duration": 33,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1h2hV6TEhV"
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
      "url": "https://www.bilibili.com/video/BV1ZoNwe3E2E/",
      "title": "普通的饭菜都是家的味道！蚝油杏鲍菇！！！",
      "author": "周腊腊",
      "published": "2025-02-04",
      "duration": 62,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1ZoNwe3E2E"
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
      "url": "https://www.bilibili.com/video/BV1EYUQBaEyD/",
      "title": "超级好吃的手撕杏鲍菇，不水煮不油炸的简单做法！干香美味！",
      "author": "夏妈厨房Bili",
      "published": "2025-11-25",
      "duration": 137,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1EYUQBaEyD"
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
      "url": "https://www.bilibili.com/video/BV1PftB6sE8e/",
      "title": "拒绝重油饮食！小白也能搞定的蒜香煎杏鲍菇教程来啦",
      "author": "西班牙橄榄油",
      "published": "2026-09-04",
      "duration": 60,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1PftB6sE8e"
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
      "url": "https://www.bilibili.com/video/BV1n64kzgEgK/",
      "title": "简单的快手菜，素炒口蘑 鲜香嫩滑，给肉都不换！",
      "author": "食研记",
      "published": "2025-10-13",
      "duration": 48,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1n64kzgEgK"
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
      "url": "https://www.bilibili.com/video/BV1j3HX6wEJX/",
      "title": "打工人｜今天吃蒜蓉金针菇",
      "author": "小明的私厨",
      "published": "2026-10-11",
      "duration": 138,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1j3HX6wEJX"
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
      "url": "https://www.bilibili.com/video/BV1m6XsB2Efe/",
      "title": "素食-油焖笋 ，简单解锁油焖笋的美味做法",
      "author": "璞植物料理主厨-杭州",
      "published": "2026-03-26",
      "duration": 69,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1m6XsB2Efe"
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
      "url": "https://www.bilibili.com/video/BV1zUzPBCEsr/",
      "title": "雪菜炒冬笋的制作",
      "author": "殷晏云梦竹简",
      "published": "2026-01-23",
      "duration": 276,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1zUzPBCEsr"
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
      "url": "https://www.bilibili.com/video/BV1cueG6sEnp/",
      "title": "家常菜 | 茭白炒毛豆",
      "author": "起初蔬食",
      "published": "2026-09-17",
      "duration": 73,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1cueG6sEnp"
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
      "url": "https://www.bilibili.com/video/BV1mvTC6XEey/",
      "title": "夏天的味道，都藏在这盘咸鲜醇香的雪菜毛豆里了",
      "author": "简罡的私房美食",
      "published": "2026-07-05",
      "duration": 77,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1mvTC6XEey"
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
      "url": "https://www.bilibili.com/video/BV1TbrSYaEUV/",
      "title": "清炒西葫芦（普通家常菜）",
      "author": "是燕小猪",
      "published": "2025-01-07",
      "duration": 238,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TbrSYaEUV"
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
      "url": "https://www.bilibili.com/video/BV1d5an6KErX/",
      "title": "西葫芦炒鸡蛋",
      "author": "冫馬JCC",
      "published": "2026-09-29",
      "duration": 89,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1d5an6KErX"
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
      "url": "https://www.bilibili.com/video/BV14zmvB8E4Z/",
      "title": "清炒丝瓜这样做才好吃",
      "author": "小厨大亮",
      "published": "2025-12-14",
      "duration": 71,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV14zmvB8E4Z"
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
      "url": "https://www.bilibili.com/video/BV1TEUnYwE4h/",
      "title": "561 洋葱木耳炒丝瓜 创新无油烟健康做菜方法 调味窍门 评论告知 受益匪浅",
      "author": "百姓美食家厨",
      "published": "2024-11-18",
      "duration": 95,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1TEUnYwE4h"
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
      "url": "https://www.douyin.com/video/7628923757347884328",
      "title": "炒苦瓜别只会加盐，黄金四步法",
      "author": "大厨阿斗",
      "published": "2026-04-15",
      "duration": 240,
      "platform": "抖音",
      "embed": true,
      "metadataVerified": true,
      "largeDish": false,
      "source": "https://open.douyin.com/api/douyin/v1/video/get_iframe_by_video?video_id=7628923757347884328"
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
      "url": "https://www.bilibili.com/video/BV1GTJV6yEqc/",
      "title": "夏天必吃干煸苦瓜做法，清爽解腻超适配三餐",
      "author": "周幺姑家常菜",
      "published": "2026-06-16",
      "duration": 107,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1GTJV6yEqc"
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
      "url": "https://www.bilibili.com/video/BV1MfX5B9Ec7/",
      "title": "超级香的蒜蓉秋葵",
      "author": "啊张佳味",
      "published": "2026-03-28",
      "duration": 38,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": true,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1MfX5B9Ec7"
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
      "url": "https://www.bilibili.com/video/BV1bWdqBoENW/",
      "title": "春日低卡低脂菜分享｜芦笋炒口蘑",
      "author": "煲汤的牙米",
      "published": "2026-04-17",
      "duration": 105,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1bWdqBoENW"
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
      "url": "https://www.bilibili.com/video/BV1Kb22YYEEm/",
      "title": "经常给家人做这个素炒三丁！做法简单，营养丰富！",
      "author": "夏叔有好货",
      "published": "2024-10-15",
      "duration": 122,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1Kb22YYEEm"
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
      "url": "https://www.bilibili.com/video/BV1xjNge6EK1/",
      "title": "【国民下饭神菜 炒合菜】在家轻松做出饭店味！",
      "author": "村驴",
      "published": "2025-02-08",
      "duration": 125,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1xjNge6EK1"
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
      "url": "https://www.bilibili.com/video/BV1JMAHeZE6Z/",
      "title": "春天吃芽菜，在家做这个豆芽炒粉丝，营养丰富做法简单！别提多香了！#豆芽炒粉条 #春饼卷饼 #春饼卷菜",
      "author": "夏叔有好货",
      "published": "2025-02-20",
      "duration": 71,
      "platform": "哔哩哔哩",
      "embed": true,
      "metadataVerified": true,
      "durationException": false,
      "largeDish": false,
      "source": "https://api.bilibili.com/x/web-interface/view?bvid=BV1JMAHeZE6Z"
    }
  }
];
