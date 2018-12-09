<template>
  <div class="index">
    <!-- 顶部 -->
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
    <!-- /顶部 -->
    <!-- 轮播图区域 -->
    <swiper indicator-dots autoplay circular indicator-active-color="white">
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <img mode="aspectFill" :src="item.image_src">
      </swiper-item>
    </swiper>
    <!-- /轮播图区域 -->
    <!-- 分类按钮 -->
    <div class="cate">
      <div class="cate-item" v-for="(item, index) in cateList" :key="index">
        <img :src="item.image_src">
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- /分类按钮 -->
    <!-- 楼层数据 -->
    <div class="floor-box" v-for="(item, index) in floorList" :key="index">
      <div class="floor-title">
        <img :src="item.floor_title.image_src">
        <span>{{item.floor_title.name}}</span>
      </div>
      <div class="floor-content">
        <div class="left">
          <img :src="item.product_list[0].image_src">
        </div>
        <div class="center">
          <img :src="item.product_list[1].image_src">
          <img :src="item.product_list[2].image_src">
        </div>
        <div class="right">
          <img :src="item.product_list[3].image_src">
          <img :src="item.product_list[4].image_src">
        </div>
      </div>
    </div>
    <!-- /楼层数据 -->
  </div>
</template>

<script>
import hxios from "utils/index";
export default {
  data() {
    return {
      swiperList: [],
      cateList: [],
      floorList: []
    };
  },
  created() {
    let swiperData = hxios.get("api/public/v1/home/swiperdata");
    let cataData = hxios.get("api/public/v1/home/catitems");
    let floorData = hxios.get("api/public/v1/home/floordata");
    Promise.all([swiperData, cataData, floorData]).then(res => {
      console.log(res[2]);
      this.swiperList = res[0].data.message;
      this.cateList = res[1].data.message;
      this.floorList = res[2].data.message;
    });
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #ff2d4a;
.index {
  padding-top: 100rpx;
}
.nav {
  padding: 20rpx 16rpx;
  background-color: $mainColor;
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  i.icon-sousuo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-220%, -50%);
  }
  input {
    text-align: center;
    color: #bbbbbb;
    background-color: white;
    font-size: 24rpx;
    height: 60rpx;
    border-radius: 5rpx;
  }
}

swiper {
  width: 100%;
  img {
    width: 100%;
  }
}

.cate {
  display: flex;
  padding: 24rpx;
  justify-content: space-around;
  .cate-item {
    img {
      width: 128rpx;
      height: 128rpx;
    }
    p {
      text-align: center;
      font-size: 24rpx;
      color: #333333;
    }
  }
}

.floor-box {
  .floor-title {
    padding: 30rpx 0;
    position: relative;
    img {
      width: 100%;
      height: 90rpx;
    }
    span {
      position: absolute;
      top: 50rpx;
      left: 16rpx;
      color: #ff7b94;
      font-size: 30rpx;
      font-weight: bold;
    }
  }
  .floor-content {
    padding-left: 16rpx;
    box-sizing: border-box;
    display: flex;
    img {
      width: 100%;
      border-radius: 10rpx;
    }
    .left {
      width: 234rpx;
    
    }
    .center {
      width: 234rpx;
      margin-right: 10rpx;
      img {
        display: block;
        height: 234rpx;
        margin: 0 10rpx 10rpx;
      }
    }
    .right {
      width: 234rpx;
      img {
        display: block;
        height: 234rpx;
        margin: 0 0 10rpx 10rpx;
      }
    }
  }
}
</style>
