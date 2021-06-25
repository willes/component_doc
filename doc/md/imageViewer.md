# 图片预览
> 图片预览调用示例

使用了第三方插件，访问这里：<a href="/imageViewer" target="_blank">imageViewer</a>查看示例

## 使用

```vue
<template>
  <div>
    <viewer :images="list">
      <img
        v-for="(item,index) in list"
        :src="item.preViewUrl"
        :key="index"
        width="100"
        height="100"
      >
    </viewer>
  </div>
</template>

<script>
import Vue from 'vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
export default {
  name: 'ImageViewer',
  data () {
    return {
      list: [
        {
          "businessId": "61101097495003137",
          "materialName": "抽象派艺术020",
          "preViewUrl": "http://test-1251330838.cos.ap-chengdu.myqcloud.com/1001/20216/175871072267424/%E6%8A%BD%E8%B1%A1%E6%B4%BE%E8%89%BA%E6%9C%AF020.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDl9KmytuSO5Wk12b8qJVSBlDQQChwIcx3%26q-sign-time%3D1623998466%3B1624084866%26q-key-time%3D1623998466%3B1624084866%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3De54548f6729b4362391345ebcc798b71f5e24b20",
          "coverImgUrl": null,
          "groupName": null,
          "groupBizId": 0,
          "attribute": {
            "type": "IMAGE",
            "width": 1680,
            "height": 1050
          },
          "suffix": "jpg"
        },
        {
          "businessId": "61101097495003136",
          "materialName": "抽象派艺术011",
          "preViewUrl": "http://test-1251330838.cos.ap-chengdu.myqcloud.com/1001/20216/175870799598985/%E6%8A%BD%E8%B1%A1%E6%B4%BE%E8%89%BA%E6%9C%AF011.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDl9KmytuSO5Wk12b8qJVSBlDQQChwIcx3%26q-sign-time%3D1623998466%3B1624084866%26q-key-time%3D1623998466%3B1624084866%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Da5b2cf82010d31e09fec225438ccd27d512ed7ee",
          "coverImgUrl": null,
          "groupName": null,
          "groupBizId": 0,
          "attribute": {
            "type": "IMAGE",
            "width": 1366,
            "height": 768
          },
          "suffix": "jpg"
        },
        {
          "businessId": "61100856058281984",
          "materialName": "抽象派艺术020",
          "preViewUrl": "http://test-1251330838.cos.ap-chengdu.myqcloud.com/1001/20216/175770048076987/%E6%8A%BD%E8%B1%A1%E6%B4%BE%E8%89%BA%E6%9C%AF020.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDl9KmytuSO5Wk12b8qJVSBlDQQChwIcx3%26q-sign-time%3D1623998466%3B1624084866%26q-key-time%3D1623998466%3B1624084866%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3Dd830b1c4e244cc98c6d536b1c07451e4e4e714c6",
          "coverImgUrl": null,
          "groupName": null,
          "groupBizId": 0,
          "attribute": {
            "type": "IMAGE",
            "width": 1680,
            "height": 1050
          },
          "suffix": "jpg"
        },
        {
          "businessId": "61098918260473856",
          "materialName": "f0c539ca-48f5-47af-b33b-61fa20e3781d",
          "preViewUrl": "http://test-1251330838.cos.ap-chengdu.myqcloud.com/1001/20216/175368375602255/f0c539ca-48f5-47af-b33b-61fa20e3781d.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDl9KmytuSO5Wk12b8qJVSBlDQQChwIcx3%26q-sign-time%3D1623998466%3B1624084866%26q-key-time%3D1623998466%3B1624084866%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D787b3fb3a639b6f1d917fa41d79a68ac28c255ed",
          "coverImgUrl": null,
          "groupName": null,
          "groupBizId": 0,
          "attribute": {
            "type": "IMAGE",
            "width": 1080,
            "height": 1080
          },
          "suffix": "jpg"
        }
      ]
    }
  }
}
</script>

```
