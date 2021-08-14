<template>
            <div class="relative">
                <button
                    @click="()=>{open=!open}"
                    :class="open ? 'shadow-btn-blueGray text-blueGray-900 ring-opacity-50':' hover:ring-opacity-80 ring-opacity-100' "
                    class="
                        btn
                        block
                        ring-indigo-500
                        !p-1
                        hover:shadow-btn-blueGray
						focus:text-blueGray-900
                        group
                    "
                >
                    <svg
						xmlns="http://www.w3.org/2000/svg"
                        :class=" open ? 'text-indigo-600' :'text-white' "
                        class="
                            h-6
                            w-6
                            group-hover:text-indigo-900
                            transition-colors
                            duration-300
                        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </button>
                <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0"
                >
                    <div v-if="open" class="absolute right-0">
                        <article class="backdrop-blur-sm flex items-center justify-center">
                            <div
                                class="
                                    flex flex-col
                                    gap-y-4
                                    items-center
                                    w-48
                                    p-4
                                    rounded-2xl
                                    ring-1 ring-blueGray-800
                                "
                            >
                                <button
                                    v-for="(name, index) in solutions"
                                    :key="index"
                                    class="
                                        w-full
                                        text-left
                                        focus:ring-2
                                        ring-offset-2 ring-offset-black
                                        focus-visible:outline-none
										px-3
                                        py-2
                                        bg-white
                                        hover:bg-indigo-100
                                        group
                                        rounded-xl
                                        transition-colors
                                        cursor-pointer
                                    "
                                >
                                    <span
                                        class="
                                            text-indigo-500
                                            group-hover:text-indigo-700
                                            font-jetMono font-semibold
											select-none
                                        "
                                        >{{ name.name }}</span
                                    >
                                </button>
                            </div>
                        </article>
                    </div>
                </transition>
            </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let open=ref(false);
    let solutions = [
		 {
			  name: 'Insights',
		 },
		 {
			  name: 'Automations',
		 },
		 {
			  name: 'Reports',
		 },
		 {
			  name: 'Future',
		 },
	]
    return { solutions, open }
  },
}
</script>
	