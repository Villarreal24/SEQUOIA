<template>
  <div class="col-lg-6 map-box">
    <GmapMap :center="map" :zoom="12" style="width:100%;height:100%">
      <GmapMarker :position="map" :clickable="false" :draggable="false" />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Contact-Map",
  props: ['map']
}
</script>
