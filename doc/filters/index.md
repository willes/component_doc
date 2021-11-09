# cosPrefix
> 图片地址拼接


##### 使用
```vue
默认会获取 Vue.$config.cosPrefix 配置项
<img :src="imageUrl | cosPrefix" />
如果传了地址，则采用传的地址
<img :src="imageUrl | cosPrefix('http://baidu.com')" />
```

# formatImage
> 图片大小格式化

##### 使用
```vue
<img :src="imageUrl | formatImage(100, 100)" />
```

# formatDate
> 时间格式化  

##### 使用
```vue
默认显示 年月日 时分秒
<span>{{ date | formatDate }}</span>
可根据实际传入参数
<span>{{ date | formatDate('YYYY/MM/DD HH:mm:ss') }}</span>
```
