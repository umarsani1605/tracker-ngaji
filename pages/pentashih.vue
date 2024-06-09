<template>
  <div class="">
    <div class="py-4">
      <h1 class="text-4xl font-semibold">Tracker Capaian Ngaji 📝</h1>
    </div>
    <div class="flex flex-col gap-4 md:flex-row md:gap-8 text-sm">
      <div class="basis-1/3">
        <Card :pt="{ root: 'card-custom' }" :ptOption="{ mergeSections: true, mergeProps: true }">
          <template #title>
            Pentashih
          </template>
          <template #content>
            <div class="flex flex-col gap-2 mb-5">
              <label for="name">Nama</label>
              <InputText id="name" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="code">Kode Santri</label>
              <div class="flex flex-row gap-3">
                <InputText id="code" class="w-full" />
                <Button class="md:w-21" label="Cek"></Button>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="basis-2/3">
        <Card :pt="{ root: 'card-custom' }" :ptOption="{ mergeSections: true, mergeProps: true }">
          <template #title>
            Santri
          </template>
          <template #content>
            <div class="santri-header">
              <div class="flex flex-col gap-2 mb-5">
                <label for="name-santri">Nama</label>
                <InputText id="name-santri" value="Nama Santri" class="md:w-64" disabled />
              </div>
              <div class="flex flex-col gap-2">
                <label for="date">Tanggal</label>
                <InputGroup>
                  <Calendar inputId="calendar" showIcon></Calendar>
                </InputGroup>
              </div>
            </div>
            <Divider class="my-5" />
            <div class="">
              <TabView :scrollable="true">
                <TabPanel v-for="(tab, index) in tabItems" :key="index" :header="tab.title" class="tab-panel"
                  :pt="headerAction">
                  <div v-for="(value, index) in tab.children" :key="index" class="py-3">
                    <h5 class="text-xl font-semibold mb-3">{{ value.title }}</h5>
                    <div class="formgrid md:grid">
                      <div v-if="value.setoran" class="flex flex-col gap-2 mb-5">
                        <label for="name2">Setoran</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name"
                          placeholder="Capaian" />
                      </div>
                      <div v-if="value.hafalan" class="flex flex-col gap-2 mb-2">
                        <label for="email2">Hafalan</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name"
                          placeholder="Capaian" />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
            <div class="flex flex-row-reverse">
              <Button label="Simpan" icon="pi pi-save" class="w-fit mr-2"></Button>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style>
.p-tabview-panels {
  padding: 1rem 0.25rem;
}

.headerAction {
  background-color: black;
}

.card-custom {
  background-color: white;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  padding: 2px;
}
[data-pc-name="calendar"] {
  width: 100%;
}
</style>

<script setup>
import { ref, watch } from 'vue';

const date = ref(null);

const dropdownValue = ref(null);
const dropdownValues = ref([
  { name: 'Tidak Tercapai' },
  { name: 'Tercapai' },
]);

const tabItems = [
  {
    title: "Al-Qur'an",
    children: [
      {
        title: "Juz Amma",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Al-Mulk",
        hafalan: true,
        setoran: true,
      },
      {
        title: "As-Sajdah",
        hafalan: true,
        setoran: true,
      },
      {
        title: "As-Waqiah",
        hafalan: true,
        setoran: true,
      },
      {
        title: "As-Rahman",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Yasin",
        hafalan: true,
        setoran: true,
      },
    ]
  },
  {
    title: "Tahlil dan Wirid",
    children: [
      {
        title: "Tahlil",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Wirid",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Istighosah",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Ratibul Haddad",
        hafalan: false,
        setoran: true,
      },
      {
        title: "Maulid Barzanji",
        hafalan: false,
        setoran: true,
      }
    ]
  },
  {
    title: "Sholat dan Wudhu",
    children: [
      {
        title: "Bacaan Sholat",
        hafalan: true,
        setoran: true,
      },
      {
        title: "Bacaan Wudhu",
        hafalan: true,
        setoran: true,
      },
    ]
  },
];

</script>