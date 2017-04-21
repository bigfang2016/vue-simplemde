'use strict';

/**
 * vue-simplemde
 * @author F-loat
 */

import markdownEditor from './markdown-editor.vue';

export default {
  markdownEditor,
  install(Vue) {
    Vue.component('markdown-editor', markdownEditor);
  },
};
