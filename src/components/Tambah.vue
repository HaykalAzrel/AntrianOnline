<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="row">
        <div class="col-md-6 w-full max-w-xs offset-md-3">
          <div class="flex justify-center mb-10 mt-5 text-lg">
            Buat Ruangan
          </div>
          <form @submit.prevent="createCity" class="bg-gray-200 shadow-md  rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-5">
              <label for="nomor" class="mb-3 block text-base font-medium text-[#07074D]">
                Nomor Antrian
              </label>
              <input 
              type="text" 
              name="nomor" 
              id="nomor" 
              placeholder="Antrian ke-" 
              v-model="nomor"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                Nama Lengkap
              </label>
              <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nama Lengkap" 
              v-model="name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                Alamat Email
              </label>
              <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="contoh@gmail.com" 
              v-model="email"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="nik" class="mb-3 block text-base font-medium text-[#07074D]">
                NIK
              </label>
              <input 
              type="text" 
              name="nik" 
              id="nik" 
              placeholder="Nomor NIK" 
              v-model="nik"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="tanggalLahir" class="mb-3 block text-base font-medium text-[#07074D]">
                Tanggal Lahir
              </label>
              <input 
              type="text" 
              name="tanggalLahir" 
              id="tanggalLahir" 
              placeholder="HH-BB-TT" 
              v-model="tanggalLahir"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="nomorHP" class="mb-3 block text-base font-medium text-[#07074D]">
                Nomor Handphone
              </label>
              <input 
              type="text" 
              name="nomorHP" 
              id="nomorHP" 
              placeholder="+62 081234567" 
              v-model="nomorHP"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="alamat" class="mb-3 block text-base font-medium text-[#07074D]">
                Alamat
              </label>
              <input 
              type="text" 
              name="alamat" 
              id="alamat" 
              placeholder="Jl. Ketintang no.0192837" 
              v-model="alamat"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <div class="mb-5">
              <label for="tanggalDaftar" class="mb-3 block text-base font-medium text-[#07074D]">
                Tanggal
              </label>
              <input 
              type="text" 
              name="tanggalDaftar" 
              id="tanggalDaftar" 
              placeholder="HH/BB/TT" 
              v-model="tanggalDaftar"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0be43a] focus:shadow-md" />
            </div>
            <button
              class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-800 focus:outline-none focus:shadow-outline mt-4 flex relative outline-none">
            Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      nomor: null,
      name: null,
      email: null,
      nik: null,
      tanggalLahir: null,
      nomorHP: null,
      alamat: null,
      tanggalDaftar: null,
    };
  },
  methods: {
    async createCity() {
      console.log("Creating Document");
      const addedDoc = await addDoc(citiesColRef, this.$data);
      alert("Document created successfully!");
      console.log(addedDoc);
      this.$router.push("/admin");
    },
  },
};
</script>