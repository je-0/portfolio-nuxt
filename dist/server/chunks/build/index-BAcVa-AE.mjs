import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BGkDnltR.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const name = "\uC784\uC81C\uC601\uC785\uB2C8\uB2E4";
const _sfc_main$5 = {
  __name: "MainIntro",
  __ssrInlineRender: true,
  setup(__props) {
    const movingText = ["\uC131", "\uC7A5", "\uD558", "\uB294", "\uD37C", "\uBE14", "\uB9AC", "\uC154"];
    const keyVisualImage = {
      src: "./images/main/bg-main.jpg",
      alt: "keyvisual"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section intro" }, _attrs))}><div class="section-tit js-motion-item"><h2><p class="moving-txt"><!--[-->`);
      ssrRenderList(movingText, (char, index) => {
        _push(`<span>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></p><p>${ssrInterpolate(name)}</p></h2></div><div class="section-cont"><img${ssrRenderAttr("src", keyVisualImage.src)}${ssrRenderAttr("alt", keyVisualImage.alt)} loading="lazy"></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainIntro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const skillDescription = "\uC8FC\uC5B4\uC9C4 \uC5C5\uBB34\uB97C \uCC45\uC784\uAC10\uC788\uAC8C<br>\uC644\uC218\uD574 \uC870\uC9C1\uC5D0 \uB3C4\uC6C0\uC744 \uC8FC\uACE0<br>\uC131\uC7A5\uD558\uB294 \uD37C\uBE14\uB9AC\uC154";
const _sfc_main$4 = {
  __name: "MainSkills",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section skils-section js-motion-item" }, _attrs))}><div class="section-tit"><h2>${skillDescription}</h2></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainSkills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const sectionTitle = "\uACBD\uB825";
const _sfc_main$3 = {
  __name: "MainCareer",
  __ssrInlineRender: true,
  setup(__props) {
    const careerImage = {
      src: "./images/main/skils.jpg",
      alt: "Visual Studio screen with coding on a laptop"
    };
    const careerList = [
      {
        company: "\uCF58\uC13C\uD2B8\uB9AD\uC2A4\uC11C\uBE44\uC2A4\uCF54\uB9AC\uC544 \uCE74\uD0C8\uB9AC\uC2A4\uD2B8",
        position: "UX/UI 1\uD300/ \uB300\uB9AC",
        description: "\uC6F9/\uC571 \uC0AC\uC774\uD2B8 \uAD6C\uCD95 \uBC0F \uC720\uC9C0\uBCF4\uC218",
        period: "2023.06 ~"
      },
      {
        company: "\uC81C\uC624\uC820",
        position: "\uD37C\uBE14\uB9AC\uC2F1\uD300/ \uC8FC\uC784",
        description: "\uC6F9/\uC571 \uC0AC\uC774\uD2B8 \uAD6C\uCD95 \uBC0F \uC720\uC9C0\uBCF4\uC218",
        period: "2020.01.15 ~ 2023.03"
      }
    ];
    const calculateTotalCareer = () => {
      const now = /* @__PURE__ */ new Date();
      const startDate = /* @__PURE__ */ new Date("2020-01-15");
      const years = now.getFullYear() - startDate.getFullYear();
      const months = now.getMonth() - startDate.getMonth();
      const totalMonths = years * 12 + months;
      const calcYears = Math.floor(totalMonths / 12);
      const calcMonths = totalMonths % 12;
      return `${calcYears}\uB144 ${calcMonths}\uAC1C\uC6D4`;
    };
    const totalCareer = calculateTotalCareer();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section career js-motion-item" }, _attrs))}><div class="section-tit"><h2>${ssrInterpolate(sectionTitle)}</h2><p class="total-career">\uCD1D ${ssrInterpolate(unref(totalCareer))}</p></div><div class="section-cont career-img"><img${ssrRenderAttr("src", careerImage.src)}${ssrRenderAttr("alt", careerImage.alt)} loading="lazy"></div><div class="section-cont career-list"><!--[-->`);
      ssrRenderList(careerList, (career, index) => {
        _push(`<dl><dt>${ssrInterpolate(career.company)}</dt><dd>${ssrInterpolate(career.position)}</dd><dd>${ssrInterpolate(career.description)}</dd><dd>${ssrInterpolate(career.period)}</dd></dl>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainCareer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MainProject",
  __ssrInlineRender: true,
  setup(__props) {
    const projectLink = {
      path: "/project/list",
      title: "\uD504\uB85C\uC81D\uD2B8 \uC790\uC138\uD788 \uBCF4\uAE30"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section project js-motion-item" }, _attrs))}><div class="section-tit">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: projectLink.path,
        role: "button",
        class: "btn-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>${ssrInterpolate(projectLink.title)}</h2>`);
          } else {
            return [
              createVNode("h2", null, toDisplayString(projectLink.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainProject.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "MainPeople",
  __ssrInlineRender: true,
  setup(__props) {
    const peopleData = [
      {
        title: "\uC131\uC7A5\uD558\uB294 \uAC1C\uBC1C\uC790",
        description: "\uD2B8\uB80C\uB4DC\uC5D0 \uAC78\uB9DE\uB294 \uCF54\uB529",
        image: "./images/main/people-01.jpg",
        alt: "A photo of the web coding screen."
      },
      {
        title: "\uD611\uB825\uACFC \uC18C\uD1B5",
        description: "\uD30C\uD2B8\uBCC4 \uD611\uC5C5\uC744 \uD1B5\uD55C \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158<br>\uC2E4\uBB34 \uC791\uC5C5\uC790\uB4E4\uACFC \uC6D0\uD65C\uD558\uAC8C \uC18C\uD1B5",
        image: "./images/main/people-02.jpg",
        alt: "A picture of everyone holding hands together."
      },
      {
        title: "\uBC1C\uC804",
        description: "\uC624\uB298\uC758 \uB178\uB825\uC744 \uD1B5\uD55C \uB0B4\uC77C\uC758 \uC131\uC7A5<br>\uB9E4\uC77C \uB9E4\uC77C\uC744 \uC131\uC7A5\uC758 \uAE30\uD68C",
        image: "./images/main/people-03.jpg",
        alt: "A picture of assisting someone at the summit of the mountain."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section people js-motion-item" }, _attrs))}><div class="section-cont"><ul><!--[-->`);
      ssrRenderList(peopleData, (item, index) => {
        var _a;
        _push(`<li><dl class="img-tit"><dt>${ssrInterpolate(item.title)}</dt><dd>${(_a = item.description) != null ? _a : ""}</dd></dl><div class="img-box"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.alt)} loading="lazy"></div></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPeople.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainIntro = _sfc_main$5;
      const _component_MainSkills = _sfc_main$4;
      const _component_MainCareer = _sfc_main$3;
      const _component_MainProject = _sfc_main$2;
      const _component_MainPeople = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "app-content main",
        tabindex: "-1",
        id: "content"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_MainSkills, null, null, _parent));
      _push(ssrRenderComponent(_component_MainCareer, null, null, _parent));
      _push(ssrRenderComponent(_component_MainProject, null, null, _parent));
      _push(ssrRenderComponent(_component_MainPeople, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BAcVa-AE.mjs.map
