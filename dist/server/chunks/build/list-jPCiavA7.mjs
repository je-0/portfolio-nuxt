import { defineComponent, ref, computed, mergeProps, unref, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const projectsData = [
  {
    id: "cellosquare",
    type: "\uC6B4\uC601",
    title: "\uCCBC\uB85C\uC2A4\uD018\uC5B4 \uC0AC\uC774\uD2B8 \uC6B4\uC601",
    description: {
      intro: [
        "\uC2E0\uADDC UI \uAC00\uC774\uB4DC \uC81C\uC791\uC73C\uB85C \uC6B4\uC601 \uD6A8\uC728 \uD5A5\uC0C1",
        "\uD615\uC0C1 \uAD00\uB9AC\uAC00 \uC9C4\uD589 \uB418\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uB97C GIT\uC73C\uB85C \uC774\uAD00\uD558\uC5EC \uAC1C\uBC1C \uC18C\uD1B5 \uD5A5\uC0C1 \uBC0F \uBB38\uC81C \uD574\uACB0",
        "\uC6B4\uC601 \uD504\uB85C\uC138\uC2A4 \uD655\uB9BD\uC744 \uD1B5\uD55C \uC791\uC5C5\uC790 \uAC04\uC758 \uC18C\uD1B5 \uD5A5\uC0C1",
        "4\uAC1C\uAD6D \uC5B8\uC5B4 \uB300\uC751 \uCEE8\uD150\uCE20 \uD655\uC0B0\uC744 \uC704\uD55C \uAC00\uC774\uB4DC \uBC0F \uD30C\uC774\uC120\uC744 \uD65C\uC6A9\uD55C \uC791\uC5C5 \uD6A8\uC728 \uC99D\uB300"
      ],
      tech: [
        "html/css/gulp/git \uC6B4\uC601 \uB808\uAC70\uC2DC \uCF54\uB4DC \uC0AD\uC81C ",
        "seo \uD5A5\uC0C1\uC744 \uC704\uD55C \uAE30\uB2A5 \uAC1C\uC120"
      ]
    },
    link: "https://www.cello-square.com/kr/index.do",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "smasungDS",
    type: "\uC6B4\uC601",
    title: "\uC0BC\uC131\uBC18\uB3C4\uCCB4 DS \uC0AC\uC774\uD2B8 \uC6B4\uC601",
    description: {
      intro: [
        "AEM \uD658\uACBD \uB9DE\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC791\uC5C5 \uBC0F \uD655\uC0B0\uC744 \uC704\uD55C \uD655\uC7A5\uC131\uC744 \uACE0\uB824\uD55C \uD37C\uBE14\uB9AC\uC2F1",
        "PUG \uC0AC\uC6A9\uC744 \uD1B5\uD55C \uCEF4\uD3EC\uB10C\uD2B8 \uC81C\uC791 / \uD3EC\uB7FC \uB9C8\uC774\uD06C\uB85C \uC0AC\uC774\uD2B8 \uC81C\uC791",
        "6\uAC1C\uAD6D \uC0AC\uC774\uD2B8 \uC6B4\uC601 (\uC5B8\uC5B4: EN/KR/JP/CN)",
        "\uBC18\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "AEM/HTML/SCSS/PUG/javascirpt/git/gitlab",
        "\uC6F9 \uD45C\uC900, \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589/\uACF5\uD1B5 CSS \uBC0F \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131"
      ]
    },
    link: "https://semiconductor.samsung.com/kr/",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "amore",
    type: "\uC6B4\uC601",
    title: "\uC544\uBAA8\uB808\uD37C\uC2DC\uD53D \uC0AC\uC774\uD2B8 \uC6B4\uC601",
    description: {
      intro: [
        "\uB9C8\uC820\uD1A0/\uC1FC\uD53C\uD30C\uC774 \uB4F1\uC744 \uC0AC\uC6A9\uD55C CMS \uC0AC\uC6A9 \uBC0F Row Code\uB97C \uC0AC\uC6A9\uD55C \uB2E4\uC591\uD55C \uC778\uD130\uB809\uC158 \uBC0F \uD37C\uBE14\uB9AC\uC2F1 \uC218\uD589",
        "\uC124\uD654\uC218,\uB77C\uB124\uC988,\uD5E4\uB77C,\uD55C\uC728,\uB9C8\uBABD\uB4DC \uB4F1 \uC1FC\uD551\uBAB0 \uBC0F \uBE0C\uB79C\uB4DC \uC0AC\uC774\uD2B8 \uC6B4\uC601(27\uAC1C\uAD6D- \uC0AC\uC6A9\uC5B8\uC5B4 EN/KR/JP/CN/TH/VN/MY\uB4F1)",
        "\uBC18\uC751\uD615/ \uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1(\uBE0C\uB79C\uB4DC\uBCC4 \uC0C1\uC774)"
      ],
      tech: [
        "html/scss/gulp/git\uC744 \uD65C\uC6A9\uD55C \uD615\uC0C1\uAD00\uB9AC \uC9C4\uD589",
        "\uC6F9 \uD45C\uC900, \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589"
      ]
    },
    link: "https://www.sulwhasoo.com/kr/ko/index.html",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "lgGlobal",
    type: "Roll Out/ \uAD6C\uCD95",
    title: "LG GP1 \uD504\uB85C\uC81D\uD2B8 \uAE00\uB85C\uBC8C \uC0AC\uC774\uD2B8 \uAD6C\uCD95 \uBC0F Roll Out",
    description: {
      intro: [
        "AEM \uD658\uACBD \uB9DE\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC791\uC5C5 \uBC0F \uD655\uC0B0\uC744 \uC704\uD55C \uD655\uC7A5\uC131\uC744 \uACE0\uB824\uD55C \uD37C\uBE14\uB9AC\uC2F1",
        "\uB2E4\uAD6D\uC5B4 \uB300\uC751 \uAC00\uB2A5: (EN/KR/JP/CN/AR/VN/TH/TW/DE \uB4F1)45\uAC1C\uAD6D \uD655\uC0B0 \uC624\uD508 \uC9C4\uD589",
        "pug\uB97C \uC0AC\uC6A9\uD55C \uCEF4\uD3EC\uB10C\uD2B8 \uC81C\uC791",
        "\uBC18\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "AEM/HTML/ SCSS/ PUG/javascirpt/git/gitlab",
        "\uC6F9 \uD45C\uC900, \uACF5\uD1B5 CSS \uBC0F \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131"
      ]
    },
    link: "https://www.lg.com/uk/",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "atomy",
    type: "\uAD6C\uCD95",
    title: "\uC560\uD130\uBBF8 \uC1FC\uD551\uBAB0 \uAC1C\uD3B8",
    description: {
      intro: [
        "\uC1FC\uD551\uBAB0 \uAC1C\uD3B8\uC744 \uD1B5\uD55C \uC0AC\uC6A9\uC790\uC758 \uD3B8\uC758\uC131 \uD5A5\uC0C1",
        "\uBC18\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "VUE.JS /HTML /CSS/ SCSS/ GIT / JIRA / JAVASCRIPT",
        "\uC6F9 \uD45C\uC900, \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589/\uACF5\uD1B5 CSS \uBC0F \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131"
      ]
    },
    link: "https://shop.atomy.com/kr",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "glovis",
    type: "\uAD6C\uCD95",
    title: "\uD604\uB300\uAE00\uB85C\uBE44\uC2A4 \uC628\uB77C\uC778 \uC218\uCD9C \uD50C\uB7AB\uD3FC \uAD6C\uCD95",
    description: {
      intro: [
        "\uACBD\uB9E4 \uC218\uCD9C \uD50C\uB7AB\uD3FC \uAD6C\uCD95/ \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uC73C\uB85C \uC804\uD658 \uACE0\uB824\uD558\uC5EC \uD37C\uBE14\uB9AC\uC2F1 \uC9C4\uD589",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "GULP/HTML/CSS/SCSS/jQuery/JAVASCRIPT/",
        "\uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "javascript:;",
    linkText: "\uBCF4\uC548\uC0C1\uC758 \uC774\uC720",
    disabled: true
  },
  {
    id: "kbarchive",
    type: "\uAD6C\uCD95",
    title: "KB\uAE08\uC735\uADF8\uB8F9(\uC9C0\uC8FC)\uC758 \uB514\uC9C0\uD138 \uC544\uCE74\uC774\uBE0C \uAD6C\uCD95",
    description: {
      intro: [
        "\uAE08\uC735 \uC9C0\uC8FC\uC0AC \uB514\uC9C0\uD138 \uC544\uCE74\uC774\uBE0C \uAD6C\uCD95",
        "PC \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 /\uC6F9 \uD45C\uC900, \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589",
        "\uB9AC\uC18C\uC2A4 \uD3F4\uB354 \uAD6C\uC870 \uC0DD\uC131 /\uD30C\uC77C \uB124\uC774\uBC0D /\uACF5\uD1B5 CSS/JS \uC791\uC131"
      ]
    },
    link: "https://www.kbfg.com/Kor/about/archive/html/main/main.html",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "serveoneRenewal",
    type: "\uAD6C\uCD95",
    title: "2021 \uC11C\uBE0C\uC6D0 \uB9AC\uB274\uC5BC",
    description: {
      intro: [
        "\uC11C\uBE0C\uC6D0 \uB9AC\uB274\uC5BC\uC744 \uD1B5\uD55C \uC811\uADFC\uC131 \uD5A5\uC0C1",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp.js",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 /\uC6F9 \uD45C\uC900, \uC6F9\uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589"
      ]
    },
    link: "http://www.serveone.co.kr/kr/main.do",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "serveoneSM2021",
    type: "\uC6B4\uC601",
    title: "2021 \uC11C\uBE0C\uC6D0 \uC720\uC9C0\uBCF4\uC218",
    description: {
      intro: [
        "\uC0AC\uC774\uD2B8 \uC720\uC9C0\uBCF4\uC218(\uC5C5\uB370\uC774\uD2B8)",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp.js",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "http://www.serveone.co.kr/kr/main.do",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "samsungS",
    type: "\uAD6C\uCD95",
    title: "\uC0BC\uC131\uC804\uC790\uC11C\uBE44\uC2A4 \uAD6C\uCD95",
    description: {
      intro: [
        "\uC0BC\uC131\uC804\uC790\uC11C\uBE44\uC2A4 \uAD6C\uCD95\uC744 \uD1B5\uD55C \uC0AC\uC6A9\uC790 \uD3B8\uC758\uC131 \uD655\uB300 \uBC0F \uAC1C\uC120",
        "\uBC18\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery /Gulp.js",
        "\uC6F9\uC811\uADFC\uC131 \uD68D\uB4DD / \uB9C8\uD06C\uC5C5 \uC720\uD6A8\uC131 \uAC80\uC0AC \uBC0F \uC6F9 \uD45C\uC900/\uC6F9 \uC811\uADFC\uC131 \uB9C8\uD06C\uC5C5 \uC9C4\uD589",
        "/ \uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5/\uC6F9\uC811\uADFC\uC131/UI/UX \uAE30\uC220 \uAD6C\uD604 \uAC00\uB2A5 \uC5EC\uBD80 \uAC80\uD1A0"
      ]
    },
    link: "https://www.samsungsvc.co.kr/",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "Lg",
    type: "\uAD6C\uCD95",
    title: "LG\uD654\uD559 \uD64D\uBCF4\uD3EC\uD138 \u2013 \uACE0\uAC1D\uBD88\uD3B8 \uC124\uBB38 \uD398\uC774\uC9C0",
    description: {
      intro: [
        "\uC774\uBCA4\uD2B8 \uBC0F \uACE0\uAC1D \uBD88\uD3B8 \uC124\uBB38 \uD398\uC774\uC9C0 \uC791\uC131",
        "PC"
      ],
      tech: [
        "HTML/ CSS/ jQuery /",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "javascript:;",
    linkText: "\uBCF4\uC548\uC0C1\uC758 \uC774\uC720",
    disabled: true
  },
  {
    id: "pantos",
    type: "\uC6B4\uC601",
    title: "2020\uB144 \uD310\uD1A0\uC2A4 \uC720\uC9C0\uBCF4\uC218",
    description: {
      intro: [
        "\uC0AC\uC774\uD2B8 \uC720\uC9C0\uBCF4\uC218(\uC5C5\uB370\uC774\uD2B8)",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp.js",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "https://www.pantos.com/kr/",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "hos",
    type: "\uAD6C\uCD95",
    title: "\uD604\uB300\uCC28 \uC2F1\uAC00\uD3EC\uB974-\uD638\uC8FC \uC628\uB77C\uC778 \uD310\uB9E4\uC2DC\uC2A4\uD15C\uAD6C\uCD95",
    description: {
      intro: [
        "\uC2F1\uAC00\uD3EC\uB974-\uD638\uC8FC \uC628\uB77C\uC778 \uD310\uB9E4\uC2DC\uC2A4\uD15C \uAD6C\uCD95",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp.js",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "javascript:;",
    linkText: "\uBCF4\uC548\uC0C1\uC758 \uC774\uC720",
    disabled: true
  },
  {
    id: "serveoneSM2020",
    type: "\uC6B4\uC601",
    title: "2020\uB144 \uC11C\uBE0C\uC6D0 \uC720\uC9C0\uBCF4\uC218",
    description: {
      intro: [
        "\uC0AC\uC774\uD2B8 \uC720\uC9C0\uBCF4\uC218(\uC5C5\uB370\uC774\uD2B8)",
        "\uC801\uC751\uD615 \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery / Gulp.js",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "http://www.serveone.co.kr/kr/main.do",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  },
  {
    id: "inotion",
    type: "\uAD6C\uCD95",
    title: "\uC774\uB178\uC158 \uBBF8\uB514\uC5B4\uBC14\uC789 \uC625\uC678\uBBF8\uB514\uC5B4 \uAE30\uB2A5\uAC1C\uC120",
    description: {
      intro: [
        "\uC625\uC678\uBBF8\uB514\uC5B4 \uAE30\uB2A5\uAC1C\uC120",
        "PC \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery /",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "javascript:;",
    linkText: "\uBCF4\uC548\uC0C1\uC758 \uC774\uC720",
    disabled: true
  },
  {
    id: "ezwell",
    type: "\uAD6C\uCD95",
    title: "\uC774\uC9C0\uC6F0\uD398\uC5B4 \uD648\uD398\uC774\uC9C0 \uAC1C\uD3B8",
    description: {
      intro: [
        "\uD648\uD398\uC774\uC9C0 \uAC1C\uD3B8",
        "PC \uD37C\uBE14\uB9AC\uC2F1"
      ],
      tech: [
        "HTML/ CSS/ jQuery /",
        "\uD06C\uB85C\uC2A4\uBE0C\uB77C\uC6B0\uC9D5 \uCCB4\uD06C"
      ]
    },
    link: "https://www.ezwell.co.kr/",
    linkText: "\uC0AC\uC774\uD2B8 \uBC14\uB85C\uAC00\uAE30",
    disabled: false
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectLayer",
  __ssrInlineRender: true,
  props: {
    projectId: { default: "" }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const projects = ref(projectsData);
    const isActive = ref(false);
    const layerRef = ref(null);
    ref(null);
    const filteredProjects = computed(() => {
      if (props.projectId) {
        return projects.value.filter((project) => project.id === props.projectId);
      }
      return projects.value;
    });
    const closeLayer = () => {
      isActive.value = false;
      emit("close");
      (void 0).body.classList.remove("is-hidden");
      if ((void 0).previousFocusElement) {
        (void 0).previousFocusElement.focus();
      }
    };
    const openLayer = () => {
      (void 0).previousFocusElement = (void 0).activeElement;
      isActive.value = true;
      (void 0).body.classList.add("is-hidden");
      nextTick(() => {
        var _a;
        if (layerRef.value) {
          if (Array.isArray(layerRef.value)) {
            (_a = layerRef.value[0]) == null ? void 0 : _a.focus();
          } else {
            layerRef.value.focus();
          }
        }
      });
    };
    const handleTabKey = (event) => {
      var _a;
      const focusableElements = (_a = layerRef.value) == null ? void 0 : _a.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      if (!focusableElements || focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey) {
        if ((void 0).activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if ((void 0).activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    __expose({
      openLayer,
      closeLayer
    });
    watch(isActive, (newValue) => {
      if (newValue) {
        nextTick(() => {
          if (layerRef.value) {
            const layer = Array.isArray(layerRef.value) ? layerRef.value[0] : layerRef.value;
            layer == null ? void 0 : layer.addEventListener("keydown", handleTabKey);
          }
        });
      } else {
        if (layerRef.value) {
          const layer = Array.isArray(layerRef.value) ? layerRef.value[0] : layerRef.value;
          layer == null ? void 0 : layer.removeEventListener("keydown", handleTabKey);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(filteredProjects), (project) => {
        _push(`<div class="${ssrRenderClass([{ "is-active": unref(isActive) }, "layer-wrap"])}"${ssrRenderAttr("data-layer-name", project.id)} tabindex="-1"><div class="layer"><strong class="tit">${ssrInterpolate(project.title)}</strong><div class="layer-cont"><dl class="project-info"><dt>\uC18C\uAC1C</dt><!--[-->`);
        ssrRenderList(project.description.intro, (item, index) => {
          _push(`<dd>${ssrInterpolate(item)}</dd>`);
        });
        _push(`<!--]--></dl><dl><dt>\uC0AC\uC6A9\uAE30\uC220 \uBC0F \uB0B4\uC6A9</dt><!--[-->`);
        ssrRenderList(project.description.tech, (item, index) => {
          _push(`<dd>${ssrInterpolate(item)}</dd>`);
        });
        _push(`<!--]--></dl><div class="btn-box"><a${ssrRenderAttr("href", project.link)} role="button"${ssrRenderAttr("target", project.disabled ? void 0 : "_blank")} class="${ssrRenderClass(["btn-basic", { "btn-disabled": project.disabled }])}"${ssrRenderAttr("tabindex", project.disabled ? -1 : 0)}><span>${ssrInterpolate(project.linkText)}</span></a></div></div><button class="btn-layer-close btnPopupClose"><span>\uB2EB\uAE30</span></button></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectLayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const viewType = ref("list");
    const showLayer = ref(false);
    const selectedProjectId = ref("");
    const projectLayerRef = ref();
    const projects = ref(projectsData);
    const filteredProjects = computed(() => {
      return projects.value;
    });
    const getProjectDate = (id) => {
      const dateMap = {
        cellosquare: "2025.04 ~ 06",
        smasungDS: "2024.06 ~ ",
        amore: "2024.02~2024.06",
        lgGlobal: "2023.06~2024.12",
        atomy: "2022.01~2023.03",
        glovis: "2021.08~2022.01",
        kbarchive: "2021.06~08",
        serveoneRenewal: "2021.04~06",
        serveoneSM2021: "2021.03~04",
        samsungS: "2020.09~2021.03",
        Lg: "2020.09",
        pantos: "2020.08~2020.09",
        hos: "2020.05~2020.08",
        serveoneSM2020: "2020.03~2020.04",
        inotion: "2020.01~2020.03 ",
        ezwell: "2020.01"
      };
      return dateMap[id] || "2020";
    };
    const closeProjectLayer = () => {
      showLayer.value = false;
      selectedProjectId.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectLayer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pg-project" }, _attrs))} data-v-8582688d><div class="container" data-v-8582688d><div class="project-wrap" data-v-8582688d><div class="section-tit" data-v-8582688d><h1 data-v-8582688d>\uD504\uB85C\uC81D\uD2B8</h1><p class="sub-txt" data-v-8582688d>\uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694</p></div><div class="section-cont" data-v-8582688d><div class="list-head" data-v-8582688d><span data-v-8582688d>\uCD1D <em class="data-list-num" data-v-8582688d>${ssrInterpolate(unref(filteredProjects).length)}</em> \uD504\uB85C\uC81D\uD2B8</span><div class="list-type" data-v-8582688d><a href="javascript:;" class="${ssrRenderClass({ "is-active": unref(viewType) === "list" })}" data-v-8582688d> \uB9AC\uC2A4\uD2B8 </a><a href="javascript:;" class="${ssrRenderClass({ "is-active": unref(viewType) === "card" })}" data-v-8582688d> \uCE74\uB4DC </a></div></div><div class="${ssrRenderClass([`type-${unref(viewType)}`, "project-list"])}" data-v-8582688d><ul data-v-8582688d><!--[-->`);
      ssrRenderList(unref(filteredProjects), (project) => {
        _push(`<li data-v-8582688d><a href="javascript:;" data-v-8582688d><span class="project-type" data-v-8582688d>${ssrInterpolate(project.type)}</span><span class="project-name" data-v-8582688d>${ssrInterpolate(project.title)}</span><span class="project-date" data-v-8582688d>${ssrInterpolate(getProjectDate(project.id))}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
      if (unref(showLayer)) {
        _push(ssrRenderComponent(_component_ProjectLayer, {
          "project-id": unref(selectedProjectId),
          ref_key: "projectLayerRef",
          ref: projectLayerRef,
          onClose: closeProjectLayer
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8582688d"]]);

export { list as default };
//# sourceMappingURL=list-jPCiavA7.mjs.map
