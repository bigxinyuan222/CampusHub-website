<template>
  <div class="bg-light text-dark">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-light/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300" :class="isScrolled ? 'py-2 shadow-md' : 'py-3'">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="#" class="flex items-center gap-2">
          <span class="text-primary text-2xl font-bold">CampusHub</span>
        </a>
        <div class="hidden md:flex gap-8">
          <a href="#features" class="text-dark hover:text-primary transition-colors">功能特性</a>
          <a href="#scenarios" class="text-dark hover:text-primary transition-colors">使用场景</a>
          <a href="#download" class="text-dark hover:text-primary transition-colors">立即使用</a>
        </div>
        <button class="md:hidden text-dark text-xl" @click="toggleMenu">
          <i class="fa" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
      <!-- 移动端菜单 -->
      <div v-show="isMenuOpen" class="md:hidden bg-light shadow-lg absolute w-full">
        <div class="container mx-auto px-4 py-3 flex flex-col gap-4">
          <a href="#features" class="text-dark hover:text-primary transition-colors py-2" @click="closeMenu">功能特性</a>
          <a href="#scenarios" class="text-dark hover:text-primary transition-colors py-2" @click="closeMenu">使用场景</a>
          <a href="#download" class="text-dark hover:text-primary transition-colors py-2" @click="closeMenu">立即使用</a>
        </div>
      </div>
    </nav>

    <!-- Hero 首屏区域 -->
    <section class="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-gradient-to-b from-gray to-light">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 text-dark">
            CampusHub<br>
            <span class="text-primary">开启智慧校园新生活</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-700 mb-8">
            一套代码，多端覆盖。专为高校学子打造的一站式服务平台。
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#download"
              class="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all-300 shadow-lg hover:shadow-xl">
              立即体验
            </a>
            <a href="#features"
              class="bg-white text-dark border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray transition-all-300 shadow hover:shadow-md">
              了解功能
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img src="https://picsum.photos/800/600" alt="CampusHub 双端展示"
            class="hero-image rounded-2xl shadow-2xl hover-scale w-full max-w-md">
        </div>
      </div>
    </section>

    <!-- 下载与访问区 -->
    <section id="download" class="py-20 px-4 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16">立即使用 CampusHub</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- 微信小程序 -->
          <div class="bg-gray rounded-card p-8 text-center hover-scale shadow-lg">
            <div class="w-40 h-40 bg-white rounded-lg p-2 mx-auto mb-4 flex items-center justify-center shadow">
              <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                <span class="text-sm text-gray-500">小程序二维码</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">微信小程序</h3>
            <p class="text-gray-600 mb-4">扫码即用，无需下载</p>
            <span class="text-xs text-gray-500">微信搜索「CampusHub」也可找到</span>
          </div>

          <!-- App 下载 -->
          <div class="bg-gray rounded-card p-8 text-center hover-scale shadow-lg">
            <div class="w-40 h-40 bg-primary/10 rounded-lg p-4 mx-auto mb-4 flex items-center justify-center">
              <i class="fa fa-download text-primary text-6xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">App 下载</h3>
            <div class="flex flex-col gap-3 mb-4">
              <a href="#"
                class="bg-dark text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-dark/90 transition-all-300">
                <i class="fa fa-android"></i> Android 下载
              </a>
              <a href="#"
                class="bg-dark text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-dark/90 transition-all-300">
                <i class="fa fa-h-square"></i> HarmonyOS 版下载
              </a>
            </div>
          </div>

          <!-- 网页端 -->
          <div class="bg-gray rounded-card p-8 text-center hover-scale shadow-lg">
            <div class="w-40 h-40 bg-primary/10 rounded-lg p-4 mx-auto mb-4 flex items-center justify-center">
              <i class="fa fa-globe text-primary text-6xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">网页端访问</h3>
            <a href="#"
              class="bg-primary text-white px-6 py-2 rounded-lg inline-block hover:bg-primary/90 transition-all-300">
              在线访问 H5 版
            </a>
            <p class="text-gray-600 mt-4 text-sm">SSR 服务端渲染，极速加载体验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能特性 -->
    <section id="features" class="py-20 px-4 bg-gray">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16">核心功能特性</h2>

        <!-- 核心功能特性容器 -->
        <div class="features-container">
          <!-- 图片固定区域 -->
          <div class="features-image-container md:w-[3fr]">
            <div class="feature-image sticky top-[100px]">
              <div class="image-wrapper">
                <img src="https://picsum.photos/600/400?random=1" alt="活动集市功能展示"
                  class="rounded-card shadow-xl w-full hover-scale" :class="{ 'active': currentFeatureIndex === 0 }">
                <img src="https://picsum.photos/600/400?random=2" alt="即时互动功能展示"
                  class="rounded-card shadow-xl w-full hover-scale" :class="{ 'active': currentFeatureIndex === 1 }">
                <img src="https://picsum.photos/600/400?random=3" alt="个人管家功能展示"
                  class="rounded-card shadow-xl w-full hover-scale" :class="{ 'active': currentFeatureIndex === 2 }">
              </div>
            </div>
          </div>
          
          <!-- 内容滚动区域 -->
          <div class="features-content-container md:w-[2fr]">
            <!-- 活动集市 -->
            <div class="feature-content-item" :class="{ 'active': currentFeatureIndex === 0 }" ref="featureItem0">
              <h3 class="text-4xl font-bold mb-4 text-primary">活动集市</h3>
              <p class="text-gray-700 mb-6 text-2xl">
                一站式校园活动解决方案，支持活动发布、浏览、报名、管理全流程。
                无论是社团招新、学术讲座还是文体活动，都能轻松管理。
              </p>
              <ul class="space-y-3 text-gray-700 text-lg">
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>活动分类筛选，快速找到感兴趣的内容</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>一键报名，自动生成参与凭证</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>活动发布者可实时查看报名人数和信息</span>
                </li>
              </ul>
            </div>

            <!-- 即时互动 -->
            <div class="feature-content-item" :class="{ 'active': currentFeatureIndex === 1 }" ref="featureItem1">
              <h3 class="text-4xl font-bold mb-4 text-primary">即时互动</h3>
              <p class="text-gray-700 mb-6 text-2xl">
                校园专属即时通讯系统，支持私聊、群聊和系统通知，
                让校园沟通更高效、更安全。
              </p>
              <ul class="space-y-3 text-gray-700 text-lg">
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>校园内部点对点聊天，信息安全有保障</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>系统通知实时推送，重要信息不遗漏</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>消息已读状态，沟通更透明</span>
                </li>
              </ul>
            </div>

            <!-- 个人管家 -->
            <div class="feature-content-item" :class="{ 'active': currentFeatureIndex === 2 }" ref="featureItem2">
              <h3 class="text-4xl font-bold mb-4 text-primary">个人管家</h3>
              <p class="text-gray-700 mb-6 text-2xl">
                全方位个人中心，管理你的校园生活，
                包括活动历史、待办提醒、实名认证等功能。
              </p>
              <ul class="space-y-3 text-gray-700 text-lg">
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>活动参与历史，一键查看过往记录</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>待办事项提醒，重要事情不忘记</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fa fa-check-circle text-primary mt-1"></i>
                  <span>学生实名认证，保障校园信息安全</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 技术优势 -->
        <div class="mt-20 bg-white rounded-card p-8 shadow-lg text-center">
          <h3 class="text-2xl font-bold mb-4">技术优势：SSR 服务端渲染</h3>
          <p class="text-gray-700 max-w-3xl mx-auto">
            基于 Vite 5 + TypeScript 构建，采用 SSR 服务端渲染技术，
            相比传统前端渲染，首屏加载速度提升 80%，
            为你带来流畅丝滑的使用体验，同时完美支持 H5 和微信小程序双端。
          </p>
        </div>
      </div>
    </section>

    <!-- 使用场景展示 -->
    <section id="scenarios" class="py-20 px-4 bg-white">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16">典型使用场景</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- 社团招新 -->
          <div class="bg-gray rounded-card p-8 hover-scale shadow-lg transition-all-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fa fa-users text-primary text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">社团招新</h3>
            <p class="text-gray-700">
              社团发布招新活动，学生扫码即可报名，
              自动收集报名信息，无需人工登记，
              大幅提升招新效率。
            </p>
          </div>

          <!-- 跳蚤市场 -->
          <div class="bg-gray rounded-card p-8 hover-scale shadow-lg transition-all-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fa fa-shopping-bag text-primary text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">跳蚤市场</h3>
            <p class="text-gray-700">
              发布二手物品信息，感兴趣的同学可即时沟通，
              安全的校园内部交易环境，
              让闲置物品发挥最大价值。
            </p>
          </div>

          <!-- 成绩/校园服务查询 -->
          <div class="bg-gray rounded-card p-8 hover-scale shadow-lg transition-all-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <i class="fa fa-graduation-cap text-primary text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">校园服务查询</h3>
            <p class="text-gray-700">
              集成校园各类服务入口，
              成绩查询、课表查看、校园卡充值等，
              一站式解决校园生活需求。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-dark text-white py-12 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary">CampusHub</h3>
            <p class="text-gray-400">
              基于 uni-app + Vue 3 的跨平台校园一站式服务平台，
              为高校学子打造便捷的校园生活体验。
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#features" class="hover:text-primary transition-colors">功能特性</a></li>
              <li><a href="#scenarios" class="hover:text-primary transition-colors">使用场景</a></li>
              <li><a href="#download" class="hover:text-primary transition-colors">立即使用</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">技术文档</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center gap-2">
                <i class="fa fa-envelope"></i>
                <span>contact@campushub.edu</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fa fa-github"></i>
                <span>github.com/CampusHub_frontend</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2026 CampusHub 版权所有 | 技术栈：Vite 5, TypeScript, Pinia, Wot Design Uni</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">


