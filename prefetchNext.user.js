// ==UserScript==
// @name         E站预加载下一页
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @license      GPL-3.0
// @description  自动预加载E站下一页画廊图片资源，提升浏览流畅度
// @author       ShineByPupil
// @match        *://exhentai.org/*
// @icon data:image/png;base64,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
// @grant        none
// ==/UserScript==

;(async function () {
  'use strict' // 启用严格模式

  // 兼容性处理：requestIdleCallback 降级方案
  const idleCallback =
    window.requestIdleCallback ||
    function (cb) {
      return setTimeout(
        () =>
          cb({
            didTimeout: false, // 模拟 idle 回调对象
            timeRemaining: () => 15, // 至少保证15ms剩余时间
          }),
        500,
      ) // 延迟500ms作为降级处理
    }

  // 在空闲时段预加载下一页图片
  idleCallback(async (deadline) => {
    try {
      // 兼容性检查：确保存在 nexturl 属性
      if (!window.nexturl) {
        return console.warn('[预加载] 没有找到 nexturl 参数')
      }

      // 获取下一页内容
      const response = await fetch(window.nexturl)
      if (!response.ok) throw new Error(`HTTP 错误 ${response.status}`)

      // 解析HTML文档
      const html = await response.text()
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      // 提取所有非空图片地址
      const imageUrls = new Set( // 使用 Set 去重
        [...doc.querySelectorAll('img[src]')]
          .map((img) => img.src)
          .filter((src) => src.trim().length > 0),
      )

      // 创建文档片段批量插入
      const fragment = document.createDocumentFragment()
      imageUrls.forEach((url) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = url
        fragment.appendChild(link)
      })

      // 插入到<head>中触发预加载
      document.head.appendChild(fragment)

      console.log(`[预加载] 预加载了 ${imageUrls.size} 张图片`, imageUrls)
    } catch (error) {
      console.error('[预加载] 发生错误:', error)
      // 可在此添加错误上报逻辑
    }
  })
})()
