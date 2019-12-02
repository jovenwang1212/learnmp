# 品优购API文档

注意：

开发环境的域名为：暂无

生产环境的域名为：https://www.uinav.com
另一个后台环境（不能完成支付）：https://ugo.botue.com

说明：

   在所有的url中，凡是带有my的，服务器都是需要验证token的

# 一、 首页

## 1.1 、获取轮播图

| **地址**               | /api/public/v1/home/swiperdata                               |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image002.jpg) |
| **作用描述**           | 获取首页轮播图                                               |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | 无                                                           |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image004.jpg) |
| **服务器返回参数说明** | image_src:图片地址  open_type:导航方式，支持navigate  navigator_url:导航地址 |

 

## 1.2 、获取分类列表

 

| **地址**               | /api/public/v1/home/catitems                                 |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image006.jpg) |
| **作用描述**           | 首页获取分类列表数据                                         |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | 无                                                           |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image008.jpg) |
| **服务器返回参数说明** | name:分类名称  img_src:分类图标地址  open_type:打开方式  navigator_url:导航URL地址 |

 

## 1.3 、获取楼层数据

| **地址**               | /api/public/v1/home/floordata                                |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image010.jpg) |
| **作用描述**           | 首页获取楼层数据                                             |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | 无                                                           |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image012.jpg) |
| **服务器返回参数说明** | floor_title.name:一级楼层标题  floor_title.image_src:一级楼层图片地址  product_list[0].name:二级楼层名称  product_list[0].image_src:二级楼层图片地址  product_list[0].image_width:二级楼层图片宽度  product_list[0].open_type:二级楼层导航方式  product_list[0].navigator_url:二级楼层导航url地址 |

 

# 二、 商品详情

## 2.1 、获取搜索列表数据

| **地址**               | /api/public/v1/goods/search                                  |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image014.jpg) |
| **作用描述**           | 根据关键字搜索数据                                           |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | query ： 搜索关键字  pagesize: 页容量  pagenum: 当前页       |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image016.jpg) |
| **服务器返回参数说明** |                                                              |

 

## 2.2 、获取商品详情数据

| **地址**               | /api/public/v1/goods/detail?goods_id=140                     |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image018.jpg) |
| **作用描述**           | 根据商品id获取该商品的详细信息                               |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | goods_id ： 商品id                                           |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image020.jpg) |
| **服务器返回参数说明** | goods_id:商品id  goods_name:商品名称  goods_price:商品价格  goods_introduce:商品介绍  pics:轮播图  attrs:商品属性 |

 

# 三、 分类

## 3.1 、查询分类数据

 

| **地址**               | /api/public/v1/categories                                    |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image022.jpg) |
| **作用描述**           | 获取分类数据                                                 |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | 无                                                           |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image024.jpg) |
| **服务器返回参数说明** | cat_id:分类id  cat_name:分类名称  cat_level:分类级别  cat_icon：分类图片 |

 

 

 

# 四、 购物车

## 4.1 、获取购物车中需要展示的商品内容

| **地址**               | /api/public/v1/goods/goodslist?goods_ids=140,395             |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image026.jpg) |
| **作用描述**           | 根据商品ids，获取购物车中需要展示的商品列表                  |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | goods_ids ： 商品ids的数组                                   |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image028.jpg) |
| **服务器返回参数说明** | goods_id:商品id  goods_name:商品名称  goods_price:商品价格  goods_small_logo:商品图标 |

 

# 五、 订单

## 5.1 、下单之前先登录

| **地址**               | /api/public/v1/users/wxlogin                                 |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image030.jpg)![img](file:///C:/Users/panliang/AppData/Local/Temp/msohtmlclip1/01/clip_image032.jpg) |
| **作用描述**           | 根据商品id获取商品详细信息                                   |
| **请求方式**           | POST                                                         |
| **传入api的参数**      | code 用户登录凭证    通过wx.login()获取  encryptedData 完整用户信息密文  通过wx.getUserInfo ()获取  iv   加密算法的初始向量  通过wx.getUserInfo ()获取  rawData用户信息原始数据字符串  通过 getUserInfo 获取，JSON.stringify() 转字符串  signature 使用 sha1得到字符串   通过 getUserInfo 获取 |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image034.jpg) |
| **服务器返回参数说明** | user_id:用户id  token:登录成功后，后台给你返回的令牌         |

 

## 5.2 、下单操作

| **地址**               | /api/public/v1/my/orders/create                              |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | 创建订单                                                     |
| **作用描述**           | 登录之后，创建订单                                           |
| **请求方式**           | POST                                                         |
| **传入api的参数**      | 请求头:   "Authorization" : token //需要设置token带给后台  请求体:  order_price 订单价格  consignee_addr 订单地址  goods 商品列表内部存放商品对象（goods_id，goods_number和goods_price） |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image036.jpg) |
| **服务器返回参数说明** | order_id:订单id  user_id:用户id  order_number:订单号，支付及查询订单状态时候需要用到  order_price:订单价格  consignee_addr:收货地址  goods:下单时，购买商品的数组 |

 

## 5.3 、查询订单支付状态

| **地址**               | /api/public/v1/my/orders/chkOrder                            |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image038.jpg) |
| **作用描述**           | 获取某笔订单的支付状态                                       |
| **请求方式**           | POST                                                         |
| **传入api的参数**      | 请求头:   "Authorization" : token //需要设置token带给后台  请求体:     order_number : 订单号 |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image040.jpg) |
| **服务器返回参数说明** | message:支付状态消息                                         |

 

 

## 5.4 、查询订单列表

| **地址**               | /api/public/v1/my/orders/all?type=1                          |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image042.jpg) |
| **作用描述**           | 查询订单                                                     |
| **请求方式**           | GET                                                          |
| **传入api的参数**      | 请求头:   "Authorization" : token //需要设置token带给后台  type： 1所有 2未支付  3已支付 4退款/退货 |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image044.jpg) |
| **服务器返回参数说明** | orders[0].order_id:订单id  orders[0].user_id:用户id  orders[0].order_number:订单号   orders[0].order_price:订单价格  orders[0].pay_status:支付状态 0:未支付 1:已支付  orders[0].consignee_addr:收货地址  orders[0].goods:下单时，购买商品的数组  orders[0].total_count:订单总件数  orders[0].total_price:订单总金额 |

 

# 六、 支付

## 6.1 、生成预支付交易单

| **地址**               | /api/public/v1/my/orders/req_unifiedorder                    |
| ---------------------- | ------------------------------------------------------------ |
| **应用场景**           | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image046.jpg) |
| **作用描述**           | 生成预支付交易单                                             |
| **请求方式**           | POST                                                         |
| **传入api的参数**      | 请求头:   "Authorization" : token //需要设置token带给后台  请求体:     order_number : 订单号 |
| **返回数据格式**       | JSON                                                         |
| **返回数据格式样例**   | ![img](C:\Users\panliang\Desktop\learnmp\projects\优购\接口.assets\clip_image048.jpg) |
| **服务器返回参数说明** | wxorder.timeStamp:时间戳  wxorder.nonceStr:随机字符串  wxorder.package:包含有prepay_id  wxorder.signType:签名类型  wxorder.paySign:签名字符串  order_number:订单号 |