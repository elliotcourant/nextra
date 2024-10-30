// @ts-nocheck
import { normalizePageMap } from 'nextra/page-map'
import {metadata as themes_test} from "./themes-test.md";
import {metadata as themes_test_foo} from "./themes-test/foo.md";
import {metadata as themes} from "./themes.md";
import {metadata as themes_bar} from "./themes/bar.md";
const _pageMap = [{
  name: "themes-test",
  route: "/themes-test",
  children: [{
    name: "index",
    route: "/themes-test",
    frontMatter: themes_test
  }, {
    name: "foo",
    route: "/themes-test/foo",
    frontMatter: themes_test_foo
  }]
}, {
  name: "themes",
  route: "/themes",
  children: [{
    name: "index",
    route: "/themes",
    frontMatter: themes
  }, {
    name: "bar",
    route: "/themes/bar",
    frontMatter: themes_bar
  }]
}];

export const pageMap = normalizePageMap(_pageMap)

export const RouteToFilepath = {
  "themes-test": "themes-test.md",
  "themes-test/foo": "themes-test/foo.md",
  "themes": "themes.md",
  "themes/bar": "themes/bar.md"
}