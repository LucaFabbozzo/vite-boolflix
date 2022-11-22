  <script>
export default {
  name: 'AppCard',
  props: {
    card: Object,
  },

}
  </script>

<template>
  <div> - {{ card.title || card.name }} - </div>
</template>


<style lang="scss" scoped>

</style>