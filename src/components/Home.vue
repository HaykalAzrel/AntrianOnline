<script setup>
import navbar from './navbar.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const Logout = () => {
    localStorage.removeItem("session_token")
    router.push({ path: '/login' })
}
const Tambah = () => {
    router.push({ path: '/Tambah' })
}
</script>

<template>
  <navbar />
  <main class="home min-h-screen">
    <div class="home">
      <section class="container mx-auto p-4 my-4 mt-4">
        <h1 class="text-4xl mb-4 text-center uppercase">Daftar Antrian Hari Ini</h1>
      </section>
      <section class="container mx-auto p-6 font-mono">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        No
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Nama
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-14 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-12 py-4 text-left">
                        NIK
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-8 py-4 text-left">
                        Tanggal Lahir
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-14 py-4 text-left">
                        Nomor Telfon
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-12 py-4 text-left">
                        Alamat
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-8 py-4 text-left">
                        Tanggal Daftar
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-12 py-4 text-left">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
                      v-for="city in cities" :key="city.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {{ city.nomor }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.name }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.email }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.nik }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.tanggalLahir }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.nomorHP }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.alamat }}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {{ city.tanggalDaftar }}
                      </td>
                      <td class="p-2 px-4 text-left">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline p-5 px-4">
                          <RouterLink :to="{ path: `/cities/${city.id}` }" class="link">Edit</RouterLink>
                          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline p-5 px-4"
                            @click="deleteCity(city.id)">Hapus</a>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <RouterLink to="/tambah"><button type="button"
                  class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-800 focus:outline-none focus:shadow-outline mt-4 flex relative" @click="Tambah">
                  Tambah
                </button></RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import citiesColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      cities: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        cityData.id = city.id;
        cities.push(cityData);
      });
      console.log(cities);
      this.cities = cities;
    },
    async deleteCity(cityId) {
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef);
      alert("City deleted successully!");
      this.$router.go();
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>