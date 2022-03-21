<template>
  <div class="talk-root cursor-point">
    <div class="mt-3 d-flex">
      <el-card class="box-card w-75" shadow="always">
       <div class="home-picture">
         <img src="../assets/forexam.jpeg" />
       </div>
       <div class="mt-4 ml-4 w-50">
         <div slot="header" class="clearfix">
          <span class="talk-title">博客技术总结</span>
          <div class="talk-line"></div>
          <div class="justify-content-between w-75 mt-4">
            <div>2021-09-10 </div>
            <div> 项目介绍 </div>
            <div>项目https</div>
          </div>
          <div class="w-75 mt-4 cursor-point">
            鉴于很多同学对https配置不太熟悉，至此写个教程 
            1.申请ssl证书（阿里云为例） 打开阿里云控制台SSL证书应用 
            进入后点击SSL证书 -&gt; 免费证书 -&gt; 立即购买 完成后点击创建证书 -&gt;
          </div>
        </div>
       </div>
      </el-card>
      <div class="fixed-right">
          <div class="position-fixed ml-4 w-25 justify-content-center text-center ">
            <el-card class="box-card" shadow="always">
              <div class="p-4 mt-4 talk-right-content">
                <div class="header-img"><img src="../assets/forexam.jpeg"></div>
                <div>哈哈哈</div>
                <div>往事随风</div>
                <div class="justify-content-between">
                  <div>
                    <div>文章</div>
                    <div class="mt-2">7</div>
                  </div>
                   <div>
                    <div>分类</div>
                    <div class="mt-2">11</div>
                  </div>
                   <div>
                    <div>标签</div>
                     <div class="mt-2">6</div>
                  </div>
                </div>
                <div>
                    <el-button type="primary">加入书签</el-button>
                </div>
              </div>
            </el-card>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scope>
.talk-root {
  & .home-picture {
    width: 300px;
    height: 200px;
    & img {
      width: 100%;
      height: 100%;
    }
  }
  & .talk-title {
    &:hover {
      color: rgb(61, 159, 242)
    }
  }
  & .box-card {
    & .el-card__body {
      display: flex;
    }
  }
}
.fixed-right {
  & .header-img {
    width: 100px;
    height: 100px;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
  & .talk-right-content > div {
    margin-top: 1rem;
  }
}
</style>
