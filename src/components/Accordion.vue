<template>
	<div class="w-full px-4">
		<div class="w-full max-w-[540px] px-3 pb-2 pt-2 mx-auto rounded-2xl">
			<Disclosure v-slot="{ open }" v-for="(item, index) in items" :key="index">
				<DisclosureButton
					class="
						z-2
						text-3xl text-left text-blueGray-500
						font-normal
						bg-gradient-to-br
						from-blueGray-400/40
						to-blueGray-900/40
						w-full
						mt-2
						px-4
						py-2
						rounded-2xl
						flex
						justify-between
						place-content-between
						hover:from-blueGray-400/80 hover:to-blueGray-900/80 hover:text-white
						focus:outline-none
						focus-visible:ring focus-visible:ring-blueGray-500 focus-visible:ring-opacity-75
						transition-opacity
					"
					@click="
						() => {
							log(open);
						}
					"
				>
					<span>{{ item.Name }}</span>
					<ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-auto h-10 text-blueGray-500 transition-transform" />
				</DisclosureButton>
				<transition
					enter-active-class="transition duration-200 ease-out"
					enter-from-class="translate-y-1 opacity-0"
					enter-to-class="translate-y-0 opacity-100"
					leave-active-class="transition duration-150 ease-in"
					leave-from-class="translate-y-0 opacity-100"
					leave-to-class="translate-y-1 opacity-0"
				>
					<DisclosurePanel class="py-3">
						<div class="z-1 text-white px-3 py-2 text-sm rounded-xl border bg-blueGray-900">
							{{ item.Description }}
						</div>
					</DisclosurePanel>
				</transition>
			</Disclosure>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

import { ChevronUpIcon } from '@heroicons/vue/solid';

export default {
	components: { Disclosure, DisclosureButton, DisclosurePanel, ChevronUpIcon },
	setup() {
		let open = ref(false);
		function log(a) {
			console.log(a);
		}
		const items = [
			{
				Name: 'Tailwindcss Shadow Plugin',
				Description: 'I created a shadow plugin in Tailwindcss for making buttons look cool!',
			},
			{
				Name: 'What is price of product?',
				Description: "it's about 200$ for a product average but if a user want to add some extra functionality then they have to pay some extra charges.",
			},
			{
				Name: 'How you prepare a product?',
				Description:
					'First we plan what functionality user need then we design it in figma then we start a revice session to make it much better then we make it work in browser by writing code',
			},
		];
		return { log, items, open };
	},
};
</script>
