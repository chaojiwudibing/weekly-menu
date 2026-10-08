# 一周菜单

一个用来**直接打开一周菜单网页**的轻量 Codex skill。

安装后对 Codex 说：

> 用 $weekly-menu 打开一周菜单。

Codex 会打开 [一周菜单在线网页](https://bruces-menu.ys5ng2gcbz.workers.dev/)。随后在网页中转盘选菜、安排七天主菜、生成分类采购清单。也可以不安装，直接点击链接使用。

## 安装到 Codex

需要已安装 Codex 和 Git。

macOS / Linux：

```sh
mkdir -p ~/.codex/skills
git clone https://github.com/chaojiwudibing/weekly-menu.git ~/.codex/skills/weekly-menu
```

Windows PowerShell：

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex\skills" | Out-Null
git clone https://github.com/chaojiwudibing/weekly-menu.git "$env:USERPROFILE\.codex\skills\weekly-menu"
```

若配置了自定义 CODEX_HOME，请安装到其中的 skills/weekly-menu。目录已存在时不要覆盖，确认它是本仓库后运行 `git -C <安装目录> pull --ff-only`。安装后开启新的 Codex 会话；若尚未发现 skill，重启 Codex。

这是标准 SKILL.md 包装，其他支持此格式的工具需按各自方式安装，未逐一验证兼容性。环境没有浏览器打开能力时，skill 返回可点击链接。

## 网页里可以做什么

- 300道家常菜；选择50、100、200或300道候选，每道候选对应真实转盘扇区。
- 按食材类别、单人份最高50元预算、下厨时间筛选，查看做法并加入本周。
- 七天主菜安排；每次点击“随机一周”都会重新安排整周并更新采购清单；同名食材按类别合并克数，支持1–4人份换算、勾选和复制。
- 电脑端两屏布局，页面到采购清单结束；小屏按内容适配。

本 skill 只负责打开网站，不在聊天里另外计算菜单。个人菜单存于当前浏览器，不上传到本 GitHub 仓库，也不会在设备间自动同步。需要联网访问在线页面；价格是参考估算，菜单不是完整营养处方。次日带饭需及时冷藏、冷链携带和充分复热，详见菜谱。

## 网页源码

根目录保留静态网页源码，无构建依赖。双击 index.html 可本地打开，或运行 `python3 -m http.server 8765 --bind 127.0.0.1` 后访问 http://127.0.0.1:8765/ 。复制清单建议通过 localhost 或 HTTPS 使用。
