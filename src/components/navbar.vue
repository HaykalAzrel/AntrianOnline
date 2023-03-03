<template>
<section class="navbar">
    <!-- Slider Component Container -->
    <div class="flex flex-col items-center justify-center mt-32" x-cloak x-data="appData()" x-init="appInit()">
        <div class="flex flex-col">
            <!-- Page Scroll Progress -->
            <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
            bg-green-500" :style="`width: ${percent}%`">
            </div>

            <!-- Navbar -->
            <nav class="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10">

                <!-- Logo Container -->
                <div class="flex items-center w-full ml-10 ">
                    <!-- Logo -->
                    <a class="cursor-pointer">
                        <h3 class="text-2xl font-medium">
                            <RouterLink to="/"><img class="h-10 object-cover " src="./images/puskesmas-seeklogo.com-1.svg"
                                alt="Puskesmas Logo"></RouterLink>
                        </h3>
                    </a>
                </div>

                <!-- Icon Menu Section -->
                <div class="flex items-center space-x-5">
                    <!-- Login -->
                    <div class="flex items-center float-right">
                        <div class="mr-5 flex">
                            <p class="text-gray-900 whitespace-no-wrap text-right  ">
                                Haykal Azrel
                            </p>
                        </div>
                        <div class=" relative inline-block text-left dropdown">
                            <button type="button" @click="buka = !buka"
                                class="flex-shrink-0 w-10 h-10 hover:text-white hidden sm:table-cell mr-10">
                                <img class="w-full h-full rounded-full"
                                    src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
                                    alt="" />
                            </button>
                            <div v-show="buka"
                                class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117"
                                    role="menu">
                                    <div class="px-4 py-3">
                                        <p class="text-sm leading-5">Signed in as</p>
                                        <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                                            haykal@gmail.com</p>
                                    </div>
                                    <div class="py-1">
                                        <a href="javascript:void(0)" tabindex="0"
                                            class="text-gray-800 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">Account settings</a>
                                        <a href="javascript:void(0)" tabindex="1"
                                            class="text-gray-800 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">Support</a>
                                        <a href="javascript:void(0)" tabindex="2"
                                            class="text-gray-800 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            role="menuitem">License</a>
                                    </div>
                                    <div class="py-1">
                                        <a href="javascript:void(0)" tabindex="3"
                                            class="text-red-500 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                            @click="Logout" role="menuitem">Log out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</section>
</template>

<style>
.dropdown:focus-within .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
}
</style>