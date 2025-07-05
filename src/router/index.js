import { createWebHistory, createRouter } from "vue-router";

import WelcomeView from "@/views/WelcomeView.vue";
import MoodView from "@/views/MoodView.vue";
import ChatView from "@/views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: WelcomeView,
    },
    {
      path: "/mood",
      component: MoodView,
    },
    {
      path: "/chat",
      component: ChatView,
    },
  ],
});
export default router;
