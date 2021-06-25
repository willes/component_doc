<!--
 * @Description:
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-06-25 16:07:47
 * @LastEditors: weiwei
-->
# 图片加载组件
> 图片加载调用示例

## 使用
访问<a href="/himage">这里</a>查看示例。
<iframe src="/himage" height="130px">himage</iframe>

```vue
<template>
  <div>
    <template v-for="(item, index) in list">
      <h-image :src="item.preViewUrl" :key="index">
        <a-icon slot="error" type="picture" class="img-icon" />
      </h-image>
    </template>
  </div>
</template>

<script>
import { HImage } from '@handday/components'
export default {
  name: 'HImages',
  components: {
    HImage
  },
  data() {
    return {
      list: [
        {
          "businessId": "61101097495003137",
          "materialName": "抽象派艺术020",
          "preViewUrl": "https://image.baidu.com/search/detail?tn=baiduimagedetail&word=%E8%88%AA%E6%8B%8D%E5%9C%B0%E7%90%83%E7%B3%BB%E5%88%97&album_tab=%E8%AE%BE%E8%AE%A1%E7%B4%A0%E6%9D%90&album_id=312&ie=utf-8&fr=albumsdetail&cs=2621658848,3952322712&pi=120704&pn=0&ic=0&objurl=https%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D2621658848%2C3952322712%26fm%3D193%26f%3DGIF",
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

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| src | 图片的地址  | String | - | - |
| fit	| 确定图片如何适应容器框 | String | fill / contain / cover / <br> none / scale-down | - |
| alt	| 原生 alt| String | - | - |
| lazy	| 是否开启懒加载	| boolean | - | false |
| z-index	| 设置图片预览的 z-index		| Number | - | 2000 |


### Events
| 事件名称	 | 说明 | 回调参数 |
| --- | --- | --- |
| load | 图片加载成功触发	 | (e: Event) |
| error	| 加载失败的内容 | (e: Error) |

### Slots
| 名称 | 说明 |
| --- | --- |
| loading | 图片未加载的占位内容 |
| error	| 加载失败的内容 |
| none	| 图片地址为空的内容 |