<template>
  <div>
    <div class="flex justify-center items-center bg-white w-screen h-screen">
      <div class="bg-gray-400 px-12 pt-10 pb-10 rounded-sm">
        <div class="text-center text-lg">
          <div class="text-2xl mb-5 font-medium">
            <h2>Edit Dokumen</h2>
          </div>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <label for="nomor" class="mb-3 block text-base font-medium text-[#07074D]">
                Nomor Antrian
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="Antrian ke-" 
              v-model="cityInfo.nomor" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Nama Lengkap
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="nama lengkap" 
              v-model="cityInfo.name" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input 
              type="email" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="contoh@gmail.com" 
              v-model="cityInfo.email" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                NIK
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="Nomor NIK" 
              v-model="cityInfo.nik" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Tanggal Lahir
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="HH-BB-TT" 
              v-model="cityInfo.tanggalLahir" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Nomor Handphone
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="+62 081234567" 
              v-model="cityInfo.nomorHP" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Alamat
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="Jl. Ketintang no.0192837" 
              v-model="cityInfo.alamat" />
            </div>
            <div class="form-group">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Tanggal Daftar
              </label>
              <input 
              type="text" 
              class="form-control rounded-md mb-3 mt-3" 
              placeholder="HH/BB/TT" 
              v-model="cityInfo.tanggalDaftar" />
            </div>
            <button
              class="md:flex md:items-center shadow bg-green-700 hover:bg-green-500 shadow-green-500/50 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        nomor: null,
        name: null,
        email: null,
        nik: null,
        tanggalLahir: null,
        nomorHP: null,
        alamat: null,
        tanggalDaftar: null,
      },
    };
  },
  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.nomor = cityData.nomor;
      this.cityInfo.email = cityData.email;
      this.cityInfo.nik = cityData.nik;
      this.cityInfo.tanggalLahir = cityData.tanggalLahir;
      this.cityInfo.nomorHP = cityData.nomorHP;
      this.cityInfo.alamat = cityData.alamat;
      this.cityInfo.tanggalDaftar = cityData.tanggalDaftar;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `${this.cityId} Has been updated successfully!`
      );
      this.$router.push("/admin");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style>

</style>