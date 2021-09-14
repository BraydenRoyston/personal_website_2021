export const LayoutNavBar = () => import('../../components/Layout/NavBar.vue' /* webpackChunkName: "components/layout-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LayoutNavSpacer = () => import('../../components/Layout/NavSpacer.vue' /* webpackChunkName: "components/layout-nav-spacer" */).then(c => wrapFunctional(c.default || c))
export const LayoutPortfolioCell = () => import('../../components/Layout/PortfolioCell.vue' /* webpackChunkName: "components/layout-portfolio-cell" */).then(c => wrapFunctional(c.default || c))
export const LayoutSocialRow = () => import('../../components/Layout/SocialRow.vue' /* webpackChunkName: "components/layout-social-row" */).then(c => wrapFunctional(c.default || c))
export const LayoutTopSpacer = () => import('../../components/Layout/TopSpacer.vue' /* webpackChunkName: "components/layout-top-spacer" */).then(c => wrapFunctional(c.default || c))
export const TypographyDynamicHeading = () => import('../../components/Typography/DynamicHeading.vue' /* webpackChunkName: "components/typography-dynamic-heading" */).then(c => wrapFunctional(c.default || c))
export const TypographyPrimaryHeading = () => import('../../components/Typography/PrimaryHeading.vue' /* webpackChunkName: "components/typography-primary-heading" */).then(c => wrapFunctional(c.default || c))
export const TypographySecondaryHeading = () => import('../../components/Typography/SecondaryHeading.vue' /* webpackChunkName: "components/typography-secondary-heading" */).then(c => wrapFunctional(c.default || c))
export const SectionsBioSection = () => import('../../components/Sections/BioSection.vue' /* webpackChunkName: "components/sections-bio-section" */).then(c => wrapFunctional(c.default || c))
export const SectionsFooterSection = () => import('../../components/Sections/FooterSection.vue' /* webpackChunkName: "components/sections-footer-section" */).then(c => wrapFunctional(c.default || c))
export const SectionsIntroSection = () => import('../../components/Sections/IntroSection.vue' /* webpackChunkName: "components/sections-intro-section" */).then(c => wrapFunctional(c.default || c))
export const SectionsPortfolioSection = () => import('../../components/Sections/PortfolioSection.vue' /* webpackChunkName: "components/sections-portfolio-section" */).then(c => wrapFunctional(c.default || c))
export const UserInterfaceModeButton = () => import('../../components/UserInterface/ModeButton.vue' /* webpackChunkName: "components/user-interface-mode-button" */).then(c => wrapFunctional(c.default || c))
export const UserInterfaceScrollButton = () => import('../../components/UserInterface/ScrollButton.vue' /* webpackChunkName: "components/user-interface-scroll-button" */).then(c => wrapFunctional(c.default || c))
export const UserInterfaceSocialButton = () => import('../../components/UserInterface/SocialButton.vue' /* webpackChunkName: "components/user-interface-social-button" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
