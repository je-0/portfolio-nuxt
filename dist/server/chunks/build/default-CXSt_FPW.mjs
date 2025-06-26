import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BGkDnltR.mjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$3 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const logoImage = {
      src: "./images/logo.png",
      alt: "logo img"
    };
    const navigationMenus = [
      {
        name: "Projects",
        path: "/project/list"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "app-header" }, _attrs))}><div class="inner"><h1 class="logo">`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logoImage.src)}${ssrRenderAttr("alt", logoImage.alt)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: logoImage.src,
                alt: logoImage.alt
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1><nav class="app-gnb"><ul><!--[-->`);
      ssrRenderList(navigationMenus, (menu, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(__nuxt_component_0), {
          to: menu.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(menu.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(menu.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const topButtonText = "TOP";
const copyrightText = "\xA9 Copyright 2025 je0.";
const darkModeText = "\uB2E4\uD06C\uBAA8\uB4DC";
const _sfc_main$2 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkMode = ref(false);
    const socialLinks = [
      {
        url: "https://github.com/je-0/",
        icon: "./images/icon-github.svg",
        alt: "github logo"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "app-footer" }, _attrs))}><button class="btn-top js-btn-top"><i class="icon-arrow-up"></i><span>${ssrInterpolate(topButtonText)}</span></button><div class="footer-wrap"><div class="btn-box"><!--[-->`);
      ssrRenderList(socialLinks, (social, index) => {
        _push(`<a${ssrRenderAttr("href", social.url)} role="button" target="_blank"><img${ssrRenderAttr("src", social.icon)}${ssrRenderAttr("alt", social.alt)}></a>`);
      });
      _push(`<!--]--></div><p class="copyright">${ssrInterpolate(copyrightText)}</p><div class="dark-mode-toggle"><span class="toggle-txt">${ssrInterpolate(darkModeText)}</span><label class="switch-box"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isDarkMode.value) ? ssrLooseContain(isDarkMode.value, null) : isDarkMode.value) ? " checked" : ""}><span class="slider-area"></span></label></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppA11y",
  __ssrInlineRender: true,
  setup(__props) {
    const skipLink = {
      href: "#content",
      text: "\uBCF8\uBB38\uC73C\uB85C \uC774\uB3D9\uD558\uAE30"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "skip-nav" }, _attrs))}><a${ssrRenderAttr("href", skipLink.href)}>${ssrInterpolate(skipLink.text)}</a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppA11y.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { $window, $document, $body } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa500888>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="app" data-v-fa500888>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="app-container" data-v-fa500888>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa500888"]]);

export { _default as default };
//# sourceMappingURL=default-CXSt_FPW.mjs.map
