# Caviar

### A lightweight and modular UI framework project


## Design

Caviar is written in [Sass](https://sass-lang.com) for easy component creation and style modification. You can fine-tune each component by your taste by either adjusting default global values on `settings.scss` or directly modifying the component's styles and settings on its SCSS file.

You can also add and create your UI components with it using Sass. Each style category (`base` and `theming`) has a file for selecting which components you want to import (`_all.scss`). Thus, you can further reduce its size by selecting only the components you need for each style category.

Every Caviar component's class starts with a prefix `cv-` to make it possible for Caviar to be combined with other frameworks and libraries, and using the same prefix is recommended if you want to extend Caviar's functionality by creating new components. For example, if you want to use Caviar and another framework or library for image styling, a `cv-` prefix lets you know if you are using a Caviar component or not.

## Development Tools

Caviar uses Gulp for compiling and performing tasks such as `watch` for easier development and testing. In the case of Visual Regression Testing, you can use [BackstopJS](https://github.com/garris/BackstopJS).
