# @scaleflex/ui/theme

Theme package.

---

## Usage

Along with `<ThemeProvider />` component, which has to be wrapper around you application, we export hook – `useTheme`.

```typescript jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

Then, use all the features of our theme inside any part of your React application:

### styled-components

```typescript
const Button = styled.button(
  ({ theme }) => css`
    color: ${theme.palette['accent-strong']};
  `
);
```

### Fonts

Out of the box we provide **no default fonts**.

To connect the fonts defined as default in our design system you have an option to create your own `@font-face`
rules.

To override predefined `font-family` you can pass them into the `theme` prop of the `ThemeProvider` component:

```typescript jsx
<ThemeProvider
  theme={{
    typography: {
      fontFamily: 'Roboto, sans-serif'
    },
  }}
/>
```
