<template>
  <div class="skills-sec section-padding pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="skills-box full-width">
            <div class="skill-item" v-for="skill, idx in skills" :key="idx">
              <h6>{{ skill.title }}</h6>
              <div class="skill-progress">
                <div class="progres custom-font" :data-value="`${skill.percentage}%`"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <h4 class="playfont line-height-50 mb-20">Providing Customized Design Solutions That Fits Every Space .</h4>
            <p class="mb-10">Beyond more stoic this along goodness hey this this wow ipsum manate far impressive manifest farcrud opened inside.</p>
            <p>Fustered impressive manifest crud opened inside owing punitively around forewent and after wasteful telling sprang coldly and spoke less clients.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skillsProgress from "../../common/skillsProgress";
import AboutSkillsData from "../../data/about-skills.json";

export default {
  name: "About-Skills",
  data() {
    return {
      skills: AboutSkillsData
    }
  },
  mounted() {
    skillsProgress();
  }
}
</script>
