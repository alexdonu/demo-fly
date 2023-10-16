<script setup lang="ts">
import { ref } from 'vue'

type District = {
  gym: boolean
  school: boolean
  store: boolean
}

const city = ref<District[]>([{ gym: true, school: true, store: false }])

function checkResult(result: Number[]) {
  if (result.length > 1) {
    return result
  } else {
    return result[0]
  }
}

function buildingsCountProcedural(district: District) {
  let count = 0

  if (district.gym) {
    count++
  }
  if (district.school) {
    count++
  }
  if (district.store) {
    count++
  }

  return count
}

function findDistrictWithMostBuildingsProcedural(city: District[]) {
  let districtsWithMostBuildingsIndex = []
  let districtWithMostBuildingsCount = -1

  for (let i = 0; i < city.length; i++) {
    let buildingsCount = buildingsCountProcedural(city[i])

    if (districtWithMostBuildingsCount < buildingsCount) {
      districtWithMostBuildingsCount = buildingsCount
      districtsWithMostBuildingsIndex = []
      districtsWithMostBuildingsIndex.push(i)
    } else if (districtWithMostBuildingsCount === buildingsCount) {
      districtsWithMostBuildingsIndex.push(i)
    }
  }

  return checkResult(districtsWithMostBuildingsIndex)
}

function buildingsCountFunctional(district: District) {
  return Object.values(district).filter(Boolean).length
}

function findDistrictWithMostBuildingsFunctional(city: District[]) {
  const buildingsCount = city.map(buildingsCountFunctional)
  const maxBuildingsCount = Math.max(...buildingsCount)

  const districtsWithMostBuildingsIndex = buildingsCount
    .map((count, index) => (count === maxBuildingsCount ? index : -1))
    .filter(index => index !== -1)

  return checkResult(districtsWithMostBuildingsIndex)
}
</script>

<template>
  <div>
    <div>
      <h2 class="center">City</h2>
      <div class="district-box">
        <div v-for="(district, index) in city" :key="index" class="district">
          <div>
            <label><input type="checkbox" v-model="district.gym" />Gym</label>
          </div>
          <div>
            <label><input type="checkbox" v-model="district.school" />School</label>
          </div>
          <div>
            <label><input type="checkbox" v-model="district.store" />Store</label>
          </div>
        </div>
      </div>
      <button @click="city.push({ gym: false, school: false, store: false })">Add district</button>
      <button @click="city.pop()">Delete last district</button>
    </div>
    <div>
      <h2 class="center">Result</h2>
      <div class="result-box">
        <div>
          <h3>Procedural</h3>
          <div>
            <h4>Buildings count</h4>
            <div v-for="(district, index) in city" :key="index">
              <div>
                <span>District {{ index }}: </span>
                <span>{{ buildingsCountProcedural(district) }}</span>
              </div>
            </div>
          </div>
          <div>
            <h4>District with most buildings</h4>
            <div>
              <span>{{ findDistrictWithMostBuildingsProcedural(city) }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Functional</h3>
          <div>
            <h4>Buildings count</h4>
            <div v-for="(district, index) in city" :key="index">
              <div>
                <span>District {{ index }}: </span>
                <span>{{ buildingsCountFunctional(district) }}</span>
              </div>
            </div>
          </div>
          <div>
            <h4>District with most buildings</h4>
            <div>
              <span>{{ findDistrictWithMostBuildingsFunctional(city) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.district-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.district {
  margin: 16px;
  padding: 16px;
  border: 1px solid black;
  width: 100px;
}

.result-box {
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;
}

.center {
  text-align: center;
}
</style>
