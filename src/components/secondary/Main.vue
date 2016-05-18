<template>
  <aside class="secondary" v-bind:class="['secondary--' + size.layout, secondary.status]">
    <div class="secondary__inner">

      <component :is="size.layout">
        <div slot="navigation">
          <a class="btn btn--close" @click=homeClick>
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 26.3 26.3;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="26.3,2.8 23.5,0 13.2,10.3 2.8,0 0,2.8 10.3,13.2 0,23.5 2.8,26.3 13.2,16 23.5,26.3 26.3,23.5 16,13.2 "/>
            </svg>
          </a>

          <a class="btn btn--next">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="18.7,0 15.9,2.8 23,10 0,10 0,14 23,14 15.9,21.1 18.7,24 30.7,12 "/>
            </svg>
          </a>

          <a class="btn btn--prev">
            <svg version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30.7 24;"
               xml:space="preserve">
            <defs>
            </defs>
            <polygon points="30.7,14 30.7,10 7.7,10 14.8,2.8 12,0 0,12 12,24 14.8,21.1 7.7,14 "/>
            </svg>
          </a>
        </div>

        <div slot="menu">
          <ul>
            <li><a href="#" v-link="'/'">Home</a></li>
            <li><a href="#" v-link="'cases'">Cases</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" @click=homeClick>Contact</a></li>
          </li>
        </div>

        <div slot="section">01</div>
      </component>

      <div class="sidecontent">
      <p>This is primary</p>
      There's a lot of content here. Nice right?
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat diam egestas lacus iaculis, vitae tincidunt velit fermentum. Duis vel nunc libero. Vivamus ultrices non felis ut volutpat. Sed arcu diam, feugiat id nunc id, tincidunt porta risus. Vivamus imperdiet libero sit amet neque fermentum maximus. Phasellus euismod mollis tellus sed lobortis. Sed placerat lacinia leo eu malesuada. In tempor elit ut leo feugiat aliquet. Aliquam erat volutpat. Fusce ac lectus eget turpis condimentum facilisis. Nunc nibh massa, sodales vitae aliquet vitae, tincidunt ut erat. Nunc vel mauris in ante vehicula ornare vel et lacus. Nunc ornare sollicitudin augue ut tempus. Sed nulla justo, aliquet vel sagittis non, eleifend in justo. In orci quam, porttitor at enim eu, lobortis porta nunc. Phasellus euismod lectus libero, sit amet viverra purus aliquam nec. Aenean consequat accumsan orci, id posuere enim scelerisque vitae. Nam ut quam blandit, sollicitudin ante nec, auctor leo. Fusce at libero sodales, mollis neque vitae, pellentesque tellus. Nunc dignissim orci finibus sem hendrerit, at convallis diam condimentum. Aliquam hendrerit eros massa. Vivamus porta nisi a mattis venenatis. Quisque quis faucibus orci, eget accumsan dui. Praesent odio lectus, laoreet tincidunt odio in, finibus euismod purus. Fusce egestas lacus quis euismod vestibulum. Maecenas dignissim est sit amet porttitor feugiat. Pellentesque accumsan volutpat odio, eget luctus mi posuere vel. Suspendisse nec leo nec justo efficitur luctus. Vestibulum varius arcu id leo sollicitudin fringilla. Duis gravida elementum enim in auctor. Aliquam id gravida massa. Morbi et efficitur massa. Cras et viverra nunc, vitae tempus augue. Cras finibus quam at maximus egestas. Curabitur eu venenatis nisl. Donec vel ex placerat, pellentesque sem a, ultrices risus. Maecenas id cursus ex. Curabitur quam enim, commodo id massa ut, laoreet ullamcorper augue. Nullam egestas justo interdum, semper lorem quis, sodales libero. Proin auctor nisi nec turpis bibendum, tincidunt tincidunt est convallis. Pellentesque porta eleifend mauris et egestas. Nam hendrerit at ex et placerat. Ut sagittis molestie tincidunt. Etiam vehicula, turpis in pretium congue, ligula arcu feugiat urna, sed dictum ipsum enim ut eros. Fusce arcu urna, pulvinar quis ipsum vitae, eleifend volutpat elit.
      </div>

    </div>
  </aside>
</template>

<script>
import {
  secondaryOpen,
  secondaryClose,
  theme
} from 'vuex/actions';
import { getSize, getSecondary } from 'vuex/getters';

import desktop from './Desktop';
import mobile from './Mobile';

export default {

  vuex: {
    actions: {
      secondaryClose: secondaryClose,
      secondaryOpen: secondaryOpen,
      theme: theme
    },
    getters: {
      size: getSize,
      secondary: getSecondary
    }
  },

  ready () {
    console.log(this.secondary.status);
  },

  methods: {
    homeClick (event) {
      this.toggleSecondary();
    },

    toggleSecondary () {
      /*
       * Behøver intet callback, bare et delay på animationer
       */
      if (this.secondary.status === 'open') {
        this.secondaryClose();
        this.theme('light');
      } else {
        this.theme('dark');
        this.secondaryOpen();
      }
    }
  },

  components: {
    desktop,
    mobile
  }
};
</script>

<style lang="scss" scoped>
@import '../../stylesheets/variables';

/* Test scroll content
 * TODO: Styling split/scrollbar. Maybe detect browser
 */
.sidecontent {
  overflow-y: scroll;
  height: 100%;
  margin-left: 1px; /* Find a smart way to do this. Maybe just hide the border, and use the scrollbar as that */
  padding: 50px;
}

/*
 * Shared
 */
.secondary {
  position: fixed;
  transform: translateZ(0);
  backface-visibility: hidden;

  .secondary__inner {
    width: 100%;
    height: 100%;
    transition: background $secondary-sec $secondary-ease;

    backface-visibility: hidden;
    transform: translateZ(0);
  }
}

/*
 * DESKTOP
 */
.secondary--desktop {
  padding-right: $border-size;
  width: $nav-width + $border-size * 2 + 1; // plus page border and 1px border
  height: 100%;
  will-change: width;
  transition: width $secondary-sec $secondary-ease;
  .secondary__inner {
    // width: $nav-width + $border-size + 1; // Width here fixes jump whwen loading!
    background-color: $white;
    padding-top: $border-size;
    padding-bottom: $border-size;
    transform: translateX(-1px) translateZ(0); // Hide border
  }
}
.secondary--desktop.open {
  width: 100%;
  .secondary__inner {
    // width: 100%;
    transform: translateX(1px) translateZ(0);
    background-color: $dark;
  }
}

/*
 * MOBILE
 */
.secondary--mobile {
  bottom: 0;
  width: 100%;
  height: $nav-mobile-height + $border-size * 2;
  will-change: height;
  transition: height $secondary-sec $secondary-ease;
  .secondary__inner {
    background-color: $white;
    padding-left: $border-size;
    padding-right: $border-size;
    margin-top: $border-size;
  }
}
.secondary--mobile.open {
  height: 100%;
  .secondary__inner {
    background-color: $dark;
  }
}


/*
 * Shared menu styles
 */
.menu {
  ul {
    margin: 0;
    padding: 0;
    user-select: none;
    text-align: center;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .btn {
    cursor: pointer;
    transition: fill 0.2s ease;
    &:hover { fill: $blue; }
    &:hover::after { display: none; }
  }
}
</style>
