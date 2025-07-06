<template>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Component {
  name: string
  price: number
}

interface Build {
  id: number
  name: string
  description: string
  components: Component[]
  totalPrice: number
}

const builds = ref<Build[]>([
  {
    id: 1,
    name: 'Бюджетная сборка',
    description: 'Оптимальная сборка для офисных задач и базовых игр',
    components: [
      { name: 'AMD Ryzen 5 5600G', price: 15990 },
      { name: 'ASUS PRIME B550M-K', price: 8990 },
      { name: 'Kingston FURY Beast 16GB', price: 4990 },
      { name: 'WD Blue SN570 500GB', price: 3990 },
      { name: 'AeroCool VX Plus 500W', price: 2990 },
      { name: 'DeepCool MATREXX 30', price: 2990 }
    ],
    totalPrice: 39940
  },
  {
    id: 2,
    name: 'Игровая сборка',
    description: 'Мощная сборка для современных игр',
    components: [
      { name: 'Intel Core i5-12400F', price: 15990 },
      { name: 'MSI B660M-A', price: 12990 },
      { name: 'NVIDIA RTX 3060', price: 29990 },
      { name: 'Kingston FURY Beast 32GB', price: 8990 },
      { name: 'Samsung 970 EVO Plus 1TB', price: 7990 },
      { name: 'be quiet! System Power 9 600W', price: 4990 },
      { name: 'Lian Li Lancool II Mesh', price: 8990 }
    ],
    totalPrice: 89930
  },
  {
    id: 3,
    name: 'Профессиональная сборка',
    description: 'Максимальная производительность для работы и игр',
    components: [
      { name: 'AMD Ryzen 7 5800X3D', price: 29990 },
      { name: 'ASUS ROG STRIX B550-F', price: 15990 },
      { name: 'NVIDIA RTX 4070', price: 49990 },
      { name: 'G.Skill Trident Z RGB 32GB', price: 12990 },
      { name: 'Samsung 980 PRO 2TB', price: 15990 },
      { name: 'be quiet! Straight Power 11 850W', price: 12990 },
      { name: 'Lian Li O11 Dynamic', price: 15990 }
    ],
    totalPrice: 153930
  }
])

const selectBuild = (build: Build) => {
  // Здесь будет логика выбора сборки
  console.log('Выбрана сборка:', build)
}
</script>

<style scoped>
</style> 