// 状态管理
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const currentFeatureIndex = ref(0);
const scrollThreshold = 100; // 滚动阈值

// 菜单切换
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 滚动监听
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // 处理垂直轮播效果
  const featureItems = document.querySelectorAll('.feature-content-item');
  const featuresSection = document.getElementById('features');
  
  if (featuresSection && featureItems.length > 0) {
    const sectionRect = featuresSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // 当进入功能特性区域时才开始处理轮播
    if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
      // 计算当前应该显示的索引
      let newIndex = currentFeatureIndex.value;
      
      featureItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        
        // 当内容项进入视口中心附近时，更新当前索引
        if (rect.top <= windowHeight / 2 + scrollThreshold && rect.bottom >= windowHeight / 2 - scrollThreshold) {
          newIndex = index;
        }
      });
      
      // 确保索引变化的连续性
      if (newIndex !== currentFeatureIndex.value) {
        currentFeatureIndex.value = newIndex;
      }
    } else if (sectionRect.bottom < 0) {
      // 当滚动到区域底部时，确保显示最后一个内容
      currentFeatureIndex.value = featureItems.length - 1;
    } else if (sectionRect.top > windowHeight) {
      // 当滚动到区域顶部时，确保显示第一个内容
      currentFeatureIndex.value = 0;
    }
  }
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // 初始化第一个项目为激活状态
  setTimeout(() => {
    currentFeatureIndex.value = 0;
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.features-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 768px) {
  .features-container {
    grid-template-columns: 3fr 2fr;
  }
}

.features-image-container {
  position: relative;
}

.feature-image {
  position: sticky;
  top: 100px;
  z-index: 10;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 66.67%; /* 3:2 aspect ratio */
}

.image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-in-out;
  z-index: 1;
}

.image-wrapper img.active {
  opacity: 1;
  transform: translateY(0);
  z-index: 2;
}

.features-content-container {
  position: relative;
}

.feature-content-item {
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  opacity: 0.3;
  transform: translateY(50px);
  transition: all 0.8s ease-in-out;
}

/* 当内容项在视口中时的样式 */
.feature-content-item.active {
  opacity: 1;
  transform: translateY(0);
}

/* 确保最后一个内容项也能与图片顶部对齐 */
.feature-content-item:last-child {
  min-height: 100vh;
  padding-bottom: 40px;
}

/* 响应式调整 */
@media (max-width: 767px) {
  .feature-content-item {
    min-height: auto;
    padding: 40px 0;
  }
}
</style>
