export { default as LayoutNavBar } from '../../components/Layout/NavBar.vue'
export { default as LayoutNavSpacer } from '../../components/Layout/NavSpacer.vue'
export { default as LayoutPortfolioCell } from '../../components/Layout/PortfolioCell.vue'
export { default as LayoutTopSpacer } from '../../components/Layout/TopSpacer.vue'
export { default as SectionsBioSection } from '../../components/Sections/BioSection.vue'
export { default as SectionsIntroSection } from '../../components/Sections/IntroSection.vue'
export { default as SectionsPortfolioSection } from '../../components/Sections/PortfolioSection.vue'
export { default as TypographyDynamicHeading } from '../../components/Typography/DynamicHeading.vue'
export { default as TypographyPrimaryHeading } from '../../components/Typography/PrimaryHeading.vue'
export { default as TypographySecondaryHeading } from '../../components/Typography/SecondaryHeading.vue'
export { default as UserInterfaceModeButton } from '../../components/UserInterface/ModeButton.vue'
export { default as UserInterfaceScrollButton } from '../../components/UserInterface/ScrollButton.vue'
export { default as UserInterfaceSocialButton } from '../../components/UserInterface/SocialButton.vue'

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
