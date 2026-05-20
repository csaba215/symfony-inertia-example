<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: string;
}

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <Head title="Products" />

  <main class="page">
    <section class="shell">
      <header class="header">
        <div>
          <p class="eyebrow">Symfony + Inertia + Vue</p>
          <h1>Products</h1>
          <p class="summary">
            Data is loaded from Doctrine entities, rendered through an Inertia
            response, and hydrated by Vue 3 through Vite.
          </p>
        </div>
        <div class="count">{{ products.length }} items</div>
      </header>

      <div class="product-grid">
        <article
          v-for="product in products"
          :key="product.id"
          class="product-card"
        >
          <div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
          </div>
          <strong class="price">{{ product.price }}</strong>
        </article>
      </div>
    </section>
  </main>
</template>
