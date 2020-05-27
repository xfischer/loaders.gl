## Contributing to loaders.gl

**Thanks for taking the time to contribute!**

PRs and bug reports are welcome, and we are actively looking for new maintainers.

## Setting Up Dev Environment

The **master** branch is the active development branch.

Building loaders.gl locally from the source requires node.js `>=10`.
We use [yarn](https://yarnpkg.com/en/docs/install) to manage the dependencies.

```bash
git checkout master
yarn bootstrap
```

Additional instructions for [Windows](#developing-on-windows) and [Linux](#developing-on-linux).

### Running Tests

- `yarn lint`: Check coding standards and formatting
- `yarn lint fix`: Fix errors with formatting
- `yarn test node`: Quick test run under Node.js
- `yarn test browser`: Test run under browser, good for interactive debugging
- `yarn test`: Run lint, node test, browser tests (in headless mode)


If you consider opening a PR, here are some documentations to get you started:

- vis.gl [developer process](https://www.github.com/visgl/tsc/tree/master/developer-process)

## Community Governance

vis.gl is part of the [Urban Computing Foundation](https://uc.foundation/). See the organization's [Technical Charter](https://github.com/visgl/tsc/blob/master/Technical%20Charter.md).

### Technical Steering Committee

loaders.gl development is governed by the vis.gl Technical Steering Committee (TSC).

### Maintainers

- [Ib Green](https://github.com/ibgreen) - overall architecture
- [Xiaoji Chen](https://github.com/pessimistress) - workers, mesh loaders
- [Xintong Xia](https://github.com/xintongxia) - 3D tiles and I3S
- [Kyle Barron](https://github.com/kylebarron) - terrain

Maintainers of loaders.gl have commit access to this GitHub repository, and take part in the decision making process.

If you are interested in becoming a maintainer, read the [governance guidelines](https://github.com/visgl/tsc/tree/master/developer-process/governance.md).

The vis.gl TSC meets monthly and publishes meeting notes via a [mailing list](https://lists.uc.foundation/g/visgl).
This mailing list can also be utilized to reach out to the TSC.

## Code of Conduct

Please be mindful of and adhere to the Linux Foundation's [Code of Conduct](https://lfprojects.org/policies/code-of-conduct/) when contributing to loaders.gl.

## Troubleshotting

### Develop on Windows

It is possible to build under Windows, but not directly in the Windows command prompt. You will need to install a Linux command line environment.

Install [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on Windows 10, and follow the [Linux](#develop-on-linux) directions.

### Develop on Linux

On Linux systems, install the following packages:

- mesa-utils
- xvfb
- libgl1-mesa-dri
- libglapi-mesa
- libosmesa6
- libxi-dev

To get the headless tests working: `export DISPLAY=:99.0; sh -e /etc/init.d/xvfb start`