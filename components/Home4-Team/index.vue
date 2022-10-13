<template>
  <section class="team bord section-padding">
    <div class="container">
      <div class="main-header text-center">
        <h3>Creative Team.</h3>
        <div class="tex-bg">Team</div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="teamMember, idx in team" :key="idx">
          <div :class="`item ${idx !== team.length-1 ? 'md-mb50':''}`">
            <div :class="`img ${idx % 2 !== 0 ? 'right':'left'}`">
              <img :src="teamMember.image" alt="">
            </div>
            <div class="info">
              <h6>{{ teamMember.name }}</h6>
              <span>{{ teamMember.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home4TeamData from '../../data/home4-team.json';

export default {
  name: "Home4-Team",
  data() {
    return {
      team: Home4TeamData,
    }
  }
}
</script>
