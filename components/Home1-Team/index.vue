<template>
  <section class="team section-padding">
    <div class="container">
      <div class="section-head">
        <h3>Our Team</h3>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">

        <div class="col-lg-3 col-md-6" v-for="teamMember, idx in teamData" :key="idx">
          <div :class="`item cir ${idx !== teamData.length - 1 ? 'md-mb50':''}`">
            <div class="img">
              <img :src="teamMember.image" alt="">
              <div id="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
                  <defs>
                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlink:href="#circlePath" fill="none" />
                    <text fill="#c5a47e">
                      <textPath xlink:href="#circlePath">{{ teamMember['position-circle'] }}</textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div class="info">
                <h6>{{ teamMember.name }}</h6>
                <span>{{ teamMember.position }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Home1TeamData from "../../data/home1-team.json";

export default {
  name: "Home1-Team",
  data() {
    return {
      teamData: Home1TeamData
    }
  },
}
</script>
