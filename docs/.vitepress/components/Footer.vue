<template>
  <footer class="home_footer"  :class="{ 'has-sidebar': hasSidebar }">
    <span>Copyright ©2024 by NIU-BIN | ICP备案号： 陕ICP备2024027341号</span>
  </footer>
</template>
<script setup>
// console.log('打印值', $frontmatter.title)
</script>
<style scoped lang="scss">
.home_footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 90px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid #d5d5d5;
}
.home_footer.has-sidebar {
  display: none;
}
// html[theme].dark .home_footer {
//   border-top: 1px solid #f2f2f2;
// }
</style>
