import './styles/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue');

createInertiaApp({
  resolve: async (name) => {
    const page = pages[`./Pages/${name}.vue`];

    if (!page) {
      throw new Error(`Inertia page not found: ${name}`);
    }

    return page();
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
