<template>
  <div class=" synergeticOffice mt22 clearfix"> 
    <patrol-el></patrol-el>
    <water-el></water-el>
    <noise-el></noise-el>
    <plant-el></plant-el>
    <animate-el></animate-el>
    <geological-el></geological-el>
    <negative-el></negative-el>
  </div>
</template>

<script>
import patrolInformation from './patrolInformation'
import waterQuality from './waterQuality'
import noiseMonitoring from './noiseMonitoring'
import plantSpecies from './plantSpecies'
import animateSpecies from './animateSpecies'
import geologicalDistribution from './geologicalDistribution'
import negativeOxygen from './negativeOxygen'
export default {
  name: 'environmentalProtection',
  components: {     
    'patrol-el': patrolInformation,
    'water-el':waterQuality,
    'noise-el':noiseMonitoring,
    'plant-el':plantSpecies,
    'animate-el':animateSpecies,
    'geological-el':geologicalDistribution,
    'negative-el':negativeOxygen
  }
}
</script>
<style>
</style>
