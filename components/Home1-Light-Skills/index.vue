<template>
  <section class="skills-circle section-padding bg-img parallaxie" data-overlay-dark="7" data-background="/img/1.jpg">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Best Skills</h6>
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">Best Skills</h4>
          </div>
        </div>
      </div>
      <div class="row wow fadeInUp" data-wow-delay=".3s">
        <div class="col-lg-3 col-md-6" v-for="skill, idx in skills" :key="idx">
          <div class="item text-center">
            <div class="skill">
              <client-only>
                <VueEllipseProgress
                  :progress="skill.percentage"
                  :legend="false"
                  color="#d3ed34"
                  emptyColor="rgba(0,0,0,0.2)"
                  :thickness="2"
                  emptyThickness="2"
                  :size="110"
                />
              </client-only>
              <span class="custom-font">{{ skill.percentage }}%</span>
              <h6>{{ skill.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import parallaxie from "../../common/parallaxie";
import Home1LightSkillsData from '../../data/home1-light-skills.json';

export default {
  name: "Home1-Light-Skills",
  data() {
    return {
      skills: Home1LightSkillsData
    }
  },
  mounted() {
    parallaxie('.skills-circle.bg-img.parallaxie');
  }
}
</script>
