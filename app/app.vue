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
        <div id="features-container" class="features-container">
          <!-- 视口固定区域 -->
          <div class="features-viewport">
            <!-- 活动集市 -->
            <div class="feature-card grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center" 
                 :class="{ 'active': currentCardIndex === 0 }">
              <div>
                <img src="https://picsum.photos/600/400?random=1" alt="活动集市功能展示"
                  class="rounded-card shadow-xl w-full hover-scale">
              </div>
              <div>
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
            </div>

            <!-- 即时互动 -->
            <div class="feature-card grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center" 
                 :class="{ 'active': currentCardIndex === 1 }">
              <div>
                <img src="https://picsum.photos/600/400?random=2" alt="即时互动功能展示"
                  class="rounded-card shadow-xl w-full hover-scale">
              </div>
              <div>
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
            </div>

            <!-- 个人管家 -->
            <div class="feature-card grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center" 
                 :class="{ 'active': currentCardIndex === 2 }">
              <div>
                <img src="https://picsum.photos/600/400?random=3" alt="个人管家功能展示"
                  class="rounded-card shadow-xl w-full hover-scale">
              </div>
              <div>
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
          <!-- 滚动触发区域 -->
          <div class="scroll-trigger"></div>
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
                <span>github.com/CampusHub</span>
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
import { ref, onMounted, onUnmounted } from 'vue';

// 状态管理
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const currentCardIndex = ref(0);

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

  // 处理核心功能特性的滚动固定和切换
  const featuresSection = document.getElementById('features');
  const featuresContainer = document.getElementById('features-container');
  const featureCards = document.querySelectorAll('.feature-card');
  
  if (featuresSection && featuresContainer && featureCards.length > 0) {
    // const featuresTop = featuresSection.offsetTop;
    // const featuresHeight = featuresSection.offsetHeight;
    // const containerHeight = featuresContainer.offsetHeight;
    // const cardHeight = featureCards[0].offsetHeight;
    
    const scrollY = window.scrollY;
    
    // 获取滚动触发区域的位置和高度
    const scrollTrigger = document.querySelector('.scroll-trigger');
    if (scrollTrigger) {
      const triggerTop = scrollTrigger.offsetTop;
      const triggerHeight = scrollTrigger.offsetHeight;
      
      // 计算滚动进度（0-1之间）
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - triggerTop) / triggerHeight));
      
      // 根据滚动进度计算当前应该显示的卡片索引
      // 滚动1/3切第二组、2/3切第三组
      let newIndex = 0;
      if (scrollProgress >= 0.9) {
        newIndex = 2; // 第三组
      } else if (scrollProgress >= 0.6) {
        newIndex = 1; // 第二组
      } else {
        newIndex = 0; // 第一组
      }
      
      // 更新当前卡片索引
      if (newIndex !== currentCardIndex.value) {
        currentCardIndex.value = newIndex;
      }
    }
  }
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Intersection Observer 动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // 观察所有 feature-card 元素
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => observer.observe(card));
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.features-container {
  position: relative;
  min-height: 100vh;
}

.features-viewport {
  position: sticky;
  top: 100px;
  z-index: 40;
  min-height: 610px;
  background-color: #f3f4f6;
  border-radius: 8px;
  /* overflow: hidden; */
}

.scroll-trigger {
  height: 300vh; /* 提供3倍视口高度的滚动空间 */
  opacity: 0;
  pointer-events: none;
}

.feature-card {
  transition: all 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px;
}

.feature-card.active {
  opacity: 1;
  visibility: visible;
  position: relative;
}
</style>
