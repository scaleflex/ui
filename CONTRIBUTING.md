# Contributing

## Requirements

- run all scripts only with [yarn](https://yarnpkg.com/);
- all package installations must be performed with `-W` flag, to ensure their installation into workspaces;

## Available scripts

- `start` – start development instance of the `storybook` environment;
- `format`, `lint`, `typecheck` – check code style and types;
- `clear` – delete all build-related files and directories;
- `tsconfig`, `package` – create publish-ready `tsconfig.json` and `package.json` inside each package;
- `prebuild`, `build:js`, `build:dts`, `build` – prepare and build every package;
- `ci` – run the ci pipeline: lint and check types, clear old build and prepare new build, test the code;




## Notes

### For Figma:
- In components can't be used native tag prop names. For example in `<Button>` component in Figma we can't use custom prop "type" because it's a registered HTML `<button>` tag property name.



## Create new package
Don't forget to add package in root package.json and add "references" in tsconfig.build.json and paths in tsconfig.json


## Adding a Local Sibling Dependency to a Specific Package

For example packageA - form, packageB - button. And we are going to integrate button to form.
```bash
cd packageA
```

Add `"dependencies": {"@scaleflex/packageB": "^0.1.0"}` in packageA/package.json by command:
```bash
lerna add @scaleflex/packageB --scope=@scaleflex/packageA
```

Go to root dir and update siblings
```bash
cd ../../
lerna bootstrap
yarn build
```

> Notice! Few times there were issue in VSCode when it was necessary to restart editor to use `import {...} from '@scaleflex/packageB'`
