# Changelog

## 1.4.2

### Patch Changes

- 3efcde8: Build optimizations
  -Added babel instead of tsc to both /core and /react packages
  -Added source maps to the outputs
  -Remove unnecessary dependencies
  -Removed unused assets folder from /react
  -Fixed issue with the 'react-icons' package react-icons/react-icons#593

## 1.4.1

### Patch Changes

- Updated dependencies [16ac1ab]
  - @sei-js/proto@1.3.0

## 1.4.0

### Minor Changes

- 372506f: Refactored wallet provider and UI components, added hook to programatically open wallet connect modal, implemented a new wallet interface, replaced custom styles with tint colors

## 1.3.6

### Patch Changes

- d67e9f0: Add Compass Wallet

## 1.3.5

### Minor Changes

- Add Fin Wallet

## 1.3.4

### Patch Changes

- a8c06c0: Use getOfflineSignerAuto when connecting wallet

## 1.3.3

### Patch Changes

- e5308db: Fix @cosmjs/crypto dependency

## 1.3.2

### Patch Changes

- aaa3d7c: Fix registry types for signing cosmwasm clients

## 1.3.1

### Patch Changes

- 84265e0: Use sei registry and amino types by default
- 21958cc: Add helper function for signing arbitrary strings

## 1.3.0

### Minor Changes

- f03475b: Update protos and add wallet provider

### Patch Changes

- 7fc4ff2: Fix dependencies for all packages
- 7fc4ff2: Update dependencies for packages in monorepo
- 267916d: Refactor clients
- Updated dependencies [7fc4ff2]
- Updated dependencies [7fc4ff2]
- Updated dependencies [f03475b]
  - @sei-js/proto@1.2.0

## 1.2.0

### Minor Changes

- bb52df2: Extend CosmJS clients to support Sei Tendermint

### Patch Changes

- 4256836: Add SeiCosmWasmClient with tendermint 0.35 implementation

## 1.1.6

### Patch Changes

- cd00554: Refactored monorepo to be package-based
- Updated dependencies [cd00554]
  - @sei-js/proto@1.1.6

## [1.1.5](https://github.com/sei-protocol/sei-js/compare/v1.1.4...v1.1.5) (2023-01-29)

## [1.1.3](https://github.com/sei-protocol/sei-js/compare/v1.1.2...v1.1.3) (2023-01-20)

### Bug Fixes

- release workflow issues ([9d19dc3](https://github.com/sei-protocol/sei-js/commit/9d19dc39da0fb60099eb95e55a19c490e686169f))

## [1.1.2](https://github.com/sei-protocol/sei-js/compare/v1.1.1...v1.1.2) (2023-01-19)

## [1.1.1](https://github.com/sei-protocol/sei-js/compare/v1.1.0...v1.1.1) (2023-01-18)
