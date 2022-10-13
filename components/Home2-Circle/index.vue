<template>
  <section class="skills-circle pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div>
            <div class="row">
              <div class="col-md-6">
                <div class="item fadeInLeft sm-mb50">
                  <div class="skill">
                    <client-only>
                      <VueEllipseProgress
                        :progress="90"
                        :legend="true"
                        :legendValue="90"
                        :legendFormatter="({ currentValue }) => currentValue + '%'"
                        color="#d3ed34"
                        :emptyColor="theme == 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'"
                        :thickness="2"
                        emptyThickness="2"
                        :size="110"
                      />
                    </client-only>
                  </div>
                  <div class="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item fadeInLeft">
                  <div class="skill">
                    <client-only>
                      <VueEllipseProgress
                        :progress="75"
                        :legend="true"
                        :legendValue="75"
                        :legendFormatter="({ currentValue }) => currentValue + '%'"
                        color="#d3ed34"
                        :emptyColor="theme == 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'"
                        :thickness="2"
                        emptyThickness="2"
                        :size="110"
                      />
                    </client-only>
                  </div>
                  <div class="cont">
                    <span>App</span>
                    <h6>Development</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home2-Circle",
  props: ['theme'],
  mounted() {
    setTimeout(() => {
      let ProgressLegends = Object.values(document.querySelectorAll('.ep-legend--value__counter'));
      ProgressLegends.forEach(element => element.querySelector('span span').classList.add('custom-font'));
    });
  },
}
</script>
